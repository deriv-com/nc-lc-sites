(function(v, U) {
    typeof exports == "object" && typeof module < "u" ? module.exports = U() : typeof define == "function" && define.amd ? define(U) : (v = typeof globalThis < "u" ? globalThis : v || self, v.ory = U())
})(this, (function() {
    "use strict";
    var v = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    const U = "https://playground.projects.oryapis.com".replace(/\/+$/, "");
    class Nr {
        constructor(t = {}) {
            this.configuration = t
        }
        set config(t) {
            this.configuration = t
        }
        get basePath() {
            return this.configuration.basePath != null ? this.configuration.basePath : U
        }
        get fetchApi() {
            return this.configuration.fetchApi
        }
        get middleware() {
            return this.configuration.middleware || []
        }
        get queryParamsStringify() {
            return this.configuration.queryParamsStringify || ze
        }
        get username() {
            return this.configuration.username
        }
        get password() {
            return this.configuration.password
        }
        get apiKey() {
            const t = this.configuration.apiKey;
            if (t) return typeof t == "function" ? t : () => t
        }
        get accessToken() {
            const t = this.configuration.accessToken;
            if (t) return typeof t == "function" ? t : () => v(this, void 0, void 0, function*() {
                return t
            })
        }
        get headers() {
            return this.configuration.headers
        }
        get credentials() {
            return this.configuration.credentials
        }
    }
    const Jr = new Nr;
    class k {
        constructor(t = Jr) {
            this.configuration = t, this.fetchApi = (r, n) => v(this, void 0, void 0, function*() {
                let i = {
                    url: r,
                    init: n
                };
                for (const o of this.middleware) o.pre && (i = (yield o.pre(Object.assign({
                    fetch: this.fetchApi
                }, i))) || i);
                let _;
                try {
                    _ = yield(this.configuration.fetchApi || fetch)(i.url, i.init)
                } catch (o) {
                    for (const a of this.middleware) a.onError && (_ = (yield a.onError({
                        fetch: this.fetchApi,
                        url: i.url,
                        init: i.init,
                        error: o,
                        response: _ ? _.clone() : void 0
                    })) || _);
                    if (_ === void 0) throw o instanceof Error ? new ue(o, "The request failed and the interceptors did not return an alternative response") : o
                }
                for (const o of this.middleware) o.post && (_ = (yield o.post({
                    fetch: this.fetchApi,
                    url: i.url,
                    init: i.init,
                    response: _.clone()
                })) || _);
                return _
            }), this.middleware = t.middleware
        }
        withMiddleware(...t) {
            const r = this.clone();
            return r.middleware = r.middleware.concat(...t), r
        }
        withPreMiddleware(...t) {
            const r = t.map(n => ({
                pre: n
            }));
            return this.withMiddleware(...r)
        }
        withPostMiddleware(...t) {
            const r = t.map(n => ({
                post: n
            }));
            return this.withMiddleware(...r)
        }
        isJsonMime(t) {
            return t ? k.jsonRegex.test(t) : !1
        }
        request(t, r) {
            return v(this, void 0, void 0, function*() {
                const {
                    url: n,
                    init: i
                } = yield this.createFetchParams(t, r), _ = yield this.fetchApi(n, i);
                if (_ && _.status >= 200 && _.status < 300) return _;
                throw new E(_, "Response returned an error code")
            })
        }
        createFetchParams(t, r) {
            return v(this, void 0, void 0, function*() {
                let n = this.configuration.basePath + t.path;
                t.query !== void 0 && Object.keys(t.query).length !== 0 && (n += "?" + this.configuration.queryParamsStringify(t.query));
                const i = Object.assign({}, this.configuration.headers, t.headers);
                Object.keys(i).forEach(d => i[d] === void 0 ? delete i[d] : {});
                const _ = typeof r == "function" ? r : () => v(this, void 0, void 0, function*() {
                        return r
                    }),
                    o = {
                        method: t.method,
                        headers: i,
                        body: t.body,
                        credentials: this.configuration.credentials
                    },
                    a = Object.assign(Object.assign({}, o), yield _({
                        init: o,
                        context: t
                    }));
                let g;
                Eg(a.body) || a.body instanceof URLSearchParams || Ug(a.body) ? g = a.body : this.isJsonMime(i["Content-Type"]) ? g = JSON.stringify(a.body) : g = a.body;
                const l = Object.assign(Object.assign({}, a), {
                    body: g
                });
                return {
                    url: n,
                    init: l
                }
            })
        }
        clone() {
            const t = this.constructor,
                r = new t(this.configuration);
            return r.middleware = this.middleware.slice(), r
        }
    }
    k.jsonRegex = new RegExp("^(:?application/json|[^;/     ]+/[^;/     ]+[+]json)[     ]*(:?;.*)?$", "i");

    function Ug(e) {
        return typeof Blob < "u" && e instanceof Blob
    }

    function Eg(e) {
        return typeof FormData < "u" && e instanceof FormData
    }
    class E extends Error {
        constructor(t, r) {
            super(r), this.response = t, this.name = "ResponseError"
        }
    }
    class ue extends Error {
        constructor(t, r) {
            super(r), this.cause = t, this.name = "FetchError"
        }
    }
    class s extends Error {
        constructor(t, r) {
            super(r), this.field = t, this.name = "RequiredError"
        }
    }
    const Bg = {
        csv: ",",
        ssv: " ",
        tsv: "    ",
        pipes: "|"
    };

    function ze(e, t = "") {
        return Object.keys(e).map(r => Rr(r, e[r], t)).filter(r => r.length > 0).join("&")
    }

    function Rr(e, t, r = "") {
        const n = r + (r.length ? `[${e}]` : e);
        if (t instanceof Array) {
            const i = t.map(_ => encodeURIComponent(String(_))).join(`&${encodeURIComponent(n)}=`);
            return `${encodeURIComponent(n)}=${i}`
        }
        if (t instanceof Set) {
            const i = Array.from(t);
            return Rr(e, i, r)
        }
        return t instanceof Date ? `${encodeURIComponent(n)}=${encodeURIComponent(t.toISOString())}` : t instanceof Object ? ze(t, n) : `${encodeURIComponent(n)}=${encodeURIComponent(String(t))}`
    }

    function Wg(e, t) {
        const r = e[t];
        return r != null
    }

    function G(e, t) {
        return Object.keys(e).reduce((r, n) => Object.assign(Object.assign({}, r), {
            [n]: t(e[n])
        }), {})
    }

    function le(e) {
        for (const t of e)
            if (t.contentType === "multipart/form-data") return !0;
        return !1
    }
    class c {
        constructor(t, r = n => n) {
            this.raw = t, this.transformer = r
        }
        value() {
            return v(this, void 0, void 0, function*() {
                return this.transformer(yield this.raw.json())
            })
        }
    }
    class y {
        constructor(t) {
            this.raw = t
        }
        value() {
            return v(this, void 0, void 0, function*() {})
        }
    }
    class Lg {
        constructor(t) {
            this.raw = t
        }
        value() {
            return v(this, void 0, void 0, function*() {
                return yield this.raw.blob()
            })
        }
    }
    class Fr {
        constructor(t) {
            this.raw = t
        }
        value() {
            return v(this, void 0, void 0, function*() {
                return yield this.raw.text()
            })
        }
    }

    function Mg(e) {
        return !0
    }

    function $g(e) {
        return Cr(e)
    }

    function Cr(e, t) {
        return e == null ? e : {
            user_code: e.user_code == null ? void 0 : e.user_code
        }
    }

    function Dr(e) {
        return xr(e, !1)
    }

    function xr(e, t = !1) {
        return e == null ? e : {
            user_code: e.user_code
        }
    }

    function Gg(e) {
        return !0
    }

    function Ue(e) {
        return Ar(e)
    }

    function Ar(e, t) {
        return e == null ? e : {
            access_token: e.access_token == null ? void 0 : e.access_token,
            id_token: e.id_token == null ? void 0 : e.id_token
        }
    }

    function Ee(e) {
        return Ir(e, !1)
    }

    function Ir(e, t = !1) {
        return e == null ? e : {
            access_token: e.access_token,
            id_token: e.id_token
        }
    }

    function Kg(e) {
        return !0
    }

    function Vg(e) {
        return Pr(e)
    }

    function Pr(e, t) {
        return e == null ? e : {
            context: e.context == null ? void 0 : e.context,
            grant_access_token_audience: e.grant_access_token_audience == null ? void 0 : e.grant_access_token_audience,
            grant_scope: e.grant_scope == null ? void 0 : e.grant_scope,
            remember: e.remember == null ? void 0 : e.remember,
            remember_for: e.remember_for == null ? void 0 : e.remember_for,
            session: e.session == null ? void 0 : Ue(e.session)
        }
    }

    function qr(e) {
        return zr(e, !1)
    }

    function zr(e, t = !1) {
        return e == null ? e : {
            context: e.context,
            grant_access_token_audience: e.grant_access_token_audience,
            grant_scope: e.grant_scope,
            remember: e.remember,
            remember_for: e.remember_for,
            session: Ee(e.session)
        }
    }

    function Hg(e) {
        return !(!("subject" in e) || e.subject === void 0)
    }

    function Xg(e) {
        return Ur(e)
    }

    function Ur(e, t) {
        return e == null ? e : {
            acr: e.acr == null ? void 0 : e.acr,
            amr: e.amr == null ? void 0 : e.amr,
            context: e.context == null ? void 0 : e.context,
            extend_session_lifespan: e.extend_session_lifespan == null ? void 0 : e.extend_session_lifespan,
            force_subject_identifier: e.force_subject_identifier == null ? void 0 : e.force_subject_identifier,
            identity_provider_session_id: e.identity_provider_session_id == null ? void 0 : e.identity_provider_session_id,
            remember: e.remember == null ? void 0 : e.remember,
            remember_for: e.remember_for == null ? void 0 : e.remember_for,
            subject: e.subject
        }
    }

    function Er(e) {
        return Br(e, !1)
    }

    function Br(e, t = !1) {
        return e == null ? e : {
            acr: e.acr,
            amr: e.amr,
            context: e.context,
            extend_session_lifespan: e.extend_session_lifespan,
            force_subject_identifier: e.force_subject_identifier,
            identity_provider_session_id: e.identity_provider_session_id,
            remember: e.remember,
            remember_for: e.remember_for,
            subject: e.subject
        }
    }

    function Qg(e) {
        return !0
    }

    function Yg(e) {
        return Wr(e)
    }

    function Wr(e, t) {
        return e == null ? e : {
            ax_background_default: e.ax_background_default == null ? void 0 : e.ax_background_default,
            brand_100: e.brand_100 == null ? void 0 : e.brand_100,
            brand_200: e.brand_200 == null ? void 0 : e.brand_200,
            brand_300: e.brand_300 == null ? void 0 : e.brand_300,
            brand_400: e.brand_400 == null ? void 0 : e.brand_400,
            brand_50: e.brand_50 == null ? void 0 : e.brand_50,
            brand_500: e.brand_500 == null ? void 0 : e.brand_500,
            brand_600: e.brand_600 == null ? void 0 : e.brand_600,
            brand_700: e.brand_700 == null ? void 0 : e.brand_700,
            brand_800: e.brand_800 == null ? void 0 : e.brand_800,
            brand_900: e.brand_900 == null ? void 0 : e.brand_900,
            brand_950: e.brand_950 == null ? void 0 : e.brand_950,
            button_identifier_background_default: e.button_identifier_background_default == null ? void 0 : e.button_identifier_background_default,
            button_identifier_background_hover: e.button_identifier_background_hover == null ? void 0 : e.button_identifier_background_hover,
            button_identifier_border_border_default: e.button_identifier_border_border_default == null ? void 0 : e.button_identifier_border_border_default,
            button_identifier_border_border_hover: e.button_identifier_border_border_hover == null ? void 0 : e.button_identifier_border_border_hover,
            button_identifier_foreground_default: e.button_identifier_foreground_default == null ? void 0 : e.button_identifier_foreground_default,
            button_identifier_foreground_hover: e.button_identifier_foreground_hover == null ? void 0 : e.button_identifier_foreground_hover,
            button_link_brand_brand: e.button_link_brand_brand == null ? void 0 : e.button_link_brand_brand,
            button_link_brand_brand_hover: e.button_link_brand_brand_hover == null ? void 0 : e.button_link_brand_brand_hover,
            button_link_default_primary: e.button_link_default_primary == null ? void 0 : e.button_link_default_primary,
            button_link_default_primary_hover: e.button_link_default_primary_hover == null ? void 0 : e.button_link_default_primary_hover,
            button_link_default_secondary: e.button_link_default_secondary == null ? void 0 : e.button_link_default_secondary,
            button_link_default_secondary_hover: e.button_link_default_secondary_hover == null ? void 0 : e.button_link_default_secondary_hover,
            button_link_disabled_disabled: e.button_link_disabled_disabled == null ? void 0 : e.button_link_disabled_disabled,
            button_primary_background_default: e.button_primary_background_default == null ? void 0 : e.button_primary_background_default,
            button_primary_background_disabled: e.button_primary_background_disabled == null ? void 0 : e.button_primary_background_disabled,
            button_primary_background_hover: e.button_primary_background_hover == null ? void 0 : e.button_primary_background_hover,
            button_primary_border_default: e.button_primary_border_default == null ? void 0 : e.button_primary_border_default,
            button_primary_border_disabled: e.button_primary_border_disabled == null ? void 0 : e.button_primary_border_disabled,
            button_primary_border_hover: e.button_primary_border_hover == null ? void 0 : e.button_primary_border_hover,
            button_primary_foreground_default: e.button_primary_foreground_default == null ? void 0 : e.button_primary_foreground_default,
            button_primary_foreground_disabled: e.button_primary_foreground_disabled == null ? void 0 : e.button_primary_foreground_disabled,
            button_primary_foreground_hover: e.button_primary_foreground_hover == null ? void 0 : e.button_primary_foreground_hover,
            button_secondary_background_default: e.button_secondary_background_default == null ? void 0 : e.button_secondary_background_default,
            button_secondary_background_disabled: e.button_secondary_background_disabled == null ? void 0 : e.button_secondary_background_disabled,
            button_secondary_background_hover: e.button_secondary_background_hover == null ? void 0 : e.button_secondary_background_hover,
            button_secondary_border_default: e.button_secondary_border_default == null ? void 0 : e.button_secondary_border_default,
            button_secondary_border_disabled: e.button_secondary_border_disabled == null ? void 0 : e.button_secondary_border_disabled,
            button_secondary_border_hover: e.button_secondary_border_hover == null ? void 0 : e.button_secondary_border_hover,
            button_secondary_foreground_default: e.button_secondary_foreground_default == null ? void 0 : e.button_secondary_foreground_default,
            button_secondary_foreground_disabled: e.button_secondary_foreground_disabled == null ? void 0 : e.button_secondary_foreground_disabled,
            button_secondary_foreground_hover: e.button_secondary_foreground_hover == null ? void 0 : e.button_secondary_foreground_hover,
            button_social_background_default: e.button_social_background_default == null ? void 0 : e.button_social_background_default,
            button_social_background_disabled: e.button_social_background_disabled == null ? void 0 : e.button_social_background_disabled,
            button_social_background_generic_provider: e.button_social_background_generic_provider == null ? void 0 : e.button_social_background_generic_provider,
            button_social_background_hover: e.button_social_background_hover == null ? void 0 : e.button_social_background_hover,
            button_social_border_default: e.button_social_border_default == null ? void 0 : e.button_social_border_default,
            button_social_border_disabled: e.button_social_border_disabled == null ? void 0 : e.button_social_border_disabled,
            button_social_border_generic_provider: e.button_social_border_generic_provider == null ? void 0 : e.button_social_border_generic_provider,
            button_social_border_hover: e.button_social_border_hover == null ? void 0 : e.button_social_border_hover,
            button_social_foreground_default: e.button_social_foreground_default == null ? void 0 : e.button_social_foreground_default,
            button_social_foreground_disabled: e.button_social_foreground_disabled == null ? void 0 : e.button_social_foreground_disabled,
            button_social_foreground_generic_provider: e.button_social_foreground_generic_provider == null ? void 0 : e.button_social_foreground_generic_provider,
            button_social_foreground_hover: e.button_social_foreground_hover == null ? void 0 : e.button_social_foreground_hover,
            checkbox_background_checked: e.checkbox_background_checked == null ? void 0 : e.checkbox_background_checked,
            checkbox_background_default: e.checkbox_background_default == null ? void 0 : e.checkbox_background_default,
            checkbox_border_checkbox_border_checked: e.checkbox_border_checkbox_border_checked == null ? void 0 : e.checkbox_border_checkbox_border_checked,
            checkbox_border_checkbox_border_default: e.checkbox_border_checkbox_border_default == null ? void 0 : e.checkbox_border_checkbox_border_default,
            checkbox_foreground_checked: e.checkbox_foreground_checked == null ? void 0 : e.checkbox_foreground_checked,
            checkbox_foreground_default: e.checkbox_foreground_default == null ? void 0 : e.checkbox_foreground_default,
            form_background_default: e.form_background_default == null ? void 0 : e.form_background_default,
            form_border_default: e.form_border_default == null ? void 0 : e.form_border_default,
            input_background_default: e.input_background_default == null ? void 0 : e.input_background_default,
            input_background_disabled: e.input_background_disabled == null ? void 0 : e.input_background_disabled,
            input_background_hover: e.input_background_hover == null ? void 0 : e.input_background_hover,
            input_border_default: e.input_border_default == null ? void 0 : e.input_border_default,
            input_border_disabled: e.input_border_disabled == null ? void 0 : e.input_border_disabled,
            input_border_focus: e.input_border_focus == null ? void 0 : e.input_border_focus,
            input_border_hover: e.input_border_hover == null ? void 0 : e.input_border_hover,
            input_foreground_disabled: e.input_foreground_disabled == null ? void 0 : e.input_foreground_disabled,
            input_foreground_primary: e.input_foreground_primary == null ? void 0 : e.input_foreground_primary,
            input_foreground_secondary: e.input_foreground_secondary == null ? void 0 : e.input_foreground_secondary,
            input_foreground_tertiary: e.input_foreground_tertiary == null ? void 0 : e.input_foreground_tertiary,
            interface_background_brand_primary: e.interface_background_brand_primary == null ? void 0 : e.interface_background_brand_primary,
            interface_background_brand_primary_hover: e.interface_background_brand_primary_hover == null ? void 0 : e.interface_background_brand_primary_hover,
            interface_background_brand_secondary: e.interface_background_brand_secondary == null ? void 0 : e.interface_background_brand_secondary,
            interface_background_brand_secondary_hover: e.interface_background_brand_secondary_hover == null ? void 0 : e.interface_background_brand_secondary_hover,
            interface_background_default_inverted: e.interface_background_default_inverted == null ? void 0 : e.interface_background_default_inverted,
            interface_background_default_inverted_hover: e.interface_background_default_inverted_hover == null ? void 0 : e.interface_background_default_inverted_hover,
            interface_background_default_none: e.interface_background_default_none == null ? void 0 : e.interface_background_default_none,
            interface_background_default_primary: e.interface_background_default_primary == null ? void 0 : e.interface_background_default_primary,
            interface_background_default_primary_hover: e.interface_background_default_primary_hover == null ? void 0 : e.interface_background_default_primary_hover,
            interface_background_default_secondary: e.interface_background_default_secondary == null ? void 0 : e.interface_background_default_secondary,
            interface_background_default_secondary_hover: e.interface_background_default_secondary_hover == null ? void 0 : e.interface_background_default_secondary_hover,
            interface_background_default_tertiary: e.interface_background_default_tertiary == null ? void 0 : e.interface_background_default_tertiary,
            interface_background_default_tertiary_hover: e.interface_background_default_tertiary_hover == null ? void 0 : e.interface_background_default_tertiary_hover,
            interface_background_disabled_disabled: e.interface_background_disabled_disabled == null ? void 0 : e.interface_background_disabled_disabled,
            interface_background_validation_danger: e.interface_background_validation_danger == null ? void 0 : e.interface_background_validation_danger,
            interface_background_validation_success: e.interface_background_validation_success == null ? void 0 : e.interface_background_validation_success,
            interface_background_validation_warning: e.interface_background_validation_warning == null ? void 0 : e.interface_background_validation_warning,
            interface_border_brand_brand: e.interface_border_brand_brand == null ? void 0 : e.interface_border_brand_brand,
            interface_border_default_inverted: e.interface_border_default_inverted == null ? void 0 : e.interface_border_default_inverted,
            interface_border_default_none: e.interface_border_default_none == null ? void 0 : e.interface_border_default_none,
            interface_border_default_primary: e.interface_border_default_primary == null ? void 0 : e.interface_border_default_primary,
            interface_border_disabled_disabled: e.interface_border_disabled_disabled == null ? void 0 : e.interface_border_disabled_disabled,
            interface_border_validation_danger: e.interface_border_validation_danger == null ? void 0 : e.interface_border_validation_danger,
            interface_border_validation_success: e.interface_border_validation_success == null ? void 0 : e.interface_border_validation_success,
            interface_border_validation_warning: e.interface_border_validation_warning == null ? void 0 : e.interface_border_validation_warning,
            interface_foreground_brand_on_primary: e.interface_foreground_brand_on_primary == null ? void 0 : e.interface_foreground_brand_on_primary,
            interface_foreground_brand_on_secondary: e.interface_foreground_brand_on_secondary == null ? void 0 : e.interface_foreground_brand_on_secondary,
            interface_foreground_brand_primary: e.interface_foreground_brand_primary == null ? void 0 : e.interface_foreground_brand_primary,
            interface_foreground_brand_secondary: e.interface_foreground_brand_secondary == null ? void 0 : e.interface_foreground_brand_secondary,
            interface_foreground_default_inverted: e.interface_foreground_default_inverted == null ? void 0 : e.interface_foreground_default_inverted,
            interface_foreground_default_primary: e.interface_foreground_default_primary == null ? void 0 : e.interface_foreground_default_primary,
            interface_foreground_default_secondary: e.interface_foreground_default_secondary == null ? void 0 : e.interface_foreground_default_secondary,
            interface_foreground_default_tertiary: e.interface_foreground_default_tertiary == null ? void 0 : e.interface_foreground_default_tertiary,
            interface_foreground_disabled_disabled: e.interface_foreground_disabled_disabled == null ? void 0 : e.interface_foreground_disabled_disabled,
            interface_foreground_disabled_on_disabled: e.interface_foreground_disabled_on_disabled == null ? void 0 : e.interface_foreground_disabled_on_disabled,
            interface_foreground_validation_danger: e.interface_foreground_validation_danger == null ? void 0 : e.interface_foreground_validation_danger,
            interface_foreground_validation_success: e.interface_foreground_validation_success == null ? void 0 : e.interface_foreground_validation_success,
            interface_foreground_validation_warning: e.interface_foreground_validation_warning == null ? void 0 : e.interface_foreground_validation_warning,
            ory_background_default: e.ory_background_default == null ? void 0 : e.ory_background_default,
            ory_border_default: e.ory_border_default == null ? void 0 : e.ory_border_default,
            ory_foreground_default: e.ory_foreground_default == null ? void 0 : e.ory_foreground_default,
            radio_background_checked: e.radio_background_checked == null ? void 0 : e.radio_background_checked,
            radio_background_default: e.radio_background_default == null ? void 0 : e.radio_background_default,
            radio_border_checked: e.radio_border_checked == null ? void 0 : e.radio_border_checked,
            radio_border_default: e.radio_border_default == null ? void 0 : e.radio_border_default,
            radio_foreground_checked: e.radio_foreground_checked == null ? void 0 : e.radio_foreground_checked,
            radio_foreground_default: e.radio_foreground_default == null ? void 0 : e.radio_foreground_default,
            toggle_background_checked: e.toggle_background_checked == null ? void 0 : e.toggle_background_checked,
            toggle_background_default: e.toggle_background_default == null ? void 0 : e.toggle_background_default,
            toggle_border_checked: e.toggle_border_checked == null ? void 0 : e.toggle_border_checked,
            toggle_border_default: e.toggle_border_default == null ? void 0 : e.toggle_border_default,
            toggle_foreground_checked: e.toggle_foreground_checked == null ? void 0 : e.toggle_foreground_checked,
            toggle_foreground_default: e.toggle_foreground_default == null ? void 0 : e.toggle_foreground_default,
            ui_100: e.ui_100 == null ? void 0 : e.ui_100,
            ui_200: e.ui_200 == null ? void 0 : e.ui_200,
            ui_300: e.ui_300 == null ? void 0 : e.ui_300,
            ui_400: e.ui_400 == null ? void 0 : e.ui_400,
            ui_50: e.ui_50 == null ? void 0 : e.ui_50,
            ui_500: e.ui_500 == null ? void 0 : e.ui_500,
            ui_600: e.ui_600 == null ? void 0 : e.ui_600,
            ui_700: e.ui_700 == null ? void 0 : e.ui_700,
            ui_800: e.ui_800 == null ? void 0 : e.ui_800,
            ui_900: e.ui_900 == null ? void 0 : e.ui_900,
            ui_950: e.ui_950 == null ? void 0 : e.ui_950,
            ui_black: e.ui_black == null ? void 0 : e.ui_black,
            ui_danger: e.ui_danger == null ? void 0 : e.ui_danger,
            ui_success: e.ui_success == null ? void 0 : e.ui_success,
            ui_transparent: e.ui_transparent == null ? void 0 : e.ui_transparent,
            ui_warning: e.ui_warning == null ? void 0 : e.ui_warning,
            ui_white: e.ui_white == null ? void 0 : e.ui_white
        }
    }

    function Zg(e) {
        return Lr(e, !1)
    }

    function Lr(e, t = !1) {
        return e == null ? e : {
            ax_background_default: e.ax_background_default,
            brand_100: e.brand_100,
            brand_200: e.brand_200,
            brand_300: e.brand_300,
            brand_400: e.brand_400,
            brand_50: e.brand_50,
            brand_500: e.brand_500,
            brand_600: e.brand_600,
            brand_700: e.brand_700,
            brand_800: e.brand_800,
            brand_900: e.brand_900,
            brand_950: e.brand_950,
            button_identifier_background_default: e.button_identifier_background_default,
            button_identifier_background_hover: e.button_identifier_background_hover,
            button_identifier_border_border_default: e.button_identifier_border_border_default,
            button_identifier_border_border_hover: e.button_identifier_border_border_hover,
            button_identifier_foreground_default: e.button_identifier_foreground_default,
            button_identifier_foreground_hover: e.button_identifier_foreground_hover,
            button_link_brand_brand: e.button_link_brand_brand,
            button_link_brand_brand_hover: e.button_link_brand_brand_hover,
            button_link_default_primary: e.button_link_default_primary,
            button_link_default_primary_hover: e.button_link_default_primary_hover,
            button_link_default_secondary: e.button_link_default_secondary,
            button_link_default_secondary_hover: e.button_link_default_secondary_hover,
            button_link_disabled_disabled: e.button_link_disabled_disabled,
            button_primary_background_default: e.button_primary_background_default,
            button_primary_background_disabled: e.button_primary_background_disabled,
            button_primary_background_hover: e.button_primary_background_hover,
            button_primary_border_default: e.button_primary_border_default,
            button_primary_border_disabled: e.button_primary_border_disabled,
            button_primary_border_hover: e.button_primary_border_hover,
            button_primary_foreground_default: e.button_primary_foreground_default,
            button_primary_foreground_disabled: e.button_primary_foreground_disabled,
            button_primary_foreground_hover: e.button_primary_foreground_hover,
            button_secondary_background_default: e.button_secondary_background_default,
            button_secondary_background_disabled: e.button_secondary_background_disabled,
            button_secondary_background_hover: e.button_secondary_background_hover,
            button_secondary_border_default: e.button_secondary_border_default,
            button_secondary_border_disabled: e.button_secondary_border_disabled,
            button_secondary_border_hover: e.button_secondary_border_hover,
            button_secondary_foreground_default: e.button_secondary_foreground_default,
            button_secondary_foreground_disabled: e.button_secondary_foreground_disabled,
            button_secondary_foreground_hover: e.button_secondary_foreground_hover,
            button_social_background_default: e.button_social_background_default,
            button_social_background_disabled: e.button_social_background_disabled,
            button_social_background_generic_provider: e.button_social_background_generic_provider,
            button_social_background_hover: e.button_social_background_hover,
            button_social_border_default: e.button_social_border_default,
            button_social_border_disabled: e.button_social_border_disabled,
            button_social_border_generic_provider: e.button_social_border_generic_provider,
            button_social_border_hover: e.button_social_border_hover,
            button_social_foreground_default: e.button_social_foreground_default,
            button_social_foreground_disabled: e.button_social_foreground_disabled,
            button_social_foreground_generic_provider: e.button_social_foreground_generic_provider,
            button_social_foreground_hover: e.button_social_foreground_hover,
            checkbox_background_checked: e.checkbox_background_checked,
            checkbox_background_default: e.checkbox_background_default,
            checkbox_border_checkbox_border_checked: e.checkbox_border_checkbox_border_checked,
            checkbox_border_checkbox_border_default: e.checkbox_border_checkbox_border_default,
            checkbox_foreground_checked: e.checkbox_foreground_checked,
            checkbox_foreground_default: e.checkbox_foreground_default,
            form_background_default: e.form_background_default,
            form_border_default: e.form_border_default,
            input_background_default: e.input_background_default,
            input_background_disabled: e.input_background_disabled,
            input_background_hover: e.input_background_hover,
            input_border_default: e.input_border_default,
            input_border_disabled: e.input_border_disabled,
            input_border_focus: e.input_border_focus,
            input_border_hover: e.input_border_hover,
            input_foreground_disabled: e.input_foreground_disabled,
            input_foreground_primary: e.input_foreground_primary,
            input_foreground_secondary: e.input_foreground_secondary,
            input_foreground_tertiary: e.input_foreground_tertiary,
            interface_background_brand_primary: e.interface_background_brand_primary,
            interface_background_brand_primary_hover: e.interface_background_brand_primary_hover,
            interface_background_brand_secondary: e.interface_background_brand_secondary,
            interface_background_brand_secondary_hover: e.interface_background_brand_secondary_hover,
            interface_background_default_inverted: e.interface_background_default_inverted,
            interface_background_default_inverted_hover: e.interface_background_default_inverted_hover,
            interface_background_default_none: e.interface_background_default_none,
            interface_background_default_primary: e.interface_background_default_primary,
            interface_background_default_primary_hover: e.interface_background_default_primary_hover,
            interface_background_default_secondary: e.interface_background_default_secondary,
            interface_background_default_secondary_hover: e.interface_background_default_secondary_hover,
            interface_background_default_tertiary: e.interface_background_default_tertiary,
            interface_background_default_tertiary_hover: e.interface_background_default_tertiary_hover,
            interface_background_disabled_disabled: e.interface_background_disabled_disabled,
            interface_background_validation_danger: e.interface_background_validation_danger,
            interface_background_validation_success: e.interface_background_validation_success,
            interface_background_validation_warning: e.interface_background_validation_warning,
            interface_border_brand_brand: e.interface_border_brand_brand,
            interface_border_default_inverted: e.interface_border_default_inverted,
            interface_border_default_none: e.interface_border_default_none,
            interface_border_default_primary: e.interface_border_default_primary,
            interface_border_disabled_disabled: e.interface_border_disabled_disabled,
            interface_border_validation_danger: e.interface_border_validation_danger,
            interface_border_validation_success: e.interface_border_validation_success,
            interface_border_validation_warning: e.interface_border_validation_warning,
            interface_foreground_brand_on_primary: e.interface_foreground_brand_on_primary,
            interface_foreground_brand_on_secondary: e.interface_foreground_brand_on_secondary,
            interface_foreground_brand_primary: e.interface_foreground_brand_primary,
            interface_foreground_brand_secondary: e.interface_foreground_brand_secondary,
            interface_foreground_default_inverted: e.interface_foreground_default_inverted,
            interface_foreground_default_primary: e.interface_foreground_default_primary,
            interface_foreground_default_secondary: e.interface_foreground_default_secondary,
            interface_foreground_default_tertiary: e.interface_foreground_default_tertiary,
            interface_foreground_disabled_disabled: e.interface_foreground_disabled_disabled,
            interface_foreground_disabled_on_disabled: e.interface_foreground_disabled_on_disabled,
            interface_foreground_validation_danger: e.interface_foreground_validation_danger,
            interface_foreground_validation_success: e.interface_foreground_validation_success,
            interface_foreground_validation_warning: e.interface_foreground_validation_warning,
            ory_background_default: e.ory_background_default,
            ory_border_default: e.ory_border_default,
            ory_foreground_default: e.ory_foreground_default,
            radio_background_checked: e.radio_background_checked,
            radio_background_default: e.radio_background_default,
            radio_border_checked: e.radio_border_checked,
            radio_border_default: e.radio_border_default,
            radio_foreground_checked: e.radio_foreground_checked,
            radio_foreground_default: e.radio_foreground_default,
            toggle_background_checked: e.toggle_background_checked,
            toggle_background_default: e.toggle_background_default,
            toggle_border_checked: e.toggle_border_checked,
            toggle_border_default: e.toggle_border_default,
            toggle_foreground_checked: e.toggle_foreground_checked,
            toggle_foreground_default: e.toggle_foreground_default,
            ui_100: e.ui_100,
            ui_200: e.ui_200,
            ui_300: e.ui_300,
            ui_400: e.ui_400,
            ui_50: e.ui_50,
            ui_500: e.ui_500,
            ui_600: e.ui_600,
            ui_700: e.ui_700,
            ui_800: e.ui_800,
            ui_900: e.ui_900,
            ui_950: e.ui_950,
            ui_black: e.ui_black,
            ui_danger: e.ui_danger,
            ui_success: e.ui_success,
            ui_transparent: e.ui_transparent,
            ui_warning: e.ui_warning,
            ui_white: e.ui_white
        }
    }
    const jg = {
        ForceDefault: "force_default",
        RespectAcceptLanguage: "respect_accept_language",
        UnknownDefaultOpenApi: "11184809"
    };

    function em(e) {
        return !(!("default_locale" in e) || e.default_locale === void 0 || !("default_redirect_url" in e) || e.default_redirect_url === void 0 || !("error_ui_url" in e) || e.error_ui_url === void 0 || !("locale_behavior" in e) || e.locale_behavior === void 0 || !("login_ui_url" in e) || e.login_ui_url === void 0 || !("name" in e) || e.name === void 0 || !("recovery_enabled" in e) || e.recovery_enabled === void 0 || !("recovery_ui_url" in e) || e.recovery_ui_url === void 0 || !("registration_enabled" in e) || e.registration_enabled === void 0 || !("registration_ui_url" in e) || e.registration_ui_url === void 0 || !("settings_ui_url" in e) || e.settings_ui_url === void 0 || !("verification_enabled" in e) || e.verification_enabled === void 0 || !("verification_ui_url" in e) || e.verification_ui_url === void 0)
    }

    function tm(e) {
        return Mr(e)
    }

    function Mr(e, t) {
        return e == null ? e : {
            default_locale: e.default_locale,
            default_redirect_url: e.default_redirect_url,
            error_ui_url: e.error_ui_url,
            favicon_dark_url: e.favicon_dark_url == null ? void 0 : e.favicon_dark_url,
            favicon_light_url: e.favicon_light_url == null ? void 0 : e.favicon_light_url,
            locale_behavior: e.locale_behavior,
            login_ui_url: e.login_ui_url,
            logo_dark_url: e.logo_dark_url == null ? void 0 : e.logo_dark_url,
            logo_light_url: e.logo_light_url == null ? void 0 : e.logo_light_url,
            name: e.name,
            recovery_enabled: e.recovery_enabled,
            recovery_ui_url: e.recovery_ui_url,
            registration_enabled: e.registration_enabled,
            registration_ui_url: e.registration_ui_url,
            settings_ui_url: e.settings_ui_url,
            stylesheet: e.stylesheet == null ? void 0 : e.stylesheet,
            verification_enabled: e.verification_enabled,
            verification_ui_url: e.verification_ui_url
        }
    }

    function rm(e) {
        return $r(e, !1)
    }

    function $r(e, t = !1) {
        return e == null ? e : {
            default_locale: e.default_locale,
            default_redirect_url: e.default_redirect_url,
            error_ui_url: e.error_ui_url,
            favicon_dark_url: e.favicon_dark_url,
            favicon_light_url: e.favicon_light_url,
            locale_behavior: e.locale_behavior,
            login_ui_url: e.login_ui_url,
            logo_dark_url: e.logo_dark_url,
            logo_light_url: e.logo_light_url,
            name: e.name,
            recovery_enabled: e.recovery_enabled,
            recovery_ui_url: e.recovery_ui_url,
            registration_enabled: e.registration_enabled,
            registration_ui_url: e.registration_ui_url,
            settings_ui_url: e.settings_ui_url,
            stylesheet: e.stylesheet,
            verification_enabled: e.verification_enabled,
            verification_ui_url: e.verification_ui_url
        }
    }

    function nm(e) {
        return !0
    }

    function im(e) {
        return Gr(e)
    }

    function Gr(e, t) {
        return e == null ? e : {
            project_id: e.project_id == null ? void 0 : e.project_id
        }
    }

    function om(e) {
        return Kr(e, !1)
    }

    function Kr(e, t = !1) {
        return e == null ? e : {
            project_id: e.project_id
        }
    }
    const _m = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        am = {
            Migrate: "migrate",
            Ignore: "ignore",
            UnknownDefaultOpenApi: "11184809"
        };

    function sm(e) {
        return !(!("environment" in e) || e.environment === void 0 || !("project_subscription" in e) || e.project_subscription === void 0)
    }

    function dm(e) {
        return Vr(e)
    }

    function Vr(e, t) {
        return e == null ? e : {
            environment: e.environment,
            project_subscription: e.project_subscription
        }
    }

    function cm(e) {
        return Hr(e, !1)
    }

    function Hr(e, t = !1) {
        return e == null ? e : {
            environment: e.environment,
            project_subscription: e.project_subscription
        }
    }

    function um(e) {
        return !0
    }

    function Xr(e) {
        return Qr(e)
    }

    function Qr(e, t) {
        return e == null ? e : {
            key: e.key == null ? void 0 : e.key,
            value: e.value == null ? void 0 : e.value
        }
    }

    function Yr(e) {
        return Zr(e, !1)
    }

    function Zr(e, t = !1) {
        return e == null ? e : {
            key: e.key,
            value: e.value
        }
    }
    const lm = {
        Equals: "equals",
        NotEquals: "not_equals",
        Contains: "contains",
        NotContains: "not_contains",
        Regex: "regex",
        NotRegex: "not_regex",
        Set: "set",
        NotSet: "not_set",
        UnknownDefaultOpenApi: "11184809"
    };

    function fm(e) {
        return !0
    }

    function jr(e) {
        return en(e)
    }

    function en(e, t) {
        return e == null ? e : {
            attribute: e.attribute == null ? void 0 : e.attribute,
            condition: e.condition == null ? void 0 : e.condition,
            value: e.value == null ? void 0 : e.value
        }
    }

    function tn(e) {
        return rn(e, !1)
    }

    function rn(e, t = !1) {
        return e == null ? e : {
            attribute: e.attribute,
            condition: e.condition,
            value: e.value
        }
    }

    function pm(e) {
        return !(!("count" in e) || e.count === void 0 || !("name" in e) || e.name === void 0)
    }

    function nn(e) {
        return on(e)
    }

    function on(e, t) {
        return e == null ? e : {
            count: e.count,
            name: e.name
        }
    }

    function hm(e) {
        return _n(e, !1)
    }

    function _n(e, t = !1) {
        return e == null ? e : {
            count: e.count,
            name: e.name
        }
    }
    const fe = {
        Aal0: "aal0",
        Aal1: "aal1",
        Aal2: "aal2",
        Aal3: "aal3",
        UnknownDefaultOpenApi: "11184809"
    };

    function gm(e) {
        for (const t in fe)
            if (Object.prototype.hasOwnProperty.call(fe, t) && fe[t] === e) return !0;
        return !1
    }

    function pe(e) {
        return an(e)
    }

    function an(e, t) {
        return e
    }

    function mm(e) {
        return e
    }

    function ym(e, t) {
        return e
    }

    function km(e) {
        return !(!("domains" in e) || e.domains === void 0 || !("id" in e) || e.id === void 0 || !("label" in e) || e.label === void 0)
    }

    function Be(e) {
        return sn(e)
    }

    function sn(e, t) {
        return e == null ? e : {
            domains: e.domains,
            id: e.id,
            label: e.label
        }
    }

    function We(e) {
        return dn(e, !1)
    }

    function dn(e, t = !1) {
        return e == null ? e : {
            domains: e.domains,
            id: e.id,
            label: e.label
        }
    }

    function bm(e) {
        return !(!("namespace" in e) || e.namespace === void 0 || !("object" in e) || e.object === void 0 || !("relation" in e) || e.relation === void 0)
    }

    function B(e) {
        return cn(e)
    }

    function cn(e, t) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation
        }
    }

    function W(e) {
        return un(e, !1)
    }

    function un(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation
        }
    }

    function wm(e) {
        return !(!("namespace" in e) || e.namespace === void 0 || !("object" in e) || e.object === void 0 || !("relation" in e) || e.relation === void 0)
    }

    function L(e) {
        return ln(e)
    }

    function ln(e, t) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id == null ? void 0 : e.subject_id,
            subject_set: e.subject_set == null ? void 0 : B(e.subject_set)
        }
    }

    function K(e) {
        return fn(e, !1)
    }

    function fn(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id,
            subject_set: W(e.subject_set)
        }
    }

    function Sm(e) {
        return !0
    }

    function Om(e) {
        return pn(e)
    }

    function pn(e, t) {
        return e == null ? e : {
            tuples: e.tuples == null ? void 0 : e.tuples.map(L)
        }
    }

    function hn(e) {
        return gn(e, !1)
    }

    function gn(e, t = !1) {
        return e == null ? e : {
            tuples: e.tuples == null ? void 0 : e.tuples.map(K)
        }
    }

    function Tm(e) {
        return !(!("allowed" in e) || e.allowed === void 0)
    }

    function mn(e) {
        return yn(e)
    }

    function yn(e, t) {
        return e == null ? e : {
            allowed: e.allowed,
            error: e.error == null ? void 0 : e.error
        }
    }

    function kn(e) {
        return bn(e, !1)
    }

    function bn(e, t = !1) {
        return e == null ? e : {
            allowed: e.allowed,
            error: e.error
        }
    }

    function vm(e) {
        return !(!("results" in e) || e.results === void 0)
    }

    function wn(e) {
        return Sn(e)
    }

    function Sn(e, t) {
        return e == null ? e : {
            results: e.results.map(mn)
        }
    }

    function Nm(e) {
        return On(e, !1)
    }

    function On(e, t = !1) {
        return e == null ? e : {
            results: e.results.map(kn)
        }
    }
    const Jm = {
        Create: "create",
        Error: "error",
        UnknownDefaultOpenApi: "11184809"
    };

    function Rm(e) {
        return !0
    }

    function Tn(e) {
        return vn(e)
    }

    function vn(e, t) {
        return e == null ? e : {
            action: e.action == null ? void 0 : e.action,
            error: e.error == null ? void 0 : e.error,
            identity: e.identity == null ? void 0 : e.identity,
            patch_id: e.patch_id == null ? void 0 : e.patch_id
        }
    }

    function Nn(e) {
        return Jn(e, !1)
    }

    function Jn(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            error: e.error,
            identity: e.identity,
            patch_id: e.patch_id
        }
    }

    function Fm(e) {
        return !0
    }

    function Rn(e) {
        return Fn(e)
    }

    function Fn(e, t) {
        return e == null ? e : {
            identities: e.identities == null ? void 0 : e.identities.map(Tn)
        }
    }

    function Cm(e) {
        return Cn(e, !1)
    }

    function Cn(e, t = !1) {
        return e == null ? e : {
            identities: e.identities == null ? void 0 : e.identities.map(Nn)
        }
    }

    function Dm(e) {
        return !0
    }

    function Dn(e) {
        return xn(e)
    }

    function xn(e, t) {
        return e == null ? e : {
            amount_in_cent: e.amount_in_cent == null ? void 0 : e.amount_in_cent,
            title: e.title == null ? void 0 : e.title
        }
    }

    function An(e) {
        return In(e, !1)
    }

    function In(e, t = !1) {
        return e == null ? e : {
            amount_in_cent: e.amount_in_cent,
            title: e.title
        }
    }

    function xm(e) {
        return !(!("end" in e) || e.end === void 0 || !("start" in e) || e.start === void 0)
    }

    function Le(e) {
        return Pn(e)
    }

    function Pn(e, t) {
        return e == null ? e : {
            end: new Date(e.end),
            start: new Date(e.start)
        }
    }

    function Me(e) {
        return qn(e, !1)
    }

    function qn(e, t = !1) {
        return e == null ? e : {
            end: e.end.toISOString(),
            start: e.start.toISOString()
        }
    }

    function Am(e) {
        return !0
    }

    function $e(e) {
        return zn(e)
    }

    function zn(e, t) {
        return e == null ? e : {
            amount_in_cent: e.amount_in_cent == null ? void 0 : e.amount_in_cent,
            description: e.description == null ? void 0 : e.description,
            items: e.items == null ? void 0 : e.items.map($e),
            quantity: e.quantity == null ? void 0 : e.quantity,
            title: e.title == null ? void 0 : e.title,
            unit_price: e.unit_price == null ? void 0 : e.unit_price
        }
    }

    function Un(e) {
        return En(e, !1)
    }

    function En(e, t = !1) {
        return e == null ? e : {
            amount_in_cent: e.amount_in_cent,
            description: e.description,
            items: e.items == null ? void 0 : e.items.map(Un),
            quantity: e.quantity,
            title: e.title,
            unit_price: e.unit_price
        }
    }

    function Im(e) {
        return !(!("billing_period" in e) || e.billing_period === void 0 || !("currency" in e) || e.currency === void 0 || !("items" in e) || e.items === void 0 || !("title" in e) || e.title === void 0 || !("total_in_cent" in e) || e.total_in_cent === void 0)
    }

    function Bn(e) {
        return Wn(e)
    }

    function Wn(e, t) {
        return e == null ? e : {
            billing_period: Le(e.billing_period),
            currency: e.currency,
            deleted: e.deleted == null ? void 0 : e.deleted,
            items: e.items.map($e),
            plan: e.plan == null ? void 0 : e.plan,
            stripe_invoice_item: e.stripe_invoice_item == null ? void 0 : e.stripe_invoice_item,
            stripe_invoice_status: e.stripe_invoice_status == null ? void 0 : e.stripe_invoice_status,
            stripe_link: e.stripe_link == null ? void 0 : e.stripe_link,
            subtitle: e.subtitle == null ? void 0 : e.subtitle,
            tax: e.tax == null ? void 0 : Dn(e.tax),
            title: e.title,
            total_in_cent: e.total_in_cent
        }
    }

    function Ln(e) {
        return Mn(e, !1)
    }

    function Mn(e, t = !1) {
        return e == null ? e : {
            billing_period: Me(e.billing_period),
            stripe_invoice_item: e.stripe_invoice_item,
            stripe_invoice_status: e.stripe_invoice_status,
            tax: An(e.tax),
            total_in_cent: e.total_in_cent
        }
    }
    const Pm = {
        Usage: "usage",
        Base: "base",
        UnknownDefaultOpenApi: "11184809"
    };

    function qm(e) {
        return !(!("id" in e) || e.id === void 0 || !("invoiced_at" in e) || e.invoiced_at === void 0 || !("type" in e) || e.type === void 0)
    }

    function Ge(e) {
        return $n(e)
    }

    function $n(e, t) {
        return e == null ? e : {
            id: e.id,
            invoiced_at: new Date(e.invoiced_at),
            type: e.type,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            v1: e.v1 == null ? void 0 : Bn(e.v1)
        }
    }

    function Ke(e) {
        return Gn(e, !1)
    }

    function Gn(e, t = !1) {
        return e == null ? e : {
            invoiced_at: e.invoiced_at.toISOString(),
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            v1: Ln(e.v1)
        }
    }

    function zm(e) {
        return !0
    }

    function Kn(e) {
        return Vn(e)
    }

    function Vn(e, t) {
        return e == null ? e : {
            base_invoices: e.base_invoices == null ? void 0 : e.base_invoices.map(Ge),
            billing_period: e.billing_period == null ? void 0 : Le(e.billing_period),
            usage_invoice: e.usage_invoice == null ? void 0 : Ge(e.usage_invoice)
        }
    }

    function Hn(e) {
        return Xn(e, !1)
    }

    function Xn(e, t = !1) {
        return e == null ? e : {
            base_invoices: e.base_invoices == null ? void 0 : e.base_invoices.map(Ke),
            billing_period: Me(e.billing_period),
            usage_invoice: Ke(e.usage_invoice)
        }
    }

    function Um(e) {
        return !0
    }

    function Ve(e) {
        return Qn(e)
    }

    function Qn(e, t) {
        return e == null ? e : {
            Line: e.Line == null ? void 0 : e.Line,
            column: e.column == null ? void 0 : e.column
        }
    }

    function He(e) {
        return Yn(e, !1)
    }

    function Yn(e, t = !1) {
        return e == null ? e : {
            Line: e.Line,
            column: e.column
        }
    }

    function Em(e) {
        return !0
    }

    function Zn(e) {
        return jn(e)
    }

    function jn(e, t) {
        return e == null ? e : {
            end: e.end == null ? void 0 : Ve(e.end),
            message: e.message == null ? void 0 : e.message,
            start: e.start == null ? void 0 : Ve(e.start)
        }
    }

    function ei(e) {
        return ti(e, !1)
    }

    function ti(e, t = !1) {
        return e == null ? e : {
            end: He(e.end),
            message: e.message,
            start: He(e.start)
        }
    }

    function Bm(e) {
        return !0
    }

    function ri(e) {
        return ni(e)
    }

    function ni(e, t) {
        return e == null ? e : {
            errors: e.errors == null ? void 0 : e.errors.map(Zn)
        }
    }

    function Wm(e) {
        return ii(e, !1)
    }

    function ii(e, t = !1) {
        return e == null ? e : {
            errors: e.errors == null ? void 0 : e.errors.map(ei)
        }
    }

    function Lm(e) {
        return !(!("allowed" in e) || e.allowed === void 0)
    }

    function V(e) {
        return oi(e)
    }

    function oi(e, t) {
        return e == null ? e : {
            allowed: e.allowed
        }
    }

    function Mm(e) {
        return _i(e, !1)
    }

    function _i(e, t = !1) {
        return e == null ? e : {
            allowed: e.allowed
        }
    }

    function $m(e) {
        return !(!("email" in e) || e.email === void 0 || !("email_verified" in e) || e.email_verified === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0)
    }

    function Gm(e) {
        return ai(e)
    }

    function ai(e, t) {
        return e == null ? e : {
            email: e.email,
            email_verified: e.email_verified,
            id: e.id,
            name: e.name
        }
    }

    function Km(e) {
        return si(e, !1)
    }

    function si(e, t = !1) {
        return e == null ? e : {
            email: e.email,
            email_verified: e.email_verified,
            id: e.id,
            name: e.name
        }
    }
    const Vm = {
        Empty: "",
        Strong: "strong",
        Eventual: "eventual",
        UnknownDefaultOpenApi: "11184809"
    };

    function Hm(e) {
        return !0
    }

    function Xm(e) {
        return di(e)
    }

    function di(e, t) {
        return e == null ? e : {
            consistency: e.consistency == null ? void 0 : e.consistency
        }
    }

    function Qm(e) {
        return ci(e, !1)
    }

    function ci(e, t = !1) {
        return e == null ? e : {
            consistency: e.consistency
        }
    }

    function Ym(e) {
        return !(!("id" in e) || e.id === void 0)
    }

    function ui(e) {
        return li(e)
    }

    function li(e, t) {
        return e == null ? e : {
            id: e.id,
            url: e.url == null ? void 0 : e.url
        }
    }

    function fi(e) {
        return pi(e, !1)
    }

    function pi(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            url: e.url
        }
    }
    const Zm = {
        ShowRecoveryUi: "show_recovery_ui",
        UnknownDefaultOpenApi: "11184809"
    };

    function jm(e) {
        return !(!("action" in e) || e.action === void 0 || !("flow" in e) || e.flow === void 0)
    }

    function ey(e) {
        return Xe(e)
    }

    function Xe(e, t) {
        return e == null ? e : {
            action: e.action,
            flow: ui(e.flow)
        }
    }

    function hi(e) {
        return gi(e, !1)
    }

    function gi(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            flow: fi(e.flow)
        }
    }
    const ty = {
        RedirectBrowserTo: "redirect_browser_to",
        UnknownDefaultOpenApi: "11184809"
    };

    function ry(e) {
        return !(!("action" in e) || e.action === void 0 || !("redirect_browser_to" in e) || e.redirect_browser_to === void 0)
    }

    function ny(e) {
        return Qe(e)
    }

    function Qe(e, t) {
        return e == null ? e : {
            action: e.action,
            redirect_browser_to: e.redirect_browser_to
        }
    }

    function mi(e) {
        return yi(e, !1)
    }

    function yi(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            redirect_browser_to: e.redirect_browser_to
        }
    }
    const iy = {
        SetOrySessionToken: "set_ory_session_token",
        UnknownDefaultOpenApi: "11184809"
    };

    function oy(e) {
        return !(!("action" in e) || e.action === void 0 || !("ory_session_token" in e) || e.ory_session_token === void 0)
    }

    function _y(e) {
        return Ye(e)
    }

    function Ye(e, t) {
        return e == null ? e : {
            action: e.action,
            ory_session_token: e.ory_session_token
        }
    }

    function ki(e) {
        return bi(e, !1)
    }

    function bi(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            ory_session_token: e.ory_session_token
        }
    }

    function ay(e) {
        return !(!("id" in e) || e.id === void 0)
    }

    function wi(e) {
        return Si(e)
    }

    function Si(e, t) {
        return e == null ? e : {
            id: e.id,
            url: e.url == null ? void 0 : e.url
        }
    }

    function Oi(e) {
        return Ti(e, !1)
    }

    function Ti(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            url: e.url
        }
    }
    const sy = {
        ShowSettingsUi: "show_settings_ui",
        UnknownDefaultOpenApi: "11184809"
    };

    function dy(e) {
        return !(!("action" in e) || e.action === void 0 || !("flow" in e) || e.flow === void 0)
    }

    function cy(e) {
        return Ze(e)
    }

    function Ze(e, t) {
        return e == null ? e : {
            action: e.action,
            flow: wi(e.flow)
        }
    }

    function vi(e) {
        return Ni(e, !1)
    }

    function Ni(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            flow: Oi(e.flow)
        }
    }

    function uy(e) {
        return !(!("id" in e) || e.id === void 0 || !("verifiable_address" in e) || e.verifiable_address === void 0)
    }

    function Ji(e) {
        return Ri(e)
    }

    function Ri(e, t) {
        return e == null ? e : {
            id: e.id,
            url: e.url == null ? void 0 : e.url,
            verifiable_address: e.verifiable_address
        }
    }

    function Fi(e) {
        return Ci(e, !1)
    }

    function Ci(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            url: e.url,
            verifiable_address: e.verifiable_address
        }
    }
    const ly = {
        ShowVerificationUi: "show_verification_ui",
        UnknownDefaultOpenApi: "11184809"
    };

    function fy(e) {
        return !(!("action" in e) || e.action === void 0 || !("flow" in e) || e.flow === void 0)
    }

    function py(e) {
        return je(e)
    }

    function je(e, t) {
        return e == null ? e : {
            action: e.action,
            flow: Ji(e.flow)
        }
    }

    function Di(e) {
        return xi(e, !1)
    }

    function xi(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            flow: Fi(e.flow)
        }
    }

    function H(e) {
        return Ai(e)
    }

    function Ai(e, t) {
        if (e == null) return e;
        switch (e.action) {
            case "redirect_browser_to":
                return Object.assign({}, Qe(e), {
                    action: "redirect_browser_to"
                });
            case "set_ory_session_token":
                return Object.assign({}, Ye(e), {
                    action: "set_ory_session_token"
                });
            case "show_recovery_ui":
                return Object.assign({}, Xe(e), {
                    action: "show_recovery_ui"
                });
            case "show_settings_ui":
                return Object.assign({}, Ze(e), {
                    action: "show_settings_ui"
                });
            case "show_verification_ui":
                return Object.assign({}, je(e), {
                    action: "show_verification_ui"
                });
            default:
                throw new Error(`No variant of ContinueWith exists with 'action=${e.action}'`)
        }
    }

    function X(e) {
        return Ii(e, !1)
    }

    function Ii(e, t = !1) {
        if (e == null) return e;
        switch (e.action) {
            case "redirect_browser_to":
                return Object.assign({}, mi(e), {
                    action: "redirect_browser_to"
                });
            case "set_ory_session_token":
                return Object.assign({}, ki(e), {
                    action: "set_ory_session_token"
                });
            case "show_recovery_ui":
                return Object.assign({}, hi(e), {
                    action: "show_recovery_ui"
                });
            case "show_settings_ui":
                return Object.assign({}, vi(e), {
                    action: "show_settings_ui"
                });
            case "show_verification_ui":
                return Object.assign({}, Di(e), {
                    action: "show_verification_ui"
                });
            default:
                throw new Error(`No variant of ContinueWith exists with 'action=${e.action}'`)
        }
    }
    const he = {
        Queued: "queued",
        Sent: "sent",
        Processing: "processing",
        Abandoned: "abandoned",
        UnknownDefaultOpenApi: "11184809"
    };

    function hy(e) {
        for (const t in he)
            if (Object.prototype.hasOwnProperty.call(he, t) && he[t] === e) return !0;
        return !1
    }

    function Pi(e) {
        return qi(e)
    }

    function qi(e, t) {
        return e
    }

    function gy(e) {
        return e
    }

    function my(e, t) {
        return e
    }
    const ge = {
        Email: "email",
        Phone: "phone",
        UnknownDefaultOpenApi: "11184809"
    };

    function yy(e) {
        for (const t in ge)
            if (Object.prototype.hasOwnProperty.call(ge, t) && ge[t] === e) return !0;
        return !1
    }

    function zi(e) {
        return Ui(e)
    }

    function Ui(e, t) {
        return e
    }

    function ky(e) {
        return e
    }

    function by(e, t) {
        return e
    }

    function wy(e) {
        return !0
    }

    function Sy(e) {
        return Ei(e)
    }

    function Ei(e, t) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain == null ? void 0 : e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins == null ? void 0 : e.cors_allowed_origins,
            cors_enabled: e.cors_enabled == null ? void 0 : e.cors_enabled,
            custom_ui_base_url: e.custom_ui_base_url == null ? void 0 : e.custom_ui_base_url,
            hostname: e.hostname == null ? void 0 : e.hostname
        }
    }

    function Oy(e) {
        return Bi(e, !1)
    }

    function Bi(e, t = !1) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins,
            cors_enabled: e.cors_enabled,
            custom_ui_base_url: e.custom_ui_base_url,
            hostname: e.hostname
        }
    }
    const Ty = {
        Sns: "sns",
        UnknownDefaultOpenApi: "11184809"
    };

    function vy(e) {
        return !(!("role_arn" in e) || e.role_arn === void 0 || !("topic_arn" in e) || e.topic_arn === void 0 || !("type" in e) || e.type === void 0)
    }

    function Ny(e) {
        return Wi(e)
    }

    function Wi(e, t) {
        return e == null ? e : {
            role_arn: e.role_arn,
            topic_arn: e.topic_arn,
            type: e.type
        }
    }

    function Li(e) {
        return Mi(e, !1)
    }

    function Mi(e, t = !1) {
        return e == null ? e : {
            role_arn: e.role_arn,
            topic_arn: e.topic_arn,
            type: e.type
        }
    }

    function Jy(e) {
        return !0
    }

    function $i(e) {
        return Gi(e)
    }

    function Gi(e, t) {
        return e == null ? e : {
            client_id: e.client_id == null ? void 0 : e.client_id,
            config_url: e.config_url == null ? void 0 : e.config_url,
            domain_hint: e.domain_hint == null ? void 0 : e.domain_hint,
            fields: e.fields == null ? void 0 : e.fields,
            login_hint: e.login_hint == null ? void 0 : e.login_hint,
            nonce: e.nonce == null ? void 0 : e.nonce,
            parameters: e.parameters == null ? void 0 : e.parameters
        }
    }

    function Ki(e) {
        return Vi(e, !1)
    }

    function Vi(e, t = !1) {
        return e == null ? e : {
            client_id: e.client_id,
            config_url: e.config_url,
            domain_hint: e.domain_hint,
            fields: e.fields,
            login_hint: e.login_hint,
            nonce: e.nonce,
            parameters: e.parameters
        }
    }

    function Ry(e) {
        return !0
    }

    function Hi(e) {
        return Xi(e)
    }

    function Xi(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            providers: e.providers == null ? void 0 : e.providers.map($i)
        }
    }

    function Fy(e) {
        return Qi(e, !1)
    }

    function Qi(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            providers: e.providers == null ? void 0 : e.providers.map(Ki)
        }
    }
    const Cy = {
        Email: "email",
        Sms: "sms",
        UnknownDefaultOpenApi: "11184809"
    };

    function Dy(e) {
        return !(!("status" in e) || e.status === void 0 || !("value" in e) || e.value === void 0 || !("verified" in e) || e.verified === void 0 || !("via" in e) || e.via === void 0)
    }

    function et(e) {
        return Yi(e)
    }

    function Yi(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            status: e.status,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            value: e.value,
            verified: e.verified,
            verified_at: e.verified_at == null ? void 0 : new Date(e.verified_at),
            via: e.via
        }
    }

    function tt(e) {
        return Zi(e, !1)
    }

    function Zi(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            id: e.id,
            status: e.status,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            value: e.value,
            verified: e.verified,
            verified_at: e.verified_at == null ? void 0 : e.verified_at.toISOString(),
            via: e.via
        }
    }

    function xy(e) {
        return !(!("id" in e) || e.id === void 0 || !("value" in e) || e.value === void 0 || !("via" in e) || e.via === void 0)
    }

    function rt(e) {
        return ji(e)
    }

    function ji(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            value: e.value,
            via: e.via
        }
    }

    function nt(e) {
        return eo(e, !1)
    }

    function eo(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            id: e.id,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            value: e.value,
            via: e.via
        }
    }

    function Ay(e) {
        return !(!("provider" in e) || e.provider === void 0 || !("subject" in e) || e.subject === void 0)
    }

    function to(e) {
        return ro(e)
    }

    function ro(e, t) {
        return e == null ? e : {
            organization: e.organization == null ? void 0 : e.organization,
            provider: e.provider,
            subject: e.subject
        }
    }

    function no(e) {
        return io(e, !1)
    }

    function io(e, t = !1) {
        return e == null ? e : {
            organization: e.organization,
            provider: e.provider,
            subject: e.subject
        }
    }

    function Iy(e) {
        return !0
    }

    function oo(e) {
        return _o(e)
    }

    function _o(e, t) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(to)
        }
    }

    function ao(e) {
        return so(e, !1)
    }

    function so(e, t = !1) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(no)
        }
    }

    function Py(e) {
        return !0
    }

    function co(e) {
        return uo(e)
    }

    function uo(e, t) {
        return e == null ? e : {
            config: e.config == null ? void 0 : oo(e.config)
        }
    }

    function lo(e) {
        return fo(e, !1)
    }

    function fo(e, t = !1) {
        return e == null ? e : {
            config: ao(e.config)
        }
    }

    function qy(e) {
        return !(!("provider" in e) || e.provider === void 0 || !("subject" in e) || e.subject === void 0)
    }

    function po(e) {
        return ho(e)
    }

    function ho(e, t) {
        return e == null ? e : {
            organization: e.organization == null ? void 0 : e.organization,
            provider: e.provider,
            subject: e.subject,
            use_auto_link: e.use_auto_link == null ? void 0 : e.use_auto_link
        }
    }

    function go(e) {
        return mo(e, !1)
    }

    function mo(e, t = !1) {
        return e == null ? e : {
            organization: e.organization,
            provider: e.provider,
            subject: e.subject,
            use_auto_link: e.use_auto_link
        }
    }

    function zy(e) {
        return !0
    }

    function yo(e) {
        return ko(e)
    }

    function ko(e, t) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(po)
        }
    }

    function bo(e) {
        return wo(e, !1)
    }

    function wo(e, t = !1) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(go)
        }
    }

    function Uy(e) {
        return !0
    }

    function So(e) {
        return Oo(e)
    }

    function Oo(e, t) {
        return e == null ? e : {
            config: e.config == null ? void 0 : yo(e.config)
        }
    }

    function To(e) {
        return vo(e, !1)
    }

    function vo(e, t = !1) {
        return e == null ? e : {
            config: bo(e.config)
        }
    }

    function Ey(e) {
        return !0
    }

    function No(e) {
        return Jo(e)
    }

    function Jo(e, t) {
        return e == null ? e : {
            hashed_password: e.hashed_password == null ? void 0 : e.hashed_password,
            password: e.password == null ? void 0 : e.password,
            use_password_migration_hook: e.use_password_migration_hook == null ? void 0 : e.use_password_migration_hook
        }
    }

    function Ro(e) {
        return Fo(e, !1)
    }

    function Fo(e, t = !1) {
        return e == null ? e : {
            hashed_password: e.hashed_password,
            password: e.password,
            use_password_migration_hook: e.use_password_migration_hook
        }
    }

    function By(e) {
        return !0
    }

    function Co(e) {
        return Do(e)
    }

    function Do(e, t) {
        return e == null ? e : {
            config: e.config == null ? void 0 : No(e.config)
        }
    }

    function xo(e) {
        return Ao(e, !1)
    }

    function Ao(e, t = !1) {
        return e == null ? e : {
            config: Ro(e.config)
        }
    }

    function Wy(e) {
        return !0
    }

    function it(e) {
        return Io(e)
    }

    function Io(e, t) {
        return e == null ? e : {
            oidc: e.oidc == null ? void 0 : So(e.oidc),
            password: e.password == null ? void 0 : Co(e.password),
            saml: e.saml == null ? void 0 : co(e.saml)
        }
    }

    function ot(e) {
        return Po(e, !1)
    }

    function Po(e, t = !1) {
        return e == null ? e : {
            oidc: To(e.oidc),
            password: xo(e.password),
            saml: lo(e.saml)
        }
    }
    const Ly = {
        Active: "active",
        Inactive: "inactive",
        UnknownDefaultOpenApi: "11184809"
    };

    function My(e) {
        return !(!("schema_id" in e) || e.schema_id === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function qo(e) {
        return zo(e)
    }

    function zo(e, t) {
        return e == null ? e : {
            credentials: e.credentials == null ? void 0 : it(e.credentials),
            external_id: e.external_id == null ? void 0 : e.external_id,
            metadata_admin: e.metadata_admin == null ? void 0 : e.metadata_admin,
            metadata_public: e.metadata_public == null ? void 0 : e.metadata_public,
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            recovery_addresses: e.recovery_addresses == null ? void 0 : e.recovery_addresses.map(rt),
            schema_id: e.schema_id,
            state: e.state == null ? void 0 : e.state,
            traits: e.traits,
            verifiable_addresses: e.verifiable_addresses == null ? void 0 : e.verifiable_addresses.map(et)
        }
    }

    function _t(e) {
        return Uo(e, !1)
    }

    function Uo(e, t = !1) {
        return e == null ? e : {
            credentials: ot(e.credentials),
            external_id: e.external_id,
            metadata_admin: e.metadata_admin,
            metadata_public: e.metadata_public,
            organization_id: e.organization_id,
            recovery_addresses: e.recovery_addresses == null ? void 0 : e.recovery_addresses.map(nt),
            schema_id: e.schema_id,
            state: e.state,
            traits: e.traits,
            verifiable_addresses: e.verifiable_addresses == null ? void 0 : e.verifiable_addresses.map(tt)
        }
    }
    const $y = {
        Pending: "pending",
        Accepted: "accepted",
        Declined: "declined",
        Expired: "expired",
        Cancelled: "cancelled",
        Removed: "removed",
        UnknownDefaultOpenApi: "11184809"
    };

    function Gy(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("invitee_email" in e) || e.invitee_email === void 0 || !("owner_email" in e) || e.owner_email === void 0 || !("owner_id" in e) || e.owner_id === void 0 || !("status" in e) || e.status === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function at(e) {
        return Eo(e)
    }

    function Eo(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            id: e.id,
            invitee_email: e.invitee_email,
            invitee_id: e.invitee_id == null ? void 0 : e.invitee_id,
            owner_email: e.owner_email,
            owner_id: e.owner_id,
            project_id: e.project_id == null ? void 0 : e.project_id,
            role: e.role == null ? void 0 : e.role,
            status: e.status,
            updated_at: new Date(e.updated_at),
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function st(e) {
        return Bo(e, !1)
    }

    function Bo(e, t = !1) {
        return e == null ? e : {
            invitee_email: e.invitee_email,
            invitee_id: e.invitee_id,
            owner_email: e.owner_email,
            owner_id: e.owner_id,
            project_id: e.project_id,
            role: e.role,
            status: e.status,
            workspace_id: e.workspace_id
        }
    }

    function Ky(e) {
        return !(!("all_invites" in e) || e.all_invites === void 0 || !("created_invite" in e) || e.created_invite === void 0)
    }

    function Vy(e) {
        return Wo(e)
    }

    function Wo(e, t) {
        return e == null ? e : {
            all_invites: e.all_invites.map(at),
            created_invite: at(e.created_invite)
        }
    }

    function Hy(e) {
        return Lo(e, !1)
    }

    function Lo(e, t = !1) {
        return e == null ? e : {
            all_invites: e.all_invites.map(st),
            created_invite: st(e.created_invite)
        }
    }

    function Xy(e) {
        return !(!("alg" in e) || e.alg === void 0 || !("kid" in e) || e.kid === void 0 || !("use" in e) || e.use === void 0)
    }

    function Qy(e) {
        return Mo(e)
    }

    function Mo(e, t) {
        return e == null ? e : {
            alg: e.alg,
            kid: e.kid,
            use: e.use
        }
    }

    function $o(e) {
        return Go(e, !1)
    }

    function Go(e, t = !1) {
        return e == null ? e : {
            alg: e.alg,
            kid: e.kid,
            use: e.use
        }
    }

    function Yy(e) {
        return !(!("enable_scim" in e) || e.enable_scim === void 0 || !("enable_sso" in e) || e.enable_sso === void 0)
    }

    function Zy(e) {
        return Ko(e)
    }

    function Ko(e, t) {
        return e == null ? e : {
            custom_hostname_id: e.custom_hostname_id == null ? void 0 : e.custom_hostname_id,
            enable_scim: e.enable_scim,
            enable_sso: e.enable_sso,
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at)
        }
    }

    function Vo(e) {
        return Ho(e, !1)
    }

    function Ho(e, t = !1) {
        return e == null ? e : {
            custom_hostname_id: e.custom_hostname_id,
            enable_scim: e.enable_scim,
            enable_sso: e.enable_sso,
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString()
        }
    }

    function jy(e) {
        return !(!("name" in e) || e.name === void 0)
    }

    function ek(e) {
        return Xo(e)
    }

    function Xo(e, t) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            name: e.name
        }
    }

    function Qo(e) {
        return Yo(e, !1)
    }

    function Yo(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            name: e.name
        }
    }
    const tk = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        rk = {
            EuCentral: "eu-central",
            AsiaNortheast: "asia-northeast",
            UsEast: "us-east",
            UsWest: "us-west",
            Us: "us",
            Global: "global",
            UnknownDefaultOpenApi: "11184809"
        };

    function nk(e) {
        return !(!("environment" in e) || e.environment === void 0 || !("name" in e) || e.name === void 0)
    }

    function ik(e) {
        return Zo(e)
    }

    function Zo(e, t) {
        return e == null ? e : {
            environment: e.environment,
            home_region: e.home_region == null ? void 0 : e.home_region,
            name: e.name,
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function jo(e) {
        return e_(e, !1)
    }

    function e_(e, t = !1) {
        return e == null ? e : {
            environment: e.environment,
            home_region: e.home_region,
            name: e.name,
            workspace_id: e.workspace_id
        }
    }

    function ok(e) {
        return !0
    }

    function dt(e) {
        return t_(e)
    }

    function t_(e, t) {
        return e == null ? e : {
            accent_default_color: e.accent_default_color == null ? void 0 : e.accent_default_color,
            accent_disabled_color: e.accent_disabled_color == null ? void 0 : e.accent_disabled_color,
            accent_emphasis_color: e.accent_emphasis_color == null ? void 0 : e.accent_emphasis_color,
            accent_muted_color: e.accent_muted_color == null ? void 0 : e.accent_muted_color,
            accent_subtle_color: e.accent_subtle_color == null ? void 0 : e.accent_subtle_color,
            background_canvas_color: e.background_canvas_color == null ? void 0 : e.background_canvas_color,
            background_subtle_color: e.background_subtle_color == null ? void 0 : e.background_subtle_color,
            background_surface_color: e.background_surface_color == null ? void 0 : e.background_surface_color,
            border_default_color: e.border_default_color == null ? void 0 : e.border_default_color,
            error_default_color: e.error_default_color == null ? void 0 : e.error_default_color,
            error_emphasis_color: e.error_emphasis_color == null ? void 0 : e.error_emphasis_color,
            error_muted_color: e.error_muted_color == null ? void 0 : e.error_muted_color,
            error_subtle_color: e.error_subtle_color == null ? void 0 : e.error_subtle_color,
            foreground_default_color: e.foreground_default_color == null ? void 0 : e.foreground_default_color,
            foreground_disabled_color: e.foreground_disabled_color == null ? void 0 : e.foreground_disabled_color,
            foreground_muted_color: e.foreground_muted_color == null ? void 0 : e.foreground_muted_color,
            foreground_on_accent_color: e.foreground_on_accent_color == null ? void 0 : e.foreground_on_accent_color,
            foreground_on_dark_color: e.foreground_on_dark_color == null ? void 0 : e.foreground_on_dark_color,
            foreground_on_disabled_color: e.foreground_on_disabled_color == null ? void 0 : e.foreground_on_disabled_color,
            foreground_subtle_color: e.foreground_subtle_color == null ? void 0 : e.foreground_subtle_color,
            input_background_color: e.input_background_color == null ? void 0 : e.input_background_color,
            input_disabled_color: e.input_disabled_color == null ? void 0 : e.input_disabled_color,
            input_placeholder_color: e.input_placeholder_color == null ? void 0 : e.input_placeholder_color,
            input_text_color: e.input_text_color == null ? void 0 : e.input_text_color,
            primary_color: e.primary_color == null ? void 0 : e.primary_color,
            secondary_color: e.secondary_color == null ? void 0 : e.secondary_color,
            success_emphasis_color: e.success_emphasis_color == null ? void 0 : e.success_emphasis_color,
            text_default_color: e.text_default_color == null ? void 0 : e.text_default_color,
            text_disabled_color: e.text_disabled_color == null ? void 0 : e.text_disabled_color
        }
    }

    function ct(e) {
        return r_(e, !1)
    }

    function r_(e, t = !1) {
        return e == null ? e : {
            accent_default_color: e.accent_default_color,
            accent_disabled_color: e.accent_disabled_color,
            accent_emphasis_color: e.accent_emphasis_color,
            accent_muted_color: e.accent_muted_color,
            accent_subtle_color: e.accent_subtle_color,
            background_canvas_color: e.background_canvas_color,
            background_subtle_color: e.background_subtle_color,
            background_surface_color: e.background_surface_color,
            border_default_color: e.border_default_color,
            error_default_color: e.error_default_color,
            error_emphasis_color: e.error_emphasis_color,
            error_muted_color: e.error_muted_color,
            error_subtle_color: e.error_subtle_color,
            foreground_default_color: e.foreground_default_color,
            foreground_disabled_color: e.foreground_disabled_color,
            foreground_muted_color: e.foreground_muted_color,
            foreground_on_accent_color: e.foreground_on_accent_color,
            foreground_on_dark_color: e.foreground_on_dark_color,
            foreground_on_disabled_color: e.foreground_on_disabled_color,
            foreground_subtle_color: e.foreground_subtle_color,
            input_background_color: e.input_background_color,
            input_disabled_color: e.input_disabled_color,
            input_placeholder_color: e.input_placeholder_color,
            input_text_color: e.input_text_color,
            primary_color: e.primary_color,
            secondary_color: e.secondary_color,
            success_emphasis_color: e.success_emphasis_color,
            text_default_color: e.text_default_color,
            text_disabled_color: e.text_disabled_color
        }
    }

    function _k(e) {
        return !0
    }

    function ak(e) {
        return n_(e)
    }

    function n_(e, t) {
        return e == null ? e : {
            favicon_type: e.favicon_type == null ? void 0 : e.favicon_type,
            favicon_url: e.favicon_url == null ? void 0 : e.favicon_url,
            logo_type: e.logo_type == null ? void 0 : e.logo_type,
            logo_url: e.logo_url == null ? void 0 : e.logo_url,
            name: e.name == null ? void 0 : e.name,
            theme: e.theme == null ? void 0 : dt(e.theme)
        }
    }

    function sk(e) {
        return i_(e, !1)
    }

    function i_(e, t = !1) {
        return e == null ? e : {
            favicon_type: e.favicon_type,
            favicon_url: e.favicon_url,
            logo_type: e.logo_type,
            logo_url: e.logo_url,
            name: e.name,
            theme: ct(e.theme)
        }
    }

    function dk(e) {
        return !0
    }

    function ck(e) {
        return o_(e)
    }

    function o_(e, t) {
        return e == null ? e : {
            invitee_email: e.invitee_email == null ? void 0 : e.invitee_email
        }
    }

    function uk(e) {
        return __(e, !1)
    }

    function __(e, t = !1) {
        return e == null ? e : {
            invitee_email: e.invitee_email
        }
    }
    const lk = {
        BasicAuth: "basic_auth",
        ApiKey: "api_key",
        UnknownDefaultOpenApi: "11184809"
    };

    function fk(e) {
        return !(!("channel_id" in e) || e.channel_id === void 0 || !("request_config_body" in e) || e.request_config_body === void 0 || !("request_config_method" in e) || e.request_config_method === void 0)
    }

    function ut(e) {
        return a_(e)
    }

    function a_(e, t) {
        return e == null ? e : {
            channel_id: e.channel_id,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            request_config_auth_config_api_key_in: e.request_config_auth_config_api_key_in == null ? void 0 : e.request_config_auth_config_api_key_in,
            request_config_auth_config_api_key_name: e.request_config_auth_config_api_key_name == null ? void 0 : e.request_config_auth_config_api_key_name,
            request_config_auth_config_api_key_value: e.request_config_auth_config_api_key_value == null ? void 0 : e.request_config_auth_config_api_key_value,
            request_config_auth_config_basic_auth_password: e.request_config_auth_config_basic_auth_password == null ? void 0 : e.request_config_auth_config_basic_auth_password,
            request_config_auth_config_basic_auth_user: e.request_config_auth_config_basic_auth_user == null ? void 0 : e.request_config_auth_config_basic_auth_user,
            request_config_auth_type: e.request_config_auth_type == null ? void 0 : e.request_config_auth_type,
            request_config_body: e.request_config_body,
            request_config_headers: e.request_config_headers == null ? void 0 : e.request_config_headers,
            request_config_method: e.request_config_method,
            request_config_url: e.request_config_url == null ? void 0 : e.request_config_url,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function lt(e) {
        return s_(e, !1)
    }

    function s_(e, t = !1) {
        return e == null ? e : {
            channel_id: e.channel_id,
            request_config_auth_config_api_key_in: e.request_config_auth_config_api_key_in,
            request_config_auth_config_api_key_name: e.request_config_auth_config_api_key_name,
            request_config_auth_config_api_key_value: e.request_config_auth_config_api_key_value,
            request_config_auth_config_basic_auth_password: e.request_config_auth_config_basic_auth_password,
            request_config_auth_config_basic_auth_user: e.request_config_auth_config_basic_auth_user,
            request_config_auth_type: e.request_config_auth_type,
            request_config_body: e.request_config_body,
            request_config_headers: e.request_config_headers,
            request_config_method: e.request_config_method,
            request_config_url: e.request_config_url
        }
    }

    function pk(e) {
        return !0
    }

    function ft(e) {
        return d_(e)
    }

    function d_(e, t) {
        return e == null ? e : {
            id: e.id == null ? void 0 : e.id,
            name: e.name == null ? void 0 : e.name
        }
    }

    function pt(e) {
        return c_(e, !1)
    }

    function c_(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            name: e.name
        }
    }
    const hk = {
        Enabled: "enabled",
        Disabled: "disabled",
        UnknownDefaultOpenApi: "11184809"
    };

    function gk(e) {
        return !(!("authorization_header_secret" in e) || e.authorization_header_secret === void 0 || !("client_id" in e) || e.client_id === void 0 || !("label" in e) || e.label === void 0 || !("mapper_url" in e) || e.mapper_url === void 0 || !("organization_id" in e) || e.organization_id === void 0)
    }

    function Q(e) {
        return u_(e)
    }

    function u_(e, t) {
        return e == null ? e : {
            authorization_header_secret: e.authorization_header_secret,
            client_id: e.client_id,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            label: e.label,
            mapper_url: e.mapper_url,
            organization_id: e.organization_id,
            state: e.state == null ? void 0 : e.state,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function Y(e) {
        return l_(e, !1)
    }

    function l_(e, t = !1) {
        return e == null ? e : {
            authorization_header_secret: e.authorization_header_secret,
            client_id: e.client_id,
            id: e.id,
            label: e.label,
            mapper_url: e.mapper_url,
            organization_id: e.organization_id,
            state: e.state
        }
    }

    function mk(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("domains" in e) || e.domains === void 0 || !("id" in e) || e.id === void 0 || !("label" in e) || e.label === void 0)
    }

    function x(e) {
        return f_(e)
    }

    function f_(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            domains: e.domains,
            id: e.id,
            label: e.label
        }
    }

    function Z(e) {
        return p_(e, !1)
    }

    function p_(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at.toISOString(),
            domains: e.domains,
            id: e.id,
            label: e.label
        }
    }

    function yk(e) {
        return !(!("blob_name" in e) || e.blob_name === void 0 || !("blob_url" in e) || e.blob_url === void 0 || !("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function h_(e) {
        return g_(e)
    }

    function g_(e, t) {
        return e == null ? e : {
            blob_name: e.blob_name,
            blob_url: e.blob_url,
            content_hash: e.content_hash == null ? void 0 : e.content_hash,
            created_at: new Date(e.created_at),
            id: e.id,
            name: e.name,
            updated_at: new Date(e.updated_at)
        }
    }

    function m_(e) {
        return y_(e, !1)
    }

    function y_(e, t = !1) {
        return e == null ? e : {
            blob_name: e.blob_name,
            blob_url: e.blob_url,
            content_hash: e.content_hash,
            name: e.name
        }
    }

    function kk(e) {
        return !0
    }

    function ht(e) {
        return k_(e)
    }

    function k_(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            identity_schema: e.identity_schema == null ? void 0 : h_(e.identity_schema),
            identity_schema_id: e.identity_schema_id == null ? void 0 : e.identity_schema_id,
            import_id: e.import_id == null ? void 0 : e.import_id,
            import_url: e.import_url == null ? void 0 : e.import_url,
            is_default: e.is_default == null ? void 0 : e.is_default,
            preset: e.preset == null ? void 0 : e.preset,
            project_revision_id: e.project_revision_id == null ? void 0 : e.project_revision_id,
            selfservice_selectable: e.selfservice_selectable == null ? void 0 : e.selfservice_selectable,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function gt(e) {
        return b_(e, !1)
    }

    function b_(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            identity_schema: m_(e.identity_schema),
            identity_schema_id: e.identity_schema_id,
            import_id: e.import_id,
            import_url: e.import_url,
            is_default: e.is_default,
            preset: e.preset,
            project_revision_id: e.project_revision_id,
            selfservice_selectable: e.selfservice_selectable
        }
    }
    const bk = {
            Auto: "auto",
            Never: "never",
            Force: "force",
            UnknownDefaultOpenApi: "11184809"
        },
        wk = {
            Enabled: "enabled",
            Disabled: "disabled",
            UnknownDefaultOpenApi: "11184809"
        };

    function Sk(e) {
        return !0
    }

    function j(e) {
        return w_(e)
    }

    function w_(e, t) {
        return e == null ? e : {
            additional_id_token_audiences: e.additional_id_token_audiences == null ? void 0 : e.additional_id_token_audiences,
            apple_private_key: e.apple_private_key == null ? void 0 : e.apple_private_key,
            apple_private_key_id: e.apple_private_key_id == null ? void 0 : e.apple_private_key_id,
            apple_team_id: e.apple_team_id == null ? void 0 : e.apple_team_id,
            auth_url: e.auth_url == null ? void 0 : e.auth_url,
            azure_tenant: e.azure_tenant == null ? void 0 : e.azure_tenant,
            claims_source: e.claims_source == null ? void 0 : e.claims_source,
            client_id: e.client_id == null ? void 0 : e.client_id,
            client_secret: e.client_secret == null ? void 0 : e.client_secret,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            fedcm_config_url: e.fedcm_config_url == null ? void 0 : e.fedcm_config_url,
            id: e.id == null ? void 0 : e.id,
            issuer_url: e.issuer_url == null ? void 0 : e.issuer_url,
            label: e.label == null ? void 0 : e.label,
            mapper_url: e.mapper_url == null ? void 0 : e.mapper_url,
            net_id_token_origin_header: e.net_id_token_origin_header == null ? void 0 : e.net_id_token_origin_header,
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            pkce: e.pkce == null ? void 0 : e.pkce,
            project_revision_id: e.project_revision_id == null ? void 0 : e.project_revision_id,
            provider: e.provider == null ? void 0 : e.provider,
            provider_id: e.provider_id == null ? void 0 : e.provider_id,
            requested_claims: e.requested_claims == null ? void 0 : e.requested_claims,
            scope: e.scope == null ? void 0 : e.scope,
            state: e.state == null ? void 0 : e.state,
            subject_source: e.subject_source == null ? void 0 : e.subject_source,
            token_url: e.token_url == null ? void 0 : e.token_url,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function ee(e) {
        return S_(e, !1)
    }

    function S_(e, t = !1) {
        return e == null ? e : {
            additional_id_token_audiences: e.additional_id_token_audiences,
            apple_private_key: e.apple_private_key,
            apple_private_key_id: e.apple_private_key_id,
            apple_team_id: e.apple_team_id,
            auth_url: e.auth_url,
            azure_tenant: e.azure_tenant,
            claims_source: e.claims_source,
            client_id: e.client_id,
            client_secret: e.client_secret,
            fedcm_config_url: e.fedcm_config_url,
            id: e.id,
            issuer_url: e.issuer_url,
            label: e.label,
            mapper_url: e.mapper_url,
            net_id_token_origin_header: e.net_id_token_origin_header,
            organization_id: e.organization_id,
            pkce: e.pkce,
            project_revision_id: e.project_revision_id,
            provider: e.provider,
            provider_id: e.provider_id,
            requested_claims: e.requested_claims,
            scope: e.scope,
            state: e.state,
            subject_source: e.subject_source,
            token_url: e.token_url
        }
    }

    function Ok(e) {
        return !(!("config_key" in e) || e.config_key === void 0 || !("hook" in e) || e.hook === void 0)
    }

    function mt(e) {
        return O_(e)
    }

    function O_(e, t) {
        return e == null ? e : {
            config_key: e.config_key,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            hook: e.hook,
            id: e.id == null ? void 0 : e.id,
            project_revision_id: e.project_revision_id == null ? void 0 : e.project_revision_id,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            web_hook_config_auth_api_key_in: e.web_hook_config_auth_api_key_in == null ? void 0 : e.web_hook_config_auth_api_key_in,
            web_hook_config_auth_api_key_name: e.web_hook_config_auth_api_key_name == null ? void 0 : e.web_hook_config_auth_api_key_name,
            web_hook_config_auth_api_key_value: e.web_hook_config_auth_api_key_value == null ? void 0 : e.web_hook_config_auth_api_key_value,
            web_hook_config_auth_basic_auth_password: e.web_hook_config_auth_basic_auth_password == null ? void 0 : e.web_hook_config_auth_basic_auth_password,
            web_hook_config_auth_basic_auth_user: e.web_hook_config_auth_basic_auth_user == null ? void 0 : e.web_hook_config_auth_basic_auth_user,
            web_hook_config_auth_type: e.web_hook_config_auth_type == null ? void 0 : e.web_hook_config_auth_type,
            web_hook_config_body: e.web_hook_config_body == null ? void 0 : e.web_hook_config_body,
            web_hook_config_can_interrupt: e.web_hook_config_can_interrupt == null ? void 0 : e.web_hook_config_can_interrupt,
            web_hook_config_method: e.web_hook_config_method == null ? void 0 : e.web_hook_config_method,
            web_hook_config_response_ignore: e.web_hook_config_response_ignore == null ? void 0 : e.web_hook_config_response_ignore,
            web_hook_config_response_parse: e.web_hook_config_response_parse == null ? void 0 : e.web_hook_config_response_parse,
            web_hook_config_url: e.web_hook_config_url == null ? void 0 : e.web_hook_config_url
        }
    }

    function yt(e) {
        return T_(e, !1)
    }

    function T_(e, t = !1) {
        return e == null ? e : {
            config_key: e.config_key,
            hook: e.hook,
            id: e.id,
            project_revision_id: e.project_revision_id,
            web_hook_config_auth_api_key_in: e.web_hook_config_auth_api_key_in,
            web_hook_config_auth_api_key_name: e.web_hook_config_auth_api_key_name,
            web_hook_config_auth_api_key_value: e.web_hook_config_auth_api_key_value,
            web_hook_config_auth_basic_auth_password: e.web_hook_config_auth_basic_auth_password,
            web_hook_config_auth_basic_auth_user: e.web_hook_config_auth_basic_auth_user,
            web_hook_config_auth_type: e.web_hook_config_auth_type,
            web_hook_config_body: e.web_hook_config_body,
            web_hook_config_can_interrupt: e.web_hook_config_can_interrupt,
            web_hook_config_method: e.web_hook_config_method,
            web_hook_config_response_ignore: e.web_hook_config_response_ignore,
            web_hook_config_response_parse: e.web_hook_config_response_parse,
            web_hook_config_url: e.web_hook_config_url
        }
    }
    const Tk = {
        Enabled: "enabled",
        Disabled: "disabled",
        UnknownDefaultOpenApi: "11184809"
    };

    function vk(e) {
        return !0
    }

    function te(e) {
        return v_(e)
    }

    function v_(e, t) {
        return e == null ? e : {
            audience_override_base_url: e.audience_override_base_url == null ? void 0 : e.audience_override_base_url,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            label: e.label == null ? void 0 : e.label,
            mapper_url: e.mapper_url == null ? void 0 : e.mapper_url,
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            project_revision_id: e.project_revision_id == null ? void 0 : e.project_revision_id,
            provider_id: e.provider_id == null ? void 0 : e.provider_id,
            raw_idp_metadata_xml: e.raw_idp_metadata_xml == null ? void 0 : e.raw_idp_metadata_xml,
            state: e.state == null ? void 0 : e.state,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function re(e) {
        return N_(e, !1)
    }

    function N_(e, t = !1) {
        return e == null ? e : {
            audience_override_base_url: e.audience_override_base_url,
            id: e.id,
            label: e.label,
            mapper_url: e.mapper_url,
            organization_id: e.organization_id,
            project_revision_id: e.project_revision_id,
            provider_id: e.provider_id,
            raw_idp_metadata_xml: e.raw_idp_metadata_xml,
            state: e.state
        }
    }
    const Nk = {
        Id: "id",
        ExternalId: "external_id",
        UnknownDefaultOpenApi: "11184809"
    };

    function Jk(e) {
        return !0
    }

    function kt(e) {
        return J_(e)
    }

    function J_(e, t) {
        return e == null ? e : {
            claims_mapper_url: e.claims_mapper_url == null ? void 0 : e.claims_mapper_url,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            jwks_url: e.jwks_url == null ? void 0 : e.jwks_url,
            key: e.key == null ? void 0 : e.key,
            project_revision_id: e.project_revision_id == null ? void 0 : e.project_revision_id,
            subject_source: e.subject_source == null ? void 0 : e.subject_source,
            ttl: e.ttl == null ? void 0 : e.ttl,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function bt(e) {
        return R_(e, !1)
    }

    function R_(e, t = !1) {
        return e == null ? e : {
            claims_mapper_url: e.claims_mapper_url,
            jwks_url: e.jwks_url,
            key: e.key,
            project_revision_id: e.project_revision_id,
            subject_source: e.subject_source,
            ttl: e.ttl
        }
    }
    const Rk = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        Fk = {
            EuCentral: "eu-central",
            AsiaNortheast: "asia-northeast",
            UsEast: "us-east",
            UsWest: "us-west",
            Us: "us",
            Global: "global",
            UnknownDefaultOpenApi: "11184809"
        },
        Ck = {
            Opaque: "opaque",
            Jwt: "jwt",
            UnknownDefaultOpenApi: "11184809"
        },
        Dk = {
            List: "list",
            String: "string",
            Both: "both",
            UnknownDefaultOpenApi: "11184809"
        },
        xk = {
            Exact: "exact",
            Wildcard: "wildcard",
            UnknownDefaultOpenApi: "11184809"
        },
        Ak = {
            Link: "link",
            Code: "code",
            UnknownDefaultOpenApi: "11184809"
        },
        Ik = {
            Link: "link",
            Code: "code",
            UnknownDefaultOpenApi: "11184809"
        };

    function Pk(e) {
        return !(!("environment" in e) || e.environment === void 0 || !("name" in e) || e.name === void 0)
    }

    function qk(e) {
        return F_(e)
    }

    function F_(e, t) {
        return e == null ? e : {
            account_experience_default_locale: e.account_experience_default_locale == null ? void 0 : e.account_experience_default_locale,
            account_experience_favicon_dark: e.account_experience_favicon_dark == null ? void 0 : e.account_experience_favicon_dark,
            account_experience_favicon_light: e.account_experience_favicon_light == null ? void 0 : e.account_experience_favicon_light,
            account_experience_locale_behavior: e.account_experience_locale_behavior == null ? void 0 : e.account_experience_locale_behavior,
            account_experience_logo_dark: e.account_experience_logo_dark == null ? void 0 : e.account_experience_logo_dark,
            account_experience_logo_light: e.account_experience_logo_light == null ? void 0 : e.account_experience_logo_light,
            account_experience_theme_variables_dark: e.account_experience_theme_variables_dark == null ? void 0 : e.account_experience_theme_variables_dark,
            account_experience_theme_variables_light: e.account_experience_theme_variables_light == null ? void 0 : e.account_experience_theme_variables_light,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            disable_account_experience_welcome_screen: e.disable_account_experience_welcome_screen == null ? void 0 : e.disable_account_experience_welcome_screen,
            enable_ax_v2: e.enable_ax_v2 == null ? void 0 : e.enable_ax_v2,
            environment: e.environment,
            home_region: e.home_region == null ? void 0 : e.home_region,
            hydra_oauth2_allowed_top_level_claims: e.hydra_oauth2_allowed_top_level_claims == null ? void 0 : e.hydra_oauth2_allowed_top_level_claims,
            hydra_oauth2_client_credentials_default_grant_allowed_scope: e.hydra_oauth2_client_credentials_default_grant_allowed_scope == null ? void 0 : e.hydra_oauth2_client_credentials_default_grant_allowed_scope,
            hydra_oauth2_exclude_not_before_claim: e.hydra_oauth2_exclude_not_before_claim == null ? void 0 : e.hydra_oauth2_exclude_not_before_claim,
            hydra_oauth2_grant_jwt_iat_optional: e.hydra_oauth2_grant_jwt_iat_optional == null ? void 0 : e.hydra_oauth2_grant_jwt_iat_optional,
            hydra_oauth2_grant_jwt_jti_optional: e.hydra_oauth2_grant_jwt_jti_optional == null ? void 0 : e.hydra_oauth2_grant_jwt_jti_optional,
            hydra_oauth2_grant_jwt_max_ttl: e.hydra_oauth2_grant_jwt_max_ttl == null ? void 0 : e.hydra_oauth2_grant_jwt_max_ttl,
            hydra_oauth2_grant_refresh_token_rotation_grace_period: e.hydra_oauth2_grant_refresh_token_rotation_grace_period == null ? void 0 : e.hydra_oauth2_grant_refresh_token_rotation_grace_period,
            hydra_oauth2_mirror_top_level_claims: e.hydra_oauth2_mirror_top_level_claims == null ? void 0 : e.hydra_oauth2_mirror_top_level_claims,
            hydra_oauth2_pkce_enforced: e.hydra_oauth2_pkce_enforced == null ? void 0 : e.hydra_oauth2_pkce_enforced,
            hydra_oauth2_pkce_enforced_for_public_clients: e.hydra_oauth2_pkce_enforced_for_public_clients == null ? void 0 : e.hydra_oauth2_pkce_enforced_for_public_clients,
            hydra_oauth2_refresh_token_hook: e.hydra_oauth2_refresh_token_hook == null ? void 0 : e.hydra_oauth2_refresh_token_hook,
            hydra_oauth2_token_hook: e.hydra_oauth2_token_hook == null ? void 0 : e.hydra_oauth2_token_hook,
            hydra_oidc_dynamic_client_registration_default_scope: e.hydra_oidc_dynamic_client_registration_default_scope == null ? void 0 : e.hydra_oidc_dynamic_client_registration_default_scope,
            hydra_oidc_dynamic_client_registration_enabled: e.hydra_oidc_dynamic_client_registration_enabled == null ? void 0 : e.hydra_oidc_dynamic_client_registration_enabled,
            hydra_oidc_subject_identifiers_pairwise_salt: e.hydra_oidc_subject_identifiers_pairwise_salt == null ? void 0 : e.hydra_oidc_subject_identifiers_pairwise_salt,
            hydra_oidc_subject_identifiers_supported_types: e.hydra_oidc_subject_identifiers_supported_types == null ? void 0 : e.hydra_oidc_subject_identifiers_supported_types,
            hydra_secrets_cookie: e.hydra_secrets_cookie == null ? void 0 : e.hydra_secrets_cookie,
            hydra_secrets_pagination: e.hydra_secrets_pagination == null ? void 0 : e.hydra_secrets_pagination,
            hydra_secrets_system: e.hydra_secrets_system == null ? void 0 : e.hydra_secrets_system,
            hydra_serve_cookies_same_site_legacy_workaround: e.hydra_serve_cookies_same_site_legacy_workaround == null ? void 0 : e.hydra_serve_cookies_same_site_legacy_workaround,
            hydra_serve_cookies_same_site_mode: e.hydra_serve_cookies_same_site_mode == null ? void 0 : e.hydra_serve_cookies_same_site_mode,
            hydra_strategies_access_token: e.hydra_strategies_access_token == null ? void 0 : e.hydra_strategies_access_token,
            hydra_strategies_jwt_scope_claim: e.hydra_strategies_jwt_scope_claim == null ? void 0 : e.hydra_strategies_jwt_scope_claim,
            hydra_strategies_scope: e.hydra_strategies_scope == null ? void 0 : e.hydra_strategies_scope,
            hydra_ttl_access_token: e.hydra_ttl_access_token == null ? void 0 : e.hydra_ttl_access_token,
            hydra_ttl_auth_code: e.hydra_ttl_auth_code == null ? void 0 : e.hydra_ttl_auth_code,
            hydra_ttl_id_token: e.hydra_ttl_id_token == null ? void 0 : e.hydra_ttl_id_token,
            hydra_ttl_login_consent_request: e.hydra_ttl_login_consent_request == null ? void 0 : e.hydra_ttl_login_consent_request,
            hydra_ttl_refresh_token: e.hydra_ttl_refresh_token == null ? void 0 : e.hydra_ttl_refresh_token,
            hydra_urls_consent: e.hydra_urls_consent == null ? void 0 : e.hydra_urls_consent,
            hydra_urls_error: e.hydra_urls_error == null ? void 0 : e.hydra_urls_error,
            hydra_urls_login: e.hydra_urls_login == null ? void 0 : e.hydra_urls_login,
            hydra_urls_logout: e.hydra_urls_logout == null ? void 0 : e.hydra_urls_logout,
            hydra_urls_post_logout_redirect: e.hydra_urls_post_logout_redirect == null ? void 0 : e.hydra_urls_post_logout_redirect,
            hydra_urls_registration: e.hydra_urls_registration == null ? void 0 : e.hydra_urls_registration,
            hydra_urls_self_issuer: e.hydra_urls_self_issuer == null ? void 0 : e.hydra_urls_self_issuer,
            hydra_webfinger_jwks_broadcast_keys: e.hydra_webfinger_jwks_broadcast_keys == null ? void 0 : e.hydra_webfinger_jwks_broadcast_keys,
            hydra_webfinger_oidc_discovery_auth_url: e.hydra_webfinger_oidc_discovery_auth_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_auth_url,
            hydra_webfinger_oidc_discovery_client_registration_url: e.hydra_webfinger_oidc_discovery_client_registration_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_client_registration_url,
            hydra_webfinger_oidc_discovery_jwks_url: e.hydra_webfinger_oidc_discovery_jwks_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_jwks_url,
            hydra_webfinger_oidc_discovery_supported_claims: e.hydra_webfinger_oidc_discovery_supported_claims == null ? void 0 : e.hydra_webfinger_oidc_discovery_supported_claims,
            hydra_webfinger_oidc_discovery_supported_scope: e.hydra_webfinger_oidc_discovery_supported_scope == null ? void 0 : e.hydra_webfinger_oidc_discovery_supported_scope,
            hydra_webfinger_oidc_discovery_token_url: e.hydra_webfinger_oidc_discovery_token_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_token_url,
            hydra_webfinger_oidc_discovery_userinfo_url: e.hydra_webfinger_oidc_discovery_userinfo_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_userinfo_url,
            id: e.id == null ? void 0 : e.id,
            keto_namespace_configuration: e.keto_namespace_configuration == null ? void 0 : e.keto_namespace_configuration,
            keto_namespaces: e.keto_namespaces == null ? void 0 : e.keto_namespaces.map(ft),
            keto_secrets_pagination: e.keto_secrets_pagination == null ? void 0 : e.keto_secrets_pagination,
            kratos_cookies_same_site: e.kratos_cookies_same_site == null ? void 0 : e.kratos_cookies_same_site,
            kratos_courier_channels: e.kratos_courier_channels == null ? void 0 : e.kratos_courier_channels.map(ut),
            kratos_courier_delivery_strategy: e.kratos_courier_delivery_strategy == null ? void 0 : e.kratos_courier_delivery_strategy,
            kratos_courier_http_request_config_auth_api_key_in: e.kratos_courier_http_request_config_auth_api_key_in == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_in,
            kratos_courier_http_request_config_auth_api_key_name: e.kratos_courier_http_request_config_auth_api_key_name == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_name,
            kratos_courier_http_request_config_auth_api_key_value: e.kratos_courier_http_request_config_auth_api_key_value == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_value,
            kratos_courier_http_request_config_auth_basic_auth_password: e.kratos_courier_http_request_config_auth_basic_auth_password == null ? void 0 : e.kratos_courier_http_request_config_auth_basic_auth_password,
            kratos_courier_http_request_config_auth_basic_auth_user: e.kratos_courier_http_request_config_auth_basic_auth_user == null ? void 0 : e.kratos_courier_http_request_config_auth_basic_auth_user,
            kratos_courier_http_request_config_auth_type: e.kratos_courier_http_request_config_auth_type == null ? void 0 : e.kratos_courier_http_request_config_auth_type,
            kratos_courier_http_request_config_body: e.kratos_courier_http_request_config_body == null ? void 0 : e.kratos_courier_http_request_config_body,
            kratos_courier_http_request_config_headers: e.kratos_courier_http_request_config_headers == null ? void 0 : e.kratos_courier_http_request_config_headers,
            kratos_courier_http_request_config_method: e.kratos_courier_http_request_config_method == null ? void 0 : e.kratos_courier_http_request_config_method,
            kratos_courier_http_request_config_url: e.kratos_courier_http_request_config_url == null ? void 0 : e.kratos_courier_http_request_config_url,
            kratos_courier_smtp_connection_uri: e.kratos_courier_smtp_connection_uri == null ? void 0 : e.kratos_courier_smtp_connection_uri,
            kratos_courier_smtp_from_address: e.kratos_courier_smtp_from_address == null ? void 0 : e.kratos_courier_smtp_from_address,
            kratos_courier_smtp_from_name: e.kratos_courier_smtp_from_name == null ? void 0 : e.kratos_courier_smtp_from_name,
            kratos_courier_smtp_headers: e.kratos_courier_smtp_headers == null ? void 0 : e.kratos_courier_smtp_headers,
            kratos_courier_smtp_local_name: e.kratos_courier_smtp_local_name == null ? void 0 : e.kratos_courier_smtp_local_name,
            kratos_courier_templates_login_code_valid_email_body_html: e.kratos_courier_templates_login_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_body_html,
            kratos_courier_templates_login_code_valid_email_body_plaintext: e.kratos_courier_templates_login_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_body_plaintext,
            kratos_courier_templates_login_code_valid_email_subject: e.kratos_courier_templates_login_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_subject,
            kratos_courier_templates_login_code_valid_sms_body_plaintext: e.kratos_courier_templates_login_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_login_code_valid_sms_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_body_html: e.kratos_courier_templates_recovery_code_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_body_html,
            kratos_courier_templates_recovery_code_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_subject: e.kratos_courier_templates_recovery_code_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_subject,
            kratos_courier_templates_recovery_code_valid_email_body_html: e.kratos_courier_templates_recovery_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_body_html,
            kratos_courier_templates_recovery_code_valid_email_body_plaintext: e.kratos_courier_templates_recovery_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_body_plaintext,
            kratos_courier_templates_recovery_code_valid_email_subject: e.kratos_courier_templates_recovery_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_subject,
            kratos_courier_templates_recovery_invalid_email_body_html: e.kratos_courier_templates_recovery_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_body_html,
            kratos_courier_templates_recovery_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_invalid_email_subject: e.kratos_courier_templates_recovery_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_subject,
            kratos_courier_templates_recovery_valid_email_body_html: e.kratos_courier_templates_recovery_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_body_html,
            kratos_courier_templates_recovery_valid_email_body_plaintext: e.kratos_courier_templates_recovery_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_body_plaintext,
            kratos_courier_templates_recovery_valid_email_subject: e.kratos_courier_templates_recovery_valid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_subject,
            kratos_courier_templates_registration_code_valid_email_body_html: e.kratos_courier_templates_registration_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_body_html,
            kratos_courier_templates_registration_code_valid_email_body_plaintext: e.kratos_courier_templates_registration_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_body_plaintext,
            kratos_courier_templates_registration_code_valid_email_subject: e.kratos_courier_templates_registration_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_subject,
            kratos_courier_templates_registration_code_valid_sms_body_plaintext: e.kratos_courier_templates_registration_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_registration_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_body_html: e.kratos_courier_templates_verification_code_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_body_html,
            kratos_courier_templates_verification_code_invalid_email_body_plaintext: e.kratos_courier_templates_verification_code_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_subject: e.kratos_courier_templates_verification_code_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_subject,
            kratos_courier_templates_verification_code_valid_email_body_html: e.kratos_courier_templates_verification_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_body_html,
            kratos_courier_templates_verification_code_valid_email_body_plaintext: e.kratos_courier_templates_verification_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_body_plaintext,
            kratos_courier_templates_verification_code_valid_email_subject: e.kratos_courier_templates_verification_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_subject,
            kratos_courier_templates_verification_code_valid_sms_body_plaintext: e.kratos_courier_templates_verification_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_invalid_email_body_html: e.kratos_courier_templates_verification_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_body_html,
            kratos_courier_templates_verification_invalid_email_body_plaintext: e.kratos_courier_templates_verification_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_body_plaintext,
            kratos_courier_templates_verification_invalid_email_subject: e.kratos_courier_templates_verification_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_subject,
            kratos_courier_templates_verification_valid_email_body_html: e.kratos_courier_templates_verification_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_valid_email_body_html,
            kratos_courier_templates_verification_valid_email_body_plaintext: e.kratos_courier_templates_verification_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_valid_email_body_plaintext,
            kratos_courier_templates_verification_valid_email_subject: e.kratos_courier_templates_verification_valid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_valid_email_subject,
            kratos_feature_flags_cacheable_sessions: e.kratos_feature_flags_cacheable_sessions == null ? void 0 : e.kratos_feature_flags_cacheable_sessions,
            kratos_feature_flags_cacheable_sessions_max_age: e.kratos_feature_flags_cacheable_sessions_max_age == null ? void 0 : e.kratos_feature_flags_cacheable_sessions_max_age,
            kratos_feature_flags_choose_recovery_address: e.kratos_feature_flags_choose_recovery_address == null ? void 0 : e.kratos_feature_flags_choose_recovery_address,
            kratos_feature_flags_faster_session_extend: e.kratos_feature_flags_faster_session_extend == null ? void 0 : e.kratos_feature_flags_faster_session_extend,
            kratos_feature_flags_legacy_continue_with_verification_ui: e.kratos_feature_flags_legacy_continue_with_verification_ui == null ? void 0 : e.kratos_feature_flags_legacy_continue_with_verification_ui,
            kratos_feature_flags_legacy_oidc_registration_node_group: e.kratos_feature_flags_legacy_oidc_registration_node_group == null ? void 0 : e.kratos_feature_flags_legacy_oidc_registration_node_group,
            kratos_feature_flags_legacy_require_verified_login_error: e.kratos_feature_flags_legacy_require_verified_login_error == null ? void 0 : e.kratos_feature_flags_legacy_require_verified_login_error,
            kratos_feature_flags_password_profile_registration_node_group: e.kratos_feature_flags_password_profile_registration_node_group == null ? void 0 : e.kratos_feature_flags_password_profile_registration_node_group,
            kratos_feature_flags_use_continue_with_transitions: e.kratos_feature_flags_use_continue_with_transitions == null ? void 0 : e.kratos_feature_flags_use_continue_with_transitions,
            kratos_identity_schemas: e.kratos_identity_schemas == null ? void 0 : e.kratos_identity_schemas.map(ht),
            kratos_oauth2_provider_headers: e.kratos_oauth2_provider_headers == null ? void 0 : e.kratos_oauth2_provider_headers,
            kratos_oauth2_provider_override_return_to: e.kratos_oauth2_provider_override_return_to == null ? void 0 : e.kratos_oauth2_provider_override_return_to,
            kratos_oauth2_provider_url: e.kratos_oauth2_provider_url == null ? void 0 : e.kratos_oauth2_provider_url,
            kratos_preview_default_read_consistency_level: e.kratos_preview_default_read_consistency_level == null ? void 0 : e.kratos_preview_default_read_consistency_level,
            kratos_secrets_cipher: e.kratos_secrets_cipher == null ? void 0 : e.kratos_secrets_cipher,
            kratos_secrets_cookie: e.kratos_secrets_cookie == null ? void 0 : e.kratos_secrets_cookie,
            kratos_secrets_default: e.kratos_secrets_default == null ? void 0 : e.kratos_secrets_default,
            kratos_secrets_pagination: e.kratos_secrets_pagination == null ? void 0 : e.kratos_secrets_pagination,
            kratos_security_account_enumeration_mitigate: e.kratos_security_account_enumeration_mitigate == null ? void 0 : e.kratos_security_account_enumeration_mitigate,
            kratos_selfservice_allowed_return_urls: e.kratos_selfservice_allowed_return_urls == null ? void 0 : e.kratos_selfservice_allowed_return_urls,
            kratos_selfservice_default_browser_return_url: e.kratos_selfservice_default_browser_return_url == null ? void 0 : e.kratos_selfservice_default_browser_return_url,
            kratos_selfservice_flows_error_ui_url: e.kratos_selfservice_flows_error_ui_url == null ? void 0 : e.kratos_selfservice_flows_error_ui_url,
            kratos_selfservice_flows_login_after_code_default_browser_return_url: e.kratos_selfservice_flows_login_after_code_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_code_default_browser_return_url,
            kratos_selfservice_flows_login_after_default_browser_return_url: e.kratos_selfservice_flows_login_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_default_browser_return_url,
            kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_login_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_login_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_login_after_password_default_browser_return_url: e.kratos_selfservice_flows_login_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_password_default_browser_return_url,
            kratos_selfservice_flows_login_after_totp_default_browser_return_url: e.kratos_selfservice_flows_login_after_totp_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_totp_default_browser_return_url,
            kratos_selfservice_flows_login_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_login_lifespan: e.kratos_selfservice_flows_login_lifespan == null ? void 0 : e.kratos_selfservice_flows_login_lifespan,
            kratos_selfservice_flows_login_ui_url: e.kratos_selfservice_flows_login_ui_url == null ? void 0 : e.kratos_selfservice_flows_login_ui_url,
            kratos_selfservice_flows_logout_after_default_browser_return_url: e.kratos_selfservice_flows_logout_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_logout_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_after_default_browser_return_url: e.kratos_selfservice_flows_recovery_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_recovery_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_enabled: e.kratos_selfservice_flows_recovery_enabled == null ? void 0 : e.kratos_selfservice_flows_recovery_enabled,
            kratos_selfservice_flows_recovery_lifespan: e.kratos_selfservice_flows_recovery_lifespan == null ? void 0 : e.kratos_selfservice_flows_recovery_lifespan,
            kratos_selfservice_flows_recovery_notify_unknown_recipients: e.kratos_selfservice_flows_recovery_notify_unknown_recipients == null ? void 0 : e.kratos_selfservice_flows_recovery_notify_unknown_recipients,
            kratos_selfservice_flows_recovery_ui_url: e.kratos_selfservice_flows_recovery_ui_url == null ? void 0 : e.kratos_selfservice_flows_recovery_ui_url,
            kratos_selfservice_flows_recovery_use: e.kratos_selfservice_flows_recovery_use == null ? void 0 : e.kratos_selfservice_flows_recovery_use,
            kratos_selfservice_flows_registration_after_code_default_browser_return_url: e.kratos_selfservice_flows_registration_after_code_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_code_default_browser_return_url,
            kratos_selfservice_flows_registration_after_default_browser_return_url: e.kratos_selfservice_flows_registration_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_default_browser_return_url,
            kratos_selfservice_flows_registration_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_registration_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_registration_after_password_default_browser_return_url: e.kratos_selfservice_flows_registration_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_password_default_browser_return_url,
            kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_registration_enable_legacy_one_step: e.kratos_selfservice_flows_registration_enable_legacy_one_step == null ? void 0 : e.kratos_selfservice_flows_registration_enable_legacy_one_step,
            kratos_selfservice_flows_registration_enabled: e.kratos_selfservice_flows_registration_enabled == null ? void 0 : e.kratos_selfservice_flows_registration_enabled,
            kratos_selfservice_flows_registration_lifespan: e.kratos_selfservice_flows_registration_lifespan == null ? void 0 : e.kratos_selfservice_flows_registration_lifespan,
            kratos_selfservice_flows_registration_login_hints: e.kratos_selfservice_flows_registration_login_hints == null ? void 0 : e.kratos_selfservice_flows_registration_login_hints,
            kratos_selfservice_flows_registration_ui_url: e.kratos_selfservice_flows_registration_ui_url == null ? void 0 : e.kratos_selfservice_flows_registration_ui_url,
            kratos_selfservice_flows_settings_after_default_browser_return_url: e.kratos_selfservice_flows_settings_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_default_browser_return_url,
            kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_settings_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_settings_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_settings_after_password_default_browser_return_url: e.kratos_selfservice_flows_settings_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_password_default_browser_return_url,
            kratos_selfservice_flows_settings_after_profile_default_browser_return_url: e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url,
            kratos_selfservice_flows_settings_after_totp_default_browser_return_url: e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url,
            kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_settings_lifespan: e.kratos_selfservice_flows_settings_lifespan == null ? void 0 : e.kratos_selfservice_flows_settings_lifespan,
            kratos_selfservice_flows_settings_privileged_session_max_age: e.kratos_selfservice_flows_settings_privileged_session_max_age == null ? void 0 : e.kratos_selfservice_flows_settings_privileged_session_max_age,
            kratos_selfservice_flows_settings_required_aal: e.kratos_selfservice_flows_settings_required_aal == null ? void 0 : e.kratos_selfservice_flows_settings_required_aal,
            kratos_selfservice_flows_settings_ui_url: e.kratos_selfservice_flows_settings_ui_url == null ? void 0 : e.kratos_selfservice_flows_settings_ui_url,
            kratos_selfservice_flows_verification_after_default_browser_return_url: e.kratos_selfservice_flows_verification_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_verification_after_default_browser_return_url,
            kratos_selfservice_flows_verification_enabled: e.kratos_selfservice_flows_verification_enabled == null ? void 0 : e.kratos_selfservice_flows_verification_enabled,
            kratos_selfservice_flows_verification_lifespan: e.kratos_selfservice_flows_verification_lifespan == null ? void 0 : e.kratos_selfservice_flows_verification_lifespan,
            kratos_selfservice_flows_verification_notify_unknown_recipients: e.kratos_selfservice_flows_verification_notify_unknown_recipients == null ? void 0 : e.kratos_selfservice_flows_verification_notify_unknown_recipients,
            kratos_selfservice_flows_verification_ui_url: e.kratos_selfservice_flows_verification_ui_url == null ? void 0 : e.kratos_selfservice_flows_verification_ui_url,
            kratos_selfservice_flows_verification_use: e.kratos_selfservice_flows_verification_use == null ? void 0 : e.kratos_selfservice_flows_verification_use,
            kratos_selfservice_methods_captcha_config_allowed_domains: e.kratos_selfservice_methods_captcha_config_allowed_domains == null ? void 0 : e.kratos_selfservice_methods_captcha_config_allowed_domains,
            kratos_selfservice_methods_captcha_config_cf_turnstile_secret: e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret == null ? void 0 : e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret,
            kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey: e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey == null ? void 0 : e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey,
            kratos_selfservice_methods_captcha_config_legacy_inject_node: e.kratos_selfservice_methods_captcha_config_legacy_inject_node == null ? void 0 : e.kratos_selfservice_methods_captcha_config_legacy_inject_node,
            kratos_selfservice_methods_captcha_enabled: e.kratos_selfservice_methods_captcha_enabled == null ? void 0 : e.kratos_selfservice_methods_captcha_enabled,
            kratos_selfservice_methods_code_config_lifespan: e.kratos_selfservice_methods_code_config_lifespan == null ? void 0 : e.kratos_selfservice_methods_code_config_lifespan,
            kratos_selfservice_methods_code_config_max_submissions: e.kratos_selfservice_methods_code_config_max_submissions == null ? void 0 : e.kratos_selfservice_methods_code_config_max_submissions,
            kratos_selfservice_methods_code_config_missing_credential_fallback_enabled: e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled == null ? void 0 : e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled,
            kratos_selfservice_methods_code_enabled: e.kratos_selfservice_methods_code_enabled == null ? void 0 : e.kratos_selfservice_methods_code_enabled,
            kratos_selfservice_methods_code_mfa_enabled: e.kratos_selfservice_methods_code_mfa_enabled == null ? void 0 : e.kratos_selfservice_methods_code_mfa_enabled,
            kratos_selfservice_methods_code_passwordless_enabled: e.kratos_selfservice_methods_code_passwordless_enabled == null ? void 0 : e.kratos_selfservice_methods_code_passwordless_enabled,
            kratos_selfservice_methods_code_passwordless_login_fallback_enabled: e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled == null ? void 0 : e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled,
            kratos_selfservice_methods_link_config_base_url: e.kratos_selfservice_methods_link_config_base_url == null ? void 0 : e.kratos_selfservice_methods_link_config_base_url,
            kratos_selfservice_methods_link_config_lifespan: e.kratos_selfservice_methods_link_config_lifespan == null ? void 0 : e.kratos_selfservice_methods_link_config_lifespan,
            kratos_selfservice_methods_link_enabled: e.kratos_selfservice_methods_link_enabled == null ? void 0 : e.kratos_selfservice_methods_link_enabled,
            kratos_selfservice_methods_lookup_secret_enabled: e.kratos_selfservice_methods_lookup_secret_enabled == null ? void 0 : e.kratos_selfservice_methods_lookup_secret_enabled,
            kratos_selfservice_methods_oidc_config_base_redirect_uri: e.kratos_selfservice_methods_oidc_config_base_redirect_uri == null ? void 0 : e.kratos_selfservice_methods_oidc_config_base_redirect_uri,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(j),
            kratos_selfservice_methods_oidc_enable_auto_link_policy: e.kratos_selfservice_methods_oidc_enable_auto_link_policy == null ? void 0 : e.kratos_selfservice_methods_oidc_enable_auto_link_policy,
            kratos_selfservice_methods_oidc_enabled: e.kratos_selfservice_methods_oidc_enabled == null ? void 0 : e.kratos_selfservice_methods_oidc_enabled,
            kratos_selfservice_methods_passkey_config_rp_display_name: e.kratos_selfservice_methods_passkey_config_rp_display_name == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_display_name,
            kratos_selfservice_methods_passkey_config_rp_id: e.kratos_selfservice_methods_passkey_config_rp_id == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_id,
            kratos_selfservice_methods_passkey_config_rp_origins: e.kratos_selfservice_methods_passkey_config_rp_origins == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_origins,
            kratos_selfservice_methods_passkey_enabled: e.kratos_selfservice_methods_passkey_enabled == null ? void 0 : e.kratos_selfservice_methods_passkey_enabled,
            kratos_selfservice_methods_password_config_haveibeenpwned_enabled: e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled == null ? void 0 : e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled,
            kratos_selfservice_methods_password_config_identifier_similarity_check_enabled: e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled == null ? void 0 : e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled,
            kratos_selfservice_methods_password_config_ignore_network_errors: e.kratos_selfservice_methods_password_config_ignore_network_errors == null ? void 0 : e.kratos_selfservice_methods_password_config_ignore_network_errors,
            kratos_selfservice_methods_password_config_max_breaches: e.kratos_selfservice_methods_password_config_max_breaches == null ? void 0 : e.kratos_selfservice_methods_password_config_max_breaches,
            kratos_selfservice_methods_password_config_min_password_length: e.kratos_selfservice_methods_password_config_min_password_length == null ? void 0 : e.kratos_selfservice_methods_password_config_min_password_length,
            kratos_selfservice_methods_password_enabled: e.kratos_selfservice_methods_password_enabled == null ? void 0 : e.kratos_selfservice_methods_password_enabled,
            kratos_selfservice_methods_profile_enabled: e.kratos_selfservice_methods_profile_enabled == null ? void 0 : e.kratos_selfservice_methods_profile_enabled,
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(te),
            kratos_selfservice_methods_saml_enabled: e.kratos_selfservice_methods_saml_enabled == null ? void 0 : e.kratos_selfservice_methods_saml_enabled,
            kratos_selfservice_methods_totp_config_issuer: e.kratos_selfservice_methods_totp_config_issuer == null ? void 0 : e.kratos_selfservice_methods_totp_config_issuer,
            kratos_selfservice_methods_totp_enabled: e.kratos_selfservice_methods_totp_enabled == null ? void 0 : e.kratos_selfservice_methods_totp_enabled,
            kratos_selfservice_methods_webauthn_config_passwordless: e.kratos_selfservice_methods_webauthn_config_passwordless == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_passwordless,
            kratos_selfservice_methods_webauthn_config_rp_display_name: e.kratos_selfservice_methods_webauthn_config_rp_display_name == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_display_name,
            kratos_selfservice_methods_webauthn_config_rp_icon: e.kratos_selfservice_methods_webauthn_config_rp_icon == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_icon,
            kratos_selfservice_methods_webauthn_config_rp_id: e.kratos_selfservice_methods_webauthn_config_rp_id == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_id,
            kratos_selfservice_methods_webauthn_config_rp_origins: e.kratos_selfservice_methods_webauthn_config_rp_origins == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_origins,
            kratos_selfservice_methods_webauthn_enabled: e.kratos_selfservice_methods_webauthn_enabled == null ? void 0 : e.kratos_selfservice_methods_webauthn_enabled,
            kratos_session_cookie_persistent: e.kratos_session_cookie_persistent == null ? void 0 : e.kratos_session_cookie_persistent,
            kratos_session_cookie_same_site: e.kratos_session_cookie_same_site == null ? void 0 : e.kratos_session_cookie_same_site,
            kratos_session_lifespan: e.kratos_session_lifespan == null ? void 0 : e.kratos_session_lifespan,
            kratos_session_whoami_required_aal: e.kratos_session_whoami_required_aal == null ? void 0 : e.kratos_session_whoami_required_aal,
            kratos_session_whoami_tokenizer_templates: e.kratos_session_whoami_tokenizer_templates == null ? void 0 : e.kratos_session_whoami_tokenizer_templates.map(kt),
            name: e.name,
            organizations: e.organizations == null ? void 0 : e.organizations.map(x),
            project_id: e.project_id == null ? void 0 : e.project_id,
            project_revision_hooks: e.project_revision_hooks == null ? void 0 : e.project_revision_hooks.map(mt),
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Q),
            serve_admin_cors_allowed_origins: e.serve_admin_cors_allowed_origins == null ? void 0 : e.serve_admin_cors_allowed_origins,
            serve_admin_cors_enabled: e.serve_admin_cors_enabled == null ? void 0 : e.serve_admin_cors_enabled,
            serve_public_cors_allowed_origins: e.serve_public_cors_allowed_origins == null ? void 0 : e.serve_public_cors_allowed_origins,
            serve_public_cors_enabled: e.serve_public_cors_enabled == null ? void 0 : e.serve_public_cors_enabled,
            strict_security: e.strict_security == null ? void 0 : e.strict_security,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function zk(e) {
        return C_(e, !1)
    }

    function C_(e, t = !1) {
        return e == null ? e : {
            account_experience_default_locale: e.account_experience_default_locale,
            account_experience_favicon_dark: e.account_experience_favicon_dark,
            account_experience_favicon_light: e.account_experience_favicon_light,
            account_experience_locale_behavior: e.account_experience_locale_behavior,
            account_experience_logo_dark: e.account_experience_logo_dark,
            account_experience_logo_light: e.account_experience_logo_light,
            account_experience_theme_variables_dark: e.account_experience_theme_variables_dark,
            account_experience_theme_variables_light: e.account_experience_theme_variables_light,
            disable_account_experience_welcome_screen: e.disable_account_experience_welcome_screen,
            enable_ax_v2: e.enable_ax_v2,
            environment: e.environment,
            home_region: e.home_region,
            hydra_oauth2_allowed_top_level_claims: e.hydra_oauth2_allowed_top_level_claims,
            hydra_oauth2_client_credentials_default_grant_allowed_scope: e.hydra_oauth2_client_credentials_default_grant_allowed_scope,
            hydra_oauth2_exclude_not_before_claim: e.hydra_oauth2_exclude_not_before_claim,
            hydra_oauth2_grant_jwt_iat_optional: e.hydra_oauth2_grant_jwt_iat_optional,
            hydra_oauth2_grant_jwt_jti_optional: e.hydra_oauth2_grant_jwt_jti_optional,
            hydra_oauth2_grant_jwt_max_ttl: e.hydra_oauth2_grant_jwt_max_ttl,
            hydra_oauth2_grant_refresh_token_rotation_grace_period: e.hydra_oauth2_grant_refresh_token_rotation_grace_period,
            hydra_oauth2_mirror_top_level_claims: e.hydra_oauth2_mirror_top_level_claims,
            hydra_oauth2_pkce_enforced: e.hydra_oauth2_pkce_enforced,
            hydra_oauth2_pkce_enforced_for_public_clients: e.hydra_oauth2_pkce_enforced_for_public_clients,
            hydra_oauth2_refresh_token_hook: e.hydra_oauth2_refresh_token_hook,
            hydra_oauth2_token_hook: e.hydra_oauth2_token_hook,
            hydra_oidc_dynamic_client_registration_default_scope: e.hydra_oidc_dynamic_client_registration_default_scope,
            hydra_oidc_dynamic_client_registration_enabled: e.hydra_oidc_dynamic_client_registration_enabled,
            hydra_oidc_subject_identifiers_pairwise_salt: e.hydra_oidc_subject_identifiers_pairwise_salt,
            hydra_oidc_subject_identifiers_supported_types: e.hydra_oidc_subject_identifiers_supported_types,
            hydra_secrets_cookie: e.hydra_secrets_cookie,
            hydra_secrets_pagination: e.hydra_secrets_pagination,
            hydra_secrets_system: e.hydra_secrets_system,
            hydra_serve_cookies_same_site_legacy_workaround: e.hydra_serve_cookies_same_site_legacy_workaround,
            hydra_serve_cookies_same_site_mode: e.hydra_serve_cookies_same_site_mode,
            hydra_strategies_access_token: e.hydra_strategies_access_token,
            hydra_strategies_jwt_scope_claim: e.hydra_strategies_jwt_scope_claim,
            hydra_strategies_scope: e.hydra_strategies_scope,
            hydra_ttl_access_token: e.hydra_ttl_access_token,
            hydra_ttl_auth_code: e.hydra_ttl_auth_code,
            hydra_ttl_id_token: e.hydra_ttl_id_token,
            hydra_ttl_login_consent_request: e.hydra_ttl_login_consent_request,
            hydra_ttl_refresh_token: e.hydra_ttl_refresh_token,
            hydra_urls_consent: e.hydra_urls_consent,
            hydra_urls_error: e.hydra_urls_error,
            hydra_urls_login: e.hydra_urls_login,
            hydra_urls_logout: e.hydra_urls_logout,
            hydra_urls_post_logout_redirect: e.hydra_urls_post_logout_redirect,
            hydra_urls_registration: e.hydra_urls_registration,
            hydra_urls_self_issuer: e.hydra_urls_self_issuer,
            hydra_webfinger_jwks_broadcast_keys: e.hydra_webfinger_jwks_broadcast_keys,
            hydra_webfinger_oidc_discovery_auth_url: e.hydra_webfinger_oidc_discovery_auth_url,
            hydra_webfinger_oidc_discovery_client_registration_url: e.hydra_webfinger_oidc_discovery_client_registration_url,
            hydra_webfinger_oidc_discovery_jwks_url: e.hydra_webfinger_oidc_discovery_jwks_url,
            hydra_webfinger_oidc_discovery_supported_claims: e.hydra_webfinger_oidc_discovery_supported_claims,
            hydra_webfinger_oidc_discovery_supported_scope: e.hydra_webfinger_oidc_discovery_supported_scope,
            hydra_webfinger_oidc_discovery_token_url: e.hydra_webfinger_oidc_discovery_token_url,
            hydra_webfinger_oidc_discovery_userinfo_url: e.hydra_webfinger_oidc_discovery_userinfo_url,
            keto_namespace_configuration: e.keto_namespace_configuration,
            keto_namespaces: e.keto_namespaces == null ? void 0 : e.keto_namespaces.map(pt),
            keto_secrets_pagination: e.keto_secrets_pagination,
            kratos_cookies_same_site: e.kratos_cookies_same_site,
            kratos_courier_channels: e.kratos_courier_channels == null ? void 0 : e.kratos_courier_channels.map(lt),
            kratos_courier_delivery_strategy: e.kratos_courier_delivery_strategy,
            kratos_courier_http_request_config_auth_api_key_in: e.kratos_courier_http_request_config_auth_api_key_in,
            kratos_courier_http_request_config_auth_api_key_name: e.kratos_courier_http_request_config_auth_api_key_name,
            kratos_courier_http_request_config_auth_api_key_value: e.kratos_courier_http_request_config_auth_api_key_value,
            kratos_courier_http_request_config_auth_basic_auth_password: e.kratos_courier_http_request_config_auth_basic_auth_password,
            kratos_courier_http_request_config_auth_basic_auth_user: e.kratos_courier_http_request_config_auth_basic_auth_user,
            kratos_courier_http_request_config_auth_type: e.kratos_courier_http_request_config_auth_type,
            kratos_courier_http_request_config_body: e.kratos_courier_http_request_config_body,
            kratos_courier_http_request_config_headers: e.kratos_courier_http_request_config_headers,
            kratos_courier_http_request_config_method: e.kratos_courier_http_request_config_method,
            kratos_courier_http_request_config_url: e.kratos_courier_http_request_config_url,
            kratos_courier_smtp_connection_uri: e.kratos_courier_smtp_connection_uri,
            kratos_courier_smtp_from_address: e.kratos_courier_smtp_from_address,
            kratos_courier_smtp_from_name: e.kratos_courier_smtp_from_name,
            kratos_courier_smtp_headers: e.kratos_courier_smtp_headers,
            kratos_courier_smtp_local_name: e.kratos_courier_smtp_local_name,
            kratos_courier_templates_login_code_valid_email_body_html: e.kratos_courier_templates_login_code_valid_email_body_html,
            kratos_courier_templates_login_code_valid_email_body_plaintext: e.kratos_courier_templates_login_code_valid_email_body_plaintext,
            kratos_courier_templates_login_code_valid_email_subject: e.kratos_courier_templates_login_code_valid_email_subject,
            kratos_courier_templates_login_code_valid_sms_body_plaintext: e.kratos_courier_templates_login_code_valid_sms_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_body_html: e.kratos_courier_templates_recovery_code_invalid_email_body_html,
            kratos_courier_templates_recovery_code_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_subject: e.kratos_courier_templates_recovery_code_invalid_email_subject,
            kratos_courier_templates_recovery_code_valid_email_body_html: e.kratos_courier_templates_recovery_code_valid_email_body_html,
            kratos_courier_templates_recovery_code_valid_email_body_plaintext: e.kratos_courier_templates_recovery_code_valid_email_body_plaintext,
            kratos_courier_templates_recovery_code_valid_email_subject: e.kratos_courier_templates_recovery_code_valid_email_subject,
            kratos_courier_templates_recovery_invalid_email_body_html: e.kratos_courier_templates_recovery_invalid_email_body_html,
            kratos_courier_templates_recovery_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_invalid_email_subject: e.kratos_courier_templates_recovery_invalid_email_subject,
            kratos_courier_templates_recovery_valid_email_body_html: e.kratos_courier_templates_recovery_valid_email_body_html,
            kratos_courier_templates_recovery_valid_email_body_plaintext: e.kratos_courier_templates_recovery_valid_email_body_plaintext,
            kratos_courier_templates_recovery_valid_email_subject: e.kratos_courier_templates_recovery_valid_email_subject,
            kratos_courier_templates_registration_code_valid_email_body_html: e.kratos_courier_templates_registration_code_valid_email_body_html,
            kratos_courier_templates_registration_code_valid_email_body_plaintext: e.kratos_courier_templates_registration_code_valid_email_body_plaintext,
            kratos_courier_templates_registration_code_valid_email_subject: e.kratos_courier_templates_registration_code_valid_email_subject,
            kratos_courier_templates_registration_code_valid_sms_body_plaintext: e.kratos_courier_templates_registration_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_body_html: e.kratos_courier_templates_verification_code_invalid_email_body_html,
            kratos_courier_templates_verification_code_invalid_email_body_plaintext: e.kratos_courier_templates_verification_code_invalid_email_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_subject: e.kratos_courier_templates_verification_code_invalid_email_subject,
            kratos_courier_templates_verification_code_valid_email_body_html: e.kratos_courier_templates_verification_code_valid_email_body_html,
            kratos_courier_templates_verification_code_valid_email_body_plaintext: e.kratos_courier_templates_verification_code_valid_email_body_plaintext,
            kratos_courier_templates_verification_code_valid_email_subject: e.kratos_courier_templates_verification_code_valid_email_subject,
            kratos_courier_templates_verification_code_valid_sms_body_plaintext: e.kratos_courier_templates_verification_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_invalid_email_body_html: e.kratos_courier_templates_verification_invalid_email_body_html,
            kratos_courier_templates_verification_invalid_email_body_plaintext: e.kratos_courier_templates_verification_invalid_email_body_plaintext,
            kratos_courier_templates_verification_invalid_email_subject: e.kratos_courier_templates_verification_invalid_email_subject,
            kratos_courier_templates_verification_valid_email_body_html: e.kratos_courier_templates_verification_valid_email_body_html,
            kratos_courier_templates_verification_valid_email_body_plaintext: e.kratos_courier_templates_verification_valid_email_body_plaintext,
            kratos_courier_templates_verification_valid_email_subject: e.kratos_courier_templates_verification_valid_email_subject,
            kratos_feature_flags_cacheable_sessions: e.kratos_feature_flags_cacheable_sessions,
            kratos_feature_flags_cacheable_sessions_max_age: e.kratos_feature_flags_cacheable_sessions_max_age,
            kratos_feature_flags_choose_recovery_address: e.kratos_feature_flags_choose_recovery_address,
            kratos_feature_flags_faster_session_extend: e.kratos_feature_flags_faster_session_extend,
            kratos_feature_flags_legacy_continue_with_verification_ui: e.kratos_feature_flags_legacy_continue_with_verification_ui,
            kratos_feature_flags_legacy_oidc_registration_node_group: e.kratos_feature_flags_legacy_oidc_registration_node_group,
            kratos_feature_flags_legacy_require_verified_login_error: e.kratos_feature_flags_legacy_require_verified_login_error,
            kratos_feature_flags_password_profile_registration_node_group: e.kratos_feature_flags_password_profile_registration_node_group,
            kratos_feature_flags_use_continue_with_transitions: e.kratos_feature_flags_use_continue_with_transitions,
            kratos_identity_schemas: e.kratos_identity_schemas == null ? void 0 : e.kratos_identity_schemas.map(gt),
            kratos_oauth2_provider_headers: e.kratos_oauth2_provider_headers,
            kratos_oauth2_provider_override_return_to: e.kratos_oauth2_provider_override_return_to,
            kratos_oauth2_provider_url: e.kratos_oauth2_provider_url,
            kratos_preview_default_read_consistency_level: e.kratos_preview_default_read_consistency_level,
            kratos_secrets_cipher: e.kratos_secrets_cipher,
            kratos_secrets_cookie: e.kratos_secrets_cookie,
            kratos_secrets_default: e.kratos_secrets_default,
            kratos_secrets_pagination: e.kratos_secrets_pagination,
            kratos_security_account_enumeration_mitigate: e.kratos_security_account_enumeration_mitigate,
            kratos_selfservice_allowed_return_urls: e.kratos_selfservice_allowed_return_urls,
            kratos_selfservice_default_browser_return_url: e.kratos_selfservice_default_browser_return_url,
            kratos_selfservice_flows_error_ui_url: e.kratos_selfservice_flows_error_ui_url,
            kratos_selfservice_flows_login_after_code_default_browser_return_url: e.kratos_selfservice_flows_login_after_code_default_browser_return_url,
            kratos_selfservice_flows_login_after_default_browser_return_url: e.kratos_selfservice_flows_login_after_default_browser_return_url,
            kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_login_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_login_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_login_after_password_default_browser_return_url: e.kratos_selfservice_flows_login_after_password_default_browser_return_url,
            kratos_selfservice_flows_login_after_totp_default_browser_return_url: e.kratos_selfservice_flows_login_after_totp_default_browser_return_url,
            kratos_selfservice_flows_login_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_login_lifespan: e.kratos_selfservice_flows_login_lifespan,
            kratos_selfservice_flows_login_ui_url: e.kratos_selfservice_flows_login_ui_url,
            kratos_selfservice_flows_logout_after_default_browser_return_url: e.kratos_selfservice_flows_logout_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_after_default_browser_return_url: e.kratos_selfservice_flows_recovery_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_enabled: e.kratos_selfservice_flows_recovery_enabled,
            kratos_selfservice_flows_recovery_lifespan: e.kratos_selfservice_flows_recovery_lifespan,
            kratos_selfservice_flows_recovery_notify_unknown_recipients: e.kratos_selfservice_flows_recovery_notify_unknown_recipients,
            kratos_selfservice_flows_recovery_ui_url: e.kratos_selfservice_flows_recovery_ui_url,
            kratos_selfservice_flows_recovery_use: e.kratos_selfservice_flows_recovery_use,
            kratos_selfservice_flows_registration_after_code_default_browser_return_url: e.kratos_selfservice_flows_registration_after_code_default_browser_return_url,
            kratos_selfservice_flows_registration_after_default_browser_return_url: e.kratos_selfservice_flows_registration_after_default_browser_return_url,
            kratos_selfservice_flows_registration_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_registration_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_registration_after_password_default_browser_return_url: e.kratos_selfservice_flows_registration_after_password_default_browser_return_url,
            kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_registration_enable_legacy_one_step: e.kratos_selfservice_flows_registration_enable_legacy_one_step,
            kratos_selfservice_flows_registration_enabled: e.kratos_selfservice_flows_registration_enabled,
            kratos_selfservice_flows_registration_lifespan: e.kratos_selfservice_flows_registration_lifespan,
            kratos_selfservice_flows_registration_login_hints: e.kratos_selfservice_flows_registration_login_hints,
            kratos_selfservice_flows_registration_ui_url: e.kratos_selfservice_flows_registration_ui_url,
            kratos_selfservice_flows_settings_after_default_browser_return_url: e.kratos_selfservice_flows_settings_after_default_browser_return_url,
            kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_settings_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_settings_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_settings_after_password_default_browser_return_url: e.kratos_selfservice_flows_settings_after_password_default_browser_return_url,
            kratos_selfservice_flows_settings_after_profile_default_browser_return_url: e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url,
            kratos_selfservice_flows_settings_after_totp_default_browser_return_url: e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url,
            kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_settings_lifespan: e.kratos_selfservice_flows_settings_lifespan,
            kratos_selfservice_flows_settings_privileged_session_max_age: e.kratos_selfservice_flows_settings_privileged_session_max_age,
            kratos_selfservice_flows_settings_required_aal: e.kratos_selfservice_flows_settings_required_aal,
            kratos_selfservice_flows_settings_ui_url: e.kratos_selfservice_flows_settings_ui_url,
            kratos_selfservice_flows_verification_after_default_browser_return_url: e.kratos_selfservice_flows_verification_after_default_browser_return_url,
            kratos_selfservice_flows_verification_enabled: e.kratos_selfservice_flows_verification_enabled,
            kratos_selfservice_flows_verification_lifespan: e.kratos_selfservice_flows_verification_lifespan,
            kratos_selfservice_flows_verification_notify_unknown_recipients: e.kratos_selfservice_flows_verification_notify_unknown_recipients,
            kratos_selfservice_flows_verification_ui_url: e.kratos_selfservice_flows_verification_ui_url,
            kratos_selfservice_flows_verification_use: e.kratos_selfservice_flows_verification_use,
            kratos_selfservice_methods_captcha_config_allowed_domains: e.kratos_selfservice_methods_captcha_config_allowed_domains,
            kratos_selfservice_methods_captcha_config_cf_turnstile_secret: e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret,
            kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey: e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey,
            kratos_selfservice_methods_captcha_config_legacy_inject_node: e.kratos_selfservice_methods_captcha_config_legacy_inject_node,
            kratos_selfservice_methods_captcha_enabled: e.kratos_selfservice_methods_captcha_enabled,
            kratos_selfservice_methods_code_config_lifespan: e.kratos_selfservice_methods_code_config_lifespan,
            kratos_selfservice_methods_code_config_max_submissions: e.kratos_selfservice_methods_code_config_max_submissions,
            kratos_selfservice_methods_code_config_missing_credential_fallback_enabled: e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled,
            kratos_selfservice_methods_code_enabled: e.kratos_selfservice_methods_code_enabled,
            kratos_selfservice_methods_code_mfa_enabled: e.kratos_selfservice_methods_code_mfa_enabled,
            kratos_selfservice_methods_code_passwordless_enabled: e.kratos_selfservice_methods_code_passwordless_enabled,
            kratos_selfservice_methods_code_passwordless_login_fallback_enabled: e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled,
            kratos_selfservice_methods_link_config_base_url: e.kratos_selfservice_methods_link_config_base_url,
            kratos_selfservice_methods_link_config_lifespan: e.kratos_selfservice_methods_link_config_lifespan,
            kratos_selfservice_methods_link_enabled: e.kratos_selfservice_methods_link_enabled,
            kratos_selfservice_methods_lookup_secret_enabled: e.kratos_selfservice_methods_lookup_secret_enabled,
            kratos_selfservice_methods_oidc_config_base_redirect_uri: e.kratos_selfservice_methods_oidc_config_base_redirect_uri,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(ee),
            kratos_selfservice_methods_oidc_enable_auto_link_policy: e.kratos_selfservice_methods_oidc_enable_auto_link_policy,
            kratos_selfservice_methods_oidc_enabled: e.kratos_selfservice_methods_oidc_enabled,
            kratos_selfservice_methods_passkey_config_rp_display_name: e.kratos_selfservice_methods_passkey_config_rp_display_name,
            kratos_selfservice_methods_passkey_config_rp_id: e.kratos_selfservice_methods_passkey_config_rp_id,
            kratos_selfservice_methods_passkey_config_rp_origins: e.kratos_selfservice_methods_passkey_config_rp_origins,
            kratos_selfservice_methods_passkey_enabled: e.kratos_selfservice_methods_passkey_enabled,
            kratos_selfservice_methods_password_config_haveibeenpwned_enabled: e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled,
            kratos_selfservice_methods_password_config_identifier_similarity_check_enabled: e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled,
            kratos_selfservice_methods_password_config_ignore_network_errors: e.kratos_selfservice_methods_password_config_ignore_network_errors,
            kratos_selfservice_methods_password_config_max_breaches: e.kratos_selfservice_methods_password_config_max_breaches,
            kratos_selfservice_methods_password_config_min_password_length: e.kratos_selfservice_methods_password_config_min_password_length,
            kratos_selfservice_methods_password_enabled: e.kratos_selfservice_methods_password_enabled,
            kratos_selfservice_methods_profile_enabled: e.kratos_selfservice_methods_profile_enabled,
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(re),
            kratos_selfservice_methods_saml_enabled: e.kratos_selfservice_methods_saml_enabled,
            kratos_selfservice_methods_totp_config_issuer: e.kratos_selfservice_methods_totp_config_issuer,
            kratos_selfservice_methods_totp_enabled: e.kratos_selfservice_methods_totp_enabled,
            kratos_selfservice_methods_webauthn_config_passwordless: e.kratos_selfservice_methods_webauthn_config_passwordless,
            kratos_selfservice_methods_webauthn_config_rp_display_name: e.kratos_selfservice_methods_webauthn_config_rp_display_name,
            kratos_selfservice_methods_webauthn_config_rp_icon: e.kratos_selfservice_methods_webauthn_config_rp_icon,
            kratos_selfservice_methods_webauthn_config_rp_id: e.kratos_selfservice_methods_webauthn_config_rp_id,
            kratos_selfservice_methods_webauthn_config_rp_origins: e.kratos_selfservice_methods_webauthn_config_rp_origins,
            kratos_selfservice_methods_webauthn_enabled: e.kratos_selfservice_methods_webauthn_enabled,
            kratos_session_cookie_persistent: e.kratos_session_cookie_persistent,
            kratos_session_cookie_same_site: e.kratos_session_cookie_same_site,
            kratos_session_lifespan: e.kratos_session_lifespan,
            kratos_session_whoami_required_aal: e.kratos_session_whoami_required_aal,
            kratos_session_whoami_tokenizer_templates: e.kratos_session_whoami_tokenizer_templates == null ? void 0 : e.kratos_session_whoami_tokenizer_templates.map(bt),
            name: e.name,
            organizations: e.organizations == null ? void 0 : e.organizations.map(Z),
            project_id: e.project_id,
            project_revision_hooks: e.project_revision_hooks == null ? void 0 : e.project_revision_hooks.map(yt),
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Y),
            serve_admin_cors_allowed_origins: e.serve_admin_cors_allowed_origins,
            serve_admin_cors_enabled: e.serve_admin_cors_enabled,
            serve_public_cors_allowed_origins: e.serve_public_cors_allowed_origins,
            serve_public_cors_enabled: e.serve_public_cors_enabled,
            strict_security: e.strict_security,
            workspace_id: e.workspace_id
        }
    }

    function Uk(e) {
        return !(!("identity_id" in e) || e.identity_id === void 0)
    }

    function Ek(e) {
        return D_(e)
    }

    function D_(e, t) {
        return e == null ? e : {
            expires_in: e.expires_in == null ? void 0 : e.expires_in,
            flow_type: e.flow_type == null ? void 0 : e.flow_type,
            identity_id: e.identity_id
        }
    }

    function x_(e) {
        return A_(e, !1)
    }

    function A_(e, t = !1) {
        return e == null ? e : {
            expires_in: e.expires_in,
            flow_type: e.flow_type,
            identity_id: e.identity_id
        }
    }

    function Bk(e) {
        return !(!("identity_id" in e) || e.identity_id === void 0)
    }

    function Wk(e) {
        return I_(e)
    }

    function I_(e, t) {
        return e == null ? e : {
            expires_in: e.expires_in == null ? void 0 : e.expires_in,
            identity_id: e.identity_id
        }
    }

    function P_(e) {
        return q_(e, !1)
    }

    function q_(e, t = !1) {
        return e == null ? e : {
            expires_in: e.expires_in,
            identity_id: e.identity_id
        }
    }

    function Lk(e) {
        return !0
    }

    function Mk(e) {
        return z_(e)
    }

    function z_(e, t) {
        return e == null ? e : {
            namespace: e.namespace == null ? void 0 : e.namespace,
            object: e.object == null ? void 0 : e.object,
            relation: e.relation == null ? void 0 : e.relation,
            subject_id: e.subject_id == null ? void 0 : e.subject_id,
            subject_set: e.subject_set == null ? void 0 : B(e.subject_set)
        }
    }

    function U_(e) {
        return E_(e, !1)
    }

    function E_(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id,
            subject_set: W(e.subject_set)
        }
    }
    const $k = {
            Usd: "usd",
            Eur: "eur",
            UnknownDefaultOpenApi: "11184809"
        },
        Gk = {
            Monthly: "monthly",
            Yearly: "yearly",
            UnknownDefaultOpenApi: "11184809"
        };

    function Kk(e) {
        return !(!("interval" in e) || e.interval === void 0 || !("plan" in e) || e.plan === void 0 || !("provision_first_project" in e) || e.provision_first_project === void 0)
    }

    function Vk(e) {
        return B_(e)
    }

    function B_(e, t) {
        return e == null ? e : {
            currency: e.currency == null ? void 0 : e.currency,
            interval: e.interval,
            plan: e.plan,
            provision_first_project: e.provision_first_project,
            return_to: e.return_to == null ? void 0 : e.return_to
        }
    }

    function Hk(e) {
        return W_(e, !1)
    }

    function W_(e, t = !1) {
        return e == null ? e : {
            currency: e.currency,
            interval: e.interval,
            plan: e.plan,
            provision_first_project: e.provision_first_project,
            return_to: e.return_to
        }
    }
    const Xk = {
            Usd: "usd",
            Eur: "eur",
            UnknownDefaultOpenApi: "11184809"
        },
        Qk = {
            Monthly: "monthly",
            Yearly: "yearly",
            UnknownDefaultOpenApi: "11184809"
        };

    function Yk(e) {
        return !(!("interval" in e) || e.interval === void 0 || !("plan" in e) || e.plan === void 0)
    }

    function Zk(e) {
        return L_(e)
    }

    function L_(e, t) {
        return e == null ? e : {
            currency: e.currency == null ? void 0 : e.currency,
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to == null ? void 0 : e.return_to
        }
    }

    function jk(e) {
        return M_(e, !1)
    }

    function M_(e, t = !1) {
        return e == null ? e : {
            currency: e.currency,
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to
        }
    }

    function eb(e) {
        return !0
    }

    function $_(e) {
        return G_(e)
    }

    function G_(e, t) {
        return e == null ? e : {
            jwt: e.jwt == null ? void 0 : e.jwt,
            proof_type: e.proof_type == null ? void 0 : e.proof_type
        }
    }

    function K_(e) {
        return V_(e, !1)
    }

    function V_(e, t = !1) {
        return e == null ? e : {
            jwt: e.jwt,
            proof_type: e.proof_type
        }
    }

    function tb(e) {
        return !0
    }

    function rb(e) {
        return H_(e)
    }

    function H_(e, t) {
        return e == null ? e : {
            format: e.format == null ? void 0 : e.format,
            proof: e.proof == null ? void 0 : $_(e.proof),
            types: e.types == null ? void 0 : e.types
        }
    }

    function X_(e) {
        return Q_(e, !1)
    }

    function Q_(e, t = !1) {
        return e == null ? e : {
            format: e.format,
            proof: K_(e.proof),
            types: e.types
        }
    }

    function nb(e) {
        return !(!("name" in e) || e.name === void 0)
    }

    function ib(e) {
        return Y_(e)
    }

    function Y_(e, t) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            name: e.name
        }
    }

    function Z_(e) {
        return j_(e, !1)
    }

    function j_(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            name: e.name
        }
    }

    function ob(e) {
        return !(!("name" in e) || e.name === void 0)
    }

    function _b(e) {
        return ea(e)
    }

    function ea(e, t) {
        return e == null ? e : {
            name: e.name
        }
    }

    function ta(e) {
        return ra(e, !1)
    }

    function ra(e, t = !1) {
        return e == null ? e : {
            name: e.name
        }
    }
    const ab = {
        Owner: "owner",
        Developer: "developer",
        UnknownDefaultOpenApi: "11184809"
    };

    function sb(e) {
        return !(!("invitee_email" in e) || e.invitee_email === void 0 || !("role" in e) || e.role === void 0)
    }

    function db(e) {
        return na(e)
    }

    function na(e, t) {
        return e == null ? e : {
            invitee_email: e.invitee_email,
            role: e.role
        }
    }

    function cb(e) {
        return ia(e, !1)
    }

    function ia(e, t = !1) {
        return e == null ? e : {
            invitee_email: e.invitee_email,
            role: e.role
        }
    }
    const ub = {
            Usd: "usd",
            Eur: "eur",
            UnknownDefaultOpenApi: "11184809"
        },
        lb = {
            Monthly: "monthly",
            Yearly: "yearly",
            UnknownDefaultOpenApi: "11184809"
        };

    function fb(e) {
        return !(!("interval" in e) || e.interval === void 0 || !("plan" in e) || e.plan === void 0)
    }

    function pb(e) {
        return oa(e)
    }

    function oa(e, t) {
        return e == null ? e : {
            currency: e.currency == null ? void 0 : e.currency,
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to == null ? void 0 : e.return_to
        }
    }

    function hb(e) {
        return _a(e, !1)
    }

    function _a(e, t = !1) {
        return e == null ? e : {
            currency: e.currency,
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to
        }
    }

    function gb(e) {
        return !0
    }

    function aa(e) {
        return sa(e)
    }

    function sa(e, t) {
        return e == null ? e : {
            cryptographic_binding_methods_supported: e.cryptographic_binding_methods_supported == null ? void 0 : e.cryptographic_binding_methods_supported,
            cryptographic_suites_supported: e.cryptographic_suites_supported == null ? void 0 : e.cryptographic_suites_supported,
            format: e.format == null ? void 0 : e.format,
            types: e.types == null ? void 0 : e.types
        }
    }

    function da(e) {
        return ca(e, !1)
    }

    function ca(e, t = !1) {
        return e == null ? e : {
            cryptographic_binding_methods_supported: e.cryptographic_binding_methods_supported,
            cryptographic_suites_supported: e.cryptographic_suites_supported,
            format: e.format,
            types: e.types
        }
    }
    const mb = {
        Initializing: "initializing",
        PendingValidation: "pending_validation",
        Deleted: "deleted",
        PendingIssuance: "pending_issuance",
        PendingDeployment: "pending_deployment",
        PendingDeletion: "pending_deletion",
        PendingExpiration: "pending_expiration",
        Expired: "expired",
        Active: "active",
        InitializingTimedOut: "initializing_timed_out",
        ValidationTimedOut: "validation_timed_out",
        IssuanceTimedOut: "issuance_timed_out",
        DeploymentTimedOut: "deployment_timed_out",
        DeletionTimedOut: "deletion_timed_out",
        PendingCleanup: "pending_cleanup",
        StagingDeployment: "staging_deployment",
        StagingActive: "staging_active",
        Deactivating: "deactivating",
        Inactive: "inactive",
        BackupIssued: "backup_issued",
        HoldingDeployment: "holding_deployment",
        Empty: "",
        UnknownDefaultOpenApi: "11184809"
    };

    function yb(e) {
        return !0
    }

    function kb(e) {
        return ua(e)
    }

    function ua(e, t) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain == null ? void 0 : e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins == null ? void 0 : e.cors_allowed_origins,
            cors_enabled: e.cors_enabled == null ? void 0 : e.cors_enabled,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            custom_ui_base_url: e.custom_ui_base_url == null ? void 0 : e.custom_ui_base_url,
            hostname: e.hostname == null ? void 0 : e.hostname,
            id: e.id == null ? void 0 : e.id,
            ssl_status: e.ssl_status == null ? void 0 : e.ssl_status,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            verification_errors: e.verification_errors == null ? void 0 : e.verification_errors,
            verification_status: e.verification_status == null ? void 0 : e.verification_status
        }
    }

    function bb(e) {
        return la(e, !1)
    }

    function la(e, t = !1) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins,
            cors_enabled: e.cors_enabled,
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            custom_ui_base_url: e.custom_ui_base_url,
            hostname: e.hostname,
            id: e.id,
            ssl_status: e.ssl_status,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            verification_errors: e.verification_errors,
            verification_status: e.verification_status
        }
    }

    function wb(e) {
        return !0
    }

    function fa(e) {
        return pa(e)
    }

    function pa(e, t) {
        return e == null ? e : {
            count: e.count == null ? void 0 : e.count
        }
    }

    function Sb(e) {
        return ha(e, !1)
    }

    function ha(e, t = !1) {
        return e == null ? e : {
            count: e.count
        }
    }

    function Ob(e) {
        return !0
    }

    function ga(e) {
        return ma(e)
    }

    function ma(e, t) {
        return e == null ? e : {
            device_code: e.device_code == null ? void 0 : e.device_code,
            expires_in: e.expires_in == null ? void 0 : e.expires_in,
            interval: e.interval == null ? void 0 : e.interval,
            user_code: e.user_code == null ? void 0 : e.user_code,
            verification_uri: e.verification_uri == null ? void 0 : e.verification_uri,
            verification_uri_complete: e.verification_uri_complete == null ? void 0 : e.verification_uri_complete
        }
    }

    function Tb(e) {
        return ya(e, !1)
    }

    function ya(e, t = !1) {
        return e == null ? e : {
            device_code: e.device_code,
            expires_in: e.expires_in,
            interval: e.interval,
            user_code: e.user_code,
            verification_uri: e.verification_uri,
            verification_uri_complete: e.verification_uri_complete
        }
    }

    function vb(e) {
        return !(!("alg" in e) || e.alg === void 0 || !("kid" in e) || e.kid === void 0 || !("kty" in e) || e.kty === void 0 || !("use" in e) || e.use === void 0)
    }

    function me(e) {
        return ka(e)
    }

    function ka(e, t) {
        return e == null ? e : {
            alg: e.alg,
            crv: e.crv == null ? void 0 : e.crv,
            d: e.d == null ? void 0 : e.d,
            dp: e.dp == null ? void 0 : e.dp,
            dq: e.dq == null ? void 0 : e.dq,
            e: e.e == null ? void 0 : e.e,
            k: e.k == null ? void 0 : e.k,
            kid: e.kid,
            kty: e.kty,
            n: e.n == null ? void 0 : e.n,
            p: e.p == null ? void 0 : e.p,
            q: e.q == null ? void 0 : e.q,
            qi: e.qi == null ? void 0 : e.qi,
            use: e.use,
            x: e.x == null ? void 0 : e.x,
            x5c: e.x5c == null ? void 0 : e.x5c,
            y: e.y == null ? void 0 : e.y
        }
    }

    function ye(e) {
        return ba(e, !1)
    }

    function ba(e, t = !1) {
        return e == null ? e : {
            alg: e.alg,
            crv: e.crv,
            d: e.d,
            dp: e.dp,
            dq: e.dq,
            e: e.e,
            k: e.k,
            kid: e.kid,
            kty: e.kty,
            n: e.n,
            p: e.p,
            q: e.q,
            qi: e.qi,
            use: e.use,
            x: e.x,
            x5c: e.x5c,
            y: e.y
        }
    }

    function Nb(e) {
        return !0
    }

    function A(e) {
        return wa(e)
    }

    function wa(e, t) {
        return e == null ? e : {
            keys: e.keys == null ? void 0 : e.keys.map(me)
        }
    }

    function wt(e) {
        return Sa(e, !1)
    }

    function Sa(e, t = !1) {
        return e == null ? e : {
            keys: e.keys == null ? void 0 : e.keys.map(ye)
        }
    }

    function Jb(e) {
        return !0
    }

    function O(e) {
        return Oa(e)
    }

    function Oa(e, t) {
        return e == null ? e : {
            access_token_strategy: e.access_token_strategy == null ? void 0 : e.access_token_strategy,
            allowed_cors_origins: e.allowed_cors_origins == null ? void 0 : e.allowed_cors_origins,
            audience: e.audience == null ? void 0 : e.audience,
            authorization_code_grant_access_token_lifespan: e.authorization_code_grant_access_token_lifespan == null ? void 0 : e.authorization_code_grant_access_token_lifespan,
            authorization_code_grant_id_token_lifespan: e.authorization_code_grant_id_token_lifespan == null ? void 0 : e.authorization_code_grant_id_token_lifespan,
            authorization_code_grant_refresh_token_lifespan: e.authorization_code_grant_refresh_token_lifespan == null ? void 0 : e.authorization_code_grant_refresh_token_lifespan,
            backchannel_logout_session_required: e.backchannel_logout_session_required == null ? void 0 : e.backchannel_logout_session_required,
            backchannel_logout_uri: e.backchannel_logout_uri == null ? void 0 : e.backchannel_logout_uri,
            client_credentials_grant_access_token_lifespan: e.client_credentials_grant_access_token_lifespan == null ? void 0 : e.client_credentials_grant_access_token_lifespan,
            client_id: e.client_id == null ? void 0 : e.client_id,
            client_name: e.client_name == null ? void 0 : e.client_name,
            client_secret: e.client_secret == null ? void 0 : e.client_secret,
            client_secret_expires_at: e.client_secret_expires_at == null ? void 0 : e.client_secret_expires_at,
            client_uri: e.client_uri == null ? void 0 : e.client_uri,
            contacts: e.contacts == null ? void 0 : e.contacts,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            device_authorization_grant_access_token_lifespan: e.device_authorization_grant_access_token_lifespan == null ? void 0 : e.device_authorization_grant_access_token_lifespan,
            device_authorization_grant_id_token_lifespan: e.device_authorization_grant_id_token_lifespan == null ? void 0 : e.device_authorization_grant_id_token_lifespan,
            device_authorization_grant_refresh_token_lifespan: e.device_authorization_grant_refresh_token_lifespan == null ? void 0 : e.device_authorization_grant_refresh_token_lifespan,
            frontchannel_logout_session_required: e.frontchannel_logout_session_required == null ? void 0 : e.frontchannel_logout_session_required,
            frontchannel_logout_uri: e.frontchannel_logout_uri == null ? void 0 : e.frontchannel_logout_uri,
            grant_types: e.grant_types == null ? void 0 : e.grant_types,
            implicit_grant_access_token_lifespan: e.implicit_grant_access_token_lifespan == null ? void 0 : e.implicit_grant_access_token_lifespan,
            implicit_grant_id_token_lifespan: e.implicit_grant_id_token_lifespan == null ? void 0 : e.implicit_grant_id_token_lifespan,
            jwks: e.jwks == null ? void 0 : A(e.jwks),
            jwks_uri: e.jwks_uri == null ? void 0 : e.jwks_uri,
            jwt_bearer_grant_access_token_lifespan: e.jwt_bearer_grant_access_token_lifespan == null ? void 0 : e.jwt_bearer_grant_access_token_lifespan,
            logo_uri: e.logo_uri == null ? void 0 : e.logo_uri,
            metadata: e.metadata == null ? void 0 : e.metadata,
            owner: e.owner == null ? void 0 : e.owner,
            policy_uri: e.policy_uri == null ? void 0 : e.policy_uri,
            post_logout_redirect_uris: e.post_logout_redirect_uris == null ? void 0 : e.post_logout_redirect_uris,
            redirect_uris: e.redirect_uris == null ? void 0 : e.redirect_uris,
            refresh_token_grant_access_token_lifespan: e.refresh_token_grant_access_token_lifespan == null ? void 0 : e.refresh_token_grant_access_token_lifespan,
            refresh_token_grant_id_token_lifespan: e.refresh_token_grant_id_token_lifespan == null ? void 0 : e.refresh_token_grant_id_token_lifespan,
            refresh_token_grant_refresh_token_lifespan: e.refresh_token_grant_refresh_token_lifespan == null ? void 0 : e.refresh_token_grant_refresh_token_lifespan,
            registration_access_token: e.registration_access_token == null ? void 0 : e.registration_access_token,
            registration_client_uri: e.registration_client_uri == null ? void 0 : e.registration_client_uri,
            request_object_signing_alg: e.request_object_signing_alg == null ? void 0 : e.request_object_signing_alg,
            request_uris: e.request_uris == null ? void 0 : e.request_uris,
            response_types: e.response_types == null ? void 0 : e.response_types,
            scope: e.scope == null ? void 0 : e.scope,
            sector_identifier_uri: e.sector_identifier_uri == null ? void 0 : e.sector_identifier_uri,
            skip_consent: e.skip_consent == null ? void 0 : e.skip_consent,
            skip_logout_consent: e.skip_logout_consent == null ? void 0 : e.skip_logout_consent,
            subject_type: e.subject_type == null ? void 0 : e.subject_type,
            token_endpoint_auth_method: e.token_endpoint_auth_method == null ? void 0 : e.token_endpoint_auth_method,
            token_endpoint_auth_signing_alg: e.token_endpoint_auth_signing_alg == null ? void 0 : e.token_endpoint_auth_signing_alg,
            tos_uri: e.tos_uri == null ? void 0 : e.tos_uri,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            userinfo_signed_response_alg: e.userinfo_signed_response_alg == null ? void 0 : e.userinfo_signed_response_alg
        }
    }

    function R(e) {
        return Ta(e, !1)
    }

    function Ta(e, t = !1) {
        return e == null ? e : {
            access_token_strategy: e.access_token_strategy,
            allowed_cors_origins: e.allowed_cors_origins,
            audience: e.audience,
            authorization_code_grant_access_token_lifespan: e.authorization_code_grant_access_token_lifespan,
            authorization_code_grant_id_token_lifespan: e.authorization_code_grant_id_token_lifespan,
            authorization_code_grant_refresh_token_lifespan: e.authorization_code_grant_refresh_token_lifespan,
            backchannel_logout_session_required: e.backchannel_logout_session_required,
            backchannel_logout_uri: e.backchannel_logout_uri,
            client_credentials_grant_access_token_lifespan: e.client_credentials_grant_access_token_lifespan,
            client_id: e.client_id,
            client_name: e.client_name,
            client_secret: e.client_secret,
            client_secret_expires_at: e.client_secret_expires_at,
            client_uri: e.client_uri,
            contacts: e.contacts,
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            device_authorization_grant_access_token_lifespan: e.device_authorization_grant_access_token_lifespan,
            device_authorization_grant_id_token_lifespan: e.device_authorization_grant_id_token_lifespan,
            device_authorization_grant_refresh_token_lifespan: e.device_authorization_grant_refresh_token_lifespan,
            frontchannel_logout_session_required: e.frontchannel_logout_session_required,
            frontchannel_logout_uri: e.frontchannel_logout_uri,
            grant_types: e.grant_types,
            implicit_grant_access_token_lifespan: e.implicit_grant_access_token_lifespan,
            implicit_grant_id_token_lifespan: e.implicit_grant_id_token_lifespan,
            jwks: wt(e.jwks),
            jwks_uri: e.jwks_uri,
            jwt_bearer_grant_access_token_lifespan: e.jwt_bearer_grant_access_token_lifespan,
            logo_uri: e.logo_uri,
            metadata: e.metadata,
            owner: e.owner,
            policy_uri: e.policy_uri,
            post_logout_redirect_uris: e.post_logout_redirect_uris,
            redirect_uris: e.redirect_uris,
            refresh_token_grant_access_token_lifespan: e.refresh_token_grant_access_token_lifespan,
            refresh_token_grant_id_token_lifespan: e.refresh_token_grant_id_token_lifespan,
            refresh_token_grant_refresh_token_lifespan: e.refresh_token_grant_refresh_token_lifespan,
            registration_access_token: e.registration_access_token,
            registration_client_uri: e.registration_client_uri,
            request_object_signing_alg: e.request_object_signing_alg,
            request_uris: e.request_uris,
            response_types: e.response_types,
            scope: e.scope,
            sector_identifier_uri: e.sector_identifier_uri,
            skip_consent: e.skip_consent,
            skip_logout_consent: e.skip_logout_consent,
            subject_type: e.subject_type,
            token_endpoint_auth_method: e.token_endpoint_auth_method,
            token_endpoint_auth_signing_alg: e.token_endpoint_auth_signing_alg,
            tos_uri: e.tos_uri,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            userinfo_signed_response_alg: e.userinfo_signed_response_alg
        }
    }

    function Rb(e) {
        return !(!("challenge" in e) || e.challenge === void 0)
    }

    function Fb(e) {
        return va(e)
    }

    function va(e, t) {
        return e == null ? e : {
            challenge: e.challenge,
            client: e.client == null ? void 0 : O(e.client),
            handled_at: e.handled_at == null ? void 0 : new Date(e.handled_at),
            request_url: e.request_url == null ? void 0 : e.request_url,
            requested_access_token_audience: e.requested_access_token_audience == null ? void 0 : e.requested_access_token_audience,
            requested_scope: e.requested_scope == null ? void 0 : e.requested_scope
        }
    }

    function Cb(e) {
        return Na(e, !1)
    }

    function Na(e, t = !1) {
        return e == null ? e : {
            challenge: e.challenge,
            client: R(e.client),
            handled_at: e.handled_at == null ? void 0 : e.handled_at.toISOString(),
            request_url: e.request_url,
            requested_access_token_audience: e.requested_access_token_audience,
            requested_scope: e.requested_scope
        }
    }

    function Db(e) {
        return !(!("html" in e) || e.html === void 0 || !("plaintext" in e) || e.plaintext === void 0)
    }

    function Ja(e) {
        return Ra(e)
    }

    function Ra(e, t) {
        return e == null ? e : {
            html: e.html,
            plaintext: e.plaintext
        }
    }

    function Fa(e) {
        return Ca(e, !1)
    }

    function Ca(e, t = !1) {
        return e == null ? e : {
            html: e.html,
            plaintext: e.plaintext
        }
    }

    function xb(e) {
        return !(!("body" in e) || e.body === void 0 || !("subject" in e) || e.subject === void 0)
    }

    function Ab(e) {
        return Da(e)
    }

    function Da(e, t) {
        return e == null ? e : {
            body: Ja(e.body),
            subject: e.subject
        }
    }

    function Ib(e) {
        return xa(e, !1)
    }

    function xa(e, t = !1) {
        return e == null ? e : {
            body: Fa(e.body),
            subject: e.subject
        }
    }
    const Pb = {
        FeatureNotAvailable: "feature_not_available",
        QuotaExceeded: "quota_exceeded",
        UnknownDefaultOpenApi: "11184809"
    };

    function qb(e) {
        return !0
    }

    function St(e) {
        return Aa(e)
    }

    function Aa(e, t) {
        return e == null ? e : {
            debug: e.debug == null ? void 0 : e.debug,
            error: e.error == null ? void 0 : e.error,
            error_description: e.error_description == null ? void 0 : e.error_description,
            id: e.id == null ? void 0 : e.id,
            message: e.message == null ? void 0 : e.message,
            status_code: e.status_code == null ? void 0 : e.status_code
        }
    }

    function Ot(e) {
        return Ia(e, !1)
    }

    function Ia(e, t = !1) {
        return e == null ? e : {
            debug: e.debug,
            error: e.error,
            error_description: e.error_description,
            id: e.id,
            message: e.message,
            status_code: e.status_code
        }
    }

    function zb(e) {
        return !(!("message" in e) || e.message === void 0)
    }

    function ne(e) {
        return Pa(e)
    }

    function Pa(e, t) {
        return e == null ? e : {
            code: e.code == null ? void 0 : e.code,
            debug: e.debug == null ? void 0 : e.debug,
            details: e.details == null ? void 0 : e.details,
            error: e.error == null ? void 0 : St(e.error),
            id: e.id == null ? void 0 : e.id,
            message: e.message,
            reason: e.reason == null ? void 0 : e.reason,
            request: e.request == null ? void 0 : e.request,
            status: e.status == null ? void 0 : e.status
        }
    }

    function ie(e) {
        return qa(e, !1)
    }

    function qa(e, t = !1) {
        return e == null ? e : {
            code: e.code,
            debug: e.debug,
            details: e.details,
            error: Ot(e.error),
            id: e.id,
            message: e.message,
            reason: e.reason,
            request: e.request,
            status: e.status
        }
    }

    function Ub(e) {
        return !0
    }

    function Eb(e) {
        return za(e)
    }

    function za(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : ne(e.error),
            redirect_browser_to: e.redirect_browser_to == null ? void 0 : e.redirect_browser_to
        }
    }

    function Bb(e) {
        return Ua(e, !1)
    }

    function Ua(e, t = !1) {
        return e == null ? e : {
            error: ie(e.error),
            redirect_browser_to: e.redirect_browser_to
        }
    }

    function Wb(e) {
        return !(!("error" in e) || e.error === void 0)
    }

    function Ea(e) {
        return Ba(e)
    }

    function Ba(e, t) {
        return e == null ? e : {
            error: St(e.error)
        }
    }

    function Wa(e) {
        return La(e, !1)
    }

    function La(e, t = !1) {
        return e == null ? e : {
            error: Ot(e.error)
        }
    }

    function Lb(e) {
        return !0
    }

    function Mb(e) {
        return Ma(e)
    }

    function Ma(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : Ea(e.error),
            redirect_browser_to: e.redirect_browser_to == null ? void 0 : e.redirect_browser_to
        }
    }

    function $b(e) {
        return $a(e, !1)
    }

    function $a(e, t = !1) {
        return e == null ? e : {
            error: Wa(e.error),
            redirect_browser_to: e.redirect_browser_to
        }
    }

    function Gb(e) {
        return !0
    }

    function Kb(e) {
        return Ga(e)
    }

    function Ga(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : ne(e.error),
            use_flow_id: e.use_flow_id == null ? void 0 : e.use_flow_id
        }
    }

    function Vb(e) {
        return Ka(e, !1)
    }

    function Ka(e, t = !1) {
        return e == null ? e : {
            error: ie(e.error),
            use_flow_id: e.use_flow_id
        }
    }

    function Hb(e) {
        return !0
    }

    function Tt(e) {
        return Va(e)
    }

    function Va(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : e.error,
            error_debug: e.error_debug == null ? void 0 : e.error_debug,
            error_description: e.error_description == null ? void 0 : e.error_description,
            error_hint: e.error_hint == null ? void 0 : e.error_hint,
            status_code: e.status_code == null ? void 0 : e.status_code
        }
    }

    function Xb(e) {
        return Ha(e, !1)
    }

    function Ha(e, t = !1) {
        return e == null ? e : {
            error: e.error,
            error_debug: e.error_debug,
            error_description: e.error_description,
            error_hint: e.error_hint,
            status_code: e.status_code
        }
    }

    function Qb(e) {
        return !0
    }

    function ke(e) {
        return Xa(e)
    }

    function Xa(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            id: e.id == null ? void 0 : e.id,
            role_arn: e.role_arn == null ? void 0 : e.role_arn,
            topic_arn: e.topic_arn == null ? void 0 : e.topic_arn,
            type: e.type == null ? void 0 : e.type,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function Qa(e) {
        return Ya(e, !1)
    }

    function Ya(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            id: e.id,
            role_arn: e.role_arn,
            topic_arn: e.topic_arn,
            type: e.type,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString()
        }
    }
    const Yb = {
        Union: "union",
        Exclusion: "exclusion",
        Intersection: "intersection",
        Leaf: "leaf",
        TupleToSubjectSet: "tuple_to_subject_set",
        ComputedSubjectSet: "computed_subject_set",
        Not: "not",
        Unspecified: "unspecified",
        UnknownDefaultOpenApi: "11184809"
    };

    function Zb(e) {
        return !(!("type" in e) || e.type === void 0)
    }

    function vt(e) {
        return Za(e)
    }

    function Za(e, t) {
        return e == null ? e : {
            children: e.children == null ? void 0 : e.children.map(vt),
            tuple: e.tuple == null ? void 0 : L(e.tuple),
            type: e.type
        }
    }

    function ja(e) {
        return es(e, !1)
    }

    function es(e, t = !1) {
        return e == null ? e : {
            children: e.children == null ? void 0 : e.children.map(ja),
            tuple: K(e.tuple),
            type: e.type
        }
    }

    function jb(e) {
        return !(!("id" in e) || e.id === void 0)
    }

    function ts(e) {
        return rs(e)
    }

    function rs(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            error: e.error == null ? void 0 : e.error,
            id: e.id,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function ew(e) {
        return ns(e, !1)
    }

    function ns(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            error: e.error,
            id: e.id,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString()
        }
    }

    function tw(e) {
        return !0
    }

    function is(e) {
        return os(e)
    }

    function os(e, t) {
        return e == null ? e : {
            Cents: e.Cents == null ? void 0 : e.Cents,
            String: e.String == null ? void 0 : e.String,
            Unit: e.Unit == null ? void 0 : e.Unit
        }
    }

    function _s(e) {
        return as(e, !1)
    }

    function as(e, t = !1) {
        return e == null ? e : {
            Cents: e.Cents,
            String: e.String,
            Unit: e.Unit
        }
    }

    function rw(e) {
        return !(!("additional_price" in e) || e.additional_price === void 0 || !("included_usage" in e) || e.included_usage === void 0)
    }

    function Nt(e) {
        return ss(e)
    }

    function ss(e, t) {
        return e == null ? e : {
            additional_price: is(e.additional_price),
            included_usage: e.included_usage
        }
    }

    function Jt(e) {
        return ds(e, !1)
    }

    function ds(e, t = !1) {
        return e == null ? e : {
            additional_price: _s(e.additional_price),
            included_usage: e.included_usage
        }
    }

    function nw(e) {
        return !(!("data" in e) || e.data === void 0)
    }

    function iw(e) {
        return cs(e)
    }

    function cs(e, t) {
        return e == null ? e : {
            data: e.data.map(nn)
        }
    }

    function ow(e) {
        return us(e, !1)
    }

    function us(e, t = !1) {
        return e == null ? e : {}
    }

    function _w(e) {
        return !0
    }

    function aw(e) {
        return ls(e)
    }

    function ls(e, t) {
        return e == null ? e : {
            location: e.location == null ? void 0 : e.location
        }
    }

    function sw(e) {
        return fs(e, !1)
    }

    function fs(e, t = !1) {
        return e == null ? e : {
            location: e.location
        }
    }

    function dw(e) {
        return !(!("events" in e) || e.events === void 0)
    }

    function cw(e) {
        return ps(e)
    }

    function ps(e, t) {
        return e == null ? e : {
            events: e.events
        }
    }

    function uw(e) {
        return hs(e, !1)
    }

    function hs(e, t = !1) {
        return e == null ? e : {}
    }

    function lw(e) {
        return !(!("events" in e) || e.events === void 0)
    }

    function fw(e) {
        return gs(e)
    }

    function gs(e, t) {
        return e == null ? e : {
            events: e.events
        }
    }

    function pw(e) {
        return ms(e, !1)
    }

    function ms(e, t = !1) {
        return e == null ? e : {}
    }

    function hw(e) {
        return !(!("organization" in e) || e.organization === void 0)
    }

    function ys(e) {
        return ks(e)
    }

    function ks(e, t) {
        return e == null ? e : {
            organization: x(e.organization)
        }
    }

    function gw(e) {
        return bs(e, !1)
    }

    function bs(e, t = !1) {
        return e == null ? e : {
            organization: Z(e.organization)
        }
    }

    function mw(e) {
        return !(!("from" in e) || e.from === void 0 || !("to" in e) || e.to === void 0)
    }

    function yw(e) {
        return ws(e)
    }

    function ws(e, t) {
        return e == null ? e : {
            event_name: e.event_name == null ? void 0 : e.event_name,
            filters: e.filters == null ? void 0 : e.filters.map(jr),
            from: new Date(e.from),
            page_size: e.page_size == null ? void 0 : e.page_size,
            page_token: e.page_token == null ? void 0 : e.page_token,
            to: new Date(e.to)
        }
    }

    function kw(e) {
        return Ss(e, !1)
    }

    function Ss(e, t = !1) {
        return e == null ? e : {
            event_name: e.event_name,
            filters: e.filters == null ? void 0 : e.filters.map(tn),
            from: e.from.toISOString(),
            page_size: e.page_size,
            page_token: e.page_token,
            to: e.to.toISOString()
        }
    }

    function bw(e) {
        return !(!("attributes" in e) || e.attributes === void 0 || !("name" in e) || e.name === void 0 || !("timestamp" in e) || e.timestamp === void 0)
    }

    function Os(e) {
        return Ts(e)
    }

    function Ts(e, t) {
        return e == null ? e : {
            attributes: e.attributes.map(Xr),
            name: e.name,
            timestamp: new Date(e.timestamp)
        }
    }

    function ww(e) {
        return vs(e, !1)
    }

    function vs(e, t = !1) {
        return e == null ? e : {
            attributes: e.attributes.map(Yr),
            name: e.name,
            timestamp: e.timestamp.toISOString()
        }
    }

    function Sw(e) {
        return !(!("events" in e) || e.events === void 0)
    }

    function Ow(e) {
        return Ns(e)
    }

    function Ns(e, t) {
        return e == null ? e : {
            events: e.events.map(Os),
            page_token: e.page_token == null ? void 0 : e.page_token
        }
    }

    function Tw(e) {
        return Js(e, !1)
    }

    function Js(e, t = !1) {
        return e == null ? e : {}
    }

    function vw(e) {
        return !(!("count" in e) || e.count === void 0 || !("time" in e) || e.time === void 0)
    }

    function Rs(e) {
        return Fs(e)
    }

    function Fs(e, t) {
        return e == null ? e : {
            count: e.count,
            time: new Date(e.time)
        }
    }

    function Nw(e) {
        return Cs(e, !1)
    }

    function Cs(e, t = !1) {
        return e == null ? e : {
            count: e.count,
            time: e.time.toISOString()
        }
    }

    function Jw(e) {
        return !(!("data" in e) || e.data === void 0)
    }

    function Rw(e) {
        return Ds(e)
    }

    function Ds(e, t) {
        return e == null ? e : {
            data: e.data.map(Rs)
        }
    }

    function Fw(e) {
        return xs(e, !1)
    }

    function xs(e, t = !1) {
        return e == null ? e : {}
    }

    function Cw(e) {
        return !(!("country" in e) || e.country === void 0 || !("failed" in e) || e.failed === void 0 || !("succeeded" in e) || e.succeeded === void 0)
    }

    function As(e) {
        return Is(e)
    }

    function Is(e, t) {
        return e == null ? e : {
            country: e.country,
            failed: e.failed,
            succeeded: e.succeeded
        }
    }

    function Dw(e) {
        return Ps(e, !1)
    }

    function Ps(e, t = !1) {
        return e == null ? e : {
            country: e.country,
            failed: e.failed,
            succeeded: e.succeeded
        }
    }

    function xw(e) {
        return !(!("data" in e) || e.data === void 0)
    }

    function Aw(e) {
        return qs(e)
    }

    function qs(e, t) {
        return e == null ? e : {
            data: e.data.map(As)
        }
    }

    function Iw(e) {
        return zs(e, !1)
    }

    function zs(e, t = !1) {
        return e == null ? e : {}
    }

    function Pw(e) {
        return !(!("version" in e) || e.version === void 0)
    }

    function Us(e) {
        return Es(e)
    }

    function Es(e, t) {
        return e == null ? e : {
            version: e.version
        }
    }

    function qw(e) {
        return Bs(e, !1)
    }

    function Bs(e, t = !1) {
        return e == null ? e : {
            version: e.version
        }
    }

    function zw(e) {
        return !0
    }

    function Uw(e) {
        return Ws(e)
    }

    function Ws(e, t) {
        return e == null ? e : {
            errors: e.errors == null ? void 0 : e.errors
        }
    }

    function Ew(e) {
        return Ls(e, !1)
    }

    function Ls(e, t = !1) {
        return e == null ? e : {
            errors: e.errors
        }
    }

    function Bw(e) {
        return !0
    }

    function Ww(e) {
        return Ms(e)
    }

    function Ms(e, t) {
        return e == null ? e : {
            status: e.status == null ? void 0 : e.status
        }
    }

    function Lw(e) {
        return $s(e, !1)
    }

    function $s(e, t = !1) {
        return e == null ? e : {
            status: e.status
        }
    }
    const Mw = {
        Password: "password",
        Oidc: "oidc",
        Totp: "totp",
        LookupSecret: "lookup_secret",
        Webauthn: "webauthn",
        Code: "code",
        Passkey: "passkey",
        Profile: "profile",
        Saml: "saml",
        LinkRecovery: "link_recovery",
        CodeRecovery: "code_recovery",
        UnknownDefaultOpenApi: "11184809"
    };

    function $w(e) {
        return !0
    }

    function Gs(e) {
        return Ks(e)
    }

    function Ks(e, t) {
        return e == null ? e : {
            config: e.config == null ? void 0 : e.config,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            identifiers: e.identifiers == null ? void 0 : e.identifiers,
            type: e.type == null ? void 0 : e.type,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            version: e.version == null ? void 0 : e.version
        }
    }

    function Vs(e) {
        return Hs(e, !1)
    }

    function Hs(e, t = !1) {
        return e == null ? e : {
            config: e.config,
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            identifiers: e.identifiers,
            type: e.type,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            version: e.version
        }
    }
    const Gw = {
        Active: "active",
        Inactive: "inactive",
        UnknownDefaultOpenApi: "11184809"
    };

    function Kw(e) {
        return !(!("id" in e) || e.id === void 0 || !("schema_id" in e) || e.schema_id === void 0 || !("schema_url" in e) || e.schema_url === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function F(e) {
        return Xs(e)
    }

    function Xs(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            credentials: e.credentials == null ? void 0 : G(e.credentials, Gs),
            external_id: e.external_id == null ? void 0 : e.external_id,
            id: e.id,
            metadata_admin: e.metadata_admin == null ? void 0 : e.metadata_admin,
            metadata_public: e.metadata_public == null ? void 0 : e.metadata_public,
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            recovery_addresses: e.recovery_addresses == null ? void 0 : e.recovery_addresses.map(rt),
            schema_id: e.schema_id,
            schema_url: e.schema_url,
            state: e.state == null ? void 0 : e.state,
            state_changed_at: e.state_changed_at == null ? void 0 : new Date(e.state_changed_at),
            traits: e.traits,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            verifiable_addresses: e.verifiable_addresses == null ? void 0 : e.verifiable_addresses.map(et)
        }
    }

    function be(e) {
        return Qs(e, !1)
    }

    function Qs(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            credentials: e.credentials == null ? void 0 : G(e.credentials, Vs),
            external_id: e.external_id,
            id: e.id,
            metadata_admin: e.metadata_admin,
            metadata_public: e.metadata_public,
            organization_id: e.organization_id,
            recovery_addresses: e.recovery_addresses == null ? void 0 : e.recovery_addresses.map(nt),
            schema_id: e.schema_id,
            schema_url: e.schema_url,
            state: e.state,
            state_changed_at: e.state_changed_at == null ? void 0 : e.state_changed_at.toISOString(),
            traits: e.traits,
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString(),
            verifiable_addresses: e.verifiable_addresses == null ? void 0 : e.verifiable_addresses.map(tt)
        }
    }

    function Vw(e) {
        return !0
    }

    function Ys(e) {
        return Zs(e)
    }

    function Zs(e, t) {
        return e == null ? e : {
            address: e.address == null ? void 0 : e.address,
            channel: e.channel == null ? void 0 : e.channel
        }
    }

    function js(e) {
        return ed(e, !1)
    }

    function ed(e, t = !1) {
        return e == null ? e : {
            address: e.address,
            channel: e.channel
        }
    }

    function Hw(e) {
        return !0
    }

    function Xw(e) {
        return td(e)
    }

    function td(e, t) {
        return e == null ? e : {
            addresses: e.addresses == null ? void 0 : e.addresses.map(Ys)
        }
    }

    function Qw(e) {
        return rd(e, !1)
    }

    function rd(e, t = !1) {
        return e == null ? e : {
            addresses: e.addresses == null ? void 0 : e.addresses.map(js)
        }
    }

    function Yw(e) {
        return !0
    }

    function nd(e) {
        return id(e)
    }

    function id(e, t) {
        return e == null ? e : {
            initial_access_token: e.initial_access_token == null ? void 0 : e.initial_access_token,
            initial_id_token: e.initial_id_token == null ? void 0 : e.initial_id_token,
            initial_refresh_token: e.initial_refresh_token == null ? void 0 : e.initial_refresh_token,
            organization: e.organization == null ? void 0 : e.organization,
            provider: e.provider == null ? void 0 : e.provider,
            subject: e.subject == null ? void 0 : e.subject,
            use_auto_link: e.use_auto_link == null ? void 0 : e.use_auto_link
        }
    }

    function od(e) {
        return _d(e, !1)
    }

    function _d(e, t = !1) {
        return e == null ? e : {
            initial_access_token: e.initial_access_token,
            initial_id_token: e.initial_id_token,
            initial_refresh_token: e.initial_refresh_token,
            organization: e.organization,
            provider: e.provider,
            subject: e.subject,
            use_auto_link: e.use_auto_link
        }
    }

    function Zw(e) {
        return !0
    }

    function jw(e) {
        return ad(e)
    }

    function ad(e, t) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(nd)
        }
    }

    function eS(e) {
        return sd(e, !1)
    }

    function sd(e, t = !1) {
        return e == null ? e : {
            providers: e.providers == null ? void 0 : e.providers.map(od)
        }
    }

    function tS(e) {
        return !0
    }

    function rS(e) {
        return dd(e)
    }

    function dd(e, t) {
        return e == null ? e : {
            hashed_password: e.hashed_password == null ? void 0 : e.hashed_password,
            use_password_migration_hook: e.use_password_migration_hook == null ? void 0 : e.use_password_migration_hook
        }
    }

    function nS(e) {
        return cd(e, !1)
    }

    function cd(e, t = !1) {
        return e == null ? e : {
            hashed_password: e.hashed_password,
            use_password_migration_hook: e.use_password_migration_hook
        }
    }

    function iS(e) {
        return !0
    }

    function ud(e) {
        return ld(e)
    }

    function ld(e, t) {
        return e == null ? e : {
            create: e.create == null ? void 0 : qo(e.create),
            patch_id: e.patch_id == null ? void 0 : e.patch_id
        }
    }

    function fd(e) {
        return pd(e, !1)
    }

    function pd(e, t = !1) {
        return e == null ? e : {
            create: _t(e.create),
            patch_id: e.patch_id
        }
    }

    function oS(e) {
        return !(!("id" in e) || e.id === void 0 || !("schema" in e) || e.schema === void 0)
    }

    function hd(e) {
        return gd(e)
    }

    function gd(e, t) {
        return e == null ? e : {
            id: e.id,
            schema: e.schema
        }
    }

    function _S(e) {
        return md(e, !1)
    }

    function md(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            schema: e.schema
        }
    }

    function aS(e) {
        return !(!("schema" in e) || e.schema === void 0 || !("url" in e) || e.url === void 0)
    }

    function sS(e) {
        return yd(e)
    }

    function yd(e, t) {
        return e == null ? e : {
            schema: e.schema,
            url: e.url
        }
    }

    function dS(e) {
        return kd(e, !1)
    }

    function kd(e, t = !1) {
        return e == null ? e : {
            schema: e.schema,
            url: e.url
        }
    }

    function cS(e) {
        return !0
    }

    function uS(e) {
        return bd(e)
    }

    function bd(e, t) {
        return e == null ? e : {
            hostname: e.hostname == null ? void 0 : e.hostname
        }
    }

    function lS(e) {
        return wd(e, !1)
    }

    function wd(e, t = !1) {
        return e == null ? e : {
            hostname: e.hostname
        }
    }

    function fS(e) {
        return !(!("path" in e) || e.path === void 0 || !("project_slug" in e) || e.project_slug === void 0)
    }

    function pS(e) {
        return Sd(e)
    }

    function Sd(e, t) {
        return e == null ? e : {
            path: e.path,
            project_slug: e.project_slug
        }
    }

    function hS(e) {
        return Od(e, !1)
    }

    function Od(e, t = !1) {
        return e == null ? e : {
            path: e.path,
            project_slug: e.project_slug
        }
    }
    const gS = {
        User: "User",
        ApiKey: " ApiKey",
        UnknownDefaultOpenApi: "11184809"
    };

    function mS(e) {
        return !(!("namespace" in e) || e.namespace === void 0 || !("project_slug" in e) || e.project_slug === void 0 || !("subject" in e) || e.subject === void 0)
    }

    function yS(e) {
        return Td(e)
    }

    function Td(e, t) {
        return e == null ? e : {
            namespace: e.namespace,
            project_scope: e.project_scope == null ? void 0 : e.project_scope,
            project_slug: e.project_slug,
            subject: e.subject
        }
    }

    function kS(e) {
        return vd(e, !1)
    }

    function vd(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            project_scope: e.project_scope,
            project_slug: e.project_slug,
            subject: e.subject
        }
    }

    function bS(e) {
        return !(!("project_id" in e) || e.project_id === void 0)
    }

    function wS(e) {
        return Nd(e)
    }

    function Nd(e, t) {
        return e == null ? e : {
            project_id: e.project_id
        }
    }

    function SS(e) {
        return Jd(e, !1)
    }

    function Jd(e, t = !1) {
        return e == null ? e : {
            project_id: e.project_id
        }
    }

    function OS(e) {
        return !(!("active" in e) || e.active === void 0)
    }

    function Rd(e) {
        return Fd(e)
    }

    function Fd(e, t) {
        return e == null ? e : {
            active: e.active,
            aud: e.aud == null ? void 0 : e.aud,
            client_id: e.client_id == null ? void 0 : e.client_id,
            exp: e.exp == null ? void 0 : e.exp,
            ext: e.ext == null ? void 0 : e.ext,
            iat: e.iat == null ? void 0 : e.iat,
            iss: e.iss == null ? void 0 : e.iss,
            nbf: e.nbf == null ? void 0 : e.nbf,
            obfuscated_subject: e.obfuscated_subject == null ? void 0 : e.obfuscated_subject,
            scope: e.scope == null ? void 0 : e.scope,
            sub: e.sub == null ? void 0 : e.sub,
            token_type: e.token_type == null ? void 0 : e.token_type,
            token_use: e.token_use == null ? void 0 : e.token_use,
            username: e.username == null ? void 0 : e.username
        }
    }

    function TS(e) {
        return Cd(e, !1)
    }

    function Cd(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            aud: e.aud,
            client_id: e.client_id,
            exp: e.exp,
            ext: e.ext,
            iat: e.iat,
            iss: e.iss,
            nbf: e.nbf,
            obfuscated_subject: e.obfuscated_subject,
            scope: e.scope,
            sub: e.sub,
            token_type: e.token_type,
            token_use: e.token_use,
            username: e.username
        }
    }

    function vS(e) {
        return !(!("invite_token" in e) || e.invite_token === void 0)
    }

    function NS(e) {
        return Dd(e)
    }

    function Dd(e, t) {
        return e == null ? e : {
            invite_token: e.invite_token
        }
    }

    function JS(e) {
        return xd(e, !1)
    }

    function xd(e, t = !1) {
        return e == null ? e : {
            invite_token: e.invite_token
        }
    }

    function RS(e) {
        return !(!("ProjectSlug" in e) || e.ProjectSlug === void 0 || !("Subject" in e) || e.Subject === void 0)
    }

    function FS(e) {
        return Ad(e)
    }

    function Ad(e, t) {
        return e == null ? e : {
            ProjectSlug: e.ProjectSlug,
            Subject: e.Subject
        }
    }

    function CS(e) {
        return Id(e, !1)
    }

    function Id(e, t = !1) {
        return e == null ? e : {
            ProjectSlug: e.ProjectSlug,
            Subject: e.Subject
        }
    }
    const DS = {
        Add: "add",
        Remove: "remove",
        Replace: "replace",
        Move: "move",
        Copy: "copy",
        Test: "test",
        UnknownDefaultOpenApi: "11184809"
    };

    function xS(e) {
        return !(!("op" in e) || e.op === void 0 || !("path" in e) || e.path === void 0)
    }

    function AS(e) {
        return Pd(e)
    }

    function Pd(e, t) {
        return e == null ? e : {
            from: e.from == null ? void 0 : e.from,
            op: e.op,
            path: e.path,
            value: e.value == null ? void 0 : e.value
        }
    }

    function oe(e) {
        return qd(e, !1)
    }

    function qd(e, t = !1) {
        return e == null ? e : {
            from: e.from,
            op: e.op,
            path: e.path,
            value: e.value
        }
    }

    function IS(e) {
        return !0
    }

    function PS(e) {
        return zd(e)
    }

    function zd(e, t) {
        return e == null ? e : {
            page_size: e.page_size == null ? void 0 : e.page_size,
            page_token: e.page_token == null ? void 0 : e.page_token
        }
    }

    function qS(e) {
        return Ud(e, !1)
    }

    function Ud(e, t = !1) {
        return e == null ? e : {
            page_size: e.page_size,
            page_token: e.page_token
        }
    }

    function zS(e) {
        return !0
    }

    function US(e) {
        return Ed(e)
    }

    function Ed(e, t) {
        return e == null ? e : {
            link: e.link == null ? void 0 : e.link
        }
    }

    function ES(e) {
        return Bd(e, !1)
    }

    function Bd(e, t = !1) {
        return e == null ? e : {
            link: e.link
        }
    }

    function BS(e) {
        return !0
    }

    function Wd(e) {
        return Ld(e)
    }

    function Ld(e, t) {
        return e == null ? e : {
            event_streams: e.event_streams == null ? void 0 : e.event_streams.map(ke)
        }
    }

    function WS(e) {
        return Md(e, !1)
    }

    function Md(e, t = !1) {
        return e == null ? e : {
            event_streams: e.event_streams == null ? void 0 : e.event_streams.map(Qa)
        }
    }

    function LS(e) {
        return !(!("buckets" in e) || e.buckets === void 0 || !("has_next_page" in e) || e.has_next_page === void 0 || !("next_page_token" in e) || e.next_page_token === void 0)
    }

    function MS(e) {
        return $d(e)
    }

    function $d(e, t) {
        return e == null ? e : {
            buckets: e.buckets.map(Kn),
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token
        }
    }

    function $S(e) {
        return Gd(e, !1)
    }

    function Gd(e, t = !1) {
        return e == null ? e : {
            buckets: e.buckets.map(Hn),
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token
        }
    }

    function GS(e) {
        return !(!("has_next_page" in e) || e.has_next_page === void 0 || !("next_page_token" in e) || e.next_page_token === void 0 || !("organizations" in e) || e.organizations === void 0)
    }

    function Kd(e) {
        return Vd(e)
    }

    function Vd(e, t) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token,
            organizations: e.organizations.map(x)
        }
    }

    function KS(e) {
        return Hd(e, !1)
    }

    function Hd(e, t = !1) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token,
            organizations: e.organizations.map(Z)
        }
    }

    function VS(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function I(e) {
        return Xd(e)
    }

    function Xd(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            id: e.id,
            name: e.name,
            subscription_id: e.subscription_id == null ? void 0 : e.subscription_id,
            subscription_plan: e.subscription_plan == null ? void 0 : e.subscription_plan,
            updated_at: new Date(e.updated_at)
        }
    }

    function we(e) {
        return Qd(e, !1)
    }

    function Qd(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at.toISOString(),
            id: e.id,
            name: e.name,
            subscription_id: e.subscription_id,
            subscription_plan: e.subscription_plan,
            updated_at: e.updated_at.toISOString()
        }
    }
    const HS = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        XS = {
            EuCentral: "eu-central",
            AsiaNortheast: "asia-northeast",
            UsEast: "us-east",
            UsWest: "us-west",
            Us: "us",
            Global: "global",
            UnknownDefaultOpenApi: "11184809"
        },
        QS = {
            Running: "running",
            Halted: "halted",
            Deleted: "deleted",
            UnknownDefaultOpenApi: "11184809"
        };

    function YS(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("environment" in e) || e.environment === void 0 || !("home_region" in e) || e.home_region === void 0 || !("hosts" in e) || e.hosts === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("slug" in e) || e.slug === void 0 || !("state" in e) || e.state === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function Rt(e) {
        return Yd(e)
    }

    function Yd(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            environment: e.environment,
            home_region: e.home_region,
            hosts: e.hosts,
            id: e.id,
            name: e.name,
            slug: e.slug,
            state: e.state,
            subscription_id: e.subscription_id == null ? void 0 : e.subscription_id,
            subscription_plan: e.subscription_plan == null ? void 0 : e.subscription_plan,
            updated_at: new Date(e.updated_at),
            workspace: e.workspace == null ? void 0 : I(e.workspace),
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function Zd(e) {
        return jd(e, !1)
    }

    function jd(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at.toISOString(),
            environment: e.environment,
            home_region: e.home_region,
            hosts: e.hosts,
            name: e.name,
            state: e.state,
            subscription_id: e.subscription_id,
            subscription_plan: e.subscription_plan,
            updated_at: e.updated_at.toISOString(),
            workspace: we(e.workspace),
            workspace_id: e.workspace_id
        }
    }

    function ZS(e) {
        return !(!("has_next_page" in e) || e.has_next_page === void 0 || !("next_page" in e) || e.next_page === void 0 || !("projects" in e) || e.projects === void 0)
    }

    function ec(e) {
        return tc(e)
    }

    function tc(e, t) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page: e.next_page,
            projects: e.projects.map(Rt)
        }
    }

    function jS(e) {
        return rc(e, !1)
    }

    function rc(e, t = !1) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page: e.next_page,
            projects: e.projects.map(Zd)
        }
    }

    function eO(e) {
        return !(!("has_next_page" in e) || e.has_next_page === void 0 || !("next_page_token" in e) || e.next_page_token === void 0 || !("workspaces" in e) || e.workspaces === void 0)
    }

    function nc(e) {
        return ic(e)
    }

    function ic(e, t) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token,
            workspaces: e.workspaces.map(I)
        }
    }

    function tO(e) {
        return oc(e, !1)
    }

    function oc(e, t = !1) {
        return e == null ? e : {
            has_next_page: e.has_next_page,
            next_page_token: e.next_page_token,
            workspaces: e.workspaces.map(we)
        }
    }

    function rO(e) {
        return !0
    }

    function Ft(e) {
        return _c(e)
    }

    function _c(e, t) {
        return e == null ? e : {
            acr_values: e.acr_values == null ? void 0 : e.acr_values,
            display: e.display == null ? void 0 : e.display,
            id_token_hint_claims: e.id_token_hint_claims == null ? void 0 : e.id_token_hint_claims,
            login_hint: e.login_hint == null ? void 0 : e.login_hint,
            ui_locales: e.ui_locales == null ? void 0 : e.ui_locales
        }
    }

    function Ct(e) {
        return ac(e, !1)
    }

    function ac(e, t = !1) {
        return e == null ? e : {
            acr_values: e.acr_values,
            display: e.display,
            id_token_hint_claims: e.id_token_hint_claims,
            login_hint: e.login_hint,
            ui_locales: e.ui_locales
        }
    }

    function nO(e) {
        return !(!("challenge" in e) || e.challenge === void 0 || !("client" in e) || e.client === void 0 || !("request_url" in e) || e.request_url === void 0 || !("skip" in e) || e.skip === void 0 || !("subject" in e) || e.subject === void 0)
    }

    function Se(e) {
        return sc(e)
    }

    function sc(e, t) {
        return e == null ? e : {
            challenge: e.challenge,
            client: O(e.client),
            oidc_context: e.oidc_context == null ? void 0 : Ft(e.oidc_context),
            request_url: e.request_url,
            requested_access_token_audience: e.requested_access_token_audience == null ? void 0 : e.requested_access_token_audience,
            requested_scope: e.requested_scope == null ? void 0 : e.requested_scope,
            session_id: e.session_id == null ? void 0 : e.session_id,
            skip: e.skip,
            subject: e.subject
        }
    }

    function Dt(e) {
        return dc(e, !1)
    }

    function dc(e, t = !1) {
        return e == null ? e : {
            challenge: e.challenge,
            client: R(e.client),
            oidc_context: Ct(e.oidc_context),
            request_url: e.request_url,
            requested_access_token_audience: e.requested_access_token_audience,
            requested_scope: e.requested_scope,
            session_id: e.session_id,
            skip: e.skip,
            subject: e.subject
        }
    }
    const iO = {
        Info: "info",
        Error: "error",
        Success: "success",
        UnknownDefaultOpenApi: "11184809"
    };

    function oO(e) {
        return !(!("id" in e) || e.id === void 0 || !("text" in e) || e.text === void 0 || !("type" in e) || e.type === void 0)
    }

    function P(e) {
        return cc(e)
    }

    function cc(e, t) {
        return e == null ? e : {
            context: e.context == null ? void 0 : e.context,
            id: e.id,
            text: e.text,
            type: e.type
        }
    }

    function q(e) {
        return uc(e, !1)
    }

    function uc(e, t = !1) {
        return e == null ? e : {
            context: e.context,
            id: e.id,
            text: e.text,
            type: e.type
        }
    }

    function _O(e) {
        return !0
    }

    function lc(e) {
        return fc(e)
    }

    function fc(e, t) {
        return e == null ? e : {
            label: e.label == null ? void 0 : P(e.label)
        }
    }

    function pc(e) {
        return hc(e, !1)
    }

    function hc(e, t = !1) {
        return e == null ? e : {
            label: q(e.label)
        }
    }
    const aO = {
        A: "a",
        UnknownDefaultOpenApi: "11184809"
    };

    function sO(e) {
        return !(!("href" in e) || e.href === void 0 || !("id" in e) || e.id === void 0 || !("node_type" in e) || e.node_type === void 0 || !("title" in e) || e.title === void 0)
    }

    function dO(e) {
        return xt(e)
    }

    function xt(e, t) {
        return e == null ? e : {
            href: e.href,
            id: e.id,
            node_type: e.node_type,
            title: P(e.title)
        }
    }

    function gc(e) {
        return mc(e, !1)
    }

    function mc(e, t = !1) {
        return e == null ? e : {
            href: e.href,
            id: e.id,
            node_type: e.node_type,
            title: q(e.title)
        }
    }
    const cO = {
        Div: "div",
        UnknownDefaultOpenApi: "11184809"
    };

    function uO(e) {
        return !(!("id" in e) || e.id === void 0 || !("node_type" in e) || e.node_type === void 0)
    }

    function lO(e) {
        return At(e)
    }

    function At(e, t) {
        return e == null ? e : {
            _class: e.class == null ? void 0 : e.class,
            data: e.data == null ? void 0 : e.data,
            id: e.id,
            node_type: e.node_type
        }
    }

    function yc(e) {
        return kc(e, !1)
    }

    function kc(e, t = !1) {
        return e == null ? e : {
            class: e._class,
            data: e.data,
            id: e.id,
            node_type: e.node_type
        }
    }
    const fO = {
        Img: "img",
        UnknownDefaultOpenApi: "11184809"
    };

    function pO(e) {
        return !(!("height" in e) || e.height === void 0 || !("id" in e) || e.id === void 0 || !("node_type" in e) || e.node_type === void 0 || !("src" in e) || e.src === void 0 || !("width" in e) || e.width === void 0)
    }

    function hO(e) {
        return It(e)
    }

    function It(e, t) {
        return e == null ? e : {
            height: e.height,
            id: e.id,
            node_type: e.node_type,
            src: e.src,
            width: e.width
        }
    }

    function bc(e) {
        return wc(e, !1)
    }

    function wc(e, t = !1) {
        return e == null ? e : {
            height: e.height,
            id: e.id,
            node_type: e.node_type,
            src: e.src,
            width: e.width
        }
    }
    const gO = {
            Email: "email",
            Tel: "tel",
            Url: "url",
            CurrentPassword: "current-password",
            NewPassword: "new-password",
            OneTimeCode: "one-time-code",
            UsernameWebauthn: "username webauthn",
            UnknownDefaultOpenApi: "11184809"
        },
        mO = {
            Input: "input",
            UnknownDefaultOpenApi: "11184809"
        },
        yO = {
            OryWebAuthnRegistration: "oryWebAuthnRegistration",
            OryWebAuthnLogin: "oryWebAuthnLogin",
            OryPasskeyLogin: "oryPasskeyLogin",
            OryPasskeyLoginAutocompleteInit: "oryPasskeyLoginAutocompleteInit",
            OryPasskeyRegistration: "oryPasskeyRegistration",
            OryPasskeySettingsRegistration: "oryPasskeySettingsRegistration",
            UnknownDefaultOpenApi: "11184809"
        },
        kO = {
            OryWebAuthnRegistration: "oryWebAuthnRegistration",
            OryWebAuthnLogin: "oryWebAuthnLogin",
            OryPasskeyLogin: "oryPasskeyLogin",
            OryPasskeyLoginAutocompleteInit: "oryPasskeyLoginAutocompleteInit",
            OryPasskeyRegistration: "oryPasskeyRegistration",
            OryPasskeySettingsRegistration: "oryPasskeySettingsRegistration",
            UnknownDefaultOpenApi: "11184809"
        },
        bO = {
            Text: "text",
            Password: "password",
            Number: "number",
            Checkbox: "checkbox",
            Hidden: "hidden",
            Email: "email",
            Tel: "tel",
            Submit: "submit",
            Button: "button",
            DatetimeLocal: "datetime-local",
            Date: "date",
            Url: "url",
            UnknownDefaultOpenApi: "11184809"
        };

    function wO(e) {
        return !(!("disabled" in e) || e.disabled === void 0 || !("name" in e) || e.name === void 0 || !("node_type" in e) || e.node_type === void 0 || !("type" in e) || e.type === void 0)
    }

    function SO(e) {
        return Pt(e)
    }

    function Pt(e, t) {
        return e == null ? e : {
            autocomplete: e.autocomplete == null ? void 0 : e.autocomplete,
            disabled: e.disabled,
            label: e.label == null ? void 0 : P(e.label),
            maxlength: e.maxlength == null ? void 0 : e.maxlength,
            name: e.name,
            node_type: e.node_type,
            onclick: e.onclick == null ? void 0 : e.onclick,
            onclickTrigger: e.onclickTrigger == null ? void 0 : e.onclickTrigger,
            onload: e.onload == null ? void 0 : e.onload,
            onloadTrigger: e.onloadTrigger == null ? void 0 : e.onloadTrigger,
            pattern: e.pattern == null ? void 0 : e.pattern,
            required: e.required == null ? void 0 : e.required,
            type: e.type,
            value: e.value == null ? void 0 : e.value
        }
    }

    function Sc(e) {
        return Oc(e, !1)
    }

    function Oc(e, t = !1) {
        return e == null ? e : {
            autocomplete: e.autocomplete,
            disabled: e.disabled,
            label: q(e.label),
            maxlength: e.maxlength,
            name: e.name,
            node_type: e.node_type,
            onclick: e.onclick,
            onclickTrigger: e.onclickTrigger,
            onload: e.onload,
            onloadTrigger: e.onloadTrigger,
            pattern: e.pattern,
            required: e.required,
            type: e.type,
            value: e.value
        }
    }
    const OO = {
        Script: "script",
        UnknownDefaultOpenApi: "11184809"
    };

    function TO(e) {
        return !(!("async" in e) || e.async === void 0 || !("crossorigin" in e) || e.crossorigin === void 0 || !("id" in e) || e.id === void 0 || !("integrity" in e) || e.integrity === void 0 || !("node_type" in e) || e.node_type === void 0 || !("nonce" in e) || e.nonce === void 0 || !("referrerpolicy" in e) || e.referrerpolicy === void 0 || !("src" in e) || e.src === void 0 || !("type" in e) || e.type === void 0)
    }

    function vO(e) {
        return qt(e)
    }

    function qt(e, t) {
        return e == null ? e : {
            async: e.async,
            crossorigin: e.crossorigin,
            id: e.id,
            integrity: e.integrity,
            node_type: e.node_type,
            nonce: e.nonce,
            referrerpolicy: e.referrerpolicy,
            src: e.src,
            type: e.type
        }
    }

    function Tc(e) {
        return vc(e, !1)
    }

    function vc(e, t = !1) {
        return e == null ? e : {
            async: e.async,
            crossorigin: e.crossorigin,
            id: e.id,
            integrity: e.integrity,
            node_type: e.node_type,
            nonce: e.nonce,
            referrerpolicy: e.referrerpolicy,
            src: e.src,
            type: e.type
        }
    }
    const NO = {
        Text: "text",
        UnknownDefaultOpenApi: "11184809"
    };

    function JO(e) {
        return !(!("id" in e) || e.id === void 0 || !("node_type" in e) || e.node_type === void 0 || !("text" in e) || e.text === void 0)
    }

    function RO(e) {
        return zt(e)
    }

    function zt(e, t) {
        return e == null ? e : {
            id: e.id,
            node_type: e.node_type,
            text: P(e.text)
        }
    }

    function Nc(e) {
        return Jc(e, !1)
    }

    function Jc(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            node_type: e.node_type,
            text: q(e.text)
        }
    }

    function Rc(e) {
        return Fc(e)
    }

    function Fc(e, t) {
        if (e == null) return e;
        switch (e.node_type) {
            case "a":
                return Object.assign({}, xt(e), {
                    node_type: "a"
                });
            case "div":
                return Object.assign({}, At(e), {
                    node_type: "div"
                });
            case "img":
                return Object.assign({}, It(e), {
                    node_type: "img"
                });
            case "input":
                return Object.assign({}, Pt(e), {
                    node_type: "input"
                });
            case "script":
                return Object.assign({}, qt(e), {
                    node_type: "script"
                });
            case "text":
                return Object.assign({}, zt(e), {
                    node_type: "text"
                });
            default:
                throw new Error(`No variant of UiNodeAttributes exists with 'node_type=${e.node_type}'`)
        }
    }

    function Cc(e) {
        return Dc(e, !1)
    }

    function Dc(e, t = !1) {
        if (e == null) return e;
        switch (e.node_type) {
            case "a":
                return Object.assign({}, gc(e), {
                    node_type: "a"
                });
            case "div":
                return Object.assign({}, yc(e), {
                    node_type: "div"
                });
            case "img":
                return Object.assign({}, bc(e), {
                    node_type: "img"
                });
            case "input":
                return Object.assign({}, Sc(e), {
                    node_type: "input"
                });
            case "script":
                return Object.assign({}, Tc(e), {
                    node_type: "script"
                });
            case "text":
                return Object.assign({}, Nc(e), {
                    node_type: "text"
                });
            default:
                throw new Error(`No variant of UiNodeAttributes exists with 'node_type=${e.node_type}'`)
        }
    }
    const FO = {
            Default: "default",
            Password: "password",
            Oidc: "oidc",
            Profile: "profile",
            Link: "link",
            Code: "code",
            Totp: "totp",
            LookupSecret: "lookup_secret",
            Webauthn: "webauthn",
            Passkey: "passkey",
            IdentifierFirst: "identifier_first",
            Captcha: "captcha",
            Saml: "saml",
            Oauth2Consent: "oauth2_consent",
            UnknownDefaultOpenApi: "11184809"
        },
        CO = {
            Text: "text",
            Input: "input",
            Img: "img",
            A: "a",
            Script: "script",
            Div: "div",
            UnknownDefaultOpenApi: "11184809"
        };

    function DO(e) {
        return !(!("attributes" in e) || e.attributes === void 0 || !("group" in e) || e.group === void 0 || !("messages" in e) || e.messages === void 0 || !("meta" in e) || e.meta === void 0 || !("type" in e) || e.type === void 0)
    }

    function xc(e) {
        return Ac(e)
    }

    function Ac(e, t) {
        return e == null ? e : {
            attributes: Rc(e.attributes),
            group: e.group,
            messages: e.messages.map(P),
            meta: lc(e.meta),
            type: e.type
        }
    }

    function Ic(e) {
        return Pc(e, !1)
    }

    function Pc(e, t = !1) {
        return e == null ? e : {
            attributes: Cc(e.attributes),
            group: e.group,
            messages: e.messages.map(q),
            meta: pc(e.meta),
            type: e.type
        }
    }

    function xO(e) {
        return !(!("action" in e) || e.action === void 0 || !("method" in e) || e.method === void 0 || !("nodes" in e) || e.nodes === void 0)
    }

    function M(e) {
        return qc(e)
    }

    function qc(e, t) {
        return e == null ? e : {
            action: e.action,
            messages: e.messages == null ? void 0 : e.messages.map(P),
            method: e.method,
            nodes: e.nodes.map(xc)
        }
    }

    function $(e) {
        return zc(e, !1)
    }

    function zc(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            messages: e.messages == null ? void 0 : e.messages.map(q),
            method: e.method,
            nodes: e.nodes.map(Ic)
        }
    }
    const AO = {
        Password: "password",
        Oidc: "oidc",
        Totp: "totp",
        LookupSecret: "lookup_secret",
        Webauthn: "webauthn",
        Code: "code",
        Passkey: "passkey",
        Profile: "profile",
        Saml: "saml",
        LinkRecovery: "link_recovery",
        CodeRecovery: "code_recovery",
        UnknownDefaultOpenApi: "11184809"
    };

    function IO(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("id" in e) || e.id === void 0 || !("issued_at" in e) || e.issued_at === void 0 || !("request_url" in e) || e.request_url === void 0 || !("state" in e) || e.state === void 0 || !("type" in e) || e.type === void 0 || !("ui" in e) || e.ui === void 0)
    }

    function Oe(e) {
        return Uc(e)
    }

    function Uc(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            expires_at: new Date(e.expires_at),
            id: e.id,
            identity_schema: e.identity_schema == null ? void 0 : e.identity_schema,
            issued_at: new Date(e.issued_at),
            oauth2_login_challenge: e.oauth2_login_challenge == null ? void 0 : e.oauth2_login_challenge,
            oauth2_login_request: e.oauth2_login_request == null ? void 0 : Se(e.oauth2_login_request),
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            refresh: e.refresh == null ? void 0 : e.refresh,
            request_url: e.request_url,
            requested_aal: e.requested_aal == null ? void 0 : pe(e.requested_aal),
            return_to: e.return_to == null ? void 0 : e.return_to,
            session_token_exchange_code: e.session_token_exchange_code == null ? void 0 : e.session_token_exchange_code,
            state: e.state,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            type: e.type,
            ui: M(e.ui),
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function PO(e) {
        return Ec(e, !1)
    }

    function Ec(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            expires_at: e.expires_at.toISOString(),
            id: e.id,
            identity_schema: e.identity_schema,
            issued_at: e.issued_at.toISOString(),
            oauth2_login_challenge: e.oauth2_login_challenge,
            oauth2_login_request: Dt(e.oauth2_login_request),
            organization_id: e.organization_id,
            refresh: e.refresh,
            request_url: e.request_url,
            requested_aal: e.requested_aal,
            return_to: e.return_to,
            session_token_exchange_code: e.session_token_exchange_code,
            state: e.state,
            transient_payload: e.transient_payload,
            type: e.type,
            ui: $(e.ui),
            updated_at: e.updated_at == null ? void 0 : e.updated_at.toISOString()
        }
    }
    const Te = {
        ChooseMethod: "choose_method",
        SentEmail: "sent_email",
        PassedChallenge: "passed_challenge",
        UnknownDefaultOpenApi: "11184809"
    };

    function qO(e) {
        for (const t in Te)
            if (Object.prototype.hasOwnProperty.call(Te, t) && Te[t] === e) return !0;
        return !1
    }

    function zO(e) {
        return Bc(e)
    }

    function Bc(e, t) {
        return e
    }

    function UO(e) {
        return e
    }

    function EO(e, t) {
        return e
    }

    function BO(e) {
        return !(!("logout_token" in e) || e.logout_token === void 0 || !("logout_url" in e) || e.logout_url === void 0)
    }

    function Wc(e) {
        return Lc(e)
    }

    function Lc(e, t) {
        return e == null ? e : {
            logout_token: e.logout_token,
            logout_url: e.logout_url
        }
    }

    function WO(e) {
        return Mc(e, !1)
    }

    function Mc(e, t = !1) {
        return e == null ? e : {
            logout_token: e.logout_token,
            logout_url: e.logout_url
        }
    }

    function LO(e) {
        return !0
    }

    function MO(e) {
        return $c(e)
    }

    function $c(e, t) {
        return e == null ? e : {
            message: e.message == null ? void 0 : e.message,
            valid: e.valid == null ? void 0 : e.valid
        }
    }

    function $O(e) {
        return Gc(e, !1)
    }

    function Gc(e, t = !1) {
        return e == null ? e : {
            message: e.message,
            valid: e.valid
        }
    }
    const GO = {
        Failed: "failed",
        Success: "success",
        UnknownDefaultOpenApi: "11184809"
    };

    function KO(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("message_id" in e) || e.message_id === void 0 || !("status" in e) || e.status === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function Kc(e) {
        return Vc(e)
    }

    function Vc(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            error: e.error == null ? void 0 : e.error,
            id: e.id,
            message_id: e.message_id,
            status: e.status,
            updated_at: new Date(e.updated_at)
        }
    }

    function Hc(e) {
        return Xc(e, !1)
    }

    function Xc(e, t = !1) {
        return e == null ? e : {
            created_at: e.created_at.toISOString(),
            error: e.error,
            id: e.id,
            message_id: e.message_id,
            status: e.status,
            updated_at: e.updated_at.toISOString()
        }
    }
    const VO = {
        RecoveryInvalid: "recovery_invalid",
        RecoveryValid: "recovery_valid",
        RecoveryCodeInvalid: "recovery_code_invalid",
        RecoveryCodeValid: "recovery_code_valid",
        VerificationInvalid: "verification_invalid",
        VerificationValid: "verification_valid",
        VerificationCodeInvalid: "verification_code_invalid",
        VerificationCodeValid: "verification_code_valid",
        Stub: "stub",
        LoginCodeValid: "login_code_valid",
        RegistrationCodeValid: "registration_code_valid",
        UnknownDefaultOpenApi: "11184809"
    };

    function HO(e) {
        return !(!("body" in e) || e.body === void 0 || !("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("recipient" in e) || e.recipient === void 0 || !("send_count" in e) || e.send_count === void 0 || !("status" in e) || e.status === void 0 || !("subject" in e) || e.subject === void 0 || !("template_type" in e) || e.template_type === void 0 || !("type" in e) || e.type === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function Ut(e) {
        return Qc(e)
    }

    function Qc(e, t) {
        return e == null ? e : {
            body: e.body,
            channel: e.channel == null ? void 0 : e.channel,
            created_at: new Date(e.created_at),
            dispatches: e.dispatches == null ? void 0 : e.dispatches.map(Kc),
            id: e.id,
            recipient: e.recipient,
            send_count: e.send_count,
            status: Pi(e.status),
            subject: e.subject,
            template_type: e.template_type,
            type: zi(e.type),
            updated_at: new Date(e.updated_at)
        }
    }

    function XO(e) {
        return Yc(e, !1)
    }

    function Yc(e, t = !1) {
        return e == null ? e : {
            body: e.body,
            channel: e.channel,
            created_at: e.created_at.toISOString(),
            dispatches: e.dispatches == null ? void 0 : e.dispatches.map(Hc),
            id: e.id,
            recipient: e.recipient,
            send_count: e.send_count,
            status: e.status,
            subject: e.subject,
            template_type: e.template_type,
            type: e.type,
            updated_at: e.updated_at.toISOString()
        }
    }

    function QO(e) {
        return !0
    }

    function Zc(e) {
        return jc(e)
    }

    function jc(e, t) {
        return e == null ? e : {
            name: e.name == null ? void 0 : e.name
        }
    }

    function eu(e) {
        return tu(e, !1)
    }

    function tu(e, t = !1) {
        return e == null ? e : {
            name: e.name
        }
    }

    function YO(e) {
        return !(!("redirect_browser_to" in e) || e.redirect_browser_to === void 0)
    }

    function ZO(e) {
        return ru(e)
    }

    function ru(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : ne(e.error),
            redirect_browser_to: e.redirect_browser_to
        }
    }

    function jO(e) {
        return nu(e, !1)
    }

    function nu(e, t = !1) {
        return e == null ? e : {
            error: ie(e.error),
            redirect_browser_to: e.redirect_browser_to
        }
    }
    const eT = {
            Opaque: "opaque",
            Jwt: "jwt",
            UnknownDefaultOpenApi: "11184809"
        },
        tT = {
            List: "list",
            String: "string",
            Both: "both",
            UnknownDefaultOpenApi: "11184809"
        },
        rT = {
            Exact: "exact",
            Wildcard: "wildcard",
            UnknownDefaultOpenApi: "11184809"
        },
        nT = {
            Link: "link",
            Code: "code",
            UnknownDefaultOpenApi: "11184809"
        },
        iT = {
            Link: "link",
            Code: "code",
            UnknownDefaultOpenApi: "11184809"
        };

    function oT(e) {
        return !(!("name" in e) || e.name === void 0)
    }

    function iu(e) {
        return ou(e)
    }

    function ou(e, t) {
        return e == null ? e : {
            account_experience_default_locale: e.account_experience_default_locale == null ? void 0 : e.account_experience_default_locale,
            account_experience_favicon_dark: e.account_experience_favicon_dark == null ? void 0 : e.account_experience_favicon_dark,
            account_experience_favicon_light: e.account_experience_favicon_light == null ? void 0 : e.account_experience_favicon_light,
            account_experience_locale_behavior: e.account_experience_locale_behavior == null ? void 0 : e.account_experience_locale_behavior,
            account_experience_logo_dark: e.account_experience_logo_dark == null ? void 0 : e.account_experience_logo_dark,
            account_experience_logo_light: e.account_experience_logo_light == null ? void 0 : e.account_experience_logo_light,
            account_experience_theme_variables_dark: e.account_experience_theme_variables_dark == null ? void 0 : e.account_experience_theme_variables_dark,
            account_experience_theme_variables_light: e.account_experience_theme_variables_light == null ? void 0 : e.account_experience_theme_variables_light,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            disable_account_experience_welcome_screen: e.disable_account_experience_welcome_screen == null ? void 0 : e.disable_account_experience_welcome_screen,
            enable_ax_v2: e.enable_ax_v2 == null ? void 0 : e.enable_ax_v2,
            hydra_oauth2_allowed_top_level_claims: e.hydra_oauth2_allowed_top_level_claims == null ? void 0 : e.hydra_oauth2_allowed_top_level_claims,
            hydra_oauth2_client_credentials_default_grant_allowed_scope: e.hydra_oauth2_client_credentials_default_grant_allowed_scope == null ? void 0 : e.hydra_oauth2_client_credentials_default_grant_allowed_scope,
            hydra_oauth2_exclude_not_before_claim: e.hydra_oauth2_exclude_not_before_claim == null ? void 0 : e.hydra_oauth2_exclude_not_before_claim,
            hydra_oauth2_grant_jwt_iat_optional: e.hydra_oauth2_grant_jwt_iat_optional == null ? void 0 : e.hydra_oauth2_grant_jwt_iat_optional,
            hydra_oauth2_grant_jwt_jti_optional: e.hydra_oauth2_grant_jwt_jti_optional == null ? void 0 : e.hydra_oauth2_grant_jwt_jti_optional,
            hydra_oauth2_grant_jwt_max_ttl: e.hydra_oauth2_grant_jwt_max_ttl == null ? void 0 : e.hydra_oauth2_grant_jwt_max_ttl,
            hydra_oauth2_grant_refresh_token_rotation_grace_period: e.hydra_oauth2_grant_refresh_token_rotation_grace_period == null ? void 0 : e.hydra_oauth2_grant_refresh_token_rotation_grace_period,
            hydra_oauth2_mirror_top_level_claims: e.hydra_oauth2_mirror_top_level_claims == null ? void 0 : e.hydra_oauth2_mirror_top_level_claims,
            hydra_oauth2_pkce_enforced: e.hydra_oauth2_pkce_enforced == null ? void 0 : e.hydra_oauth2_pkce_enforced,
            hydra_oauth2_pkce_enforced_for_public_clients: e.hydra_oauth2_pkce_enforced_for_public_clients == null ? void 0 : e.hydra_oauth2_pkce_enforced_for_public_clients,
            hydra_oauth2_refresh_token_hook: e.hydra_oauth2_refresh_token_hook == null ? void 0 : e.hydra_oauth2_refresh_token_hook,
            hydra_oauth2_token_hook: e.hydra_oauth2_token_hook == null ? void 0 : e.hydra_oauth2_token_hook,
            hydra_oidc_dynamic_client_registration_default_scope: e.hydra_oidc_dynamic_client_registration_default_scope == null ? void 0 : e.hydra_oidc_dynamic_client_registration_default_scope,
            hydra_oidc_dynamic_client_registration_enabled: e.hydra_oidc_dynamic_client_registration_enabled == null ? void 0 : e.hydra_oidc_dynamic_client_registration_enabled,
            hydra_oidc_subject_identifiers_pairwise_salt: e.hydra_oidc_subject_identifiers_pairwise_salt == null ? void 0 : e.hydra_oidc_subject_identifiers_pairwise_salt,
            hydra_oidc_subject_identifiers_supported_types: e.hydra_oidc_subject_identifiers_supported_types == null ? void 0 : e.hydra_oidc_subject_identifiers_supported_types,
            hydra_secrets_cookie: e.hydra_secrets_cookie == null ? void 0 : e.hydra_secrets_cookie,
            hydra_secrets_pagination: e.hydra_secrets_pagination == null ? void 0 : e.hydra_secrets_pagination,
            hydra_secrets_system: e.hydra_secrets_system == null ? void 0 : e.hydra_secrets_system,
            hydra_serve_cookies_same_site_legacy_workaround: e.hydra_serve_cookies_same_site_legacy_workaround == null ? void 0 : e.hydra_serve_cookies_same_site_legacy_workaround,
            hydra_serve_cookies_same_site_mode: e.hydra_serve_cookies_same_site_mode == null ? void 0 : e.hydra_serve_cookies_same_site_mode,
            hydra_strategies_access_token: e.hydra_strategies_access_token == null ? void 0 : e.hydra_strategies_access_token,
            hydra_strategies_jwt_scope_claim: e.hydra_strategies_jwt_scope_claim == null ? void 0 : e.hydra_strategies_jwt_scope_claim,
            hydra_strategies_scope: e.hydra_strategies_scope == null ? void 0 : e.hydra_strategies_scope,
            hydra_ttl_access_token: e.hydra_ttl_access_token == null ? void 0 : e.hydra_ttl_access_token,
            hydra_ttl_auth_code: e.hydra_ttl_auth_code == null ? void 0 : e.hydra_ttl_auth_code,
            hydra_ttl_id_token: e.hydra_ttl_id_token == null ? void 0 : e.hydra_ttl_id_token,
            hydra_ttl_login_consent_request: e.hydra_ttl_login_consent_request == null ? void 0 : e.hydra_ttl_login_consent_request,
            hydra_ttl_refresh_token: e.hydra_ttl_refresh_token == null ? void 0 : e.hydra_ttl_refresh_token,
            hydra_urls_consent: e.hydra_urls_consent == null ? void 0 : e.hydra_urls_consent,
            hydra_urls_error: e.hydra_urls_error == null ? void 0 : e.hydra_urls_error,
            hydra_urls_login: e.hydra_urls_login == null ? void 0 : e.hydra_urls_login,
            hydra_urls_logout: e.hydra_urls_logout == null ? void 0 : e.hydra_urls_logout,
            hydra_urls_post_logout_redirect: e.hydra_urls_post_logout_redirect == null ? void 0 : e.hydra_urls_post_logout_redirect,
            hydra_urls_registration: e.hydra_urls_registration == null ? void 0 : e.hydra_urls_registration,
            hydra_urls_self_issuer: e.hydra_urls_self_issuer == null ? void 0 : e.hydra_urls_self_issuer,
            hydra_webfinger_jwks_broadcast_keys: e.hydra_webfinger_jwks_broadcast_keys == null ? void 0 : e.hydra_webfinger_jwks_broadcast_keys,
            hydra_webfinger_oidc_discovery_auth_url: e.hydra_webfinger_oidc_discovery_auth_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_auth_url,
            hydra_webfinger_oidc_discovery_client_registration_url: e.hydra_webfinger_oidc_discovery_client_registration_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_client_registration_url,
            hydra_webfinger_oidc_discovery_jwks_url: e.hydra_webfinger_oidc_discovery_jwks_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_jwks_url,
            hydra_webfinger_oidc_discovery_supported_claims: e.hydra_webfinger_oidc_discovery_supported_claims == null ? void 0 : e.hydra_webfinger_oidc_discovery_supported_claims,
            hydra_webfinger_oidc_discovery_supported_scope: e.hydra_webfinger_oidc_discovery_supported_scope == null ? void 0 : e.hydra_webfinger_oidc_discovery_supported_scope,
            hydra_webfinger_oidc_discovery_token_url: e.hydra_webfinger_oidc_discovery_token_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_token_url,
            hydra_webfinger_oidc_discovery_userinfo_url: e.hydra_webfinger_oidc_discovery_userinfo_url == null ? void 0 : e.hydra_webfinger_oidc_discovery_userinfo_url,
            id: e.id == null ? void 0 : e.id,
            keto_namespace_configuration: e.keto_namespace_configuration == null ? void 0 : e.keto_namespace_configuration,
            keto_namespaces: e.keto_namespaces == null ? void 0 : e.keto_namespaces.map(ft),
            keto_secrets_pagination: e.keto_secrets_pagination == null ? void 0 : e.keto_secrets_pagination,
            kratos_cookies_same_site: e.kratos_cookies_same_site == null ? void 0 : e.kratos_cookies_same_site,
            kratos_courier_channels: e.kratos_courier_channels == null ? void 0 : e.kratos_courier_channels.map(ut),
            kratos_courier_delivery_strategy: e.kratos_courier_delivery_strategy == null ? void 0 : e.kratos_courier_delivery_strategy,
            kratos_courier_http_request_config_auth_api_key_in: e.kratos_courier_http_request_config_auth_api_key_in == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_in,
            kratos_courier_http_request_config_auth_api_key_name: e.kratos_courier_http_request_config_auth_api_key_name == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_name,
            kratos_courier_http_request_config_auth_api_key_value: e.kratos_courier_http_request_config_auth_api_key_value == null ? void 0 : e.kratos_courier_http_request_config_auth_api_key_value,
            kratos_courier_http_request_config_auth_basic_auth_password: e.kratos_courier_http_request_config_auth_basic_auth_password == null ? void 0 : e.kratos_courier_http_request_config_auth_basic_auth_password,
            kratos_courier_http_request_config_auth_basic_auth_user: e.kratos_courier_http_request_config_auth_basic_auth_user == null ? void 0 : e.kratos_courier_http_request_config_auth_basic_auth_user,
            kratos_courier_http_request_config_auth_type: e.kratos_courier_http_request_config_auth_type == null ? void 0 : e.kratos_courier_http_request_config_auth_type,
            kratos_courier_http_request_config_body: e.kratos_courier_http_request_config_body == null ? void 0 : e.kratos_courier_http_request_config_body,
            kratos_courier_http_request_config_headers: e.kratos_courier_http_request_config_headers == null ? void 0 : e.kratos_courier_http_request_config_headers,
            kratos_courier_http_request_config_method: e.kratos_courier_http_request_config_method == null ? void 0 : e.kratos_courier_http_request_config_method,
            kratos_courier_http_request_config_url: e.kratos_courier_http_request_config_url == null ? void 0 : e.kratos_courier_http_request_config_url,
            kratos_courier_smtp_connection_uri: e.kratos_courier_smtp_connection_uri == null ? void 0 : e.kratos_courier_smtp_connection_uri,
            kratos_courier_smtp_from_address: e.kratos_courier_smtp_from_address == null ? void 0 : e.kratos_courier_smtp_from_address,
            kratos_courier_smtp_from_name: e.kratos_courier_smtp_from_name == null ? void 0 : e.kratos_courier_smtp_from_name,
            kratos_courier_smtp_headers: e.kratos_courier_smtp_headers == null ? void 0 : e.kratos_courier_smtp_headers,
            kratos_courier_smtp_local_name: e.kratos_courier_smtp_local_name == null ? void 0 : e.kratos_courier_smtp_local_name,
            kratos_courier_templates_login_code_valid_email_body_html: e.kratos_courier_templates_login_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_body_html,
            kratos_courier_templates_login_code_valid_email_body_plaintext: e.kratos_courier_templates_login_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_body_plaintext,
            kratos_courier_templates_login_code_valid_email_subject: e.kratos_courier_templates_login_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_login_code_valid_email_subject,
            kratos_courier_templates_login_code_valid_sms_body_plaintext: e.kratos_courier_templates_login_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_login_code_valid_sms_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_body_html: e.kratos_courier_templates_recovery_code_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_body_html,
            kratos_courier_templates_recovery_code_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_subject: e.kratos_courier_templates_recovery_code_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_code_invalid_email_subject,
            kratos_courier_templates_recovery_code_valid_email_body_html: e.kratos_courier_templates_recovery_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_body_html,
            kratos_courier_templates_recovery_code_valid_email_body_plaintext: e.kratos_courier_templates_recovery_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_body_plaintext,
            kratos_courier_templates_recovery_code_valid_email_subject: e.kratos_courier_templates_recovery_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_code_valid_email_subject,
            kratos_courier_templates_recovery_invalid_email_body_html: e.kratos_courier_templates_recovery_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_body_html,
            kratos_courier_templates_recovery_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_invalid_email_subject: e.kratos_courier_templates_recovery_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_invalid_email_subject,
            kratos_courier_templates_recovery_valid_email_body_html: e.kratos_courier_templates_recovery_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_body_html,
            kratos_courier_templates_recovery_valid_email_body_plaintext: e.kratos_courier_templates_recovery_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_body_plaintext,
            kratos_courier_templates_recovery_valid_email_subject: e.kratos_courier_templates_recovery_valid_email_subject == null ? void 0 : e.kratos_courier_templates_recovery_valid_email_subject,
            kratos_courier_templates_registration_code_valid_email_body_html: e.kratos_courier_templates_registration_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_body_html,
            kratos_courier_templates_registration_code_valid_email_body_plaintext: e.kratos_courier_templates_registration_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_body_plaintext,
            kratos_courier_templates_registration_code_valid_email_subject: e.kratos_courier_templates_registration_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_registration_code_valid_email_subject,
            kratos_courier_templates_registration_code_valid_sms_body_plaintext: e.kratos_courier_templates_registration_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_registration_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_body_html: e.kratos_courier_templates_verification_code_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_body_html,
            kratos_courier_templates_verification_code_invalid_email_body_plaintext: e.kratos_courier_templates_verification_code_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_subject: e.kratos_courier_templates_verification_code_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_code_invalid_email_subject,
            kratos_courier_templates_verification_code_valid_email_body_html: e.kratos_courier_templates_verification_code_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_body_html,
            kratos_courier_templates_verification_code_valid_email_body_plaintext: e.kratos_courier_templates_verification_code_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_body_plaintext,
            kratos_courier_templates_verification_code_valid_email_subject: e.kratos_courier_templates_verification_code_valid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_code_valid_email_subject,
            kratos_courier_templates_verification_code_valid_sms_body_plaintext: e.kratos_courier_templates_verification_code_valid_sms_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_invalid_email_body_html: e.kratos_courier_templates_verification_invalid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_body_html,
            kratos_courier_templates_verification_invalid_email_body_plaintext: e.kratos_courier_templates_verification_invalid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_body_plaintext,
            kratos_courier_templates_verification_invalid_email_subject: e.kratos_courier_templates_verification_invalid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_invalid_email_subject,
            kratos_courier_templates_verification_valid_email_body_html: e.kratos_courier_templates_verification_valid_email_body_html == null ? void 0 : e.kratos_courier_templates_verification_valid_email_body_html,
            kratos_courier_templates_verification_valid_email_body_plaintext: e.kratos_courier_templates_verification_valid_email_body_plaintext == null ? void 0 : e.kratos_courier_templates_verification_valid_email_body_plaintext,
            kratos_courier_templates_verification_valid_email_subject: e.kratos_courier_templates_verification_valid_email_subject == null ? void 0 : e.kratos_courier_templates_verification_valid_email_subject,
            kratos_feature_flags_cacheable_sessions: e.kratos_feature_flags_cacheable_sessions == null ? void 0 : e.kratos_feature_flags_cacheable_sessions,
            kratos_feature_flags_cacheable_sessions_max_age: e.kratos_feature_flags_cacheable_sessions_max_age == null ? void 0 : e.kratos_feature_flags_cacheable_sessions_max_age,
            kratos_feature_flags_choose_recovery_address: e.kratos_feature_flags_choose_recovery_address == null ? void 0 : e.kratos_feature_flags_choose_recovery_address,
            kratos_feature_flags_faster_session_extend: e.kratos_feature_flags_faster_session_extend == null ? void 0 : e.kratos_feature_flags_faster_session_extend,
            kratos_feature_flags_legacy_continue_with_verification_ui: e.kratos_feature_flags_legacy_continue_with_verification_ui == null ? void 0 : e.kratos_feature_flags_legacy_continue_with_verification_ui,
            kratos_feature_flags_legacy_oidc_registration_node_group: e.kratos_feature_flags_legacy_oidc_registration_node_group == null ? void 0 : e.kratos_feature_flags_legacy_oidc_registration_node_group,
            kratos_feature_flags_legacy_require_verified_login_error: e.kratos_feature_flags_legacy_require_verified_login_error == null ? void 0 : e.kratos_feature_flags_legacy_require_verified_login_error,
            kratos_feature_flags_password_profile_registration_node_group: e.kratos_feature_flags_password_profile_registration_node_group == null ? void 0 : e.kratos_feature_flags_password_profile_registration_node_group,
            kratos_feature_flags_use_continue_with_transitions: e.kratos_feature_flags_use_continue_with_transitions == null ? void 0 : e.kratos_feature_flags_use_continue_with_transitions,
            kratos_identity_schemas: e.kratos_identity_schemas == null ? void 0 : e.kratos_identity_schemas.map(ht),
            kratos_oauth2_provider_headers: e.kratos_oauth2_provider_headers == null ? void 0 : e.kratos_oauth2_provider_headers,
            kratos_oauth2_provider_override_return_to: e.kratos_oauth2_provider_override_return_to == null ? void 0 : e.kratos_oauth2_provider_override_return_to,
            kratos_oauth2_provider_url: e.kratos_oauth2_provider_url == null ? void 0 : e.kratos_oauth2_provider_url,
            kratos_preview_default_read_consistency_level: e.kratos_preview_default_read_consistency_level == null ? void 0 : e.kratos_preview_default_read_consistency_level,
            kratos_secrets_cipher: e.kratos_secrets_cipher == null ? void 0 : e.kratos_secrets_cipher,
            kratos_secrets_cookie: e.kratos_secrets_cookie == null ? void 0 : e.kratos_secrets_cookie,
            kratos_secrets_default: e.kratos_secrets_default == null ? void 0 : e.kratos_secrets_default,
            kratos_secrets_pagination: e.kratos_secrets_pagination == null ? void 0 : e.kratos_secrets_pagination,
            kratos_security_account_enumeration_mitigate: e.kratos_security_account_enumeration_mitigate == null ? void 0 : e.kratos_security_account_enumeration_mitigate,
            kratos_selfservice_allowed_return_urls: e.kratos_selfservice_allowed_return_urls == null ? void 0 : e.kratos_selfservice_allowed_return_urls,
            kratos_selfservice_default_browser_return_url: e.kratos_selfservice_default_browser_return_url == null ? void 0 : e.kratos_selfservice_default_browser_return_url,
            kratos_selfservice_flows_error_ui_url: e.kratos_selfservice_flows_error_ui_url == null ? void 0 : e.kratos_selfservice_flows_error_ui_url,
            kratos_selfservice_flows_login_after_code_default_browser_return_url: e.kratos_selfservice_flows_login_after_code_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_code_default_browser_return_url,
            kratos_selfservice_flows_login_after_default_browser_return_url: e.kratos_selfservice_flows_login_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_default_browser_return_url,
            kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_login_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_login_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_login_after_password_default_browser_return_url: e.kratos_selfservice_flows_login_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_password_default_browser_return_url,
            kratos_selfservice_flows_login_after_totp_default_browser_return_url: e.kratos_selfservice_flows_login_after_totp_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_totp_default_browser_return_url,
            kratos_selfservice_flows_login_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_login_lifespan: e.kratos_selfservice_flows_login_lifespan == null ? void 0 : e.kratos_selfservice_flows_login_lifespan,
            kratos_selfservice_flows_login_ui_url: e.kratos_selfservice_flows_login_ui_url == null ? void 0 : e.kratos_selfservice_flows_login_ui_url,
            kratos_selfservice_flows_logout_after_default_browser_return_url: e.kratos_selfservice_flows_logout_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_logout_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_after_default_browser_return_url: e.kratos_selfservice_flows_recovery_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_recovery_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_enabled: e.kratos_selfservice_flows_recovery_enabled == null ? void 0 : e.kratos_selfservice_flows_recovery_enabled,
            kratos_selfservice_flows_recovery_lifespan: e.kratos_selfservice_flows_recovery_lifespan == null ? void 0 : e.kratos_selfservice_flows_recovery_lifespan,
            kratos_selfservice_flows_recovery_notify_unknown_recipients: e.kratos_selfservice_flows_recovery_notify_unknown_recipients == null ? void 0 : e.kratos_selfservice_flows_recovery_notify_unknown_recipients,
            kratos_selfservice_flows_recovery_ui_url: e.kratos_selfservice_flows_recovery_ui_url == null ? void 0 : e.kratos_selfservice_flows_recovery_ui_url,
            kratos_selfservice_flows_recovery_use: e.kratos_selfservice_flows_recovery_use == null ? void 0 : e.kratos_selfservice_flows_recovery_use,
            kratos_selfservice_flows_registration_after_code_default_browser_return_url: e.kratos_selfservice_flows_registration_after_code_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_code_default_browser_return_url,
            kratos_selfservice_flows_registration_after_default_browser_return_url: e.kratos_selfservice_flows_registration_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_default_browser_return_url,
            kratos_selfservice_flows_registration_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_registration_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_registration_after_password_default_browser_return_url: e.kratos_selfservice_flows_registration_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_password_default_browser_return_url,
            kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_registration_enable_legacy_one_step: e.kratos_selfservice_flows_registration_enable_legacy_one_step == null ? void 0 : e.kratos_selfservice_flows_registration_enable_legacy_one_step,
            kratos_selfservice_flows_registration_enabled: e.kratos_selfservice_flows_registration_enabled == null ? void 0 : e.kratos_selfservice_flows_registration_enabled,
            kratos_selfservice_flows_registration_lifespan: e.kratos_selfservice_flows_registration_lifespan == null ? void 0 : e.kratos_selfservice_flows_registration_lifespan,
            kratos_selfservice_flows_registration_login_hints: e.kratos_selfservice_flows_registration_login_hints == null ? void 0 : e.kratos_selfservice_flows_registration_login_hints,
            kratos_selfservice_flows_registration_ui_url: e.kratos_selfservice_flows_registration_ui_url == null ? void 0 : e.kratos_selfservice_flows_registration_ui_url,
            kratos_selfservice_flows_settings_after_default_browser_return_url: e.kratos_selfservice_flows_settings_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_default_browser_return_url,
            kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_settings_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_settings_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_settings_after_password_default_browser_return_url: e.kratos_selfservice_flows_settings_after_password_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_password_default_browser_return_url,
            kratos_selfservice_flows_settings_after_profile_default_browser_return_url: e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url,
            kratos_selfservice_flows_settings_after_totp_default_browser_return_url: e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url,
            kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_settings_lifespan: e.kratos_selfservice_flows_settings_lifespan == null ? void 0 : e.kratos_selfservice_flows_settings_lifespan,
            kratos_selfservice_flows_settings_privileged_session_max_age: e.kratos_selfservice_flows_settings_privileged_session_max_age == null ? void 0 : e.kratos_selfservice_flows_settings_privileged_session_max_age,
            kratos_selfservice_flows_settings_required_aal: e.kratos_selfservice_flows_settings_required_aal == null ? void 0 : e.kratos_selfservice_flows_settings_required_aal,
            kratos_selfservice_flows_settings_ui_url: e.kratos_selfservice_flows_settings_ui_url == null ? void 0 : e.kratos_selfservice_flows_settings_ui_url,
            kratos_selfservice_flows_verification_after_default_browser_return_url: e.kratos_selfservice_flows_verification_after_default_browser_return_url == null ? void 0 : e.kratos_selfservice_flows_verification_after_default_browser_return_url,
            kratos_selfservice_flows_verification_enabled: e.kratos_selfservice_flows_verification_enabled == null ? void 0 : e.kratos_selfservice_flows_verification_enabled,
            kratos_selfservice_flows_verification_lifespan: e.kratos_selfservice_flows_verification_lifespan == null ? void 0 : e.kratos_selfservice_flows_verification_lifespan,
            kratos_selfservice_flows_verification_notify_unknown_recipients: e.kratos_selfservice_flows_verification_notify_unknown_recipients == null ? void 0 : e.kratos_selfservice_flows_verification_notify_unknown_recipients,
            kratos_selfservice_flows_verification_ui_url: e.kratos_selfservice_flows_verification_ui_url == null ? void 0 : e.kratos_selfservice_flows_verification_ui_url,
            kratos_selfservice_flows_verification_use: e.kratos_selfservice_flows_verification_use == null ? void 0 : e.kratos_selfservice_flows_verification_use,
            kratos_selfservice_methods_captcha_config_allowed_domains: e.kratos_selfservice_methods_captcha_config_allowed_domains == null ? void 0 : e.kratos_selfservice_methods_captcha_config_allowed_domains,
            kratos_selfservice_methods_captcha_config_cf_turnstile_secret: e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret == null ? void 0 : e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret,
            kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey: e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey == null ? void 0 : e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey,
            kratos_selfservice_methods_captcha_config_legacy_inject_node: e.kratos_selfservice_methods_captcha_config_legacy_inject_node == null ? void 0 : e.kratos_selfservice_methods_captcha_config_legacy_inject_node,
            kratos_selfservice_methods_captcha_enabled: e.kratos_selfservice_methods_captcha_enabled == null ? void 0 : e.kratos_selfservice_methods_captcha_enabled,
            kratos_selfservice_methods_code_config_lifespan: e.kratos_selfservice_methods_code_config_lifespan == null ? void 0 : e.kratos_selfservice_methods_code_config_lifespan,
            kratos_selfservice_methods_code_config_max_submissions: e.kratos_selfservice_methods_code_config_max_submissions == null ? void 0 : e.kratos_selfservice_methods_code_config_max_submissions,
            kratos_selfservice_methods_code_config_missing_credential_fallback_enabled: e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled == null ? void 0 : e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled,
            kratos_selfservice_methods_code_enabled: e.kratos_selfservice_methods_code_enabled == null ? void 0 : e.kratos_selfservice_methods_code_enabled,
            kratos_selfservice_methods_code_mfa_enabled: e.kratos_selfservice_methods_code_mfa_enabled == null ? void 0 : e.kratos_selfservice_methods_code_mfa_enabled,
            kratos_selfservice_methods_code_passwordless_enabled: e.kratos_selfservice_methods_code_passwordless_enabled == null ? void 0 : e.kratos_selfservice_methods_code_passwordless_enabled,
            kratos_selfservice_methods_code_passwordless_login_fallback_enabled: e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled == null ? void 0 : e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled,
            kratos_selfservice_methods_link_config_base_url: e.kratos_selfservice_methods_link_config_base_url == null ? void 0 : e.kratos_selfservice_methods_link_config_base_url,
            kratos_selfservice_methods_link_config_lifespan: e.kratos_selfservice_methods_link_config_lifespan == null ? void 0 : e.kratos_selfservice_methods_link_config_lifespan,
            kratos_selfservice_methods_link_enabled: e.kratos_selfservice_methods_link_enabled == null ? void 0 : e.kratos_selfservice_methods_link_enabled,
            kratos_selfservice_methods_lookup_secret_enabled: e.kratos_selfservice_methods_lookup_secret_enabled == null ? void 0 : e.kratos_selfservice_methods_lookup_secret_enabled,
            kratos_selfservice_methods_oidc_config_base_redirect_uri: e.kratos_selfservice_methods_oidc_config_base_redirect_uri == null ? void 0 : e.kratos_selfservice_methods_oidc_config_base_redirect_uri,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(j),
            kratos_selfservice_methods_oidc_enable_auto_link_policy: e.kratos_selfservice_methods_oidc_enable_auto_link_policy == null ? void 0 : e.kratos_selfservice_methods_oidc_enable_auto_link_policy,
            kratos_selfservice_methods_oidc_enabled: e.kratos_selfservice_methods_oidc_enabled == null ? void 0 : e.kratos_selfservice_methods_oidc_enabled,
            kratos_selfservice_methods_passkey_config_rp_display_name: e.kratos_selfservice_methods_passkey_config_rp_display_name == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_display_name,
            kratos_selfservice_methods_passkey_config_rp_id: e.kratos_selfservice_methods_passkey_config_rp_id == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_id,
            kratos_selfservice_methods_passkey_config_rp_origins: e.kratos_selfservice_methods_passkey_config_rp_origins == null ? void 0 : e.kratos_selfservice_methods_passkey_config_rp_origins,
            kratos_selfservice_methods_passkey_enabled: e.kratos_selfservice_methods_passkey_enabled == null ? void 0 : e.kratos_selfservice_methods_passkey_enabled,
            kratos_selfservice_methods_password_config_haveibeenpwned_enabled: e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled == null ? void 0 : e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled,
            kratos_selfservice_methods_password_config_identifier_similarity_check_enabled: e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled == null ? void 0 : e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled,
            kratos_selfservice_methods_password_config_ignore_network_errors: e.kratos_selfservice_methods_password_config_ignore_network_errors == null ? void 0 : e.kratos_selfservice_methods_password_config_ignore_network_errors,
            kratos_selfservice_methods_password_config_max_breaches: e.kratos_selfservice_methods_password_config_max_breaches == null ? void 0 : e.kratos_selfservice_methods_password_config_max_breaches,
            kratos_selfservice_methods_password_config_min_password_length: e.kratos_selfservice_methods_password_config_min_password_length == null ? void 0 : e.kratos_selfservice_methods_password_config_min_password_length,
            kratos_selfservice_methods_password_enabled: e.kratos_selfservice_methods_password_enabled == null ? void 0 : e.kratos_selfservice_methods_password_enabled,
            kratos_selfservice_methods_profile_enabled: e.kratos_selfservice_methods_profile_enabled == null ? void 0 : e.kratos_selfservice_methods_profile_enabled,
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(te),
            kratos_selfservice_methods_saml_enabled: e.kratos_selfservice_methods_saml_enabled == null ? void 0 : e.kratos_selfservice_methods_saml_enabled,
            kratos_selfservice_methods_totp_config_issuer: e.kratos_selfservice_methods_totp_config_issuer == null ? void 0 : e.kratos_selfservice_methods_totp_config_issuer,
            kratos_selfservice_methods_totp_enabled: e.kratos_selfservice_methods_totp_enabled == null ? void 0 : e.kratos_selfservice_methods_totp_enabled,
            kratos_selfservice_methods_webauthn_config_passwordless: e.kratos_selfservice_methods_webauthn_config_passwordless == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_passwordless,
            kratos_selfservice_methods_webauthn_config_rp_display_name: e.kratos_selfservice_methods_webauthn_config_rp_display_name == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_display_name,
            kratos_selfservice_methods_webauthn_config_rp_icon: e.kratos_selfservice_methods_webauthn_config_rp_icon == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_icon,
            kratos_selfservice_methods_webauthn_config_rp_id: e.kratos_selfservice_methods_webauthn_config_rp_id == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_id,
            kratos_selfservice_methods_webauthn_config_rp_origins: e.kratos_selfservice_methods_webauthn_config_rp_origins == null ? void 0 : e.kratos_selfservice_methods_webauthn_config_rp_origins,
            kratos_selfservice_methods_webauthn_enabled: e.kratos_selfservice_methods_webauthn_enabled == null ? void 0 : e.kratos_selfservice_methods_webauthn_enabled,
            kratos_session_cookie_persistent: e.kratos_session_cookie_persistent == null ? void 0 : e.kratos_session_cookie_persistent,
            kratos_session_cookie_same_site: e.kratos_session_cookie_same_site == null ? void 0 : e.kratos_session_cookie_same_site,
            kratos_session_lifespan: e.kratos_session_lifespan == null ? void 0 : e.kratos_session_lifespan,
            kratos_session_whoami_required_aal: e.kratos_session_whoami_required_aal == null ? void 0 : e.kratos_session_whoami_required_aal,
            kratos_session_whoami_tokenizer_templates: e.kratos_session_whoami_tokenizer_templates == null ? void 0 : e.kratos_session_whoami_tokenizer_templates.map(kt),
            name: e.name,
            organizations: e.organizations == null ? void 0 : e.organizations.map(x),
            project_id: e.project_id == null ? void 0 : e.project_id,
            project_revision_hooks: e.project_revision_hooks == null ? void 0 : e.project_revision_hooks.map(mt),
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Q),
            serve_admin_cors_allowed_origins: e.serve_admin_cors_allowed_origins == null ? void 0 : e.serve_admin_cors_allowed_origins,
            serve_admin_cors_enabled: e.serve_admin_cors_enabled == null ? void 0 : e.serve_admin_cors_enabled,
            serve_public_cors_allowed_origins: e.serve_public_cors_allowed_origins == null ? void 0 : e.serve_public_cors_allowed_origins,
            serve_public_cors_enabled: e.serve_public_cors_enabled == null ? void 0 : e.serve_public_cors_enabled,
            strict_security: e.strict_security == null ? void 0 : e.strict_security,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at)
        }
    }

    function _u(e) {
        return au(e, !1)
    }

    function au(e, t = !1) {
        return e == null ? e : {
            account_experience_default_locale: e.account_experience_default_locale,
            account_experience_favicon_dark: e.account_experience_favicon_dark,
            account_experience_favicon_light: e.account_experience_favicon_light,
            account_experience_locale_behavior: e.account_experience_locale_behavior,
            account_experience_logo_dark: e.account_experience_logo_dark,
            account_experience_logo_light: e.account_experience_logo_light,
            account_experience_theme_variables_dark: e.account_experience_theme_variables_dark,
            account_experience_theme_variables_light: e.account_experience_theme_variables_light,
            disable_account_experience_welcome_screen: e.disable_account_experience_welcome_screen,
            enable_ax_v2: e.enable_ax_v2,
            hydra_oauth2_allowed_top_level_claims: e.hydra_oauth2_allowed_top_level_claims,
            hydra_oauth2_client_credentials_default_grant_allowed_scope: e.hydra_oauth2_client_credentials_default_grant_allowed_scope,
            hydra_oauth2_exclude_not_before_claim: e.hydra_oauth2_exclude_not_before_claim,
            hydra_oauth2_grant_jwt_iat_optional: e.hydra_oauth2_grant_jwt_iat_optional,
            hydra_oauth2_grant_jwt_jti_optional: e.hydra_oauth2_grant_jwt_jti_optional,
            hydra_oauth2_grant_jwt_max_ttl: e.hydra_oauth2_grant_jwt_max_ttl,
            hydra_oauth2_grant_refresh_token_rotation_grace_period: e.hydra_oauth2_grant_refresh_token_rotation_grace_period,
            hydra_oauth2_mirror_top_level_claims: e.hydra_oauth2_mirror_top_level_claims,
            hydra_oauth2_pkce_enforced: e.hydra_oauth2_pkce_enforced,
            hydra_oauth2_pkce_enforced_for_public_clients: e.hydra_oauth2_pkce_enforced_for_public_clients,
            hydra_oauth2_refresh_token_hook: e.hydra_oauth2_refresh_token_hook,
            hydra_oauth2_token_hook: e.hydra_oauth2_token_hook,
            hydra_oidc_dynamic_client_registration_default_scope: e.hydra_oidc_dynamic_client_registration_default_scope,
            hydra_oidc_dynamic_client_registration_enabled: e.hydra_oidc_dynamic_client_registration_enabled,
            hydra_oidc_subject_identifiers_pairwise_salt: e.hydra_oidc_subject_identifiers_pairwise_salt,
            hydra_oidc_subject_identifiers_supported_types: e.hydra_oidc_subject_identifiers_supported_types,
            hydra_secrets_cookie: e.hydra_secrets_cookie,
            hydra_secrets_pagination: e.hydra_secrets_pagination,
            hydra_secrets_system: e.hydra_secrets_system,
            hydra_serve_cookies_same_site_legacy_workaround: e.hydra_serve_cookies_same_site_legacy_workaround,
            hydra_serve_cookies_same_site_mode: e.hydra_serve_cookies_same_site_mode,
            hydra_strategies_access_token: e.hydra_strategies_access_token,
            hydra_strategies_jwt_scope_claim: e.hydra_strategies_jwt_scope_claim,
            hydra_strategies_scope: e.hydra_strategies_scope,
            hydra_ttl_access_token: e.hydra_ttl_access_token,
            hydra_ttl_auth_code: e.hydra_ttl_auth_code,
            hydra_ttl_id_token: e.hydra_ttl_id_token,
            hydra_ttl_login_consent_request: e.hydra_ttl_login_consent_request,
            hydra_ttl_refresh_token: e.hydra_ttl_refresh_token,
            hydra_urls_consent: e.hydra_urls_consent,
            hydra_urls_error: e.hydra_urls_error,
            hydra_urls_login: e.hydra_urls_login,
            hydra_urls_logout: e.hydra_urls_logout,
            hydra_urls_post_logout_redirect: e.hydra_urls_post_logout_redirect,
            hydra_urls_registration: e.hydra_urls_registration,
            hydra_urls_self_issuer: e.hydra_urls_self_issuer,
            hydra_webfinger_jwks_broadcast_keys: e.hydra_webfinger_jwks_broadcast_keys,
            hydra_webfinger_oidc_discovery_auth_url: e.hydra_webfinger_oidc_discovery_auth_url,
            hydra_webfinger_oidc_discovery_client_registration_url: e.hydra_webfinger_oidc_discovery_client_registration_url,
            hydra_webfinger_oidc_discovery_jwks_url: e.hydra_webfinger_oidc_discovery_jwks_url,
            hydra_webfinger_oidc_discovery_supported_claims: e.hydra_webfinger_oidc_discovery_supported_claims,
            hydra_webfinger_oidc_discovery_supported_scope: e.hydra_webfinger_oidc_discovery_supported_scope,
            hydra_webfinger_oidc_discovery_token_url: e.hydra_webfinger_oidc_discovery_token_url,
            hydra_webfinger_oidc_discovery_userinfo_url: e.hydra_webfinger_oidc_discovery_userinfo_url,
            keto_namespace_configuration: e.keto_namespace_configuration,
            keto_namespaces: e.keto_namespaces == null ? void 0 : e.keto_namespaces.map(pt),
            keto_secrets_pagination: e.keto_secrets_pagination,
            kratos_cookies_same_site: e.kratos_cookies_same_site,
            kratos_courier_channels: e.kratos_courier_channels == null ? void 0 : e.kratos_courier_channels.map(lt),
            kratos_courier_delivery_strategy: e.kratos_courier_delivery_strategy,
            kratos_courier_http_request_config_auth_api_key_in: e.kratos_courier_http_request_config_auth_api_key_in,
            kratos_courier_http_request_config_auth_api_key_name: e.kratos_courier_http_request_config_auth_api_key_name,
            kratos_courier_http_request_config_auth_api_key_value: e.kratos_courier_http_request_config_auth_api_key_value,
            kratos_courier_http_request_config_auth_basic_auth_password: e.kratos_courier_http_request_config_auth_basic_auth_password,
            kratos_courier_http_request_config_auth_basic_auth_user: e.kratos_courier_http_request_config_auth_basic_auth_user,
            kratos_courier_http_request_config_auth_type: e.kratos_courier_http_request_config_auth_type,
            kratos_courier_http_request_config_body: e.kratos_courier_http_request_config_body,
            kratos_courier_http_request_config_headers: e.kratos_courier_http_request_config_headers,
            kratos_courier_http_request_config_method: e.kratos_courier_http_request_config_method,
            kratos_courier_http_request_config_url: e.kratos_courier_http_request_config_url,
            kratos_courier_smtp_connection_uri: e.kratos_courier_smtp_connection_uri,
            kratos_courier_smtp_from_address: e.kratos_courier_smtp_from_address,
            kratos_courier_smtp_from_name: e.kratos_courier_smtp_from_name,
            kratos_courier_smtp_headers: e.kratos_courier_smtp_headers,
            kratos_courier_smtp_local_name: e.kratos_courier_smtp_local_name,
            kratos_courier_templates_login_code_valid_email_body_html: e.kratos_courier_templates_login_code_valid_email_body_html,
            kratos_courier_templates_login_code_valid_email_body_plaintext: e.kratos_courier_templates_login_code_valid_email_body_plaintext,
            kratos_courier_templates_login_code_valid_email_subject: e.kratos_courier_templates_login_code_valid_email_subject,
            kratos_courier_templates_login_code_valid_sms_body_plaintext: e.kratos_courier_templates_login_code_valid_sms_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_body_html: e.kratos_courier_templates_recovery_code_invalid_email_body_html,
            kratos_courier_templates_recovery_code_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_code_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_code_invalid_email_subject: e.kratos_courier_templates_recovery_code_invalid_email_subject,
            kratos_courier_templates_recovery_code_valid_email_body_html: e.kratos_courier_templates_recovery_code_valid_email_body_html,
            kratos_courier_templates_recovery_code_valid_email_body_plaintext: e.kratos_courier_templates_recovery_code_valid_email_body_plaintext,
            kratos_courier_templates_recovery_code_valid_email_subject: e.kratos_courier_templates_recovery_code_valid_email_subject,
            kratos_courier_templates_recovery_invalid_email_body_html: e.kratos_courier_templates_recovery_invalid_email_body_html,
            kratos_courier_templates_recovery_invalid_email_body_plaintext: e.kratos_courier_templates_recovery_invalid_email_body_plaintext,
            kratos_courier_templates_recovery_invalid_email_subject: e.kratos_courier_templates_recovery_invalid_email_subject,
            kratos_courier_templates_recovery_valid_email_body_html: e.kratos_courier_templates_recovery_valid_email_body_html,
            kratos_courier_templates_recovery_valid_email_body_plaintext: e.kratos_courier_templates_recovery_valid_email_body_plaintext,
            kratos_courier_templates_recovery_valid_email_subject: e.kratos_courier_templates_recovery_valid_email_subject,
            kratos_courier_templates_registration_code_valid_email_body_html: e.kratos_courier_templates_registration_code_valid_email_body_html,
            kratos_courier_templates_registration_code_valid_email_body_plaintext: e.kratos_courier_templates_registration_code_valid_email_body_plaintext,
            kratos_courier_templates_registration_code_valid_email_subject: e.kratos_courier_templates_registration_code_valid_email_subject,
            kratos_courier_templates_registration_code_valid_sms_body_plaintext: e.kratos_courier_templates_registration_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_body_html: e.kratos_courier_templates_verification_code_invalid_email_body_html,
            kratos_courier_templates_verification_code_invalid_email_body_plaintext: e.kratos_courier_templates_verification_code_invalid_email_body_plaintext,
            kratos_courier_templates_verification_code_invalid_email_subject: e.kratos_courier_templates_verification_code_invalid_email_subject,
            kratos_courier_templates_verification_code_valid_email_body_html: e.kratos_courier_templates_verification_code_valid_email_body_html,
            kratos_courier_templates_verification_code_valid_email_body_plaintext: e.kratos_courier_templates_verification_code_valid_email_body_plaintext,
            kratos_courier_templates_verification_code_valid_email_subject: e.kratos_courier_templates_verification_code_valid_email_subject,
            kratos_courier_templates_verification_code_valid_sms_body_plaintext: e.kratos_courier_templates_verification_code_valid_sms_body_plaintext,
            kratos_courier_templates_verification_invalid_email_body_html: e.kratos_courier_templates_verification_invalid_email_body_html,
            kratos_courier_templates_verification_invalid_email_body_plaintext: e.kratos_courier_templates_verification_invalid_email_body_plaintext,
            kratos_courier_templates_verification_invalid_email_subject: e.kratos_courier_templates_verification_invalid_email_subject,
            kratos_courier_templates_verification_valid_email_body_html: e.kratos_courier_templates_verification_valid_email_body_html,
            kratos_courier_templates_verification_valid_email_body_plaintext: e.kratos_courier_templates_verification_valid_email_body_plaintext,
            kratos_courier_templates_verification_valid_email_subject: e.kratos_courier_templates_verification_valid_email_subject,
            kratos_feature_flags_cacheable_sessions: e.kratos_feature_flags_cacheable_sessions,
            kratos_feature_flags_cacheable_sessions_max_age: e.kratos_feature_flags_cacheable_sessions_max_age,
            kratos_feature_flags_choose_recovery_address: e.kratos_feature_flags_choose_recovery_address,
            kratos_feature_flags_faster_session_extend: e.kratos_feature_flags_faster_session_extend,
            kratos_feature_flags_legacy_continue_with_verification_ui: e.kratos_feature_flags_legacy_continue_with_verification_ui,
            kratos_feature_flags_legacy_oidc_registration_node_group: e.kratos_feature_flags_legacy_oidc_registration_node_group,
            kratos_feature_flags_legacy_require_verified_login_error: e.kratos_feature_flags_legacy_require_verified_login_error,
            kratos_feature_flags_password_profile_registration_node_group: e.kratos_feature_flags_password_profile_registration_node_group,
            kratos_feature_flags_use_continue_with_transitions: e.kratos_feature_flags_use_continue_with_transitions,
            kratos_identity_schemas: e.kratos_identity_schemas == null ? void 0 : e.kratos_identity_schemas.map(gt),
            kratos_oauth2_provider_headers: e.kratos_oauth2_provider_headers,
            kratos_oauth2_provider_override_return_to: e.kratos_oauth2_provider_override_return_to,
            kratos_oauth2_provider_url: e.kratos_oauth2_provider_url,
            kratos_preview_default_read_consistency_level: e.kratos_preview_default_read_consistency_level,
            kratos_secrets_cipher: e.kratos_secrets_cipher,
            kratos_secrets_cookie: e.kratos_secrets_cookie,
            kratos_secrets_default: e.kratos_secrets_default,
            kratos_secrets_pagination: e.kratos_secrets_pagination,
            kratos_security_account_enumeration_mitigate: e.kratos_security_account_enumeration_mitigate,
            kratos_selfservice_allowed_return_urls: e.kratos_selfservice_allowed_return_urls,
            kratos_selfservice_default_browser_return_url: e.kratos_selfservice_default_browser_return_url,
            kratos_selfservice_flows_error_ui_url: e.kratos_selfservice_flows_error_ui_url,
            kratos_selfservice_flows_login_after_code_default_browser_return_url: e.kratos_selfservice_flows_login_after_code_default_browser_return_url,
            kratos_selfservice_flows_login_after_default_browser_return_url: e.kratos_selfservice_flows_login_after_default_browser_return_url,
            kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_login_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_login_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_login_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_login_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_login_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_login_after_password_default_browser_return_url: e.kratos_selfservice_flows_login_after_password_default_browser_return_url,
            kratos_selfservice_flows_login_after_totp_default_browser_return_url: e.kratos_selfservice_flows_login_after_totp_default_browser_return_url,
            kratos_selfservice_flows_login_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_login_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_login_lifespan: e.kratos_selfservice_flows_login_lifespan,
            kratos_selfservice_flows_login_ui_url: e.kratos_selfservice_flows_login_ui_url,
            kratos_selfservice_flows_logout_after_default_browser_return_url: e.kratos_selfservice_flows_logout_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_after_default_browser_return_url: e.kratos_selfservice_flows_recovery_after_default_browser_return_url,
            kratos_selfservice_flows_recovery_enabled: e.kratos_selfservice_flows_recovery_enabled,
            kratos_selfservice_flows_recovery_lifespan: e.kratos_selfservice_flows_recovery_lifespan,
            kratos_selfservice_flows_recovery_notify_unknown_recipients: e.kratos_selfservice_flows_recovery_notify_unknown_recipients,
            kratos_selfservice_flows_recovery_ui_url: e.kratos_selfservice_flows_recovery_ui_url,
            kratos_selfservice_flows_recovery_use: e.kratos_selfservice_flows_recovery_use,
            kratos_selfservice_flows_registration_after_code_default_browser_return_url: e.kratos_selfservice_flows_registration_after_code_default_browser_return_url,
            kratos_selfservice_flows_registration_after_default_browser_return_url: e.kratos_selfservice_flows_registration_after_default_browser_return_url,
            kratos_selfservice_flows_registration_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_registration_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_registration_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_registration_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_registration_after_password_default_browser_return_url: e.kratos_selfservice_flows_registration_after_password_default_browser_return_url,
            kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_registration_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_registration_enable_legacy_one_step: e.kratos_selfservice_flows_registration_enable_legacy_one_step,
            kratos_selfservice_flows_registration_enabled: e.kratos_selfservice_flows_registration_enabled,
            kratos_selfservice_flows_registration_lifespan: e.kratos_selfservice_flows_registration_lifespan,
            kratos_selfservice_flows_registration_login_hints: e.kratos_selfservice_flows_registration_login_hints,
            kratos_selfservice_flows_registration_ui_url: e.kratos_selfservice_flows_registration_ui_url,
            kratos_selfservice_flows_settings_after_default_browser_return_url: e.kratos_selfservice_flows_settings_after_default_browser_return_url,
            kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url: e.kratos_selfservice_flows_settings_after_lookup_secret_default_browser_return_url,
            kratos_selfservice_flows_settings_after_oidc_default_browser_return_url: e.kratos_selfservice_flows_settings_after_oidc_default_browser_return_url,
            kratos_selfservice_flows_settings_after_passkey_default_browser_return_url: e.kratos_selfservice_flows_settings_after_passkey_default_browser_return_url,
            kratos_selfservice_flows_settings_after_password_default_browser_return_url: e.kratos_selfservice_flows_settings_after_password_default_browser_return_url,
            kratos_selfservice_flows_settings_after_profile_default_browser_return_url: e.kratos_selfservice_flows_settings_after_profile_default_browser_return_url,
            kratos_selfservice_flows_settings_after_totp_default_browser_return_url: e.kratos_selfservice_flows_settings_after_totp_default_browser_return_url,
            kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url: e.kratos_selfservice_flows_settings_after_webauthn_default_browser_return_url,
            kratos_selfservice_flows_settings_lifespan: e.kratos_selfservice_flows_settings_lifespan,
            kratos_selfservice_flows_settings_privileged_session_max_age: e.kratos_selfservice_flows_settings_privileged_session_max_age,
            kratos_selfservice_flows_settings_required_aal: e.kratos_selfservice_flows_settings_required_aal,
            kratos_selfservice_flows_settings_ui_url: e.kratos_selfservice_flows_settings_ui_url,
            kratos_selfservice_flows_verification_after_default_browser_return_url: e.kratos_selfservice_flows_verification_after_default_browser_return_url,
            kratos_selfservice_flows_verification_enabled: e.kratos_selfservice_flows_verification_enabled,
            kratos_selfservice_flows_verification_lifespan: e.kratos_selfservice_flows_verification_lifespan,
            kratos_selfservice_flows_verification_notify_unknown_recipients: e.kratos_selfservice_flows_verification_notify_unknown_recipients,
            kratos_selfservice_flows_verification_ui_url: e.kratos_selfservice_flows_verification_ui_url,
            kratos_selfservice_flows_verification_use: e.kratos_selfservice_flows_verification_use,
            kratos_selfservice_methods_captcha_config_allowed_domains: e.kratos_selfservice_methods_captcha_config_allowed_domains,
            kratos_selfservice_methods_captcha_config_cf_turnstile_secret: e.kratos_selfservice_methods_captcha_config_cf_turnstile_secret,
            kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey: e.kratos_selfservice_methods_captcha_config_cf_turnstile_sitekey,
            kratos_selfservice_methods_captcha_config_legacy_inject_node: e.kratos_selfservice_methods_captcha_config_legacy_inject_node,
            kratos_selfservice_methods_captcha_enabled: e.kratos_selfservice_methods_captcha_enabled,
            kratos_selfservice_methods_code_config_lifespan: e.kratos_selfservice_methods_code_config_lifespan,
            kratos_selfservice_methods_code_config_max_submissions: e.kratos_selfservice_methods_code_config_max_submissions,
            kratos_selfservice_methods_code_config_missing_credential_fallback_enabled: e.kratos_selfservice_methods_code_config_missing_credential_fallback_enabled,
            kratos_selfservice_methods_code_enabled: e.kratos_selfservice_methods_code_enabled,
            kratos_selfservice_methods_code_mfa_enabled: e.kratos_selfservice_methods_code_mfa_enabled,
            kratos_selfservice_methods_code_passwordless_enabled: e.kratos_selfservice_methods_code_passwordless_enabled,
            kratos_selfservice_methods_code_passwordless_login_fallback_enabled: e.kratos_selfservice_methods_code_passwordless_login_fallback_enabled,
            kratos_selfservice_methods_link_config_base_url: e.kratos_selfservice_methods_link_config_base_url,
            kratos_selfservice_methods_link_config_lifespan: e.kratos_selfservice_methods_link_config_lifespan,
            kratos_selfservice_methods_link_enabled: e.kratos_selfservice_methods_link_enabled,
            kratos_selfservice_methods_lookup_secret_enabled: e.kratos_selfservice_methods_lookup_secret_enabled,
            kratos_selfservice_methods_oidc_config_base_redirect_uri: e.kratos_selfservice_methods_oidc_config_base_redirect_uri,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(ee),
            kratos_selfservice_methods_oidc_enable_auto_link_policy: e.kratos_selfservice_methods_oidc_enable_auto_link_policy,
            kratos_selfservice_methods_oidc_enabled: e.kratos_selfservice_methods_oidc_enabled,
            kratos_selfservice_methods_passkey_config_rp_display_name: e.kratos_selfservice_methods_passkey_config_rp_display_name,
            kratos_selfservice_methods_passkey_config_rp_id: e.kratos_selfservice_methods_passkey_config_rp_id,
            kratos_selfservice_methods_passkey_config_rp_origins: e.kratos_selfservice_methods_passkey_config_rp_origins,
            kratos_selfservice_methods_passkey_enabled: e.kratos_selfservice_methods_passkey_enabled,
            kratos_selfservice_methods_password_config_haveibeenpwned_enabled: e.kratos_selfservice_methods_password_config_haveibeenpwned_enabled,
            kratos_selfservice_methods_password_config_identifier_similarity_check_enabled: e.kratos_selfservice_methods_password_config_identifier_similarity_check_enabled,
            kratos_selfservice_methods_password_config_ignore_network_errors: e.kratos_selfservice_methods_password_config_ignore_network_errors,
            kratos_selfservice_methods_password_config_max_breaches: e.kratos_selfservice_methods_password_config_max_breaches,
            kratos_selfservice_methods_password_config_min_password_length: e.kratos_selfservice_methods_password_config_min_password_length,
            kratos_selfservice_methods_password_enabled: e.kratos_selfservice_methods_password_enabled,
            kratos_selfservice_methods_profile_enabled: e.kratos_selfservice_methods_profile_enabled,
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(re),
            kratos_selfservice_methods_saml_enabled: e.kratos_selfservice_methods_saml_enabled,
            kratos_selfservice_methods_totp_config_issuer: e.kratos_selfservice_methods_totp_config_issuer,
            kratos_selfservice_methods_totp_enabled: e.kratos_selfservice_methods_totp_enabled,
            kratos_selfservice_methods_webauthn_config_passwordless: e.kratos_selfservice_methods_webauthn_config_passwordless,
            kratos_selfservice_methods_webauthn_config_rp_display_name: e.kratos_selfservice_methods_webauthn_config_rp_display_name,
            kratos_selfservice_methods_webauthn_config_rp_icon: e.kratos_selfservice_methods_webauthn_config_rp_icon,
            kratos_selfservice_methods_webauthn_config_rp_id: e.kratos_selfservice_methods_webauthn_config_rp_id,
            kratos_selfservice_methods_webauthn_config_rp_origins: e.kratos_selfservice_methods_webauthn_config_rp_origins,
            kratos_selfservice_methods_webauthn_enabled: e.kratos_selfservice_methods_webauthn_enabled,
            kratos_session_cookie_persistent: e.kratos_session_cookie_persistent,
            kratos_session_cookie_same_site: e.kratos_session_cookie_same_site,
            kratos_session_lifespan: e.kratos_session_lifespan,
            kratos_session_whoami_required_aal: e.kratos_session_whoami_required_aal,
            kratos_session_whoami_tokenizer_templates: e.kratos_session_whoami_tokenizer_templates == null ? void 0 : e.kratos_session_whoami_tokenizer_templates.map(bt),
            name: e.name,
            organizations: e.organizations == null ? void 0 : e.organizations.map(Z),
            project_id: e.project_id,
            project_revision_hooks: e.project_revision_hooks == null ? void 0 : e.project_revision_hooks.map(yt),
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Y),
            serve_admin_cors_allowed_origins: e.serve_admin_cors_allowed_origins,
            serve_admin_cors_enabled: e.serve_admin_cors_enabled,
            serve_public_cors_allowed_origins: e.serve_public_cors_allowed_origins,
            serve_public_cors_enabled: e.serve_public_cors_enabled,
            strict_security: e.strict_security
        }
    }
    const _T = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        aT = {
            EuCentral: "eu-central",
            AsiaNortheast: "asia-northeast",
            UsEast: "us-east",
            UsWest: "us-west",
            Us: "us",
            Global: "global",
            UnknownDefaultOpenApi: "11184809"
        },
        sT = {
            Running: "running",
            Halted: "halted",
            Deleted: "deleted",
            UnknownDefaultOpenApi: "11184809"
        };

    function dT(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("current_revision" in e) || e.current_revision === void 0 || !("environment" in e) || e.environment === void 0 || !("home_region" in e) || e.home_region === void 0 || !("hosts" in e) || e.hosts === void 0 || !("id" in e) || e.id === void 0 || !("slug" in e) || e.slug === void 0 || !("state" in e) || e.state === void 0 || !("updated_at" in e) || e.updated_at === void 0 || !("workspace_id" in e) || e.workspace_id === void 0)
    }

    function cT(e) {
        return su(e)
    }

    function su(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            current_revision: iu(e.current_revision),
            environment: e.environment,
            home_region: e.home_region,
            hosts: e.hosts,
            id: e.id,
            slug: e.slug,
            state: e.state,
            subscription_id: e.subscription_id == null ? void 0 : e.subscription_id,
            subscription_plan: e.subscription_plan == null ? void 0 : e.subscription_plan,
            updated_at: new Date(e.updated_at),
            workspace: e.workspace == null ? void 0 : I(e.workspace),
            workspace_id: e.workspace_id
        }
    }

    function uT(e) {
        return du(e, !1)
    }

    function du(e, t = !1) {
        return e == null ? e : {
            current_revision: _u(e.current_revision),
            environment: e.environment,
            hosts: e.hosts,
            subscription_id: e.subscription_id,
            subscription_plan: e.subscription_plan,
            workspace: we(e.workspace),
            workspace_id: e.workspace_id
        }
    }

    function lT(e) {
        return !0
    }

    function fT(e) {
        return cu(e)
    }

    function cu(e, t) {
        return e == null ? e : {
            authorization_code_grant_access_token_lifespan: e.authorization_code_grant_access_token_lifespan == null ? void 0 : e.authorization_code_grant_access_token_lifespan,
            authorization_code_grant_id_token_lifespan: e.authorization_code_grant_id_token_lifespan == null ? void 0 : e.authorization_code_grant_id_token_lifespan,
            authorization_code_grant_refresh_token_lifespan: e.authorization_code_grant_refresh_token_lifespan == null ? void 0 : e.authorization_code_grant_refresh_token_lifespan,
            client_credentials_grant_access_token_lifespan: e.client_credentials_grant_access_token_lifespan == null ? void 0 : e.client_credentials_grant_access_token_lifespan,
            device_authorization_grant_access_token_lifespan: e.device_authorization_grant_access_token_lifespan == null ? void 0 : e.device_authorization_grant_access_token_lifespan,
            device_authorization_grant_id_token_lifespan: e.device_authorization_grant_id_token_lifespan == null ? void 0 : e.device_authorization_grant_id_token_lifespan,
            device_authorization_grant_refresh_token_lifespan: e.device_authorization_grant_refresh_token_lifespan == null ? void 0 : e.device_authorization_grant_refresh_token_lifespan,
            implicit_grant_access_token_lifespan: e.implicit_grant_access_token_lifespan == null ? void 0 : e.implicit_grant_access_token_lifespan,
            implicit_grant_id_token_lifespan: e.implicit_grant_id_token_lifespan == null ? void 0 : e.implicit_grant_id_token_lifespan,
            jwt_bearer_grant_access_token_lifespan: e.jwt_bearer_grant_access_token_lifespan == null ? void 0 : e.jwt_bearer_grant_access_token_lifespan,
            refresh_token_grant_access_token_lifespan: e.refresh_token_grant_access_token_lifespan == null ? void 0 : e.refresh_token_grant_access_token_lifespan,
            refresh_token_grant_id_token_lifespan: e.refresh_token_grant_id_token_lifespan == null ? void 0 : e.refresh_token_grant_id_token_lifespan,
            refresh_token_grant_refresh_token_lifespan: e.refresh_token_grant_refresh_token_lifespan == null ? void 0 : e.refresh_token_grant_refresh_token_lifespan
        }
    }

    function uu(e) {
        return lu(e, !1)
    }

    function lu(e, t = !1) {
        return e == null ? e : {
            authorization_code_grant_access_token_lifespan: e.authorization_code_grant_access_token_lifespan,
            authorization_code_grant_id_token_lifespan: e.authorization_code_grant_id_token_lifespan,
            authorization_code_grant_refresh_token_lifespan: e.authorization_code_grant_refresh_token_lifespan,
            client_credentials_grant_access_token_lifespan: e.client_credentials_grant_access_token_lifespan,
            device_authorization_grant_access_token_lifespan: e.device_authorization_grant_access_token_lifespan,
            device_authorization_grant_id_token_lifespan: e.device_authorization_grant_id_token_lifespan,
            device_authorization_grant_refresh_token_lifespan: e.device_authorization_grant_refresh_token_lifespan,
            implicit_grant_access_token_lifespan: e.implicit_grant_access_token_lifespan,
            implicit_grant_id_token_lifespan: e.implicit_grant_id_token_lifespan,
            jwt_bearer_grant_access_token_lifespan: e.jwt_bearer_grant_access_token_lifespan,
            refresh_token_grant_access_token_lifespan: e.refresh_token_grant_access_token_lifespan,
            refresh_token_grant_id_token_lifespan: e.refresh_token_grant_id_token_lifespan,
            refresh_token_grant_refresh_token_lifespan: e.refresh_token_grant_refresh_token_lifespan
        }
    }

    function pT(e) {
        return !(!("challenge" in e) || e.challenge === void 0)
    }

    function Et(e) {
        return fu(e)
    }

    function fu(e, t) {
        return e == null ? e : {
            acr: e.acr == null ? void 0 : e.acr,
            amr: e.amr == null ? void 0 : e.amr,
            challenge: e.challenge,
            client: e.client == null ? void 0 : O(e.client),
            consent_request_id: e.consent_request_id == null ? void 0 : e.consent_request_id,
            context: e.context == null ? void 0 : e.context,
            device_challenge_id: e.device_challenge_id == null ? void 0 : e.device_challenge_id,
            login_challenge: e.login_challenge == null ? void 0 : e.login_challenge,
            login_session_id: e.login_session_id == null ? void 0 : e.login_session_id,
            oidc_context: e.oidc_context == null ? void 0 : Ft(e.oidc_context),
            request_url: e.request_url == null ? void 0 : e.request_url,
            requested_access_token_audience: e.requested_access_token_audience == null ? void 0 : e.requested_access_token_audience,
            requested_scope: e.requested_scope == null ? void 0 : e.requested_scope,
            skip: e.skip == null ? void 0 : e.skip,
            subject: e.subject == null ? void 0 : e.subject
        }
    }

    function pu(e) {
        return hu(e, !1)
    }

    function hu(e, t = !1) {
        return e == null ? e : {
            acr: e.acr,
            amr: e.amr,
            challenge: e.challenge,
            client: R(e.client),
            consent_request_id: e.consent_request_id,
            context: e.context,
            device_challenge_id: e.device_challenge_id,
            login_challenge: e.login_challenge,
            login_session_id: e.login_session_id,
            oidc_context: Ct(e.oidc_context),
            request_url: e.request_url,
            requested_access_token_audience: e.requested_access_token_audience,
            requested_scope: e.requested_scope,
            skip: e.skip,
            subject: e.subject
        }
    }

    function hT(e) {
        return !0
    }

    function gu(e) {
        return mu(e)
    }

    function mu(e, t) {
        return e == null ? e : {
            consent_request: e.consent_request == null ? void 0 : Et(e.consent_request),
            consent_request_id: e.consent_request_id == null ? void 0 : e.consent_request_id,
            context: e.context == null ? void 0 : e.context,
            grant_access_token_audience: e.grant_access_token_audience == null ? void 0 : e.grant_access_token_audience,
            grant_scope: e.grant_scope == null ? void 0 : e.grant_scope,
            handled_at: e.handled_at == null ? void 0 : new Date(e.handled_at),
            remember: e.remember == null ? void 0 : e.remember,
            remember_for: e.remember_for == null ? void 0 : e.remember_for,
            session: e.session == null ? void 0 : Ue(e.session)
        }
    }

    function gT(e) {
        return yu(e, !1)
    }

    function yu(e, t = !1) {
        return e == null ? e : {
            consent_request: pu(e.consent_request),
            consent_request_id: e.consent_request_id,
            context: e.context,
            grant_access_token_audience: e.grant_access_token_audience,
            grant_scope: e.grant_scope,
            handled_at: e.handled_at == null ? void 0 : e.handled_at.toISOString(),
            remember: e.remember,
            remember_for: e.remember_for,
            session: Ee(e.session)
        }
    }

    function mT(e) {
        return !0
    }

    function ku(e) {
        return bu(e)
    }

    function bu(e, t) {
        return e == null ? e : {
            challenge: e.challenge == null ? void 0 : e.challenge,
            client: e.client == null ? void 0 : O(e.client),
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            request_url: e.request_url == null ? void 0 : e.request_url,
            requested_at: e.requested_at == null ? void 0 : new Date(e.requested_at),
            rp_initiated: e.rp_initiated == null ? void 0 : e.rp_initiated,
            sid: e.sid == null ? void 0 : e.sid,
            subject: e.subject == null ? void 0 : e.subject
        }
    }

    function yT(e) {
        return wu(e, !1)
    }

    function wu(e, t = !1) {
        return e == null ? e : {
            challenge: e.challenge,
            client: R(e.client),
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            request_url: e.request_url,
            requested_at: e.requested_at == null ? void 0 : e.requested_at.toISOString(),
            rp_initiated: e.rp_initiated,
            sid: e.sid,
            subject: e.subject
        }
    }

    function kT(e) {
        return !(!("redirect_to" in e) || e.redirect_to === void 0)
    }

    function z(e) {
        return Su(e)
    }

    function Su(e, t) {
        return e == null ? e : {
            redirect_to: e.redirect_to
        }
    }

    function bT(e) {
        return Ou(e, !1)
    }

    function Ou(e, t = !1) {
        return e == null ? e : {
            redirect_to: e.redirect_to
        }
    }

    function wT(e) {
        return !0
    }

    function Tu(e) {
        return vu(e)
    }

    function vu(e, t) {
        return e == null ? e : {
            access_token: e.access_token == null ? void 0 : e.access_token,
            expires_in: e.expires_in == null ? void 0 : e.expires_in,
            id_token: e.id_token == null ? void 0 : e.id_token,
            refresh_token: e.refresh_token == null ? void 0 : e.refresh_token,
            scope: e.scope == null ? void 0 : e.scope,
            token_type: e.token_type == null ? void 0 : e.token_type
        }
    }

    function ST(e) {
        return Nu(e, !1)
    }

    function Nu(e, t = !1) {
        return e == null ? e : {
            access_token: e.access_token,
            expires_in: e.expires_in,
            id_token: e.id_token,
            refresh_token: e.refresh_token,
            scope: e.scope,
            token_type: e.token_type
        }
    }

    function OT(e) {
        return !(!("authorization_endpoint" in e) || e.authorization_endpoint === void 0 || !("device_authorization_endpoint" in e) || e.device_authorization_endpoint === void 0 || !("id_token_signed_response_alg" in e) || e.id_token_signed_response_alg === void 0 || !("id_token_signing_alg_values_supported" in e) || e.id_token_signing_alg_values_supported === void 0 || !("issuer" in e) || e.issuer === void 0 || !("jwks_uri" in e) || e.jwks_uri === void 0 || !("response_types_supported" in e) || e.response_types_supported === void 0 || !("subject_types_supported" in e) || e.subject_types_supported === void 0 || !("token_endpoint" in e) || e.token_endpoint === void 0 || !("userinfo_signed_response_alg" in e) || e.userinfo_signed_response_alg === void 0)
    }

    function Ju(e) {
        return Ru(e)
    }

    function Ru(e, t) {
        return e == null ? e : {
            authorization_endpoint: e.authorization_endpoint,
            backchannel_logout_session_supported: e.backchannel_logout_session_supported == null ? void 0 : e.backchannel_logout_session_supported,
            backchannel_logout_supported: e.backchannel_logout_supported == null ? void 0 : e.backchannel_logout_supported,
            claims_parameter_supported: e.claims_parameter_supported == null ? void 0 : e.claims_parameter_supported,
            claims_supported: e.claims_supported == null ? void 0 : e.claims_supported,
            code_challenge_methods_supported: e.code_challenge_methods_supported == null ? void 0 : e.code_challenge_methods_supported,
            credentials_endpoint_draft_00: e.credentials_endpoint_draft_00 == null ? void 0 : e.credentials_endpoint_draft_00,
            credentials_supported_draft_00: e.credentials_supported_draft_00 == null ? void 0 : e.credentials_supported_draft_00.map(aa),
            device_authorization_endpoint: e.device_authorization_endpoint,
            end_session_endpoint: e.end_session_endpoint == null ? void 0 : e.end_session_endpoint,
            frontchannel_logout_session_supported: e.frontchannel_logout_session_supported == null ? void 0 : e.frontchannel_logout_session_supported,
            frontchannel_logout_supported: e.frontchannel_logout_supported == null ? void 0 : e.frontchannel_logout_supported,
            grant_types_supported: e.grant_types_supported == null ? void 0 : e.grant_types_supported,
            id_token_signed_response_alg: e.id_token_signed_response_alg,
            id_token_signing_alg_values_supported: e.id_token_signing_alg_values_supported,
            issuer: e.issuer,
            jwks_uri: e.jwks_uri,
            registration_endpoint: e.registration_endpoint == null ? void 0 : e.registration_endpoint,
            request_object_signing_alg_values_supported: e.request_object_signing_alg_values_supported == null ? void 0 : e.request_object_signing_alg_values_supported,
            request_parameter_supported: e.request_parameter_supported == null ? void 0 : e.request_parameter_supported,
            request_uri_parameter_supported: e.request_uri_parameter_supported == null ? void 0 : e.request_uri_parameter_supported,
            require_request_uri_registration: e.require_request_uri_registration == null ? void 0 : e.require_request_uri_registration,
            response_modes_supported: e.response_modes_supported == null ? void 0 : e.response_modes_supported,
            response_types_supported: e.response_types_supported,
            revocation_endpoint: e.revocation_endpoint == null ? void 0 : e.revocation_endpoint,
            scopes_supported: e.scopes_supported == null ? void 0 : e.scopes_supported,
            subject_types_supported: e.subject_types_supported,
            token_endpoint: e.token_endpoint,
            token_endpoint_auth_methods_supported: e.token_endpoint_auth_methods_supported == null ? void 0 : e.token_endpoint_auth_methods_supported,
            userinfo_endpoint: e.userinfo_endpoint == null ? void 0 : e.userinfo_endpoint,
            userinfo_signed_response_alg: e.userinfo_signed_response_alg,
            userinfo_signing_alg_values_supported: e.userinfo_signing_alg_values_supported == null ? void 0 : e.userinfo_signing_alg_values_supported
        }
    }

    function TT(e) {
        return Fu(e, !1)
    }

    function Fu(e, t = !1) {
        return e == null ? e : {
            authorization_endpoint: e.authorization_endpoint,
            backchannel_logout_session_supported: e.backchannel_logout_session_supported,
            backchannel_logout_supported: e.backchannel_logout_supported,
            claims_parameter_supported: e.claims_parameter_supported,
            claims_supported: e.claims_supported,
            code_challenge_methods_supported: e.code_challenge_methods_supported,
            credentials_endpoint_draft_00: e.credentials_endpoint_draft_00,
            credentials_supported_draft_00: e.credentials_supported_draft_00 == null ? void 0 : e.credentials_supported_draft_00.map(da),
            device_authorization_endpoint: e.device_authorization_endpoint,
            end_session_endpoint: e.end_session_endpoint,
            frontchannel_logout_session_supported: e.frontchannel_logout_session_supported,
            frontchannel_logout_supported: e.frontchannel_logout_supported,
            grant_types_supported: e.grant_types_supported,
            id_token_signed_response_alg: e.id_token_signed_response_alg,
            id_token_signing_alg_values_supported: e.id_token_signing_alg_values_supported,
            issuer: e.issuer,
            jwks_uri: e.jwks_uri,
            registration_endpoint: e.registration_endpoint,
            request_object_signing_alg_values_supported: e.request_object_signing_alg_values_supported,
            request_parameter_supported: e.request_parameter_supported,
            request_uri_parameter_supported: e.request_uri_parameter_supported,
            require_request_uri_registration: e.require_request_uri_registration,
            response_modes_supported: e.response_modes_supported,
            response_types_supported: e.response_types_supported,
            revocation_endpoint: e.revocation_endpoint,
            scopes_supported: e.scopes_supported,
            subject_types_supported: e.subject_types_supported,
            token_endpoint: e.token_endpoint,
            token_endpoint_auth_methods_supported: e.token_endpoint_auth_methods_supported,
            userinfo_endpoint: e.userinfo_endpoint,
            userinfo_signed_response_alg: e.userinfo_signed_response_alg,
            userinfo_signing_alg_values_supported: e.userinfo_signing_alg_values_supported
        }
    }

    function vT(e) {
        return !0
    }

    function Cu(e) {
        return Du(e)
    }

    function Du(e, t) {
        return e == null ? e : {
            birthdate: e.birthdate == null ? void 0 : e.birthdate,
            email: e.email == null ? void 0 : e.email,
            email_verified: e.email_verified == null ? void 0 : e.email_verified,
            family_name: e.family_name == null ? void 0 : e.family_name,
            gender: e.gender == null ? void 0 : e.gender,
            given_name: e.given_name == null ? void 0 : e.given_name,
            locale: e.locale == null ? void 0 : e.locale,
            middle_name: e.middle_name == null ? void 0 : e.middle_name,
            name: e.name == null ? void 0 : e.name,
            nickname: e.nickname == null ? void 0 : e.nickname,
            phone_number: e.phone_number == null ? void 0 : e.phone_number,
            phone_number_verified: e.phone_number_verified == null ? void 0 : e.phone_number_verified,
            picture: e.picture == null ? void 0 : e.picture,
            preferred_username: e.preferred_username == null ? void 0 : e.preferred_username,
            profile: e.profile == null ? void 0 : e.profile,
            sub: e.sub == null ? void 0 : e.sub,
            updated_at: e.updated_at == null ? void 0 : e.updated_at,
            website: e.website == null ? void 0 : e.website,
            zoneinfo: e.zoneinfo == null ? void 0 : e.zoneinfo
        }
    }

    function NT(e) {
        return xu(e, !1)
    }

    function xu(e, t = !1) {
        return e == null ? e : {
            birthdate: e.birthdate,
            email: e.email,
            email_verified: e.email_verified,
            family_name: e.family_name,
            gender: e.gender,
            given_name: e.given_name,
            locale: e.locale,
            middle_name: e.middle_name,
            name: e.name,
            nickname: e.nickname,
            phone_number: e.phone_number,
            phone_number_verified: e.phone_number_verified,
            picture: e.picture,
            preferred_username: e.preferred_username,
            profile: e.profile,
            sub: e.sub,
            updated_at: e.updated_at,
            website: e.website,
            zoneinfo: e.zoneinfo
        }
    }

    function JT(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("id" in e) || e.id === void 0 || !("organization_id" in e) || e.organization_id === void 0 || !("project_id" in e) || e.project_id === void 0 || !("value" in e) || e.value === void 0)
    }

    function ve(e) {
        return Au(e)
    }

    function Au(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            custom_hostname_id: e.custom_hostname_id == null ? void 0 : e.custom_hostname_id,
            enable_scim: e.enable_scim == null ? void 0 : e.enable_scim,
            enable_sso: e.enable_sso == null ? void 0 : e.enable_sso,
            expires_at: new Date(e.expires_at),
            id: e.id,
            organization_id: e.organization_id,
            project_id: e.project_id,
            value: e.value
        }
    }

    function Iu(e) {
        return Pu(e, !1)
    }

    function Pu(e, t = !1) {
        return e == null ? e : {
            custom_hostname_id: e.custom_hostname_id,
            enable_scim: e.enable_scim,
            enable_sso: e.enable_sso
        }
    }

    function RT(e) {
        return !(!("base_url" in e) || e.base_url === void 0 || !("kratos_selfservice_methods_oidc_config_providers" in e) || e.kratos_selfservice_methods_oidc_config_providers === void 0 || !("kratos_selfservice_methods_saml_config_providers" in e) || e.kratos_selfservice_methods_saml_config_providers === void 0 || !("revision_id" in e) || e.revision_id === void 0 || !("scim_clients" in e) || e.scim_clients === void 0 || !("scim_enabled" in e) || e.scim_enabled === void 0 || !("sso_enabled" in e) || e.sso_enabled === void 0)
    }

    function FT(e) {
        return qu(e)
    }

    function qu(e, t) {
        return e == null ? e : {
            base_url: e.base_url,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers.map(j),
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers.map(te),
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            organization_label: e.organization_label == null ? void 0 : e.organization_label,
            revision_id: e.revision_id,
            scim_clients: e.scim_clients.map(Q),
            scim_enabled: e.scim_enabled,
            sso_enabled: e.sso_enabled
        }
    }

    function CT(e) {
        return zu(e, !1)
    }

    function zu(e, t = !1) {
        return e == null ? e : {
            base_url: e.base_url,
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers.map(ee),
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers.map(re),
            organization_id: e.organization_id,
            organization_label: e.organization_label,
            revision_id: e.revision_id,
            scim_clients: e.scim_clients.map(Y),
            scim_enabled: e.scim_enabled,
            sso_enabled: e.sso_enabled
        }
    }

    function DT(e) {
        return !0
    }

    function xT(e) {
        return Uu(e)
    }

    function Uu(e, t) {
        return e == null ? e : {
            domains: e.domains == null ? void 0 : e.domains,
            label: e.label == null ? void 0 : e.label
        }
    }

    function Bt(e) {
        return Eu(e, !1)
    }

    function Eu(e, t = !1) {
        return e == null ? e : {
            domains: e.domains,
            label: e.label
        }
    }

    function AT(e) {
        return !(!("links" in e) || e.links === void 0)
    }

    function Bu(e) {
        return Wu(e)
    }

    function Wu(e, t) {
        return e == null ? e : {
            links: e.links.map(ve)
        }
    }

    function IT(e) {
        return Lu(e, !1)
    }

    function Lu(e, t = !1) {
        return e == null ? e : {
            links: e.links.map(Iu)
        }
    }

    function PT(e) {
        return !0
    }

    function qT(e) {
        return Mu(e)
    }

    function Mu(e, t) {
        return e == null ? e : {
            identities: e.identities == null ? void 0 : e.identities.map(ud)
        }
    }

    function $u(e) {
        return Gu(e, !1)
    }

    function Gu(e, t = !1) {
        return e == null ? e : {
            identities: e.identities == null ? void 0 : e.identities.map(fd)
        }
    }

    function zT(e) {
        return !(!("session_token" in e) || e.session_token === void 0)
    }

    function UT(e) {
        return Ku(e)
    }

    function Ku(e, t) {
        return e == null ? e : {
            session_token: e.session_token
        }
    }

    function Vu(e) {
        return Hu(e, !1)
    }

    function Hu(e, t = !1) {
        return e == null ? e : {
            session_token: e.session_token
        }
    }

    function ET(e) {
        return !0
    }

    function BT(e) {
        return Xu(e)
    }

    function Xu(e, t) {
        return e == null ? e : {
            permissions: e.permissions == null ? void 0 : e.permissions
        }
    }

    function WT(e) {
        return Qu(e, !1)
    }

    function Qu(e, t = !1) {
        return e == null ? e : {
            permissions: e.permissions
        }
    }

    function LT(e) {
        return !(!("name" in e) || e.name === void 0 || !("version" in e) || e.version === void 0)
    }

    function MT(e) {
        return Yu(e)
    }

    function Yu(e, t) {
        return e == null ? e : {
            name: e.name,
            version: e.version
        }
    }

    function $T(e) {
        return Zu(e, !1)
    }

    function Zu(e, t = !1) {
        return e == null ? e : {
            name: e.name,
            version: e.version
        }
    }

    function GT(e) {
        return !(!("base_fee_monthly" in e) || e.base_fee_monthly === void 0 || !("base_fee_yearly" in e) || e.base_fee_yearly === void 0 || !("custom" in e) || e.custom === void 0 || !("description" in e) || e.description === void 0 || !("features" in e) || e.features === void 0 || !("name" in e) || e.name === void 0 || !("version" in e) || e.version === void 0)
    }

    function ju(e) {
        return el(e)
    }

    function el(e, t) {
        return e == null ? e : {
            base_fee_monthly: e.base_fee_monthly,
            base_fee_yearly: e.base_fee_yearly,
            custom: e.custom,
            description: e.description,
            features: G(e.features, Nt),
            latest: e.latest == null ? void 0 : e.latest,
            name: e.name,
            version: e.version
        }
    }

    function tl(e) {
        return rl(e, !1)
    }

    function rl(e, t = !1) {
        return e == null ? e : {
            base_fee_monthly: e.base_fee_monthly,
            base_fee_yearly: e.base_fee_yearly,
            custom: e.custom,
            description: e.description,
            features: G(e.features, Jt),
            latest: e.latest,
            name: e.name,
            version: e.version
        }
    }

    function KT(e) {
        return !0
    }

    function VT(e) {
        return nl(e)
    }

    function nl(e, t) {
        return e == null ? e : {
            namespace: e.namespace == null ? void 0 : e.namespace,
            object: e.object == null ? void 0 : e.object,
            relation: e.relation == null ? void 0 : e.relation,
            subject_id: e.subject_id == null ? void 0 : e.subject_id,
            subject_set: e.subject_set == null ? void 0 : B(e.subject_set)
        }
    }

    function il(e) {
        return ol(e, !1)
    }

    function ol(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id,
            subject_set: W(e.subject_set)
        }
    }

    function HT(e) {
        return !0
    }

    function XT(e) {
        return _l(e)
    }

    function _l(e, t) {
        return e == null ? e : {
            namespace: e.namespace == null ? void 0 : e.namespace,
            object: e.object == null ? void 0 : e.object,
            relation: e.relation == null ? void 0 : e.relation,
            subject_id: e.subject_id == null ? void 0 : e.subject_id,
            subject_set: e.subject_set == null ? void 0 : B(e.subject_set)
        }
    }

    function al(e) {
        return sl(e, !1)
    }

    function sl(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id,
            subject_set: W(e.subject_set)
        }
    }

    function QT(e) {
        return !(!("config" in e) || e.config === void 0)
    }

    function dl(e) {
        return cl(e)
    }

    function cl(e, t) {
        return e == null ? e : {
            config: e.config
        }
    }

    function ul(e) {
        return ll(e, !1)
    }

    function ll(e, t = !1) {
        return e == null ? e : {
            config: e.config
        }
    }

    function YT(e) {
        return !(!("config" in e) || e.config === void 0)
    }

    function fl(e) {
        return pl(e)
    }

    function pl(e, t) {
        return e == null ? e : {
            config: e.config
        }
    }

    function hl(e) {
        return gl(e, !1)
    }

    function gl(e, t = !1) {
        return e == null ? e : {
            config: e.config
        }
    }

    function ZT(e) {
        return !(!("config" in e) || e.config === void 0)
    }

    function ml(e) {
        return yl(e)
    }

    function yl(e, t) {
        return e == null ? e : {
            config: e.config
        }
    }

    function kl(e) {
        return bl(e, !1)
    }

    function bl(e, t = !1) {
        return e == null ? e : {
            config: e.config
        }
    }

    function jT(e) {
        return !(!("config" in e) || e.config === void 0)
    }

    function wl(e) {
        return Sl(e)
    }

    function Sl(e, t) {
        return e == null ? e : {
            config: e.config
        }
    }

    function Ol(e) {
        return Tl(e, !1)
    }

    function Tl(e, t = !1) {
        return e == null ? e : {
            config: e.config
        }
    }

    function ev(e) {
        return !0
    }

    function Wt(e) {
        return vl(e)
    }

    function vl(e, t) {
        return e == null ? e : {
            account_experience: e.account_experience == null ? void 0 : wl(e.account_experience),
            identity: e.identity == null ? void 0 : ml(e.identity),
            oauth2: e.oauth2 == null ? void 0 : dl(e.oauth2),
            permission: e.permission == null ? void 0 : fl(e.permission)
        }
    }

    function Lt(e) {
        return Nl(e, !1)
    }

    function Nl(e, t = !1) {
        return e == null ? e : {
            account_experience: Ol(e.account_experience),
            identity: kl(e.identity),
            oauth2: ul(e.oauth2),
            permission: hl(e.permission)
        }
    }

    function tv(e) {
        return !0
    }

    function _e(e) {
        return Jl(e)
    }

    function Jl(e, t) {
        return e == null ? e : {
            enabled: e.enabled == null ? void 0 : e.enabled,
            origins: e.origins == null ? void 0 : e.origins
        }
    }

    function ae(e) {
        return Rl(e, !1)
    }

    function Rl(e, t = !1) {
        return e == null ? e : {
            enabled: e.enabled,
            origins: e.origins
        }
    }
    const rv = {
            Prod: "prod",
            Stage: "stage",
            Dev: "dev",
            UnknownDefaultOpenApi: "11184809"
        },
        nv = {
            EuCentral: "eu-central",
            AsiaNortheast: "asia-northeast",
            UsEast: "us-east",
            UsWest: "us-west",
            Us: "us",
            Global: "global",
            UnknownDefaultOpenApi: "11184809"
        },
        iv = {
            Running: "running",
            Halted: "halted",
            Deleted: "deleted",
            UnknownDefaultOpenApi: "11184809"
        };

    function ov(e) {
        return !(!("environment" in e) || e.environment === void 0 || !("home_region" in e) || e.home_region === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("organizations" in e) || e.organizations === void 0 || !("revision_id" in e) || e.revision_id === void 0 || !("services" in e) || e.services === void 0 || !("slug" in e) || e.slug === void 0 || !("state" in e) || e.state === void 0)
    }

    function Ne(e) {
        return Fl(e)
    }

    function Fl(e, t) {
        return e == null ? e : {
            cors_admin: e.cors_admin == null ? void 0 : _e(e.cors_admin),
            cors_public: e.cors_public == null ? void 0 : _e(e.cors_public),
            environment: e.environment,
            home_region: e.home_region,
            id: e.id,
            name: e.name,
            organizations: e.organizations.map(Be),
            revision_id: e.revision_id,
            services: Wt(e.services),
            slug: e.slug,
            state: e.state,
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function Cl(e) {
        return Dl(e, !1)
    }

    function Dl(e, t = !1) {
        return e == null ? e : {
            cors_admin: ae(e.cors_admin),
            cors_public: ae(e.cors_public),
            environment: e.environment,
            home_region: e.home_region,
            name: e.name,
            organizations: e.organizations.map(We),
            services: Lt(e.services),
            workspace_id: e.workspace_id
        }
    }

    function _v(e) {
        return !(!("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("owner_id" in e) || e.owner_id === void 0)
    }

    function Mt(e) {
        return xl(e)
    }

    function xl(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            id: e.id,
            name: e.name,
            owner_id: e.owner_id,
            project_id: e.project_id == null ? void 0 : e.project_id,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            value: e.value == null ? void 0 : e.value
        }
    }

    function av(e) {
        return Al(e, !1)
    }

    function Al(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            name: e.name
        }
    }

    function sv(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("project_branding_id" in e) || e.project_branding_id === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function $t(e) {
        return Il(e)
    }

    function Il(e, t) {
        return e == null ? e : {
            accent_default_color: e.accent_default_color == null ? void 0 : e.accent_default_color,
            accent_disabled_color: e.accent_disabled_color == null ? void 0 : e.accent_disabled_color,
            accent_emphasis_color: e.accent_emphasis_color == null ? void 0 : e.accent_emphasis_color,
            accent_muted_color: e.accent_muted_color == null ? void 0 : e.accent_muted_color,
            accent_subtle_color: e.accent_subtle_color == null ? void 0 : e.accent_subtle_color,
            background_canvas_color: e.background_canvas_color == null ? void 0 : e.background_canvas_color,
            background_subtle_color: e.background_subtle_color == null ? void 0 : e.background_subtle_color,
            background_surface_color: e.background_surface_color == null ? void 0 : e.background_surface_color,
            border_default_color: e.border_default_color == null ? void 0 : e.border_default_color,
            created_at: new Date(e.created_at),
            error_default_color: e.error_default_color == null ? void 0 : e.error_default_color,
            error_emphasis_color: e.error_emphasis_color == null ? void 0 : e.error_emphasis_color,
            error_muted_color: e.error_muted_color == null ? void 0 : e.error_muted_color,
            error_subtle_color: e.error_subtle_color == null ? void 0 : e.error_subtle_color,
            favicon_type: e.favicon_type == null ? void 0 : e.favicon_type,
            favicon_url: e.favicon_url == null ? void 0 : e.favicon_url,
            foreground_default_color: e.foreground_default_color == null ? void 0 : e.foreground_default_color,
            foreground_disabled_color: e.foreground_disabled_color == null ? void 0 : e.foreground_disabled_color,
            foreground_muted_color: e.foreground_muted_color == null ? void 0 : e.foreground_muted_color,
            foreground_on_accent_color: e.foreground_on_accent_color == null ? void 0 : e.foreground_on_accent_color,
            foreground_on_dark_color: e.foreground_on_dark_color == null ? void 0 : e.foreground_on_dark_color,
            foreground_on_disabled_color: e.foreground_on_disabled_color == null ? void 0 : e.foreground_on_disabled_color,
            foreground_subtle_color: e.foreground_subtle_color == null ? void 0 : e.foreground_subtle_color,
            id: e.id,
            input_background_color: e.input_background_color == null ? void 0 : e.input_background_color,
            input_disabled_color: e.input_disabled_color == null ? void 0 : e.input_disabled_color,
            input_placeholder_color: e.input_placeholder_color == null ? void 0 : e.input_placeholder_color,
            input_text_color: e.input_text_color == null ? void 0 : e.input_text_color,
            logo_type: e.logo_type == null ? void 0 : e.logo_type,
            logo_url: e.logo_url == null ? void 0 : e.logo_url,
            name: e.name,
            primary_color: e.primary_color == null ? void 0 : e.primary_color,
            project_branding_id: e.project_branding_id,
            secondary_color: e.secondary_color == null ? void 0 : e.secondary_color,
            success_emphasis_color: e.success_emphasis_color == null ? void 0 : e.success_emphasis_color,
            text_default_color: e.text_default_color == null ? void 0 : e.text_default_color,
            text_disabled_color: e.text_disabled_color == null ? void 0 : e.text_disabled_color,
            updated_at: new Date(e.updated_at)
        }
    }

    function Gt(e) {
        return Pl(e, !1)
    }

    function Pl(e, t = !1) {
        return e == null ? e : {
            accent_default_color: e.accent_default_color,
            accent_disabled_color: e.accent_disabled_color,
            accent_emphasis_color: e.accent_emphasis_color,
            accent_muted_color: e.accent_muted_color,
            accent_subtle_color: e.accent_subtle_color,
            background_canvas_color: e.background_canvas_color,
            background_subtle_color: e.background_subtle_color,
            background_surface_color: e.background_surface_color,
            border_default_color: e.border_default_color,
            error_default_color: e.error_default_color,
            error_emphasis_color: e.error_emphasis_color,
            error_muted_color: e.error_muted_color,
            error_subtle_color: e.error_subtle_color,
            favicon_type: e.favicon_type,
            favicon_url: e.favicon_url,
            foreground_default_color: e.foreground_default_color,
            foreground_disabled_color: e.foreground_disabled_color,
            foreground_muted_color: e.foreground_muted_color,
            foreground_on_accent_color: e.foreground_on_accent_color,
            foreground_on_dark_color: e.foreground_on_dark_color,
            foreground_on_disabled_color: e.foreground_on_disabled_color,
            foreground_subtle_color: e.foreground_subtle_color,
            input_background_color: e.input_background_color,
            input_disabled_color: e.input_disabled_color,
            input_placeholder_color: e.input_placeholder_color,
            input_text_color: e.input_text_color,
            logo_type: e.logo_type,
            logo_url: e.logo_url,
            name: e.name,
            primary_color: e.primary_color,
            project_branding_id: e.project_branding_id,
            secondary_color: e.secondary_color,
            success_emphasis_color: e.success_emphasis_color,
            text_default_color: e.text_default_color,
            text_disabled_color: e.text_disabled_color
        }
    }

    function dv(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("default_theme" in e) || e.default_theme === void 0 || !("id" in e) || e.id === void 0 || !("project_id" in e) || e.project_id === void 0 || !("themes" in e) || e.themes === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function cv(e) {
        return ql(e)
    }

    function ql(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            default_theme: $t(e.default_theme),
            id: e.id,
            project_id: e.project_id,
            themes: e.themes.map($t),
            updated_at: new Date(e.updated_at)
        }
    }

    function uv(e) {
        return zl(e, !1)
    }

    function zl(e, t = !1) {
        return e == null ? e : {
            default_theme: Gt(e.default_theme),
            project_id: e.project_id,
            themes: e.themes.map(Gt)
        }
    }

    function lv(e) {
        return !(!("host" in e) || e.host === void 0 || !("id" in e) || e.id === void 0 || !("project_id" in e) || e.project_id === void 0)
    }

    function fv(e) {
        return Ul(e)
    }

    function Ul(e, t) {
        return e == null ? e : {
            host: e.host,
            id: e.id,
            project_id: e.project_id
        }
    }

    function pv(e) {
        return El(e, !1)
    }

    function El(e, t = !1) {
        return e == null ? e : {
            host: e.host,
            project_id: e.project_id
        }
    }

    function hv(e) {
        return !(!("email" in e) || e.email === void 0 || !("email_verified" in e) || e.email_verified === void 0 || !("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("role" in e) || e.role === void 0)
    }

    function Bl(e) {
        return Wl(e)
    }

    function Wl(e, t) {
        return e == null ? e : {
            email: e.email,
            email_verified: e.email_verified,
            id: e.id,
            name: e.name,
            role: e.role
        }
    }

    function gv(e) {
        return Ll(e, !1)
    }

    function Ll(e, t = !1) {
        return e == null ? e : {
            email: e.email,
            email_verified: e.email_verified,
            id: e.id,
            name: e.name,
            role: e.role
        }
    }
    const mv = {
        ProductionProjects: "production_projects",
        StagingProjects: "staging_projects",
        DevelopmentProjects: "development_projects",
        DailyActiveUsers: "daily_active_users",
        CustomDomains: "custom_domains",
        EventStreams: "event_streams",
        EventStreamEvents: "event_stream_events",
        Sla: "sla",
        CollaboratorSeats: "collaborator_seats",
        EdgeCache: "edge_cache",
        BrandingThemes: "branding_themes",
        ZendeskSupport: "zendesk_support",
        ZendeskSupportOnCall: "zendesk_support_on_call",
        ProjectMetrics: "project_metrics",
        ProjectMetricsTimeWindow: "project_metrics_time_window",
        ProjectMetricsEventsHistory: "project_metrics_events_history",
        Organizations: "organizations",
        RopGrant: "rop_grant",
        ConciergeOnboarding: "concierge_onboarding",
        Credit: "credit",
        DataLocationGlobal: "data_location_global",
        DataLocationUs: "data_location_us",
        DataLocationAsiane: "data_location_asiane",
        M2mTokenIssuance: "m2m_token_issuance",
        PermissionChecks: "permission_checks",
        Captcha: "captcha",
        IdentitySearchApi: "identity_search_api",
        SamlSp: "saml_sp",
        SamlIdp: "saml_idp",
        AutoLinkPolicy: "auto_link_policy",
        ScimClients: "scim_clients",
        DefaultSmtpEmailCustomization: "default_smtp_email_customization",
        OnboardingPortal: "onboarding_portal",
        UpdateSelfServiceRegistrationRateLimitTier: "update_self_service_registration_rate_limit_tier",
        UpdateSelfServiceRecoveryRateLimitTier: "update_self_service_recovery_rate_limit_tier",
        UpdateSelfServiceSettingsRateLimitTier: "update_self_service_settings_rate_limit_tier",
        UpdateSelfServiceVerificationRateLimitTier: "update_self_service_verification_rate_limit_tier",
        IdentitiesCreateRateLimitTier: "identities_create_rate_limit_tier",
        IdentitiesImportRateLimitTier: "identities_import_rate_limit_tier",
        FedCmParametersRateLimitTier: "fed_cm_parameters_rate_limit_tier",
        DataLocationRegional: "data_location_regional",
        RateLimitTier: "rate_limit_tier",
        SessionRateLimitTier: "session_rate_limit_tier",
        IdentitiesListRateLimitTier: "identities_list_rate_limit_tier",
        PermissionChecksRateLimitTier: "permission_checks_rate_limit_tier",
        Oauth2IntrospectRateLimitTier: "oauth2_introspect_rate_limit_tier",
        CreateRecoveryAdminRateLimitTier: "create_recovery_admin_rate_limit_tier",
        ScimRateLimitTier: "scim_rate_limit_tier",
        UnknownDefaultOpenApi: "11184809"
    };

    function yv(e) {
        return !(!("additional_price" in e) || e.additional_price === void 0 || !("can_use_more" in e) || e.can_use_more === void 0 || !("feature" in e) || e.feature === void 0 || !("feature_available" in e) || e.feature_available === void 0 || !("included" in e) || e.included === void 0 || !("is_unlimited" in e) || e.is_unlimited === void 0 || !("used" in e) || e.used === void 0)
    }

    function kv(e) {
        return Ml(e)
    }

    function Ml(e, t) {
        return e == null ? e : {
            additional_price: e.additional_price,
            can_use_more: e.can_use_more,
            feature: e.feature,
            feature_available: e.feature_available,
            included: e.included,
            is_unlimited: e.is_unlimited,
            used: e.used
        }
    }

    function bv(e) {
        return $l(e, !1)
    }

    function $l(e, t = !1) {
        return e == null ? e : {
            additional_price: e.additional_price,
            can_use_more: e.can_use_more,
            feature: e.feature,
            feature_available: e.feature_available,
            included: e.included,
            is_unlimited: e.is_unlimited,
            used: e.used
        }
    }

    function wv(e) {
        return !0
    }

    function Sv(e) {
        return Gl(e)
    }

    function Gl(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : e.error,
            error_debug: e.error_debug == null ? void 0 : e.error_debug,
            error_description: e.error_description == null ? void 0 : e.error_description,
            error_hint: e.error_hint == null ? void 0 : e.error_hint,
            status_code: e.status_code == null ? void 0 : e.status_code
        }
    }

    function Ov(e) {
        return Kl(e, !1)
    }

    function Kl(e, t = !1) {
        return e == null ? e : {
            error: e.error,
            error_debug: e.error_debug,
            error_description: e.error_description,
            error_hint: e.error_hint,
            status_code: e.status_code
        }
    }

    function Tv(e) {
        return !(!("recovery_code" in e) || e.recovery_code === void 0 || !("recovery_link" in e) || e.recovery_link === void 0)
    }

    function Vl(e) {
        return Hl(e)
    }

    function Hl(e, t) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            recovery_code: e.recovery_code,
            recovery_link: e.recovery_link
        }
    }

    function vv(e) {
        return Xl(e, !1)
    }

    function Xl(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            recovery_code: e.recovery_code,
            recovery_link: e.recovery_link
        }
    }

    function Nv(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("id" in e) || e.id === void 0 || !("issued_at" in e) || e.issued_at === void 0 || !("request_url" in e) || e.request_url === void 0 || !("state" in e) || e.state === void 0 || !("type" in e) || e.type === void 0 || !("ui" in e) || e.ui === void 0)
    }

    function se(e) {
        return Ql(e)
    }

    function Ql(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(H),
            expires_at: new Date(e.expires_at),
            id: e.id,
            issued_at: new Date(e.issued_at),
            request_url: e.request_url,
            return_to: e.return_to == null ? void 0 : e.return_to,
            state: e.state,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            type: e.type,
            ui: M(e.ui)
        }
    }

    function Jv(e) {
        return Yl(e, !1)
    }

    function Yl(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(X),
            expires_at: e.expires_at.toISOString(),
            id: e.id,
            issued_at: e.issued_at.toISOString(),
            request_url: e.request_url,
            return_to: e.return_to,
            state: e.state,
            transient_payload: e.transient_payload,
            type: e.type,
            ui: $(e.ui)
        }
    }
    const Je = {
        ChooseMethod: "choose_method",
        SentEmail: "sent_email",
        PassedChallenge: "passed_challenge",
        UnknownDefaultOpenApi: "11184809"
    };

    function Rv(e) {
        for (const t in Je)
            if (Object.prototype.hasOwnProperty.call(Je, t) && Je[t] === e) return !0;
        return !1
    }

    function Fv(e) {
        return Zl(e)
    }

    function Zl(e, t) {
        return e
    }

    function Cv(e) {
        return e
    }

    function Dv(e, t) {
        return e
    }

    function xv(e) {
        return !(!("recovery_link" in e) || e.recovery_link === void 0)
    }

    function jl(e) {
        return ef(e)
    }

    function ef(e, t) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            recovery_link: e.recovery_link
        }
    }

    function Av(e) {
        return tf(e, !1)
    }

    function tf(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            recovery_link: e.recovery_link
        }
    }
    const Iv = {
        Password: "password",
        Oidc: "oidc",
        Totp: "totp",
        LookupSecret: "lookup_secret",
        Webauthn: "webauthn",
        Code: "code",
        Passkey: "passkey",
        Profile: "profile",
        Saml: "saml",
        LinkRecovery: "link_recovery",
        CodeRecovery: "code_recovery",
        UnknownDefaultOpenApi: "11184809"
    };

    function Pv(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("id" in e) || e.id === void 0 || !("issued_at" in e) || e.issued_at === void 0 || !("request_url" in e) || e.request_url === void 0 || !("state" in e) || e.state === void 0 || !("type" in e) || e.type === void 0 || !("ui" in e) || e.ui === void 0)
    }

    function Re(e) {
        return rf(e)
    }

    function rf(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            expires_at: new Date(e.expires_at),
            id: e.id,
            identity_schema: e.identity_schema == null ? void 0 : e.identity_schema,
            issued_at: new Date(e.issued_at),
            oauth2_login_challenge: e.oauth2_login_challenge == null ? void 0 : e.oauth2_login_challenge,
            oauth2_login_request: e.oauth2_login_request == null ? void 0 : Se(e.oauth2_login_request),
            organization_id: e.organization_id == null ? void 0 : e.organization_id,
            request_url: e.request_url,
            return_to: e.return_to == null ? void 0 : e.return_to,
            session_token_exchange_code: e.session_token_exchange_code == null ? void 0 : e.session_token_exchange_code,
            state: e.state,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            type: e.type,
            ui: M(e.ui)
        }
    }

    function qv(e) {
        return nf(e, !1)
    }

    function nf(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            expires_at: e.expires_at.toISOString(),
            id: e.id,
            identity_schema: e.identity_schema,
            issued_at: e.issued_at.toISOString(),
            oauth2_login_challenge: e.oauth2_login_challenge,
            oauth2_login_request: Dt(e.oauth2_login_request),
            organization_id: e.organization_id,
            request_url: e.request_url,
            return_to: e.return_to,
            session_token_exchange_code: e.session_token_exchange_code,
            state: e.state,
            transient_payload: e.transient_payload,
            type: e.type,
            ui: $(e.ui)
        }
    }
    const Fe = {
        ChooseMethod: "choose_method",
        SentEmail: "sent_email",
        PassedChallenge: "passed_challenge",
        UnknownDefaultOpenApi: "11184809"
    };

    function zv(e) {
        for (const t in Fe)
            if (Object.prototype.hasOwnProperty.call(Fe, t) && Fe[t] === e) return !0;
        return !1
    }

    function Uv(e) {
        return of(e)
    }

    function of (e, t) {
        return e
    }

    function Ev(e) {
        return e
    }

    function Bv(e, t) {
        return e
    }

    function Wv(e) {
        return !0
    }

    function Lv(e) {
        return _f(e)
    }

    function _f(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : e.error,
            error_debug: e.error_debug == null ? void 0 : e.error_debug,
            error_description: e.error_description == null ? void 0 : e.error_description,
            error_hint: e.error_hint == null ? void 0 : e.error_hint,
            status_code: e.status_code == null ? void 0 : e.status_code
        }
    }

    function Kt(e) {
        return af(e, !1)
    }

    function af(e, t = !1) {
        return e == null ? e : {
            error: e.error,
            error_debug: e.error_debug,
            error_description: e.error_description,
            error_hint: e.error_hint,
            status_code: e.status_code
        }
    }

    function Mv(e) {
        return !0
    }

    function $v(e) {
        return sf(e)
    }

    function sf(e, t) {
        return e == null ? e : {
            namespace: e.namespace == null ? void 0 : e.namespace,
            object: e.object == null ? void 0 : e.object,
            relation: e.relation == null ? void 0 : e.relation,
            subject_id: e.subject_id == null ? void 0 : e.subject_id,
            subject_set: e.subject_set == null ? void 0 : B(e.subject_set)
        }
    }

    function Gv(e) {
        return df(e, !1)
    }

    function df(e, t = !1) {
        return e == null ? e : {
            namespace: e.namespace,
            object: e.object,
            relation: e.relation,
            subject_id: e.subject_id,
            subject_set: W(e.subject_set)
        }
    }

    function Kv(e) {
        return !0
    }

    function cf(e) {
        return uf(e)
    }

    function uf(e, t) {
        return e == null ? e : {
            namespaces: e.namespaces == null ? void 0 : e.namespaces.map(Zc)
        }
    }

    function Vv(e) {
        return lf(e, !1)
    }

    function lf(e, t = !1) {
        return e == null ? e : {
            namespaces: e.namespaces == null ? void 0 : e.namespaces.map(eu)
        }
    }
    const Hv = {
        Insert: "insert",
        Delete: "delete",
        UnknownDefaultOpenApi: "11184809"
    };

    function Xv(e) {
        return !0
    }

    function Qv(e) {
        return ff(e)
    }

    function ff(e, t) {
        return e == null ? e : {
            action: e.action == null ? void 0 : e.action,
            relation_tuple: e.relation_tuple == null ? void 0 : L(e.relation_tuple)
        }
    }

    function pf(e) {
        return hf(e, !1)
    }

    function hf(e, t = !1) {
        return e == null ? e : {
            action: e.action,
            relation_tuple: K(e.relation_tuple)
        }
    }

    function Yv(e) {
        return !0
    }

    function gf(e) {
        return mf(e)
    }

    function mf(e, t) {
        return e == null ? e : {
            next_page_token: e.next_page_token == null ? void 0 : e.next_page_token,
            relation_tuples: e.relation_tuples == null ? void 0 : e.relation_tuples.map(L)
        }
    }

    function Zv(e) {
        return yf(e, !1)
    }

    function yf(e, t = !1) {
        return e == null ? e : {
            next_page_token: e.next_page_token,
            relation_tuples: e.relation_tuples == null ? void 0 : e.relation_tuples.map(K)
        }
    }

    function jv(e) {
        return !(!("data" in e) || e.data === void 0 || !("name" in e) || e.name === void 0)
    }

    function eN(e) {
        return kf(e)
    }

    function kf(e, t) {
        return e == null ? e : {
            data: e.data,
            name: e.name
        }
    }

    function tN(e) {
        return bf(e, !1)
    }

    function bf(e, t = !1) {
        return e == null ? e : {
            data: e.data,
            name: e.name
        }
    }

    function rN(e) {
        return !0
    }

    function nN(e) {
        return wf(e)
    }

    function wf(e, t) {
        return e == null ? e : {
            error: e.error == null ? void 0 : ne(e.error),
            expired_at: e.expired_at == null ? void 0 : new Date(e.expired_at),
            since: e.since == null ? void 0 : e.since,
            use_flow_id: e.use_flow_id == null ? void 0 : e.use_flow_id
        }
    }

    function iN(e) {
        return Sf(e, !1)
    }

    function Sf(e, t = !1) {
        return e == null ? e : {
            error: ie(e.error),
            expired_at: e.expired_at == null ? void 0 : e.expired_at.toISOString(),
            since: e.since,
            use_flow_id: e.use_flow_id
        }
    }

    function oN(e) {
        return !(!("id" in e) || e.id === void 0)
    }

    function Of(e) {
        return Tf(e)
    }

    function Tf(e, t) {
        return e == null ? e : {
            id: e.id,
            ip_address: e.ip_address == null ? void 0 : e.ip_address,
            location: e.location == null ? void 0 : e.location,
            user_agent: e.user_agent == null ? void 0 : e.user_agent
        }
    }

    function vf(e) {
        return Nf(e, !1)
    }

    function Nf(e, t = !1) {
        return e == null ? e : {
            id: e.id,
            ip_address: e.ip_address,
            location: e.location,
            user_agent: e.user_agent
        }
    }
    const _N = {
        Password: "password",
        Oidc: "oidc",
        Totp: "totp",
        LookupSecret: "lookup_secret",
        Webauthn: "webauthn",
        Code: "code",
        Passkey: "passkey",
        Profile: "profile",
        Saml: "saml",
        LinkRecovery: "link_recovery",
        CodeRecovery: "code_recovery",
        UnknownDefaultOpenApi: "11184809"
    };

    function aN(e) {
        return !0
    }

    function Jf(e) {
        return Rf(e)
    }

    function Rf(e, t) {
        return e == null ? e : {
            aal: e.aal == null ? void 0 : pe(e.aal),
            completed_at: e.completed_at == null ? void 0 : new Date(e.completed_at),
            method: e.method == null ? void 0 : e.method,
            organization: e.organization == null ? void 0 : e.organization,
            provider: e.provider == null ? void 0 : e.provider
        }
    }

    function Ff(e) {
        return Cf(e, !1)
    }

    function Cf(e, t = !1) {
        return e == null ? e : {
            aal: e.aal,
            completed_at: e.completed_at == null ? void 0 : e.completed_at.toISOString(),
            method: e.method,
            organization: e.organization,
            provider: e.provider
        }
    }

    function sN(e) {
        return !(!("id" in e) || e.id === void 0)
    }

    function C(e) {
        return Df(e)
    }

    function Df(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            authenticated_at: e.authenticated_at == null ? void 0 : new Date(e.authenticated_at),
            authentication_methods: e.authentication_methods == null ? void 0 : e.authentication_methods.map(Jf),
            authenticator_assurance_level: e.authenticator_assurance_level == null ? void 0 : pe(e.authenticator_assurance_level),
            devices: e.devices == null ? void 0 : e.devices.map(Of),
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            id: e.id,
            identity: e.identity == null ? void 0 : F(e.identity),
            issued_at: e.issued_at == null ? void 0 : new Date(e.issued_at),
            tokenized: e.tokenized == null ? void 0 : e.tokenized
        }
    }

    function Ce(e) {
        return xf(e, !1)
    }

    function xf(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            authenticated_at: e.authenticated_at == null ? void 0 : e.authenticated_at.toISOString(),
            authentication_methods: e.authentication_methods == null ? void 0 : e.authentication_methods.map(Ff),
            authenticator_assurance_level: e.authenticator_assurance_level,
            devices: e.devices == null ? void 0 : e.devices.map(vf),
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            id: e.id,
            identity: be(e.identity),
            issued_at: e.issued_at == null ? void 0 : e.issued_at.toISOString(),
            tokenized: e.tokenized
        }
    }

    function dN(e) {
        return !(!("project_id" in e) || e.project_id === void 0)
    }

    function cN(e) {
        return Af(e)
    }

    function Af(e, t) {
        return e == null ? e : {
            project_id: e.project_id
        }
    }

    function uN(e) {
        return If(e, !1)
    }

    function If(e, t = !1) {
        return e == null ? e : {
            project_id: e.project_id
        }
    }

    function lN(e) {
        return !0
    }

    function fN(e) {
        return Pf(e)
    }

    function Pf(e, t) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain == null ? void 0 : e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins == null ? void 0 : e.cors_allowed_origins,
            cors_enabled: e.cors_enabled == null ? void 0 : e.cors_enabled,
            custom_ui_base_url: e.custom_ui_base_url == null ? void 0 : e.custom_ui_base_url,
            hostname: e.hostname == null ? void 0 : e.hostname
        }
    }

    function pN(e) {
        return qf(e, !1)
    }

    function qf(e, t = !1) {
        return e == null ? e : {
            cookie_domain: e.cookie_domain,
            cors_allowed_origins: e.cors_allowed_origins,
            cors_enabled: e.cors_enabled,
            custom_ui_base_url: e.custom_ui_base_url,
            hostname: e.hostname
        }
    }
    const hN = {
        Sns: "sns",
        UnknownDefaultOpenApi: "11184809"
    };

    function gN(e) {
        return !(!("role_arn" in e) || e.role_arn === void 0 || !("topic_arn" in e) || e.topic_arn === void 0 || !("type" in e) || e.type === void 0)
    }

    function mN(e) {
        return zf(e)
    }

    function zf(e, t) {
        return e == null ? e : {
            role_arn: e.role_arn,
            topic_arn: e.topic_arn,
            type: e.type
        }
    }

    function Uf(e) {
        return Ef(e, !1)
    }

    function Ef(e, t = !1) {
        return e == null ? e : {
            role_arn: e.role_arn,
            topic_arn: e.topic_arn,
            type: e.type
        }
    }

    function yN(e) {
        return !(!("revision_id" in e) || e.revision_id === void 0)
    }

    function kN(e) {
        return Bf(e)
    }

    function Bf(e, t) {
        return e == null ? e : {
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(j),
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(te),
            revision_id: e.revision_id,
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Q)
        }
    }

    function bN(e) {
        return Wf(e, !1)
    }

    function Wf(e, t = !1) {
        return e == null ? e : {
            kratos_selfservice_methods_oidc_config_providers: e.kratos_selfservice_methods_oidc_config_providers == null ? void 0 : e.kratos_selfservice_methods_oidc_config_providers.map(ee),
            kratos_selfservice_methods_saml_config_providers: e.kratos_selfservice_methods_saml_config_providers == null ? void 0 : e.kratos_selfservice_methods_saml_config_providers.map(re),
            revision_id: e.revision_id,
            scim_clients: e.scim_clients == null ? void 0 : e.scim_clients.map(Y)
        }
    }

    function wN(e) {
        return !(!("cors_admin" in e) || e.cors_admin === void 0 || !("cors_public" in e) || e.cors_public === void 0 || !("name" in e) || e.name === void 0 || !("organizations" in e) || e.organizations === void 0 || !("services" in e) || e.services === void 0)
    }

    function SN(e) {
        return Lf(e)
    }

    function Lf(e, t) {
        return e == null ? e : {
            cors_admin: _e(e.cors_admin),
            cors_public: _e(e.cors_public),
            name: e.name,
            organizations: e.organizations.map(Be),
            services: Wt(e.services)
        }
    }

    function Mf(e) {
        return $f(e, !1)
    }

    function $f(e, t = !1) {
        return e == null ? e : {
            cors_admin: ae(e.cors_admin),
            cors_public: ae(e.cors_public),
            name: e.name,
            organizations: e.organizations.map(We),
            services: Lt(e.services)
        }
    }

    function ON(e) {
        return !0
    }

    function TN(e) {
        return Gf(e)
    }

    function Gf(e, t) {
        return e == null ? e : {
            favicon_type: e.favicon_type == null ? void 0 : e.favicon_type,
            favicon_url: e.favicon_url == null ? void 0 : e.favicon_url,
            logo_type: e.logo_type == null ? void 0 : e.logo_type,
            logo_url: e.logo_url == null ? void 0 : e.logo_url,
            name: e.name == null ? void 0 : e.name,
            theme: e.theme == null ? void 0 : dt(e.theme)
        }
    }

    function vN(e) {
        return Kf(e, !1)
    }

    function Kf(e, t = !1) {
        return e == null ? e : {
            favicon_type: e.favicon_type,
            favicon_url: e.favicon_url,
            logo_type: e.logo_type,
            logo_url: e.logo_url,
            name: e.name,
            theme: ct(e.theme)
        }
    }

    function NN(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("id" in e) || e.id === void 0 || !("identity" in e) || e.identity === void 0 || !("issued_at" in e) || e.issued_at === void 0 || !("request_url" in e) || e.request_url === void 0 || !("state" in e) || e.state === void 0 || !("type" in e) || e.type === void 0 || !("ui" in e) || e.ui === void 0)
    }

    function de(e) {
        return Vf(e)
    }

    function Vf(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(H),
            expires_at: new Date(e.expires_at),
            id: e.id,
            identity: F(e.identity),
            issued_at: new Date(e.issued_at),
            request_url: e.request_url,
            return_to: e.return_to == null ? void 0 : e.return_to,
            state: e.state,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            type: e.type,
            ui: M(e.ui)
        }
    }

    function JN(e) {
        return Hf(e, !1)
    }

    function Hf(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(X),
            expires_at: e.expires_at.toISOString(),
            id: e.id,
            identity: be(e.identity),
            issued_at: e.issued_at.toISOString(),
            request_url: e.request_url,
            return_to: e.return_to,
            state: e.state,
            transient_payload: e.transient_payload,
            type: e.type,
            ui: $(e.ui)
        }
    }
    const De = {
        ShowForm: "show_form",
        Success: "success",
        UnknownDefaultOpenApi: "11184809"
    };

    function RN(e) {
        for (const t in De)
            if (Object.prototype.hasOwnProperty.call(De, t) && De[t] === e) return !0;
        return !1
    }

    function FN(e) {
        return Xf(e)
    }

    function Xf(e, t) {
        return e
    }

    function CN(e) {
        return e
    }

    function DN(e, t) {
        return e
    }
    const xN = {
            Usd: "usd",
            Eur: "eur",
            UnknownDefaultOpenApi: "11184809"
        },
        AN = {
            Monthly: "monthly",
            Yearly: "yearly",
            UnknownDefaultOpenApi: "11184809"
        };

    function IN(e) {
        return !(!("created_at" in e) || e.created_at === void 0 || !("currency" in e) || e.currency === void 0 || !("current_interval" in e) || e.current_interval === void 0 || !("current_plan" in e) || e.current_plan === void 0 || !("customer_id" in e) || e.customer_id === void 0 || !("id" in e) || e.id === void 0 || !("interval_changes_to" in e) || e.interval_changes_to === void 0 || !("payed_until" in e) || e.payed_until === void 0 || !("plan_changes_to" in e) || e.plan_changes_to === void 0 || !("status" in e) || e.status === void 0 || !("updated_at" in e) || e.updated_at === void 0)
    }

    function PN(e) {
        return Qf(e)
    }

    function Qf(e, t) {
        return e == null ? e : {
            created_at: new Date(e.created_at),
            currency: e.currency,
            current_interval: e.current_interval,
            current_plan: e.current_plan,
            current_plan_details: e.current_plan_details == null ? void 0 : ju(e.current_plan_details),
            customer_id: e.customer_id,
            id: e.id,
            interval_changes_to: e.interval_changes_to,
            ongoing_stripe_checkout_id: e.ongoing_stripe_checkout_id == null ? void 0 : e.ongoing_stripe_checkout_id,
            payed_until: new Date(e.payed_until),
            plan_changes_at: e.plan_changes_at == null ? void 0 : new Date(e.plan_changes_at),
            plan_changes_to: e.plan_changes_to,
            status: e.status,
            stripe_checkout_expires_at: e.stripe_checkout_expires_at == null ? void 0 : new Date(e.stripe_checkout_expires_at),
            updated_at: new Date(e.updated_at)
        }
    }

    function qN(e) {
        return Yf(e, !1)
    }

    function Yf(e, t = !1) {
        return e == null ? e : {
            current_plan_details: tl(e.current_plan_details),
            interval_changes_to: e.interval_changes_to,
            ongoing_stripe_checkout_id: e.ongoing_stripe_checkout_id,
            plan_changes_at: e.plan_changes_at == null ? void 0 : e.plan_changes_at.toISOString(),
            plan_changes_to: e.plan_changes_to,
            status: e.status,
            stripe_checkout_expires_at: e.stripe_checkout_expires_at == null ? void 0 : e.stripe_checkout_expires_at.toISOString()
        }
    }

    function zN(e) {
        return !(!("session" in e) || e.session === void 0)
    }

    function UN(e) {
        return Zf(e)
    }

    function Zf(e, t) {
        return e == null ? e : {
            session: C(e.session),
            session_token: e.session_token == null ? void 0 : e.session_token
        }
    }

    function EN(e) {
        return jf(e, !1)
    }

    function jf(e, t = !1) {
        return e == null ? e : {
            session: Ce(e.session),
            session_token: e.session_token
        }
    }

    function BN(e) {
        return !(!("session" in e) || e.session === void 0)
    }

    function xe(e) {
        return ep(e)
    }

    function ep(e, t) {
        return e == null ? e : {
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(H),
            session: C(e.session),
            session_token: e.session_token == null ? void 0 : e.session_token
        }
    }

    function WN(e) {
        return tp(e, !1)
    }

    function tp(e, t = !1) {
        return e == null ? e : {
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(X),
            session: Ce(e.session),
            session_token: e.session_token
        }
    }

    function LN(e) {
        return !(!("identity" in e) || e.identity === void 0)
    }

    function rp(e) {
        return np(e)
    }

    function np(e, t) {
        return e == null ? e : {
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(H),
            identity: F(e.identity),
            session: e.session == null ? void 0 : C(e.session),
            session_token: e.session_token == null ? void 0 : e.session_token
        }
    }

    function MN(e) {
        return ip(e, !1)
    }

    function ip(e, t = !1) {
        return e == null ? e : {
            continue_with: e.continue_with == null ? void 0 : e.continue_with.map(X),
            identity: be(e.identity),
            session: Ce(e.session),
            session_token: e.session_token
        }
    }

    function $N(e) {
        return !0
    }

    function op(e) {
        return _p(e)
    }

    function _p(e, t) {
        return e == null ? e : {
            code: e.code == null ? void 0 : e.code,
            message: e.message == null ? void 0 : e.message
        }
    }

    function ap(e) {
        return sp(e, !1)
    }

    function sp(e, t = !1) {
        return e == null ? e : {
            code: e.code,
            message: e.message
        }
    }

    function GN(e) {
        return !(!("project" in e) || e.project === void 0 || !("warnings" in e) || e.warnings === void 0)
    }

    function Ae(e) {
        return dp(e)
    }

    function dp(e, t) {
        return e == null ? e : {
            project: Ne(e.project),
            warnings: e.warnings.map(op)
        }
    }

    function KN(e) {
        return cp(e, !1)
    }

    function cp(e, t = !1) {
        return e == null ? e : {
            project: Cl(e.project),
            warnings: e.warnings.map(ap)
        }
    }

    function VN(e) {
        return !0
    }

    function HN(e) {
        return up(e)
    }

    function up(e, t) {
        return e == null ? e : {
            page_size: e.page_size == null ? void 0 : e.page_size,
            page_token: e.page_token == null ? void 0 : e.page_token
        }
    }

    function XN(e) {
        return lp(e, !1)
    }

    function lp(e, t = !1) {
        return e == null ? e : {
            page_size: e.page_size,
            page_token: e.page_token
        }
    }

    function QN(e) {
        return !0
    }

    function YN(e) {
        return fp(e)
    }

    function fp(e, t) {
        return e == null ? e : {
            link: e.link == null ? void 0 : e.link,
            x_total_count: e["x-total-count"] == null ? void 0 : e["x-total-count"]
        }
    }

    function ZN(e) {
        return pp(e, !1)
    }

    function pp(e, t = !1) {
        return e == null ? e : {
            link: e.link,
            "x-total-count": e.x_total_count
        }
    }

    function jN(e) {
        return !0
    }

    function eJ(e) {
        return hp(e)
    }

    function hp(e, t) {
        return e == null ? e : {
            page_size: e.page_size == null ? void 0 : e.page_size,
            page_token: e.page_token == null ? void 0 : e.page_token
        }
    }

    function tJ(e) {
        return gp(e, !1)
    }

    function gp(e, t = !1) {
        return e == null ? e : {
            page_size: e.page_size,
            page_token: e.page_token
        }
    }

    function rJ(e) {
        return !0
    }

    function nJ(e) {
        return mp(e)
    }

    function mp(e, t) {
        return e == null ? e : {
            link: e.link == null ? void 0 : e.link,
            x_total_count: e["x-total-count"] == null ? void 0 : e["x-total-count"]
        }
    }

    function iJ(e) {
        return yp(e, !1)
    }

    function yp(e, t = !1) {
        return e == null ? e : {
            link: e.link,
            "x-total-count": e.x_total_count
        }
    }

    function oJ(e) {
        return !(!("expires_at" in e) || e.expires_at === void 0 || !("issuer" in e) || e.issuer === void 0 || !("jwk" in e) || e.jwk === void 0 || !("scope" in e) || e.scope === void 0)
    }

    function _J(e) {
        return kp(e)
    }

    function kp(e, t) {
        return e == null ? e : {
            allow_any_subject: e.allow_any_subject == null ? void 0 : e.allow_any_subject,
            expires_at: new Date(e.expires_at),
            issuer: e.issuer,
            jwk: me(e.jwk),
            scope: e.scope,
            subject: e.subject == null ? void 0 : e.subject
        }
    }

    function bp(e) {
        return wp(e, !1)
    }

    function wp(e, t = !1) {
        return e == null ? e : {
            allow_any_subject: e.allow_any_subject,
            expires_at: e.expires_at.toISOString(),
            issuer: e.issuer,
            jwk: ye(e.jwk),
            scope: e.scope,
            subject: e.subject
        }
    }

    function aJ(e) {
        return !0
    }

    function Sp(e) {
        return Op(e)
    }

    function Op(e, t) {
        return e == null ? e : {
            kid: e.kid == null ? void 0 : e.kid,
            set: e.set == null ? void 0 : e.set
        }
    }

    function Tp(e) {
        return vp(e, !1)
    }

    function vp(e, t = !1) {
        return e == null ? e : {
            kid: e.kid,
            set: e.set
        }
    }

    function sJ(e) {
        return !0
    }

    function Ie(e) {
        return Np(e)
    }

    function Np(e, t) {
        return e == null ? e : {
            allow_any_subject: e.allow_any_subject == null ? void 0 : e.allow_any_subject,
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            id: e.id == null ? void 0 : e.id,
            issuer: e.issuer == null ? void 0 : e.issuer,
            public_key: e.public_key == null ? void 0 : Sp(e.public_key),
            scope: e.scope == null ? void 0 : e.scope,
            subject: e.subject == null ? void 0 : e.subject
        }
    }

    function dJ(e) {
        return Jp(e, !1)
    }

    function Jp(e, t = !1) {
        return e == null ? e : {
            allow_any_subject: e.allow_any_subject,
            created_at: e.created_at == null ? void 0 : e.created_at.toISOString(),
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            id: e.id,
            issuer: e.issuer,
            public_key: Tp(e.public_key),
            scope: e.scope,
            subject: e.subject
        }
    }

    function cJ(e) {
        return !(!("csrf_token" in e) || e.csrf_token === void 0 || !("token" in e) || e.token === void 0)
    }

    function uJ(e) {
        return Rp(e)
    }

    function Rp(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            nonce: e.nonce == null ? void 0 : e.nonce,
            token: e.token,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Fp(e) {
        return Cp(e, !1)
    }

    function Cp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            nonce: e.nonce,
            token: e.token,
            transient_payload: e.transient_payload
        }
    }
    const lJ = {
        Active: "active",
        Inactive: "inactive",
        UnknownDefaultOpenApi: "11184809"
    };

    function fJ(e) {
        return !(!("schema_id" in e) || e.schema_id === void 0 || !("state" in e) || e.state === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function pJ(e) {
        return Dp(e)
    }

    function Dp(e, t) {
        return e == null ? e : {
            credentials: e.credentials == null ? void 0 : it(e.credentials),
            external_id: e.external_id == null ? void 0 : e.external_id,
            metadata_admin: e.metadata_admin == null ? void 0 : e.metadata_admin,
            metadata_public: e.metadata_public == null ? void 0 : e.metadata_public,
            schema_id: e.schema_id,
            state: e.state,
            traits: e.traits
        }
    }

    function xp(e) {
        return Ap(e, !1)
    }

    function Ap(e, t = !1) {
        return e == null ? e : {
            credentials: ot(e.credentials),
            external_id: e.external_id,
            metadata_admin: e.metadata_admin,
            metadata_public: e.metadata_public,
            schema_id: e.schema_id,
            state: e.state,
            traits: e.traits
        }
    }

    function hJ(e) {
        return !(!("csrf_token" in e) || e.csrf_token === void 0 || !("method" in e) || e.method === void 0)
    }

    function gJ(e) {
        return Vt(e)
    }

    function Vt(e, t) {
        return e == null ? e : {
            address: e.address == null ? void 0 : e.address,
            code: e.code == null ? void 0 : e.code,
            csrf_token: e.csrf_token,
            identifier: e.identifier == null ? void 0 : e.identifier,
            method: e.method,
            resend: e.resend == null ? void 0 : e.resend,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Ip(e) {
        return Pp(e, !1)
    }

    function Pp(e, t = !1) {
        return e == null ? e : {
            address: e.address,
            code: e.code,
            csrf_token: e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            resend: e.resend,
            transient_payload: e.transient_payload
        }
    }

    function mJ(e) {
        return !(!("identifier" in e) || e.identifier === void 0 || !("method" in e) || e.method === void 0)
    }

    function yJ(e) {
        return Ht(e)
    }

    function Ht(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function qp(e) {
        return zp(e, !1)
    }

    function zp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            transient_payload: e.transient_payload
        }
    }

    function kJ(e) {
        return !(!("lookup_secret" in e) || e.lookup_secret === void 0 || !("method" in e) || e.method === void 0)
    }

    function bJ(e) {
        return Xt(e)
    }

    function Xt(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            lookup_secret: e.lookup_secret,
            method: e.method
        }
    }

    function Up(e) {
        return Ep(e, !1)
    }

    function Ep(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            lookup_secret: e.lookup_secret,
            method: e.method
        }
    }

    function wJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("provider" in e) || e.provider === void 0)
    }

    function SJ(e) {
        return Qt(e)
    }

    function Qt(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            id_token: e.id_token == null ? void 0 : e.id_token,
            id_token_nonce: e.id_token_nonce == null ? void 0 : e.id_token_nonce,
            method: e.method,
            provider: e.provider,
            traits: e.traits == null ? void 0 : e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            upstream_parameters: e.upstream_parameters == null ? void 0 : e.upstream_parameters
        }
    }

    function Bp(e) {
        return Wp(e, !1)
    }

    function Wp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            id_token: e.id_token,
            id_token_nonce: e.id_token_nonce,
            method: e.method,
            provider: e.provider,
            traits: e.traits,
            transient_payload: e.transient_payload,
            upstream_parameters: e.upstream_parameters
        }
    }

    function OJ(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function TJ(e) {
        return Yt(e)
    }

    function Yt(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            passkey_login: e.passkey_login == null ? void 0 : e.passkey_login
        }
    }

    function Lp(e) {
        return Mp(e, !1)
    }

    function Mp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            passkey_login: e.passkey_login
        }
    }

    function vJ(e) {
        return !(!("identifier" in e) || e.identifier === void 0 || !("method" in e) || e.method === void 0 || !("password" in e) || e.password === void 0)
    }

    function NJ(e) {
        return Zt(e)
    }

    function Zt(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            password: e.password,
            password_identifier: e.password_identifier == null ? void 0 : e.password_identifier,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function $p(e) {
        return Gp(e, !1)
    }

    function Gp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            password: e.password,
            password_identifier: e.password_identifier,
            transient_payload: e.transient_payload
        }
    }

    function JJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("provider" in e) || e.provider === void 0)
    }

    function RJ(e) {
        return jt(e)
    }

    function jt(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            provider: e.provider,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Kp(e) {
        return Vp(e, !1)
    }

    function Vp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            provider: e.provider,
            transient_payload: e.transient_payload
        }
    }

    function FJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("totp_code" in e) || e.totp_code === void 0)
    }

    function CJ(e) {
        return er(e)
    }

    function er(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            totp_code: e.totp_code,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Hp(e) {
        return Xp(e, !1)
    }

    function Xp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            totp_code: e.totp_code,
            transient_payload: e.transient_payload
        }
    }

    function DJ(e) {
        return !(!("identifier" in e) || e.identifier === void 0 || !("method" in e) || e.method === void 0)
    }

    function xJ(e) {
        return tr(e)
    }

    function tr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            webauthn_login: e.webauthn_login == null ? void 0 : e.webauthn_login
        }
    }

    function Qp(e) {
        return Yp(e, !1)
    }

    function Yp(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            identifier: e.identifier,
            method: e.method,
            transient_payload: e.transient_payload,
            webauthn_login: e.webauthn_login
        }
    }

    function AJ(e) {
        return Zp(e)
    }

    function Zp(e, t) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, Vt(e), {
                    method: "code"
                });
            case "identifier_first":
                return Object.assign({}, Ht(e), {
                    method: "identifier_first"
                });
            case "lookup_secret":
                return Object.assign({}, Xt(e), {
                    method: "lookup_secret"
                });
            case "oidc":
                return Object.assign({}, Qt(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, Yt(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, Zt(e), {
                    method: "password"
                });
            case "saml":
                return Object.assign({}, jt(e), {
                    method: "saml"
                });
            case "totp":
                return Object.assign({}, er(e), {
                    method: "totp"
                });
            case "webauthn":
                return Object.assign({}, tr(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateLoginFlowBody exists with 'method=${e.method}'`)
        }
    }

    function jp(e) {
        return eh(e, !1)
    }

    function eh(e, t = !1) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, Ip(e), {
                    method: "code"
                });
            case "identifier_first":
                return Object.assign({}, qp(e), {
                    method: "identifier_first"
                });
            case "lookup_secret":
                return Object.assign({}, Up(e), {
                    method: "lookup_secret"
                });
            case "oidc":
                return Object.assign({}, Bp(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, Lp(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, $p(e), {
                    method: "password"
                });
            case "saml":
                return Object.assign({}, Kp(e), {
                    method: "saml"
                });
            case "totp":
                return Object.assign({}, Hp(e), {
                    method: "totp"
                });
            case "webauthn":
                return Object.assign({}, Qp(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateLoginFlowBody exists with 'method=${e.method}'`)
        }
    }

    function IJ(e) {
        return !(!("enable_scim" in e) || e.enable_scim === void 0 || !("enable_sso" in e) || e.enable_sso === void 0)
    }

    function PJ(e) {
        return th(e)
    }

    function th(e, t) {
        return e == null ? e : {
            enable_scim: e.enable_scim,
            enable_sso: e.enable_sso,
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at)
        }
    }

    function rh(e) {
        return nh(e, !1)
    }

    function nh(e, t = !1) {
        return e == null ? e : {
            enable_scim: e.enable_scim,
            enable_sso: e.enable_sso,
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString()
        }
    }
    const qJ = {
        Link: "link",
        Code: "code",
        UnknownDefaultOpenApi: "11184809"
    };

    function zJ(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function UJ(e) {
        return rr(e)
    }

    function rr(e, t) {
        return e == null ? e : {
            code: e.code == null ? void 0 : e.code,
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            email: e.email == null ? void 0 : e.email,
            method: e.method,
            recovery_address: e.recovery_address == null ? void 0 : e.recovery_address,
            recovery_confirm_address: e.recovery_confirm_address == null ? void 0 : e.recovery_confirm_address,
            recovery_select_address: e.recovery_select_address == null ? void 0 : e.recovery_select_address,
            screen: e.screen == null ? void 0 : e.screen,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function ih(e) {
        return oh(e, !1)
    }

    function oh(e, t = !1) {
        return e == null ? e : {
            code: e.code,
            csrf_token: e.csrf_token,
            email: e.email,
            method: e.method,
            recovery_address: e.recovery_address,
            recovery_confirm_address: e.recovery_confirm_address,
            recovery_select_address: e.recovery_select_address,
            screen: e.screen,
            transient_payload: e.transient_payload
        }
    }
    const EJ = {
        Link: "link",
        Code: "code",
        UnknownDefaultOpenApi: "11184809"
    };

    function BJ(e) {
        return !(!("email" in e) || e.email === void 0 || !("method" in e) || e.method === void 0)
    }

    function WJ(e) {
        return nr(e)
    }

    function nr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            email: e.email,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function _h(e) {
        return ah(e, !1)
    }

    function ah(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            email: e.email,
            method: e.method,
            transient_payload: e.transient_payload
        }
    }

    function LJ(e) {
        return sh(e)
    }

    function sh(e, t) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, rr(e), {
                    method: "code"
                });
            case "link":
                return Object.assign({}, nr(e), {
                    method: "link"
                });
            default:
                throw new Error(`No variant of UpdateRecoveryFlowBody exists with 'method=${e.method}'`)
        }
    }

    function dh(e) {
        return ch(e, !1)
    }

    function ch(e, t = !1) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, ih(e), {
                    method: "code"
                });
            case "link":
                return Object.assign({}, _h(e), {
                    method: "link"
                });
            default:
                throw new Error(`No variant of UpdateRecoveryFlowBody exists with 'method=${e.method}'`)
        }
    }

    function MJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function $J(e) {
        return ir(e)
    }

    function ir(e, t) {
        return e == null ? e : {
            code: e.code == null ? void 0 : e.code,
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            resend: e.resend == null ? void 0 : e.resend,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function uh(e) {
        return lh(e, !1)
    }

    function lh(e, t = !1) {
        return e == null ? e : {
            code: e.code,
            csrf_token: e.csrf_token,
            method: e.method,
            resend: e.resend,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }

    function GJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("provider" in e) || e.provider === void 0)
    }

    function KJ(e) {
        return or(e)
    }

    function or(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            id_token: e.id_token == null ? void 0 : e.id_token,
            id_token_nonce: e.id_token_nonce == null ? void 0 : e.id_token_nonce,
            method: e.method,
            provider: e.provider,
            traits: e.traits == null ? void 0 : e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            upstream_parameters: e.upstream_parameters == null ? void 0 : e.upstream_parameters
        }
    }

    function fh(e) {
        return ph(e, !1)
    }

    function ph(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            id_token: e.id_token,
            id_token_nonce: e.id_token_nonce,
            method: e.method,
            provider: e.provider,
            traits: e.traits,
            transient_payload: e.transient_payload,
            upstream_parameters: e.upstream_parameters
        }
    }

    function VJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function HJ(e) {
        return _r(e)
    }

    function _r(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            passkey_register: e.passkey_register == null ? void 0 : e.passkey_register,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function hh(e) {
        return gh(e, !1)
    }

    function gh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            passkey_register: e.passkey_register,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }

    function XJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("password" in e) || e.password === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function QJ(e) {
        return ar(e)
    }

    function ar(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            password: e.password,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function mh(e) {
        return yh(e, !1)
    }

    function yh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            password: e.password,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }
    const YJ = {
        CredentialSelection: "credential-selection",
        Previous: "previous",
        UnknownDefaultOpenApi: "11184809"
    };

    function ZJ(e) {
        return !(!("method" in e) || e.method === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function jJ(e) {
        return sr(e)
    }

    function sr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            screen: e.screen == null ? void 0 : e.screen,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function kh(e) {
        return bh(e, !1)
    }

    function bh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            screen: e.screen,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }

    function eR(e) {
        return !(!("method" in e) || e.method === void 0 || !("provider" in e) || e.provider === void 0)
    }

    function tR(e) {
        return dr(e)
    }

    function dr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            provider: e.provider,
            traits: e.traits == null ? void 0 : e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function wh(e) {
        return Sh(e, !1)
    }

    function Sh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            provider: e.provider,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }

    function rR(e) {
        return !(!("method" in e) || e.method === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function nR(e) {
        return cr(e)
    }

    function cr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            webauthn_register: e.webauthn_register == null ? void 0 : e.webauthn_register,
            webauthn_register_displayname: e.webauthn_register_displayname == null ? void 0 : e.webauthn_register_displayname
        }
    }

    function Oh(e) {
        return Th(e, !1)
    }

    function Th(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload,
            webauthn_register: e.webauthn_register,
            webauthn_register_displayname: e.webauthn_register_displayname
        }
    }

    function iR(e) {
        return vh(e)
    }

    function vh(e, t) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, ir(e), {
                    method: "code"
                });
            case "oidc":
                return Object.assign({}, or(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, _r(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, ar(e), {
                    method: "password"
                });
            case "profile":
                return Object.assign({}, sr(e), {
                    method: "profile"
                });
            case "saml":
                return Object.assign({}, dr(e), {
                    method: "saml"
                });
            case "webauthn":
                return Object.assign({}, cr(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${e.method}'`)
        }
    }

    function Nh(e) {
        return Jh(e, !1)
    }

    function Jh(e, t = !1) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, uh(e), {
                    method: "code"
                });
            case "oidc":
                return Object.assign({}, fh(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, hh(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, mh(e), {
                    method: "password"
                });
            case "profile":
                return Object.assign({}, kh(e), {
                    method: "profile"
                });
            case "saml":
                return Object.assign({}, wh(e), {
                    method: "saml"
                });
            case "webauthn":
                return Object.assign({}, Oh(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateRegistrationFlowBody exists with 'method=${e.method}'`)
        }
    }

    function oR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function _R(e) {
        return ur(e)
    }

    function ur(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            lookup_secret_confirm: e.lookup_secret_confirm == null ? void 0 : e.lookup_secret_confirm,
            lookup_secret_disable: e.lookup_secret_disable == null ? void 0 : e.lookup_secret_disable,
            lookup_secret_regenerate: e.lookup_secret_regenerate == null ? void 0 : e.lookup_secret_regenerate,
            lookup_secret_reveal: e.lookup_secret_reveal == null ? void 0 : e.lookup_secret_reveal,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Rh(e) {
        return Fh(e, !1)
    }

    function Fh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            lookup_secret_confirm: e.lookup_secret_confirm,
            lookup_secret_disable: e.lookup_secret_disable,
            lookup_secret_regenerate: e.lookup_secret_regenerate,
            lookup_secret_reveal: e.lookup_secret_reveal,
            method: e.method,
            transient_payload: e.transient_payload
        }
    }

    function aR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function sR(e) {
        return lr(e)
    }

    function lr(e, t) {
        return e == null ? e : {
            flow: e.flow == null ? void 0 : e.flow,
            link: e.link == null ? void 0 : e.link,
            method: e.method,
            traits: e.traits == null ? void 0 : e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            unlink: e.unlink == null ? void 0 : e.unlink,
            upstream_parameters: e.upstream_parameters == null ? void 0 : e.upstream_parameters
        }
    }

    function Ch(e) {
        return Dh(e, !1)
    }

    function Dh(e, t = !1) {
        return e == null ? e : {
            flow: e.flow,
            link: e.link,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload,
            unlink: e.unlink,
            upstream_parameters: e.upstream_parameters
        }
    }

    function dR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function cR(e) {
        return fr(e)
    }

    function fr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            passkey_remove: e.passkey_remove == null ? void 0 : e.passkey_remove,
            passkey_settings_register: e.passkey_settings_register == null ? void 0 : e.passkey_settings_register
        }
    }

    function xh(e) {
        return Ah(e, !1)
    }

    function Ah(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            passkey_remove: e.passkey_remove,
            passkey_settings_register: e.passkey_settings_register
        }
    }

    function uR(e) {
        return !(!("method" in e) || e.method === void 0 || !("password" in e) || e.password === void 0)
    }

    function lR(e) {
        return pr(e)
    }

    function pr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            password: e.password,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Ih(e) {
        return Ph(e, !1)
    }

    function Ph(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            password: e.password,
            transient_payload: e.transient_payload
        }
    }

    function fR(e) {
        return !(!("method" in e) || e.method === void 0 || !("traits" in e) || e.traits === void 0)
    }

    function pR(e) {
        return hr(e)
    }

    function hr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function qh(e) {
        return zh(e, !1)
    }

    function zh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload
        }
    }

    function hR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function gR(e) {
        return gr(e)
    }

    function gr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            flow: e.flow == null ? void 0 : e.flow,
            link: e.link == null ? void 0 : e.link,
            method: e.method,
            traits: e.traits == null ? void 0 : e.traits,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            unlink: e.unlink == null ? void 0 : e.unlink
        }
    }

    function Uh(e) {
        return Eh(e, !1)
    }

    function Eh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            flow: e.flow,
            link: e.link,
            method: e.method,
            traits: e.traits,
            transient_payload: e.transient_payload,
            unlink: e.unlink
        }
    }

    function mR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function yR(e) {
        return mr(e)
    }

    function mr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            totp_code: e.totp_code == null ? void 0 : e.totp_code,
            totp_unlink: e.totp_unlink == null ? void 0 : e.totp_unlink,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Bh(e) {
        return Wh(e, !1)
    }

    function Wh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            totp_code: e.totp_code,
            totp_unlink: e.totp_unlink,
            transient_payload: e.transient_payload
        }
    }

    function kR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function bR(e) {
        return yr(e)
    }

    function yr(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            webauthn_register: e.webauthn_register == null ? void 0 : e.webauthn_register,
            webauthn_register_displayname: e.webauthn_register_displayname == null ? void 0 : e.webauthn_register_displayname,
            webauthn_remove: e.webauthn_remove == null ? void 0 : e.webauthn_remove
        }
    }

    function Lh(e) {
        return Mh(e, !1)
    }

    function Mh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            method: e.method,
            transient_payload: e.transient_payload,
            webauthn_register: e.webauthn_register,
            webauthn_register_displayname: e.webauthn_register_displayname,
            webauthn_remove: e.webauthn_remove
        }
    }

    function wR(e) {
        return $h(e)
    }

    function $h(e, t) {
        if (e == null) return e;
        switch (e.method) {
            case "lookup_secret":
                return Object.assign({}, ur(e), {
                    method: "lookup_secret"
                });
            case "oidc":
                return Object.assign({}, lr(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, fr(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, pr(e), {
                    method: "password"
                });
            case "profile":
                return Object.assign({}, hr(e), {
                    method: "profile"
                });
            case "saml":
                return Object.assign({}, gr(e), {
                    method: "saml"
                });
            case "totp":
                return Object.assign({}, mr(e), {
                    method: "totp"
                });
            case "webauthn":
                return Object.assign({}, yr(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateSettingsFlowBody exists with 'method=${e.method}'`)
        }
    }

    function Gh(e) {
        return Kh(e, !1)
    }

    function Kh(e, t = !1) {
        if (e == null) return e;
        switch (e.method) {
            case "lookup_secret":
                return Object.assign({}, Rh(e), {
                    method: "lookup_secret"
                });
            case "oidc":
                return Object.assign({}, Ch(e), {
                    method: "oidc"
                });
            case "passkey":
                return Object.assign({}, xh(e), {
                    method: "passkey"
                });
            case "password":
                return Object.assign({}, Ih(e), {
                    method: "password"
                });
            case "profile":
                return Object.assign({}, qh(e), {
                    method: "profile"
                });
            case "saml":
                return Object.assign({}, Uh(e), {
                    method: "saml"
                });
            case "totp":
                return Object.assign({}, Bh(e), {
                    method: "totp"
                });
            case "webauthn":
                return Object.assign({}, Lh(e), {
                    method: "webauthn"
                });
            default:
                throw new Error(`No variant of UpdateSettingsFlowBody exists with 'method=${e.method}'`)
        }
    }
    const SR = {
        Monthly: "monthly",
        Yearly: "yearly",
        UnknownDefaultOpenApi: "11184809"
    };

    function OR(e) {
        return !(!("interval" in e) || e.interval === void 0 || !("plan" in e) || e.plan === void 0)
    }

    function TR(e) {
        return Vh(e)
    }

    function Vh(e, t) {
        return e == null ? e : {
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to == null ? void 0 : e.return_to
        }
    }

    function vR(e) {
        return Hh(e, !1)
    }

    function Hh(e, t = !1) {
        return e == null ? e : {
            interval: e.interval,
            plan: e.plan,
            return_to: e.return_to
        }
    }
    const NR = {
        Link: "link",
        Code: "code",
        UnknownDefaultOpenApi: "11184809"
    };

    function JR(e) {
        return !(!("method" in e) || e.method === void 0)
    }

    function RR(e) {
        return kr(e)
    }

    function kr(e, t) {
        return e == null ? e : {
            code: e.code == null ? void 0 : e.code,
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            email: e.email == null ? void 0 : e.email,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Xh(e) {
        return Qh(e, !1)
    }

    function Qh(e, t = !1) {
        return e == null ? e : {
            code: e.code,
            csrf_token: e.csrf_token,
            email: e.email,
            method: e.method,
            transient_payload: e.transient_payload
        }
    }
    const FR = {
        Link: "link",
        Code: "code",
        UnknownDefaultOpenApi: "11184809"
    };

    function CR(e) {
        return !(!("email" in e) || e.email === void 0 || !("method" in e) || e.method === void 0)
    }

    function DR(e) {
        return br(e)
    }

    function br(e, t) {
        return e == null ? e : {
            csrf_token: e.csrf_token == null ? void 0 : e.csrf_token,
            email: e.email,
            method: e.method,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload
        }
    }

    function Yh(e) {
        return Zh(e, !1)
    }

    function Zh(e, t = !1) {
        return e == null ? e : {
            csrf_token: e.csrf_token,
            email: e.email,
            method: e.method,
            transient_payload: e.transient_payload
        }
    }

    function xR(e) {
        return jh(e)
    }

    function jh(e, t) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, kr(e), {
                    method: "code"
                });
            case "link":
                return Object.assign({}, br(e), {
                    method: "link"
                });
            default:
                throw new Error(`No variant of UpdateVerificationFlowBody exists with 'method=${e.method}'`)
        }
    }

    function eg(e) {
        return tg(e, !1)
    }

    function tg(e, t = !1) {
        if (e == null) return e;
        switch (e.method) {
            case "code":
                return Object.assign({}, Xh(e), {
                    method: "code"
                });
            case "link":
                return Object.assign({}, Yh(e), {
                    method: "link"
                });
            default:
                throw new Error(`No variant of UpdateVerificationFlowBody exists with 'method=${e.method}'`)
        }
    }

    function AR(e) {
        return !(!("name" in e) || e.name === void 0)
    }

    function IR(e) {
        return rg(e)
    }

    function rg(e, t) {
        return e == null ? e : {
            name: e.name
        }
    }

    function ng(e) {
        return ig(e, !1)
    }

    function ig(e, t = !1) {
        return e == null ? e : {
            name: e.name
        }
    }

    function PR(e) {
        return !0
    }

    function qR(e) {
        return og(e)
    }

    function og(e, t) {
        return e == null ? e : {
            GenericUsage: e.GenericUsage == null ? void 0 : Nt(e.GenericUsage)
        }
    }

    function zR(e) {
        return _g(e, !1)
    }

    function _g(e, t = !1) {
        return e == null ? e : {
            GenericUsage: Jt(e.GenericUsage)
        }
    }

    function UR(e) {
        return !0
    }

    function ER(e) {
        return ag(e)
    }

    function ag(e, t) {
        return e == null ? e : {
            c_nonce: e.c_nonce == null ? void 0 : e.c_nonce,
            c_nonce_expires_in: e.c_nonce_expires_in == null ? void 0 : e.c_nonce_expires_in,
            error: e.error == null ? void 0 : e.error,
            error_debug: e.error_debug == null ? void 0 : e.error_debug,
            error_description: e.error_description == null ? void 0 : e.error_description,
            error_hint: e.error_hint == null ? void 0 : e.error_hint,
            format: e.format == null ? void 0 : e.format,
            status_code: e.status_code == null ? void 0 : e.status_code
        }
    }

    function BR(e) {
        return sg(e, !1)
    }

    function sg(e, t = !1) {
        return e == null ? e : {
            c_nonce: e.c_nonce,
            c_nonce_expires_in: e.c_nonce_expires_in,
            error: e.error,
            error_debug: e.error_debug,
            error_description: e.error_description,
            error_hint: e.error_hint,
            format: e.format,
            status_code: e.status_code
        }
    }

    function WR(e) {
        return !0
    }

    function dg(e) {
        return cg(e)
    }

    function cg(e, t) {
        return e == null ? e : {
            credential_draft_00: e.credential_draft_00 == null ? void 0 : e.credential_draft_00,
            format: e.format == null ? void 0 : e.format
        }
    }

    function LR(e) {
        return ug(e, !1)
    }

    function ug(e, t = !1) {
        return e == null ? e : {
            credential_draft_00: e.credential_draft_00,
            format: e.format
        }
    }

    function MR(e) {
        return !(!("id" in e) || e.id === void 0 || !("state" in e) || e.state === void 0 || !("type" in e) || e.type === void 0 || !("ui" in e) || e.ui === void 0)
    }

    function ce(e) {
        return lg(e)
    }

    function lg(e, t) {
        return e == null ? e : {
            active: e.active == null ? void 0 : e.active,
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            id: e.id,
            issued_at: e.issued_at == null ? void 0 : new Date(e.issued_at),
            request_url: e.request_url == null ? void 0 : e.request_url,
            return_to: e.return_to == null ? void 0 : e.return_to,
            state: e.state,
            transient_payload: e.transient_payload == null ? void 0 : e.transient_payload,
            type: e.type,
            ui: M(e.ui)
        }
    }

    function $R(e) {
        return fg(e, !1)
    }

    function fg(e, t = !1) {
        return e == null ? e : {
            active: e.active,
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            id: e.id,
            issued_at: e.issued_at == null ? void 0 : e.issued_at.toISOString(),
            request_url: e.request_url,
            return_to: e.return_to,
            state: e.state,
            transient_payload: e.transient_payload,
            type: e.type,
            ui: $(e.ui)
        }
    }
    const Pe = {
        ChooseMethod: "choose_method",
        SentEmail: "sent_email",
        PassedChallenge: "passed_challenge",
        UnknownDefaultOpenApi: "11184809"
    };

    function GR(e) {
        for (const t in Pe)
            if (Object.prototype.hasOwnProperty.call(Pe, t) && Pe[t] === e) return !0;
        return !1
    }

    function KR(e) {
        return pg(e)
    }

    function pg(e, t) {
        return e
    }

    function VR(e) {
        return e
    }

    function HR(e, t) {
        return e
    }

    function XR(e) {
        return !0
    }

    function QR(e) {
        return hg(e)
    }

    function hg(e, t) {
        return e == null ? e : {
            client: e.client == null ? void 0 : O(e.client),
            device_code_request_id: e.device_code_request_id == null ? void 0 : e.device_code_request_id,
            request_url: e.request_url == null ? void 0 : e.request_url,
            requested_access_token_audience: e.requested_access_token_audience == null ? void 0 : e.requested_access_token_audience,
            requested_scope: e.requested_scope == null ? void 0 : e.requested_scope
        }
    }

    function YR(e) {
        return gg(e, !1)
    }

    function gg(e, t = !1) {
        return e == null ? e : {
            client: R(e.client),
            device_code_request_id: e.device_code_request_id,
            request_url: e.request_url,
            requested_access_token_audience: e.requested_access_token_audience,
            requested_scope: e.requested_scope
        }
    }

    function ZR(e) {
        return !0
    }

    function jR(e) {
        return mg(e)
    }

    function mg(e, t) {
        return e == null ? e : {
            version: e.version == null ? void 0 : e.version
        }
    }

    function eF(e) {
        return yg(e, !1)
    }

    function yg(e, t = !1) {
        return e == null ? e : {
            version: e.version
        }
    }

    function tF(e) {
        return !(!("id" in e) || e.id === void 0 || !("name" in e) || e.name === void 0 || !("owner_id" in e) || e.owner_id === void 0)
    }

    function wr(e) {
        return kg(e)
    }

    function kg(e, t) {
        return e == null ? e : {
            created_at: e.created_at == null ? void 0 : new Date(e.created_at),
            expires_at: e.expires_at == null ? void 0 : new Date(e.expires_at),
            id: e.id,
            name: e.name,
            owner_id: e.owner_id,
            updated_at: e.updated_at == null ? void 0 : new Date(e.updated_at),
            value: e.value == null ? void 0 : e.value,
            workspace_id: e.workspace_id == null ? void 0 : e.workspace_id
        }
    }

    function rF(e) {
        return bg(e, !1)
    }

    function bg(e, t = !1) {
        return e == null ? e : {
            expires_at: e.expires_at == null ? void 0 : e.expires_at.toISOString(),
            name: e.name
        }
    }
    var qe = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class nF extends k {
        getCourierMessageRaw(t, r) {
            return qe(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getCourierMessage().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/courier/messages/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Ut(o))
            })
        }
        getCourierMessage(t, r) {
            return qe(this, void 0, void 0, function*() {
                return yield(yield this.getCourierMessageRaw(t, r)).value()
            })
        }
        listCourierMessagesRaw(t, r) {
            return qe(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.status != null && (n.status = t.status), t.recipient != null && (n.recipient = t.recipient);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/courier/messages",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(Ut))
            })
        }
        listCourierMessages() {
            return qe(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listCourierMessagesRaw(t, r)).value()
            })
        }
    }
    var D = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class iF extends k {
        createEventStreamRaw(t, r) {
            return D(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling createEventStream().');
                if (t.createEventStreamBody == null) throw new s("createEventStreamBody", 'Required parameter "createEventStreamBody" was null or undefined when calling createEventStream().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/eventstreams".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Li(t.createEventStreamBody)
                }, r);
                return new c(_, o => ke(o))
            })
        }
        createEventStream(t, r) {
            return D(this, void 0, void 0, function*() {
                return yield(yield this.createEventStreamRaw(t, r)).value()
            })
        }
        deleteEventStreamRaw(t, r) {
            return D(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling deleteEventStream().');
                if (t.eventStreamId == null) throw new s("eventStreamId", 'Required parameter "eventStreamId" was null or undefined when calling deleteEventStream().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/eventstreams/{event_stream_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{event_stream_id}", encodeURIComponent(String(t.eventStreamId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteEventStream(t, r) {
            return D(this, void 0, void 0, function*() {
                yield this.deleteEventStreamRaw(t, r)
            })
        }
        listEventStreamsRaw(t, r) {
            return D(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling listEventStreams().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/eventstreams".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Wd(o))
            })
        }
        listEventStreams(t, r) {
            return D(this, void 0, void 0, function*() {
                return yield(yield this.listEventStreamsRaw(t, r)).value()
            })
        }
        setEventStreamRaw(t, r) {
            return D(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling setEventStream().');
                if (t.eventStreamId == null) throw new s("eventStreamId", 'Required parameter "eventStreamId" was null or undefined when calling setEventStream().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/eventstreams/{event_stream_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{event_stream_id}", encodeURIComponent(String(t.eventStreamId))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Uf(t.setEventStreamBody)
                }, r);
                return new c(_, o => ke(o))
            })
        }
        setEventStream(t, r) {
            return D(this, void 0, void 0, function*() {
                return yield(yield this.setEventStreamRaw(t, r)).value()
            })
        }
    }
    var u = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class oF extends k {
        createBrowserLoginFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.refresh != null && (n.refresh = t.refresh), t.aal != null && (n.aal = t.aal), t.returnTo != null && (n.return_to = t.returnTo), t.loginChallenge != null && (n.login_challenge = t.loginChallenge), t.organization != null && (n.organization = t.organization), t.via != null && (n.via = t.via), t.identitySchema != null && (n.identity_schema = t.identitySchema);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/login/browser",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Oe(o))
            })
        }
        createBrowserLoginFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserLoginFlowRaw(t, r)).value()
            })
        }
        createBrowserLogoutFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {};
                t.cookie != null && (i.cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/logout/browser",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Wc(o))
            })
        }
        createBrowserLogoutFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserLogoutFlowRaw(t, r)).value()
            })
        }
        createBrowserRecoveryFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/recovery/browser",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => se(o))
            })
        }
        createBrowserRecoveryFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserRecoveryFlowRaw(t, r)).value()
            })
        }
        createBrowserRegistrationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo), t.loginChallenge != null && (n.login_challenge = t.loginChallenge), t.afterVerificationReturnTo != null && (n.after_verification_return_to = t.afterVerificationReturnTo), t.organization != null && (n.organization = t.organization), t.identitySchema != null && (n.identity_schema = t.identitySchema);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/registration/browser",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => Re(o))
            })
        }
        createBrowserRegistrationFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserRegistrationFlowRaw(t, r)).value()
            })
        }
        createBrowserSettingsFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/settings/browser",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => de(o))
            })
        }
        createBrowserSettingsFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserSettingsFlowRaw(t, r)).value()
            })
        }
        createBrowserVerificationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/verification/browser",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => ce(o))
            })
        }
        createBrowserVerificationFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createBrowserVerificationFlowRaw(t, r)).value()
            })
        }
        createFedcmFlowRaw(t) {
            return u(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/self-service/fed-cm/parameters",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => Hi(_))
            })
        }
        createFedcmFlow(t) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.createFedcmFlowRaw(t)).value()
            })
        }
        createNativeLoginFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.refresh != null && (n.refresh = t.refresh), t.aal != null && (n.aal = t.aal), t.returnSessionTokenExchangeCode != null && (n.return_session_token_exchange_code = t.returnSessionTokenExchangeCode), t.returnTo != null && (n.return_to = t.returnTo), t.organization != null && (n.organization = t.organization), t.via != null && (n.via = t.via), t.identitySchema != null && (n.identity_schema = t.identitySchema);
                const i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken));
                const _ = yield this.request({
                    path: "/self-service/login/api",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Oe(o))
            })
        }
        createNativeLoginFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createNativeLoginFlowRaw(t, r)).value()
            })
        }
        createNativeRecoveryFlowRaw(t) {
            return u(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/self-service/recovery/api",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => se(_))
            })
        }
        createNativeRecoveryFlow(t) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.createNativeRecoveryFlowRaw(t)).value()
            })
        }
        createNativeRegistrationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnSessionTokenExchangeCode != null && (n.return_session_token_exchange_code = t.returnSessionTokenExchangeCode), t.returnTo != null && (n.return_to = t.returnTo), t.organization != null && (n.organization = t.organization), t.identitySchema != null && (n.identity_schema = t.identitySchema);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/registration/api",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => Re(o))
            })
        }
        createNativeRegistrationFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createNativeRegistrationFlowRaw(t, r)).value()
            })
        }
        createNativeSettingsFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken));
                const _ = yield this.request({
                    path: "/self-service/settings/api",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => de(o))
            })
        }
        createNativeSettingsFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createNativeSettingsFlowRaw(t, r)).value()
            })
        }
        createNativeVerificationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/verification/api",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => ce(o))
            })
        }
        createNativeVerificationFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createNativeVerificationFlowRaw(t, r)).value()
            })
        }
        disableMyOtherSessionsRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/sessions",
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => fa(o))
            })
        }
        disableMyOtherSessions() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.disableMyOtherSessionsRaw(t, r)).value()
            })
        }
        disableMySessionRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling disableMySession().');
                const n = {},
                    i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/sessions/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        disableMySession(t, r) {
            return u(this, void 0, void 0, function*() {
                yield this.disableMySessionRaw(t, r)
            })
        }
        exchangeSessionTokenRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.initCode == null) throw new s("initCode", 'Required parameter "initCode" was null or undefined when calling exchangeSessionToken().');
                if (t.returnToCode == null) throw new s("returnToCode", 'Required parameter "returnToCode" was null or undefined when calling exchangeSessionToken().');
                const n = {};
                t.initCode != null && (n.init_code = t.initCode), t.returnToCode != null && (n.return_to_code = t.returnToCode);
                const i = {},
                    _ = yield this.request({
                        path: "/sessions/token-exchange",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => xe(o))
            })
        }
        exchangeSessionToken(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.exchangeSessionTokenRaw(t, r)).value()
            })
        }
        getFlowErrorRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getFlowError().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {},
                    _ = yield this.request({
                        path: "/self-service/errors",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => ts(o))
            })
        }
        getFlowError(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getFlowErrorRaw(t, r)).value()
            })
        }
        getLoginFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getLoginFlow().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/login/flows",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Oe(o))
            })
        }
        getLoginFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getLoginFlowRaw(t, r)).value()
            })
        }
        getRecoveryFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getRecoveryFlow().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/recovery/flows",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => se(o))
            })
        }
        getRecoveryFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getRecoveryFlowRaw(t, r)).value()
            })
        }
        getRegistrationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getRegistrationFlow().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/registration/flows",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Re(o))
            })
        }
        getRegistrationFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getRegistrationFlowRaw(t, r)).value()
            })
        }
        getSettingsFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getSettingsFlow().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/settings/flows",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => de(o))
            })
        }
        getSettingsFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getSettingsFlowRaw(t, r)).value()
            })
        }
        getVerificationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getVerificationFlow().');
                const n = {};
                t.id != null && (n.id = t.id);
                const i = {};
                t.cookie != null && (i.cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/verification/flows",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => ce(o))
            })
        }
        getVerificationFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getVerificationFlowRaw(t, r)).value()
            })
        }
        getWebAuthnJavaScriptRaw(t) {
            return u(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/.well-known/ory/webauthn.js",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return this.isJsonMime(i.headers.get("content-type")) ? new c(i) : new Fr(i)
            })
        }
        getWebAuthnJavaScript(t) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.getWebAuthnJavaScriptRaw(t)).value()
            })
        }
        listMySessionsRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.perPage != null && (n.per_page = t.perPage), t.page != null && (n.page = t.page), t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken);
                const i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/sessions",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(C))
            })
        }
        listMySessions() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listMySessionsRaw(t, r)).value()
            })
        }
        performNativeLogoutRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.performNativeLogoutBody == null) throw new s("performNativeLogoutBody", 'Required parameter "performNativeLogoutBody" was null or undefined when calling performNativeLogout().');
                const n = {},
                    i = {};
                i["Content-Type"] = "application/json";
                const _ = yield this.request({
                    path: "/self-service/logout/api",
                    method: "DELETE",
                    headers: i,
                    query: n,
                    body: Vu(t.performNativeLogoutBody)
                }, r);
                return new y(_)
            })
        }
        performNativeLogout(t, r) {
            return u(this, void 0, void 0, function*() {
                yield this.performNativeLogoutRaw(t, r)
            })
        }
        toSessionRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.tokenizeAs != null && (n.tokenize_as = t.tokenizeAs);
                const i = {};
                t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/sessions/whoami",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => C(o))
            })
        }
        toSession() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.toSessionRaw(t, r)).value()
            })
        }
        updateFedcmFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.updateFedcmFlowBody == null) throw new s("updateFedcmFlowBody", 'Required parameter "updateFedcmFlowBody" was null or undefined when calling updateFedcmFlow().');
                const n = {},
                    i = {};
                i["Content-Type"] = "application/json";
                const _ = yield this.request({
                    path: "/self-service/fed-cm/token",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Fp(t.updateFedcmFlowBody)
                }, r);
                return new c(_, o => xe(o))
            })
        }
        updateFedcmFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateFedcmFlowRaw(t, r)).value()
            })
        }
        updateLoginFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.flow == null) throw new s("flow", 'Required parameter "flow" was null or undefined when calling updateLoginFlow().');
                if (t.updateLoginFlowBody == null) throw new s("updateLoginFlowBody", 'Required parameter "updateLoginFlowBody" was null or undefined when calling updateLoginFlow().');
                const n = {};
                t.flow != null && (n.flow = t.flow);
                const i = {};
                i["Content-Type"] = "application/json", t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/login",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: jp(t.updateLoginFlowBody)
                }, r);
                return new c(_, o => xe(o))
            })
        }
        updateLoginFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateLoginFlowRaw(t, r)).value()
            })
        }
        updateLogoutFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                const n = {};
                t.token != null && (n.token = t.token), t.returnTo != null && (n.return_to = t.returnTo);
                const i = {};
                t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/logout",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        updateLogoutFlow() {
            return u(this, arguments, void 0, function*(t = {}, r) {
                yield this.updateLogoutFlowRaw(t, r)
            })
        }
        updateRecoveryFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.flow == null) throw new s("flow", 'Required parameter "flow" was null or undefined when calling updateRecoveryFlow().');
                if (t.updateRecoveryFlowBody == null) throw new s("updateRecoveryFlowBody", 'Required parameter "updateRecoveryFlowBody" was null or undefined when calling updateRecoveryFlow().');
                const n = {};
                t.flow != null && (n.flow = t.flow), t.token != null && (n.token = t.token);
                const i = {};
                i["Content-Type"] = "application/json", t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/recovery",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: dh(t.updateRecoveryFlowBody)
                }, r);
                return new c(_, o => se(o))
            })
        }
        updateRecoveryFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateRecoveryFlowRaw(t, r)).value()
            })
        }
        updateRegistrationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.flow == null) throw new s("flow", 'Required parameter "flow" was null or undefined when calling updateRegistrationFlow().');
                if (t.updateRegistrationFlowBody == null) throw new s("updateRegistrationFlowBody", 'Required parameter "updateRegistrationFlowBody" was null or undefined when calling updateRegistrationFlow().');
                const n = {};
                t.flow != null && (n.flow = t.flow);
                const i = {};
                i["Content-Type"] = "application/json", t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/registration",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Nh(t.updateRegistrationFlowBody)
                }, r);
                return new c(_, o => rp(o))
            })
        }
        updateRegistrationFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateRegistrationFlowRaw(t, r)).value()
            })
        }
        updateSettingsFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.flow == null) throw new s("flow", 'Required parameter "flow" was null or undefined when calling updateSettingsFlow().');
                if (t.updateSettingsFlowBody == null) throw new s("updateSettingsFlowBody", 'Required parameter "updateSettingsFlowBody" was null or undefined when calling updateSettingsFlow().');
                const n = {};
                t.flow != null && (n.flow = t.flow);
                const i = {};
                i["Content-Type"] = "application/json", t.xSessionToken != null && (i["X-Session-Token"] = String(t.xSessionToken)), t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/settings",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Gh(t.updateSettingsFlowBody)
                }, r);
                return new c(_, o => de(o))
            })
        }
        updateSettingsFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateSettingsFlowRaw(t, r)).value()
            })
        }
        updateVerificationFlowRaw(t, r) {
            return u(this, void 0, void 0, function*() {
                if (t.flow == null) throw new s("flow", 'Required parameter "flow" was null or undefined when calling updateVerificationFlow().');
                if (t.updateVerificationFlowBody == null) throw new s("updateVerificationFlowBody", 'Required parameter "updateVerificationFlowBody" was null or undefined when calling updateVerificationFlow().');
                const n = {};
                t.flow != null && (n.flow = t.flow), t.token != null && (n.token = t.token);
                const i = {};
                i["Content-Type"] = "application/json", t.cookie != null && (i.Cookie = String(t.cookie));
                const _ = yield this.request({
                    path: "/self-service/verification",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: eg(t.updateVerificationFlowBody)
                }, r);
                return new c(_, o => ce(o))
            })
        }
        updateVerificationFlow(t, r) {
            return u(this, void 0, void 0, function*() {
                return yield(yield this.updateVerificationFlowRaw(t, r)).value()
            })
        }
    }
    var m = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class _F extends k {
        batchPatchIdentitiesRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities",
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: $u(t.patchIdentitiesBody)
                }, r);
                return new c(_, o => Rn(o))
            })
        }
        batchPatchIdentities() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.batchPatchIdentitiesRaw(t, r)).value()
            })
        }
        createIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: _t(t.createIdentityBody)
                }, r);
                return new c(_, o => F(o))
            })
        }
        createIdentity() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createIdentityRaw(t, r)).value()
            })
        }
        createRecoveryCodeForIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/recovery/code",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: x_(t.createRecoveryCodeForIdentityBody)
                }, r);
                return new c(_, o => Vl(o))
            })
        }
        createRecoveryCodeForIdentity() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createRecoveryCodeForIdentityRaw(t, r)).value()
            })
        }
        createRecoveryLinkForIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {};
                t.returnTo != null && (n.return_to = t.returnTo);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/recovery/link",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: P_(t.createRecoveryLinkForIdentityBody)
                }, r);
                return new c(_, o => jl(o))
            })
        }
        createRecoveryLinkForIdentity() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createRecoveryLinkForIdentityRaw(t, r)).value()
            })
        }
        deleteIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteIdentity().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteIdentity(t, r) {
            return m(this, void 0, void 0, function*() {
                yield this.deleteIdentityRaw(t, r)
            })
        }
        deleteIdentityCredentialsRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteIdentityCredentials().');
                if (t.type == null) throw new s("type", 'Required parameter "type" was null or undefined when calling deleteIdentityCredentials().');
                const n = {};
                t.identifier != null && (n.identifier = t.identifier);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}/credentials/{type}".replace("{id}", encodeURIComponent(String(t.id))).replace("{type}", encodeURIComponent(String(t.type))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteIdentityCredentials(t, r) {
            return m(this, void 0, void 0, function*() {
                yield this.deleteIdentityCredentialsRaw(t, r)
            })
        }
        deleteIdentitySessionsRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteIdentitySessions().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}/sessions".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteIdentitySessions(t, r) {
            return m(this, void 0, void 0, function*() {
                yield this.deleteIdentitySessionsRaw(t, r)
            })
        }
        disableSessionRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling disableSession().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/sessions/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        disableSession(t, r) {
            return m(this, void 0, void 0, function*() {
                yield this.disableSessionRaw(t, r)
            })
        }
        extendSessionRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling extendSession().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/sessions/{id}/extend".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PATCH",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => C(o))
            })
        }
        extendSession(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = yield this.extendSessionRaw(t, r);
                switch (n.raw.status) {
                    case 200:
                        return yield n.value();
                    case 204:
                        return null;
                    default:
                        return yield n.value()
                }
            })
        }
        getIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getIdentity().');
                const n = {};
                t.includeCredential != null && (n.include_credential = t.includeCredential);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => F(o))
            })
        }
        getIdentity(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.getIdentityRaw(t, r)).value()
            })
        }
        getIdentityByExternalIDRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.externalID == null) throw new s("externalID", 'Required parameter "externalID" was null or undefined when calling getIdentityByExternalID().');
                const n = {};
                t.includeCredential != null && (n.include_credential = t.includeCredential);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/by/external/{externalID}".replace("{externalID}", encodeURIComponent(String(t.externalID))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => F(o))
            })
        }
        getIdentityByExternalID(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.getIdentityByExternalIDRaw(t, r)).value()
            })
        }
        getIdentitySchemaRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getIdentitySchema().');
                const n = {},
                    i = {},
                    _ = yield this.request({
                        path: "/schemas/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_)
            })
        }
        getIdentitySchema(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.getIdentitySchemaRaw(t, r)).value()
            })
        }
        getSessionRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getSession().');
                const n = {};
                t.expand != null && (n.expand = t.expand);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/sessions/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => C(o))
            })
        }
        getSession(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.getSessionRaw(t, r)).value()
            })
        }
        listIdentitiesRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {};
                t.perPage != null && (n.per_page = t.perPage), t.page != null && (n.page = t.page), t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.consistency != null && (n.consistency = t.consistency), t.ids != null && (n.ids = t.ids), t.credentialsIdentifier != null && (n.credentials_identifier = t.credentialsIdentifier), t.previewCredentialsIdentifierSimilar != null && (n.preview_credentials_identifier_similar = t.previewCredentialsIdentifierSimilar), t.includeCredential != null && (n.include_credential = t.includeCredential), t.organizationId != null && (n.organization_id = t.organizationId);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(F))
            })
        }
        listIdentities() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listIdentitiesRaw(t, r)).value()
            })
        }
        listIdentitySchemasRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {};
                t.perPage != null && (n.per_page = t.perPage), t.page != null && (n.page = t.page), t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken);
                const i = {},
                    _ = yield this.request({
                        path: "/schemas",
                        method: "GET",
                        headers: i,
                        query: n
                    }, r);
                return new c(_, o => o.map(hd))
            })
        }
        listIdentitySchemas() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listIdentitySchemasRaw(t, r)).value()
            })
        }
        listIdentitySessionsRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling listIdentitySessions().');
                const n = {};
                t.perPage != null && (n.per_page = t.perPage), t.page != null && (n.page = t.page), t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.active != null && (n.active = t.active);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}/sessions".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(C))
            })
        }
        listIdentitySessions(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.listIdentitySessionsRaw(t, r)).value()
            })
        }
        listSessionsRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.active != null && (n.active = t.active), t.expand != null && (n.expand = t.expand);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/sessions",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(C))
            })
        }
        listSessions() {
            return m(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listSessionsRaw(t, r)).value()
            })
        }
        patchIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling patchIdentity().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: t.jsonPatch.map(oe)
                }, r);
                return new c(_, o => F(o))
            })
        }
        patchIdentity(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.patchIdentityRaw(t, r)).value()
            })
        }
        updateIdentityRaw(t, r) {
            return m(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling updateIdentity().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/identities/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: xp(t.updateIdentityBody)
                }, r);
                return new c(_, o => F(o))
            })
        }
        updateIdentity(t, r) {
            return m(this, void 0, void 0, function*() {
                return yield(yield this.updateIdentityRaw(t, r)).value()
            })
        }
    }
    const aF = {
            Password: "password",
            Oidc: "oidc",
            Totp: "totp",
            LookupSecret: "lookup_secret",
            Webauthn: "webauthn",
            Code: "code",
            Passkey: "passkey",
            Profile: "profile",
            Saml: "saml",
            LinkRecovery: "link_recovery",
            CodeRecovery: "code_recovery",
            UnknownDefaultOpenApi: "11184809"
        },
        sF = {
            Password: "password",
            Oidc: "oidc",
            Totp: "totp",
            LookupSecret: "lookup_secret",
            Webauthn: "webauthn",
            Code: "code",
            Passkey: "passkey",
            Profile: "profile",
            Saml: "saml",
            LinkRecovery: "link_recovery",
            CodeRecovery: "code_recovery",
            UnknownDefaultOpenApi: "11184809"
        },
        dF = {
            Password: "password",
            Oidc: "oidc",
            Totp: "totp",
            LookupSecret: "lookup_secret",
            Webauthn: "webauthn",
            Code: "code",
            Passkey: "passkey",
            Profile: "profile",
            Saml: "saml",
            LinkRecovery: "link_recovery",
            CodeRecovery: "code_recovery",
            UnknownDefaultOpenApi: "11184809"
        },
        cF = {
            Identity: "identity",
            Devices: "devices",
            UnknownDefaultOpenApi: "11184809"
        },
        uF = {
            Empty: "",
            Strong: "strong",
            Eventual: "eventual",
            UnknownDefaultOpenApi: "11184809"
        },
        lF = {
            Identity: "identity",
            Devices: "devices",
            UnknownDefaultOpenApi: "11184809"
        };
    var T = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class fF extends k {
        createJsonWebKeySetRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling createJsonWebKeySet().');
                if (t.createJsonWebKeySet == null) throw new s("createJsonWebKeySet", 'Required parameter "createJsonWebKeySet" was null or undefined when calling createJsonWebKeySet().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}".replace("{set}", encodeURIComponent(String(t.set))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: $o(t.createJsonWebKeySet)
                }, r);
                return new c(_, o => A(o))
            })
        }
        createJsonWebKeySet(t, r) {
            return T(this, void 0, void 0, function*() {
                return yield(yield this.createJsonWebKeySetRaw(t, r)).value()
            })
        }
        deleteJsonWebKeyRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling deleteJsonWebKey().');
                if (t.kid == null) throw new s("kid", 'Required parameter "kid" was null or undefined when calling deleteJsonWebKey().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}/{kid}".replace("{set}", encodeURIComponent(String(t.set))).replace("{kid}", encodeURIComponent(String(t.kid))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteJsonWebKey(t, r) {
            return T(this, void 0, void 0, function*() {
                yield this.deleteJsonWebKeyRaw(t, r)
            })
        }
        deleteJsonWebKeySetRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling deleteJsonWebKeySet().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}".replace("{set}", encodeURIComponent(String(t.set))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteJsonWebKeySet(t, r) {
            return T(this, void 0, void 0, function*() {
                yield this.deleteJsonWebKeySetRaw(t, r)
            })
        }
        getJsonWebKeyRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling getJsonWebKey().');
                if (t.kid == null) throw new s("kid", 'Required parameter "kid" was null or undefined when calling getJsonWebKey().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}/{kid}".replace("{set}", encodeURIComponent(String(t.set))).replace("{kid}", encodeURIComponent(String(t.kid))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => A(o))
            })
        }
        getJsonWebKey(t, r) {
            return T(this, void 0, void 0, function*() {
                return yield(yield this.getJsonWebKeyRaw(t, r)).value()
            })
        }
        getJsonWebKeySetRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling getJsonWebKeySet().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}".replace("{set}", encodeURIComponent(String(t.set))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => A(o))
            })
        }
        getJsonWebKeySet(t, r) {
            return T(this, void 0, void 0, function*() {
                return yield(yield this.getJsonWebKeySetRaw(t, r)).value()
            })
        }
        setJsonWebKeyRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling setJsonWebKey().');
                if (t.kid == null) throw new s("kid", 'Required parameter "kid" was null or undefined when calling setJsonWebKey().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}/{kid}".replace("{set}", encodeURIComponent(String(t.set))).replace("{kid}", encodeURIComponent(String(t.kid))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: ye(t.jsonWebKey)
                }, r);
                return new c(_, o => me(o))
            })
        }
        setJsonWebKey(t, r) {
            return T(this, void 0, void 0, function*() {
                return yield(yield this.setJsonWebKeyRaw(t, r)).value()
            })
        }
        setJsonWebKeySetRaw(t, r) {
            return T(this, void 0, void 0, function*() {
                if (t.set == null) throw new s("set", 'Required parameter "set" was null or undefined when calling setJsonWebKeySet().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/keys/{set}".replace("{set}", encodeURIComponent(String(t.set))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: wt(t.jsonWebKeySet)
                }, r);
                return new c(_, o => A(o))
            })
        }
        setJsonWebKeySet(t, r) {
            return T(this, void 0, void 0, function*() {
                return yield(yield this.setJsonWebKeySetRaw(t, r)).value()
            })
        }
    }
    var wg = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class pF extends k {
        getVersionRaw(t) {
            return wg(this, void 0, void 0, function*() {
                const r = {},
                    n = {};
                if (this.configuration && this.configuration.accessToken) {
                    const _ = this.configuration.accessToken,
                        o = yield _("oryAccessToken", []);
                    o && (n.Authorization = `Bearer ${o}`)
                }
                const i = yield this.request({
                    path: "/version",
                    method: "GET",
                    headers: n,
                    query: r
                }, t);
                return new c(i, _ => Us(_))
            })
        }
        getVersion(t) {
            return wg(this, void 0, void 0, function*() {
                return yield(yield this.getVersionRaw(t)).value()
            })
        }
    }
    var f = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class hF extends k {
        acceptOAuth2ConsentRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.consentChallenge == null) throw new s("consentChallenge", 'Required parameter "consentChallenge" was null or undefined when calling acceptOAuth2ConsentRequest().');
                const n = {};
                t.consentChallenge != null && (n.consent_challenge = t.consentChallenge);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/consent/accept",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: qr(t.acceptOAuth2ConsentRequest)
                }, r);
                return new c(_, o => z(o))
            })
        }
        acceptOAuth2ConsentRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.acceptOAuth2ConsentRequestRaw(t, r)).value()
            })
        }
        acceptOAuth2LoginRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.loginChallenge == null) throw new s("loginChallenge", 'Required parameter "loginChallenge" was null or undefined when calling acceptOAuth2LoginRequest().');
                const n = {};
                t.loginChallenge != null && (n.login_challenge = t.loginChallenge);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/login/accept",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Er(t.acceptOAuth2LoginRequest)
                }, r);
                return new c(_, o => z(o))
            })
        }
        acceptOAuth2LoginRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.acceptOAuth2LoginRequestRaw(t, r)).value()
            })
        }
        acceptOAuth2LogoutRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.logoutChallenge == null) throw new s("logoutChallenge", 'Required parameter "logoutChallenge" was null or undefined when calling acceptOAuth2LogoutRequest().');
                const n = {};
                t.logoutChallenge != null && (n.logout_challenge = t.logoutChallenge);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/logout/accept",
                    method: "PUT",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => z(o))
            })
        }
        acceptOAuth2LogoutRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.acceptOAuth2LogoutRequestRaw(t, r)).value()
            })
        }
        acceptUserCodeRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.deviceChallenge == null) throw new s("deviceChallenge", 'Required parameter "deviceChallenge" was null or undefined when calling acceptUserCodeRequest().');
                const n = {};
                t.deviceChallenge != null && (n.device_challenge = t.deviceChallenge);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/device/accept",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Dr(t.acceptDeviceUserCodeRequest)
                }, r);
                return new c(_, o => z(o))
            })
        }
        acceptUserCodeRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.acceptUserCodeRequestRaw(t, r)).value()
            })
        }
        createOAuth2ClientRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.oAuth2Client == null) throw new s("oAuth2Client", 'Required parameter "oAuth2Client" was null or undefined when calling createOAuth2Client().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: R(t.oAuth2Client)
                }, r);
                return new c(_, o => O(o))
            })
        }
        createOAuth2Client(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.createOAuth2ClientRaw(t, r)).value()
            })
        }
        deleteOAuth2ClientRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteOAuth2Client().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteOAuth2Client(t, r) {
            return f(this, void 0, void 0, function*() {
                yield this.deleteOAuth2ClientRaw(t, r)
            })
        }
        deleteOAuth2TokenRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.clientId == null) throw new s("clientId", 'Required parameter "clientId" was null or undefined when calling deleteOAuth2Token().');
                const n = {};
                t.clientId != null && (n.client_id = t.clientId);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/tokens",
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteOAuth2Token(t, r) {
            return f(this, void 0, void 0, function*() {
                yield this.deleteOAuth2TokenRaw(t, r)
            })
        }
        deleteTrustedOAuth2JwtGrantIssuerRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteTrustedOAuth2JwtGrantIssuer().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/trust/grants/jwt-bearer/issuers/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteTrustedOAuth2JwtGrantIssuer(t, r) {
            return f(this, void 0, void 0, function*() {
                yield this.deleteTrustedOAuth2JwtGrantIssuerRaw(t, r)
            })
        }
        getOAuth2ClientRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getOAuth2Client().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => O(o))
            })
        }
        getOAuth2Client(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.getOAuth2ClientRaw(t, r)).value()
            })
        }
        getOAuth2ConsentRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.consentChallenge == null) throw new s("consentChallenge", 'Required parameter "consentChallenge" was null or undefined when calling getOAuth2ConsentRequest().');
                const n = {};
                t.consentChallenge != null && (n.consent_challenge = t.consentChallenge);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/consent",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Et(o))
            })
        }
        getOAuth2ConsentRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.getOAuth2ConsentRequestRaw(t, r)).value()
            })
        }
        getOAuth2LoginRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.loginChallenge == null) throw new s("loginChallenge", 'Required parameter "loginChallenge" was null or undefined when calling getOAuth2LoginRequest().');
                const n = {};
                t.loginChallenge != null && (n.login_challenge = t.loginChallenge);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/login",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Se(o))
            })
        }
        getOAuth2LoginRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.getOAuth2LoginRequestRaw(t, r)).value()
            })
        }
        getOAuth2LogoutRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.logoutChallenge == null) throw new s("logoutChallenge", 'Required parameter "logoutChallenge" was null or undefined when calling getOAuth2LogoutRequest().');
                const n = {};
                t.logoutChallenge != null && (n.logout_challenge = t.logoutChallenge);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/logout",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => ku(o))
            })
        }
        getOAuth2LogoutRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.getOAuth2LogoutRequestRaw(t, r)).value()
            })
        }
        getTrustedOAuth2JwtGrantIssuerRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getTrustedOAuth2JwtGrantIssuer().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/trust/grants/jwt-bearer/issuers/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Ie(o))
            })
        }
        getTrustedOAuth2JwtGrantIssuer(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.getTrustedOAuth2JwtGrantIssuerRaw(t, r)).value()
            })
        }
        introspectOAuth2TokenRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.token == null) throw new s("token", 'Required parameter "token" was null or undefined when calling introspectOAuth2Token().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const g = this.configuration.accessToken,
                        l = yield g("oryAccessToken", []);
                    l && (i.Authorization = `Bearer ${l}`)
                }
                le([{
                    contentType: "application/x-www-form-urlencoded"
                }]);
                let o;
                o = new URLSearchParams, t.scope != null && o.append("scope", t.scope), t.token != null && o.append("token", t.token);
                const a = yield this.request({
                    path: "/admin/oauth2/introspect",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: o
                }, r);
                return new c(a, g => Rd(g))
            })
        }
        introspectOAuth2Token(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.introspectOAuth2TokenRaw(t, r)).value()
            })
        }
        listOAuth2ClientsRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.clientName != null && (n.client_name = t.clientName), t.owner != null && (n.owner = t.owner);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(O))
            })
        }
        listOAuth2Clients() {
            return f(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listOAuth2ClientsRaw(t, r)).value()
            })
        }
        listOAuth2ConsentSessionsRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.subject == null) throw new s("subject", 'Required parameter "subject" was null or undefined when calling listOAuth2ConsentSessions().');
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.subject != null && (n.subject = t.subject), t.loginSessionId != null && (n.login_session_id = t.loginSessionId);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/sessions/consent",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(gu))
            })
        }
        listOAuth2ConsentSessions(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.listOAuth2ConsentSessionsRaw(t, r)).value()
            })
        }
        listTrustedOAuth2JwtGrantIssuersRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.issuer != null && (n.issuer = t.issuer);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/trust/grants/jwt-bearer/issuers",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(Ie))
            })
        }
        listTrustedOAuth2JwtGrantIssuers() {
            return f(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listTrustedOAuth2JwtGrantIssuersRaw(t, r)).value()
            })
        }
        oAuth2AuthorizeRaw(t) {
            return f(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/oauth2/auth",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => Tt(_))
            })
        }
        oAuth2Authorize(t) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.oAuth2AuthorizeRaw(t)).value()
            })
        }
        oAuth2DeviceFlowRaw(t) {
            return f(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/oauth2/device/auth",
                        method: "POST",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => ga(_))
            })
        }
        oAuth2DeviceFlow(t) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.oAuth2DeviceFlowRaw(t)).value()
            })
        }
        oauth2TokenExchangeRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.grantType == null) throw new s("grantType", 'Required parameter "grantType" was null or undefined when calling oauth2TokenExchange().');
                const n = {},
                    i = {};
                this.configuration && (this.configuration.username !== void 0 || this.configuration.password !== void 0) && (i.Authorization = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password)), this.configuration && this.configuration.accessToken && (i.Authorization = yield this.configuration.accessToken("oauth2", [])), le([{
                    contentType: "application/x-www-form-urlencoded"
                }]);
                let o;
                o = new URLSearchParams, t.clientId != null && o.append("client_id", t.clientId), t.code != null && o.append("code", t.code), t.grantType != null && o.append("grant_type", t.grantType), t.redirectUri != null && o.append("redirect_uri", t.redirectUri), t.refreshToken != null && o.append("refresh_token", t.refreshToken);
                const a = yield this.request({
                    path: "/oauth2/token",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: o
                }, r);
                return new c(a, g => Tu(g))
            })
        }
        oauth2TokenExchange(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.oauth2TokenExchangeRaw(t, r)).value()
            })
        }
        patchOAuth2ClientRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling patchOAuth2Client().');
                if (t.jsonPatch == null) throw new s("jsonPatch", 'Required parameter "jsonPatch" was null or undefined when calling patchOAuth2Client().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: t.jsonPatch.map(oe)
                }, r);
                return new c(_, o => O(o))
            })
        }
        patchOAuth2Client(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.patchOAuth2ClientRaw(t, r)).value()
            })
        }
        performOAuth2DeviceVerificationFlowRaw(t) {
            return f(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/oauth2/device/verify",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => Tt(_))
            })
        }
        performOAuth2DeviceVerificationFlow(t) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.performOAuth2DeviceVerificationFlowRaw(t)).value()
            })
        }
        rejectOAuth2ConsentRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.consentChallenge == null) throw new s("consentChallenge", 'Required parameter "consentChallenge" was null or undefined when calling rejectOAuth2ConsentRequest().');
                const n = {};
                t.consentChallenge != null && (n.consent_challenge = t.consentChallenge);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/consent/reject",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Kt(t.rejectOAuth2Request)
                }, r);
                return new c(_, o => z(o))
            })
        }
        rejectOAuth2ConsentRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.rejectOAuth2ConsentRequestRaw(t, r)).value()
            })
        }
        rejectOAuth2LoginRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.loginChallenge == null) throw new s("loginChallenge", 'Required parameter "loginChallenge" was null or undefined when calling rejectOAuth2LoginRequest().');
                const n = {};
                t.loginChallenge != null && (n.login_challenge = t.loginChallenge);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/login/reject",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Kt(t.rejectOAuth2Request)
                }, r);
                return new c(_, o => z(o))
            })
        }
        rejectOAuth2LoginRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.rejectOAuth2LoginRequestRaw(t, r)).value()
            })
        }
        rejectOAuth2LogoutRequestRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.logoutChallenge == null) throw new s("logoutChallenge", 'Required parameter "logoutChallenge" was null or undefined when calling rejectOAuth2LogoutRequest().');
                const n = {};
                t.logoutChallenge != null && (n.logout_challenge = t.logoutChallenge);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/requests/logout/reject",
                    method: "PUT",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        rejectOAuth2LogoutRequest(t, r) {
            return f(this, void 0, void 0, function*() {
                yield this.rejectOAuth2LogoutRequestRaw(t, r)
            })
        }
        revokeOAuth2ConsentSessionsRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                const n = {};
                t.subject != null && (n.subject = t.subject), t.client != null && (n.client = t.client), t.consentRequestId != null && (n.consent_request_id = t.consentRequestId), t.all != null && (n.all = t.all);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/sessions/consent",
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        revokeOAuth2ConsentSessions() {
            return f(this, arguments, void 0, function*(t = {}, r) {
                yield this.revokeOAuth2ConsentSessionsRaw(t, r)
            })
        }
        revokeOAuth2LoginSessionsRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                const n = {};
                t.subject != null && (n.subject = t.subject), t.sid != null && (n.sid = t.sid);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/oauth2/auth/sessions/login",
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        revokeOAuth2LoginSessions() {
            return f(this, arguments, void 0, function*(t = {}, r) {
                yield this.revokeOAuth2LoginSessionsRaw(t, r)
            })
        }
        revokeOAuth2TokenRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.token == null) throw new s("token", 'Required parameter "token" was null or undefined when calling revokeOAuth2Token().');
                const n = {},
                    i = {};
                this.configuration && (this.configuration.username !== void 0 || this.configuration.password !== void 0) && (i.Authorization = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password)), this.configuration && this.configuration.accessToken && (i.Authorization = yield this.configuration.accessToken("oauth2", [])), le([{
                    contentType: "application/x-www-form-urlencoded"
                }]);
                let o;
                o = new URLSearchParams, t.clientId != null && o.append("client_id", t.clientId), t.clientSecret != null && o.append("client_secret", t.clientSecret), t.token != null && o.append("token", t.token);
                const a = yield this.request({
                    path: "/oauth2/revoke",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: o
                }, r);
                return new y(a)
            })
        }
        revokeOAuth2Token(t, r) {
            return f(this, void 0, void 0, function*() {
                yield this.revokeOAuth2TokenRaw(t, r)
            })
        }
        setOAuth2ClientRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling setOAuth2Client().');
                if (t.oAuth2Client == null) throw new s("oAuth2Client", 'Required parameter "oAuth2Client" was null or undefined when calling setOAuth2Client().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: R(t.oAuth2Client)
                }, r);
                return new c(_, o => O(o))
            })
        }
        setOAuth2Client(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.setOAuth2ClientRaw(t, r)).value()
            })
        }
        setOAuth2ClientLifespansRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling setOAuth2ClientLifespans().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/clients/{id}/lifespans".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: uu(t.oAuth2ClientTokenLifespans)
                }, r);
                return new c(_, o => O(o))
            })
        }
        setOAuth2ClientLifespans(t, r) {
            return f(this, void 0, void 0, function*() {
                return yield(yield this.setOAuth2ClientLifespansRaw(t, r)).value()
            })
        }
        trustOAuth2JwtGrantIssuerRaw(t, r) {
            return f(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/trust/grants/jwt-bearer/issuers",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: bp(t.trustOAuth2JwtGrantIssuer)
                }, r);
                return new c(_, o => Ie(o))
            })
        }
        trustOAuth2JwtGrantIssuer() {
            return f(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.trustOAuth2JwtGrantIssuerRaw(t, r)).value()
            })
        }
    }
    var w = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class gF extends k {
        createOidcDynamicClientRaw(t, r) {
            return w(this, void 0, void 0, function*() {
                if (t.oAuth2Client == null) throw new s("oAuth2Client", 'Required parameter "oAuth2Client" was null or undefined when calling createOidcDynamicClient().');
                const n = {},
                    i = {};
                i["Content-Type"] = "application/json";
                const _ = yield this.request({
                    path: "/oauth2/register",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: R(t.oAuth2Client)
                }, r);
                return new c(_, o => O(o))
            })
        }
        createOidcDynamicClient(t, r) {
            return w(this, void 0, void 0, function*() {
                return yield(yield this.createOidcDynamicClientRaw(t, r)).value()
            })
        }
        createVerifiableCredentialRaw(t, r) {
            return w(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                i["Content-Type"] = "application/json";
                const _ = yield this.request({
                    path: "/credentials",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: X_(t.createVerifiableCredentialRequestBody)
                }, r);
                return new c(_, o => dg(o))
            })
        }
        createVerifiableCredential() {
            return w(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createVerifiableCredentialRaw(t, r)).value()
            })
        }
        deleteOidcDynamicClientRaw(t, r) {
            return w(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling deleteOidcDynamicClient().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("bearer", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/oauth2/register/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteOidcDynamicClient(t, r) {
            return w(this, void 0, void 0, function*() {
                yield this.deleteOidcDynamicClientRaw(t, r)
            })
        }
        discoverOidcConfigurationRaw(t) {
            return w(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/.well-known/openid-configuration",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => Ju(_))
            })
        }
        discoverOidcConfiguration(t) {
            return w(this, void 0, void 0, function*() {
                return yield(yield this.discoverOidcConfigurationRaw(t)).value()
            })
        }
        getOidcDynamicClientRaw(t, r) {
            return w(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling getOidcDynamicClient().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("bearer", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/oauth2/register/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => O(o))
            })
        }
        getOidcDynamicClient(t, r) {
            return w(this, void 0, void 0, function*() {
                return yield(yield this.getOidcDynamicClientRaw(t, r)).value()
            })
        }
        getOidcUserInfoRaw(t) {
            return w(this, void 0, void 0, function*() {
                const r = {},
                    n = {};
                this.configuration && this.configuration.accessToken && (n.Authorization = yield this.configuration.accessToken("oauth2", []));
                const i = yield this.request({
                    path: "/userinfo",
                    method: "GET",
                    headers: n,
                    query: r
                }, t);
                return new c(i, _ => Cu(_))
            })
        }
        getOidcUserInfo(t) {
            return w(this, void 0, void 0, function*() {
                return yield(yield this.getOidcUserInfoRaw(t)).value()
            })
        }
        revokeOidcSessionRaw(t) {
            return w(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/oauth2/sessions/logout",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new y(i)
            })
        }
        revokeOidcSession(t) {
            return w(this, void 0, void 0, function*() {
                yield this.revokeOidcSessionRaw(t)
            })
        }
        setOidcDynamicClientRaw(t, r) {
            return w(this, void 0, void 0, function*() {
                if (t.id == null) throw new s("id", 'Required parameter "id" was null or undefined when calling setOidcDynamicClient().');
                if (t.oAuth2Client == null) throw new s("oAuth2Client", 'Required parameter "oAuth2Client" was null or undefined when calling setOidcDynamicClient().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("bearer", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/oauth2/register/{id}".replace("{id}", encodeURIComponent(String(t.id))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: R(t.oAuth2Client)
                }, r);
                return new c(_, o => O(o))
            })
        }
        setOidcDynamicClient(t, r) {
            return w(this, void 0, void 0, function*() {
                return yield(yield this.setOidcDynamicClientRaw(t, r)).value()
            })
        }
    }
    var N = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class mF extends k {
        batchCheckPermissionRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                const n = {};
                t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/batch/check",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: hn(t.batchCheckPermissionBody)
                }, r);
                return new c(_, o => wn(o))
            })
        }
        batchCheckPermission() {
            return N(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.batchCheckPermissionRaw(t, r)).value()
            })
        }
        checkPermissionRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                const n = {};
                t.namespace != null && (n.namespace = t.namespace), t.object != null && (n.object = t.object), t.relation != null && (n.relation = t.relation), t.subjectId != null && (n.subject_id = t.subjectId), t.subjectSetNamespace != null && (n["subject_set.namespace"] = t.subjectSetNamespace), t.subjectSetObject != null && (n["subject_set.object"] = t.subjectSetObject), t.subjectSetRelation != null && (n["subject_set.relation"] = t.subjectSetRelation), t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/check/openapi",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => V(o))
            })
        }
        checkPermission() {
            return N(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.checkPermissionRaw(t, r)).value()
            })
        }
        checkPermissionOrErrorRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                const n = {};
                t.namespace != null && (n.namespace = t.namespace), t.object != null && (n.object = t.object), t.relation != null && (n.relation = t.relation), t.subjectId != null && (n.subject_id = t.subjectId), t.subjectSetNamespace != null && (n["subject_set.namespace"] = t.subjectSetNamespace), t.subjectSetObject != null && (n["subject_set.object"] = t.subjectSetObject), t.subjectSetRelation != null && (n["subject_set.relation"] = t.subjectSetRelation), t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/check",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => V(o))
            })
        }
        checkPermissionOrError() {
            return N(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.checkPermissionOrErrorRaw(t, r)).value()
            })
        }
        expandPermissionsRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                if (t.namespace == null) throw new s("namespace", 'Required parameter "namespace" was null or undefined when calling expandPermissions().');
                if (t.object == null) throw new s("object", 'Required parameter "object" was null or undefined when calling expandPermissions().');
                if (t.relation == null) throw new s("relation", 'Required parameter "relation" was null or undefined when calling expandPermissions().');
                const n = {};
                t.namespace != null && (n.namespace = t.namespace), t.object != null && (n.object = t.object), t.relation != null && (n.relation = t.relation), t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/expand",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => vt(o))
            })
        }
        expandPermissions(t, r) {
            return N(this, void 0, void 0, function*() {
                return yield(yield this.expandPermissionsRaw(t, r)).value()
            })
        }
        postCheckPermissionRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                const n = {};
                t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/check/openapi",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: il(t.postCheckPermissionBody)
                }, r);
                return new c(_, o => V(o))
            })
        }
        postCheckPermission() {
            return N(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.postCheckPermissionRaw(t, r)).value()
            })
        }
        postCheckPermissionOrErrorRaw(t, r) {
            return N(this, void 0, void 0, function*() {
                const n = {};
                t.maxDepth != null && (n["max-depth"] = t.maxDepth);
                const i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples/check",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: al(t.postCheckPermissionOrErrorBody)
                }, r);
                return new c(_, o => V(o))
            })
        }
        postCheckPermissionOrError() {
            return N(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.postCheckPermissionOrErrorRaw(t, r)).value()
            })
        }
    }
    var h = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class yF extends k {
        createOrganizationRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling createOrganization().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Bt(t.organizationBody)
                }, r);
                return new c(_, o => x(o))
            })
        }
        createOrganization(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.createOrganizationRaw(t, r)).value()
            })
        }
        createOrganizationOnboardingPortalLinkRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling createOrganizationOnboardingPortalLink().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling createOrganizationOnboardingPortalLink().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}/onboarding-portal-links".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Vo(t.createOrganizationOnboardingPortalLinkBody)
                }, r);
                return new c(_, o => ve(o))
            })
        }
        createOrganizationOnboardingPortalLink(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.createOrganizationOnboardingPortalLinkRaw(t, r)).value()
            })
        }
        createProjectRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: jo(t.createProjectBody)
                }, r);
                return new c(_, o => Ne(o))
            })
        }
        createProject() {
            return h(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createProjectRaw(t, r)).value()
            })
        }
        createProjectApiKeyRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.project == null) throw new s("project", 'Required parameter "project" was null or undefined when calling createProjectApiKey().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project}/tokens".replace("{project}", encodeURIComponent(String(t.project))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Qo(t.createProjectApiKeyRequest)
                }, r);
                return new c(_, o => Mt(o))
            })
        }
        createProjectApiKey(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.createProjectApiKeyRaw(t, r)).value()
            })
        }
        deleteOrganizationRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling deleteOrganization().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling deleteOrganization().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteOrganization(t, r) {
            return h(this, void 0, void 0, function*() {
                yield this.deleteOrganizationRaw(t, r)
            })
        }
        deleteOrganizationOnboardingPortalLinkRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling deleteOrganizationOnboardingPortalLink().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling deleteOrganizationOnboardingPortalLink().');
                if (t.onboardingPortalLinkId == null) throw new s("onboardingPortalLinkId", 'Required parameter "onboardingPortalLinkId" was null or undefined when calling deleteOrganizationOnboardingPortalLink().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}/onboarding-portal-links/{onboarding_portal_link_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))).replace("{onboarding_portal_link_id}", encodeURIComponent(String(t.onboardingPortalLinkId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteOrganizationOnboardingPortalLink(t, r) {
            return h(this, void 0, void 0, function*() {
                yield this.deleteOrganizationOnboardingPortalLinkRaw(t, r)
            })
        }
        deleteProjectApiKeyRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.project == null) throw new s("project", 'Required parameter "project" was null or undefined when calling deleteProjectApiKey().');
                if (t.tokenId == null) throw new s("tokenId", 'Required parameter "tokenId" was null or undefined when calling deleteProjectApiKey().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project}/tokens/{token_id}".replace("{project}", encodeURIComponent(String(t.project))).replace("{token_id}", encodeURIComponent(String(t.tokenId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteProjectApiKey(t, r) {
            return h(this, void 0, void 0, function*() {
                yield this.deleteProjectApiKeyRaw(t, r)
            })
        }
        getOrganizationRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling getOrganization().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling getOrganization().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => ys(o))
            })
        }
        getOrganization(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.getOrganizationRaw(t, r)).value()
            })
        }
        getOrganizationOnboardingPortalLinksRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling getOrganizationOnboardingPortalLinks().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling getOrganizationOnboardingPortalLinks().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}/onboarding-portal-links".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Bu(o))
            })
        }
        getOrganizationOnboardingPortalLinks(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.getOrganizationOnboardingPortalLinksRaw(t, r)).value()
            })
        }
        getProjectRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling getProject().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Ne(o))
            })
        }
        getProject(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.getProjectRaw(t, r)).value()
            })
        }
        getProjectMembersRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.project == null) throw new s("project", 'Required parameter "project" was null or undefined when calling getProjectMembers().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project}/members".replace("{project}", encodeURIComponent(String(t.project))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(Bl))
            })
        }
        getProjectMembers(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.getProjectMembersRaw(t, r)).value()
            })
        }
        listOrganizationsRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling listOrganizations().');
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.domain != null && (n.domain = t.domain);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => Kd(o))
            })
        }
        listOrganizations(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.listOrganizationsRaw(t, r)).value()
            })
        }
        listProjectApiKeysRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.project == null) throw new s("project", 'Required parameter "project" was null or undefined when calling listProjectApiKeys().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project}/tokens".replace("{project}", encodeURIComponent(String(t.project))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(Mt))
            })
        }
        listProjectApiKeys(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.listProjectApiKeysRaw(t, r)).value()
            })
        }
        listProjectsRaw(t) {
            return h(this, void 0, void 0, function*() {
                const r = {},
                    n = {};
                if (this.configuration && this.configuration.accessToken) {
                    const _ = this.configuration.accessToken,
                        o = yield _("oryWorkspaceApiKey", []);
                    o && (n.Authorization = `Bearer ${o}`)
                }
                const i = yield this.request({
                    path: "/projects",
                    method: "GET",
                    headers: n,
                    query: r
                }, t);
                return new c(i, _ => _.map(Rt))
            })
        }
        listProjects(t) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.listProjectsRaw(t)).value()
            })
        }
        patchProjectRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling patchProject().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: t.jsonPatch.map(oe)
                }, r);
                return new c(_, o => Ae(o))
            })
        }
        patchProject(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.patchProjectRaw(t, r)).value()
            })
        }
        patchProjectWithRevisionRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling patchProjectWithRevision().');
                if (t.revisionId == null) throw new s("revisionId", 'Required parameter "revisionId" was null or undefined when calling patchProjectWithRevision().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/revision/{revision_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{revision_id}", encodeURIComponent(String(t.revisionId))),
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: t.jsonPatch.map(oe)
                }, r);
                return new c(_, o => Ae(o))
            })
        }
        patchProjectWithRevision(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.patchProjectWithRevisionRaw(t, r)).value()
            })
        }
        purgeProjectRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling purgeProject().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        purgeProject(t, r) {
            return h(this, void 0, void 0, function*() {
                yield this.purgeProjectRaw(t, r)
            })
        }
        removeProjectMemberRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.project == null) throw new s("project", 'Required parameter "project" was null or undefined when calling removeProjectMember().');
                if (t.member == null) throw new s("member", 'Required parameter "member" was null or undefined when calling removeProjectMember().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project}/members/{member}".replace("{project}", encodeURIComponent(String(t.project))).replace("{member}", encodeURIComponent(String(t.member))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        removeProjectMember(t, r) {
            return h(this, void 0, void 0, function*() {
                yield this.removeProjectMemberRaw(t, r)
            })
        }
        setProjectRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling setProject().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Mf(t.setProject)
                }, r);
                return new c(_, o => Ae(o))
            })
        }
        setProject(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.setProjectRaw(t, r)).value()
            })
        }
        updateOrganizationRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling updateOrganization().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling updateOrganization().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: Bt(t.organizationBody)
                }, r);
                return new c(_, o => x(o))
            })
        }
        updateOrganization(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.updateOrganizationRaw(t, r)).value()
            })
        }
        updateOrganizationOnboardingPortalLinkRaw(t, r) {
            return h(this, void 0, void 0, function*() {
                if (t.projectId == null) throw new s("projectId", 'Required parameter "projectId" was null or undefined when calling updateOrganizationOnboardingPortalLink().');
                if (t.organizationId == null) throw new s("organizationId", 'Required parameter "organizationId" was null or undefined when calling updateOrganizationOnboardingPortalLink().');
                if (t.onboardingPortalLinkId == null) throw new s("onboardingPortalLinkId", 'Required parameter "onboardingPortalLinkId" was null or undefined when calling updateOrganizationOnboardingPortalLink().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/projects/{project_id}/organizations/{organization_id}/onboarding-portal-links/{onboarding_portal_link_id}".replace("{project_id}", encodeURIComponent(String(t.projectId))).replace("{organization_id}", encodeURIComponent(String(t.organizationId))).replace("{onboarding_portal_link_id}", encodeURIComponent(String(t.onboardingPortalLinkId))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: rh(t.updateOrganizationOnboardingPortalLinkBody)
                }, r);
                return new c(_, o => ve(o))
            })
        }
        updateOrganizationOnboardingPortalLink(t, r) {
            return h(this, void 0, void 0, function*() {
                return yield(yield this.updateOrganizationOnboardingPortalLinkRaw(t, r)).value()
            })
        }
    }
    var J = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class kF extends k {
        checkOplSyntaxRaw(t, r) {
            return J(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "text/plain", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/opl/syntax/check",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: t.body
                }, r);
                return new c(_, o => ri(o))
            })
        }
        checkOplSyntax() {
            return J(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.checkOplSyntaxRaw(t, r)).value()
            })
        }
        createRelationshipRaw(t, r) {
            return J(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/relation-tuples",
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: U_(t.createRelationshipBody)
                }, r);
                return new c(_, o => L(o))
            })
        }
        createRelationship() {
            return J(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createRelationshipRaw(t, r)).value()
            })
        }
        deleteRelationshipsRaw(t, r) {
            return J(this, void 0, void 0, function*() {
                const n = {};
                t.namespace != null && (n.namespace = t.namespace), t.object != null && (n.object = t.object), t.relation != null && (n.relation = t.relation), t.subjectId != null && (n.subject_id = t.subjectId), t.subjectSetNamespace != null && (n["subject_set.namespace"] = t.subjectSetNamespace), t.subjectSetObject != null && (n["subject_set.object"] = t.subjectSetObject), t.subjectSetRelation != null && (n["subject_set.relation"] = t.subjectSetRelation);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/relation-tuples",
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteRelationships() {
            return J(this, arguments, void 0, function*(t = {}, r) {
                yield this.deleteRelationshipsRaw(t, r)
            })
        }
        getRelationshipsRaw(t, r) {
            return J(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken), t.namespace != null && (n.namespace = t.namespace), t.object != null && (n.object = t.object), t.relation != null && (n.relation = t.relation), t.subjectId != null && (n.subject_id = t.subjectId), t.subjectSetNamespace != null && (n["subject_set.namespace"] = t.subjectSetNamespace), t.subjectSetObject != null && (n["subject_set.object"] = t.subjectSetObject), t.subjectSetRelation != null && (n["subject_set.relation"] = t.subjectSetRelation);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/relation-tuples",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => gf(o))
            })
        }
        getRelationships() {
            return J(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.getRelationshipsRaw(t, r)).value()
            })
        }
        listRelationshipNamespacesRaw(t) {
            return J(this, void 0, void 0, function*() {
                const r = {},
                    n = {};
                if (this.configuration && this.configuration.accessToken) {
                    const _ = this.configuration.accessToken,
                        o = yield _("oryAccessToken", []);
                    o && (n.Authorization = `Bearer ${o}`)
                }
                const i = yield this.request({
                    path: "/namespaces",
                    method: "GET",
                    headers: n,
                    query: r
                }, t);
                return new c(i, _ => cf(_))
            })
        }
        listRelationshipNamespaces(t) {
            return J(this, void 0, void 0, function*() {
                return yield(yield this.listRelationshipNamespacesRaw(t)).value()
            })
        }
        patchRelationshipsRaw(t, r) {
            return J(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryAccessToken", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/admin/relation-tuples",
                    method: "PATCH",
                    headers: i,
                    query: n,
                    body: t.relationshipPatch.map(pf)
                }, r);
                return new y(_)
            })
        }
        patchRelationships() {
            return J(this, arguments, void 0, function*(t = {}, r) {
                yield this.patchRelationshipsRaw(t, r)
            })
        }
    }
    var Sg = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class bF extends k {
        discoverJsonWebKeysRaw(t) {
            return Sg(this, void 0, void 0, function*() {
                const r = {},
                    n = {},
                    i = yield this.request({
                        path: "/.well-known/jwks.json",
                        method: "GET",
                        headers: n,
                        query: r
                    }, t);
                return new c(i, _ => A(_))
            })
        }
        discoverJsonWebKeys(t) {
            return Sg(this, void 0, void 0, function*() {
                return yield(yield this.discoverJsonWebKeysRaw(t)).value()
            })
        }
    }
    var S = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    class wF extends k {
        createWorkspaceRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces",
                    method: "POST",
                    headers: i,
                    query: n,
                    body: ta(t.createWorkspaceBody)
                }, r);
                return new c(_, o => I(o))
            })
        }
        createWorkspace() {
            return S(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.createWorkspaceRaw(t, r)).value()
            })
        }
        createWorkspaceApiKeyRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling createWorkspaceApiKey().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}/tokens".replace("{workspace}", encodeURIComponent(String(t.workspace))),
                    method: "POST",
                    headers: i,
                    query: n,
                    body: Z_(t.createWorkspaceApiKeyBody)
                }, r);
                return new c(_, o => wr(o))
            })
        }
        createWorkspaceApiKey(t, r) {
            return S(this, void 0, void 0, function*() {
                return yield(yield this.createWorkspaceApiKeyRaw(t, r)).value()
            })
        }
        deleteWorkspaceApiKeyRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling deleteWorkspaceApiKey().');
                if (t.tokenId == null) throw new s("tokenId", 'Required parameter "tokenId" was null or undefined when calling deleteWorkspaceApiKey().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}/tokens/{token_id}".replace("{workspace}", encodeURIComponent(String(t.workspace))).replace("{token_id}", encodeURIComponent(String(t.tokenId))),
                    method: "DELETE",
                    headers: i,
                    query: n
                }, r);
                return new y(_)
            })
        }
        deleteWorkspaceApiKey(t, r) {
            return S(this, void 0, void 0, function*() {
                yield this.deleteWorkspaceApiKeyRaw(t, r)
            })
        }
        getWorkspaceRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling getWorkspace().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}".replace("{workspace}", encodeURIComponent(String(t.workspace))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => I(o))
            })
        }
        getWorkspace(t, r) {
            return S(this, void 0, void 0, function*() {
                return yield(yield this.getWorkspaceRaw(t, r)).value()
            })
        }
        listWorkspaceApiKeysRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling listWorkspaceApiKeys().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}/tokens".replace("{workspace}", encodeURIComponent(String(t.workspace))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => o.map(wr))
            })
        }
        listWorkspaceApiKeys(t, r) {
            return S(this, void 0, void 0, function*() {
                return yield(yield this.listWorkspaceApiKeysRaw(t, r)).value()
            })
        }
        listWorkspaceProjectsRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling listWorkspaceProjects().');
                const n = {},
                    i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}/projects".replace("{workspace}", encodeURIComponent(String(t.workspace))),
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => ec(o))
            })
        }
        listWorkspaceProjects(t, r) {
            return S(this, void 0, void 0, function*() {
                return yield(yield this.listWorkspaceProjectsRaw(t, r)).value()
            })
        }
        listWorkspacesRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                const n = {};
                t.pageSize != null && (n.page_size = t.pageSize), t.pageToken != null && (n.page_token = t.pageToken);
                const i = {};
                if (this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces",
                    method: "GET",
                    headers: i,
                    query: n
                }, r);
                return new c(_, o => nc(o))
            })
        }
        listWorkspaces() {
            return S(this, arguments, void 0, function*(t = {}, r) {
                return yield(yield this.listWorkspacesRaw(t, r)).value()
            })
        }
        updateWorkspaceRaw(t, r) {
            return S(this, void 0, void 0, function*() {
                if (t.workspace == null) throw new s("workspace", 'Required parameter "workspace" was null or undefined when calling updateWorkspace().');
                const n = {},
                    i = {};
                if (i["Content-Type"] = "application/json", this.configuration && this.configuration.accessToken) {
                    const o = this.configuration.accessToken,
                        a = yield o("oryWorkspaceApiKey", []);
                    a && (i.Authorization = `Bearer ${a}`)
                }
                const _ = yield this.request({
                    path: "/workspaces/{workspace}".replace("{workspace}", encodeURIComponent(String(t.workspace))),
                    method: "PUT",
                    headers: i,
                    query: n,
                    body: ng(t.updateWorkspaceBody)
                }, r);
                return new c(_, o => I(o))
            })
        }
        updateWorkspace(t, r) {
            return S(this, void 0, void 0, function*() {
                return yield(yield this.updateWorkspaceRaw(t, r)).value()
            })
        }
    }

    function b(e) {
        return typeof e == "object" && !!e && "error" in e && typeof e.error == "object" && !!e.error && "id" in e.error
    }

    function Og(e) {
        return b(e) && e.error.id === "session_refresh_required"
    }

    function Sr(e) {
        return b(e) && e.error.id === "self_service_flow_expired"
    }

    function SF(e) {
        return b(e) && b(e) && e.error.id === "self_service_flow_disabled"
    }

    function Tg(e) {
        return b(e) && b(e) && e.error.id === "browser_location_change_required"
    }

    function OF(e) {
        return b(e) && e.error.id === "self_service_flow_replaced"
    }

    function TF(e) {
        return b(e) && e.error.id === "session_already_available"
    }

    function vF(e) {
        return b(e) && e.error.id === "session_verified_address_required"
    }

    function NF(e) {
        return b(e) && e.error.id === "session_aal_already_fulfilled"
    }

    function JF(e) {
        return b(e) && e.error.id === "session_aal1_required"
    }

    function RF(e) {
        return b(e) && e.error.id === "session_aal2_required"
    }

    function FF(e) {
        return b(e) && e.error.id === "session_inactive"
    }

    function vg(e) {
        return b(e) && e.error.id === "security_csrf_violation"
    }

    function CF(e) {
        return b(e) && e.error.id === "self_service_flow_return_to_forbidden"
    }

    function DF(e) {
        return b(e) && e.error.id === "security_identity_mismatch"
    }
    const Ng = e => e instanceof E ? !0 : typeof e == "object" && !!e && "name" in e && e.name === "ResponseError",
        xF = e => e.sdk.url + "/self-service/registration/browser",
        AF = e => e.sdk.url + "/self-service/login/browser",
        IF = e => e.sdk.url + "/self-service/settings/browser",
        PF = e => e.sdk.url + "/self-service/recovery/browser",
        qF = e => e.sdk.url + "/self-service/verification/browser";
    var Or;
    (function(e) {
        e.Login = "login", e.Registration = "registration", e.Recovery = "recovery", e.Verification = "verification", e.Settings = "settings", e.Error = "error", e.OAuth2Consent = "oauth2_consent"
    })(Or || (Or = {}));
    var Jg = function(e, t, r, n) {
        function i(_) {
            return _ instanceof r ? _ : new r(function(o) {
                o(_)
            })
        }
        return new(r || (r = Promise))(function(_, o) {
            function a(d) {
                try {
                    l(n.next(d))
                } catch (p) {
                    o(p)
                }
            }

            function g(d) {
                try {
                    l(n.throw(d))
                } catch (p) {
                    o(p)
                }
            }

            function l(d) {
                d.done ? _(d.value) : i(d.value).then(a, g)
            }
            l((n = n.apply(e, t || [])).next())
        })
    };
    const zF = e => t => Jg(void 0, void 0, void 0, function*() {
        if (Ng(t)) switch (t.response.status) {
            case 404:
                e.onRestartFlow();
                return;
            case 410:
                const r = yield Tr(t.response);
                if (Sr(r)) {
                    e.onRestartFlow(r.use_flow_id);
                    return
                }
                e.onRestartFlow();
                return;
            case 400:
                return e.onValidationError(yield t.response.json());
            case 403:
            case 422: {
                const n = yield Tr(t.response);
                if (Tg(n) && n.redirect_browser_to) {
                    e.onRedirect(n.redirect_browser_to, !0);
                    return
                } else if (Sr(n)) {
                    e.onRestartFlow(n.use_flow_id);
                    return
                } else if (Og(n)) {
                    e.onRedirect(n.redirect_browser_to, !0);
                    return
                } else if (vg(n)) {
                    e.onRestartFlow();
                    return
                }
                throw new E(t.response, "The Ory API endpoint returned a response code the SDK does not know how to handle. Please check the network tab for more information:" + JSON.stringify(n))
            }
            default:
                throw new E(t.response, "The Ory API endpoint returned a response code the SDK does not know how to handle. Please check the network tab for more information.")
        } else if (t instanceof ue) throw new ue(t, "Unable to call the API endpoint. Ensure that CORS is set up correctly and that you have provided a valid SDK URL to Ory Elements.");
        throw t
    });

    function Tr(e) {
        return Jg(this, void 0, void 0, function*() {
            try {
                return yield e.clone().json()
            } catch {
                throw new E(e, "The Ory API endpoint returned a response the SDK does not know how to handle:" + (yield e.text()))
            }
        })
    }
    const Rg = ["show_settings_ui", "show_recovery_ui", "show_verification_ui", "redirect_browser_to", "set_ory_session_token"];

    function UF(e, {
        onRedirect: t
    }) {
        if (!e || e.length === 0) return !1;
        const r = Fg(e);
        if (!r) return !1;
        const n = (i, _, o) => o ? (t(o, !0), !0) : (t("/" + _ + "?flow=" + i, !1), !0);
        if (Cg(r)) throw new Error("Ory Elements does not support API flows yet.");
        if (Dg(r) && r.redirect_browser_to) return t(r.redirect_browser_to, !0), !0;
        if (Ig(r)) return n(r.flow.id, "verification", r.flow.url);
        if (xg(r)) return n(r.flow.id, "recovery", r.flow.url);
        if (Ag(r)) return n(r.flow.id, "settings", r.flow.url);
        throw new Error("Unknown action: " + JSON.stringify(r))
    }

    function Fg(e) {
        return !e || e.length === 0 ? void 0 : e.sort((r, n) => Rg.indexOf(r.action) - Rg.indexOf(n.action))[0]
    }

    function Cg(e) {
        return e.action === "set_ory_session_token"
    }

    function Dg(e) {
        return e.action === "redirect_browser_to"
    }

    function xg(e) {
        return e.action === "show_recovery_ui"
    }

    function Ag(e) {
        return e.action === "show_settings_ui"
    }

    function Ig(e) {
        return e.action === "show_verification_ui"
    }
    const EF = e => {
        const t = e.attributes;
        return Pg(t) ? t.title : qg(t) ? e.meta.label : vr(t) && t.label ? t.label : e.meta.label
    };

    function Pg(e) {
        return e.node_type === "a"
    }

    function qg(e) {
        return e.node_type === "img"
    }

    function vr(e) {
        return e.node_type === "input"
    }

    function BF(e) {
        return e.node_type === "div"
    }

    function WF(e) {
        return e.node_type === "text"
    }

    function LF(e) {
        return e.node_type === "script"
    }

    function MF({
        attributes: e
    }) {
        return vr(e) ? e.name : e.id
    }
    const zg = Object.freeze(Object.defineProperty({
        __proto__: null,
        AcceptDeviceUserCodeRequestFromJSON: $g,
        AcceptDeviceUserCodeRequestFromJSONTyped: Cr,
        AcceptDeviceUserCodeRequestToJSON: Dr,
        AcceptDeviceUserCodeRequestToJSONTyped: xr,
        AcceptOAuth2ConsentRequestFromJSON: Vg,
        AcceptOAuth2ConsentRequestFromJSONTyped: Pr,
        AcceptOAuth2ConsentRequestSessionFromJSON: Ue,
        AcceptOAuth2ConsentRequestSessionFromJSONTyped: Ar,
        AcceptOAuth2ConsentRequestSessionToJSON: Ee,
        AcceptOAuth2ConsentRequestSessionToJSONTyped: Ir,
        AcceptOAuth2ConsentRequestToJSON: qr,
        AcceptOAuth2ConsentRequestToJSONTyped: zr,
        AcceptOAuth2LoginRequestFromJSON: Xg,
        AcceptOAuth2LoginRequestFromJSONTyped: Ur,
        AcceptOAuth2LoginRequestToJSON: Er,
        AcceptOAuth2LoginRequestToJSONTyped: Br,
        AccountExperienceColorsFromJSON: Yg,
        AccountExperienceColorsFromJSONTyped: Wr,
        AccountExperienceColorsToJSON: Zg,
        AccountExperienceColorsToJSONTyped: Lr,
        AccountExperienceConfigurationFromJSON: tm,
        AccountExperienceConfigurationFromJSONTyped: Mr,
        AccountExperienceConfigurationLocaleBehaviorEnum: jg,
        AccountExperienceConfigurationToJSON: rm,
        AccountExperienceConfigurationToJSONTyped: $r,
        ActiveProjectInConsoleFromJSON: im,
        ActiveProjectInConsoleFromJSONTyped: Gr,
        ActiveProjectInConsoleToJSON: om,
        ActiveProjectInConsoleToJSONTyped: Kr,
        AddProjectToWorkspaceBodyEnvironmentEnum: _m,
        AddProjectToWorkspaceBodyFromJSON: dm,
        AddProjectToWorkspaceBodyFromJSONTyped: Vr,
        AddProjectToWorkspaceBodyProjectSubscriptionEnum: am,
        AddProjectToWorkspaceBodyToJSON: cm,
        AddProjectToWorkspaceBodyToJSONTyped: Hr,
        AttributeFilterConditionEnum: lm,
        AttributeFilterFromJSON: jr,
        AttributeFilterFromJSONTyped: en,
        AttributeFilterToJSON: tn,
        AttributeFilterToJSONTyped: rn,
        AttributeFromJSON: Xr,
        AttributeFromJSONTyped: Qr,
        AttributeToJSON: Yr,
        AttributeToJSONTyped: Zr,
        AttributesCountDatapointFromJSON: nn,
        AttributesCountDatapointFromJSONTyped: on,
        AttributesCountDatapointToJSON: hm,
        AttributesCountDatapointToJSONTyped: _n,
        AuthenticatorAssuranceLevel: fe,
        AuthenticatorAssuranceLevelFromJSON: pe,
        AuthenticatorAssuranceLevelFromJSONTyped: an,
        AuthenticatorAssuranceLevelToJSON: mm,
        AuthenticatorAssuranceLevelToJSONTyped: ym,
        BASE_PATH: U,
        BaseAPI: k,
        BasicOrganizationFromJSON: Be,
        BasicOrganizationFromJSONTyped: sn,
        BasicOrganizationToJSON: We,
        BasicOrganizationToJSONTyped: dn,
        BatchCheckPermissionBodyFromJSON: Om,
        BatchCheckPermissionBodyFromJSONTyped: pn,
        BatchCheckPermissionBodyToJSON: hn,
        BatchCheckPermissionBodyToJSONTyped: gn,
        BatchCheckPermissionResultFromJSON: wn,
        BatchCheckPermissionResultFromJSONTyped: Sn,
        BatchCheckPermissionResultToJSON: Nm,
        BatchCheckPermissionResultToJSONTyped: On,
        BatchPatchIdentitiesResponseFromJSON: Rn,
        BatchPatchIdentitiesResponseFromJSONTyped: Fn,
        BatchPatchIdentitiesResponseToJSON: Cm,
        BatchPatchIdentitiesResponseToJSONTyped: Cn,
        BillingPeriodBucketFromJSON: Kn,
        BillingPeriodBucketFromJSONTyped: Vn,
        BillingPeriodBucketToJSON: Hn,
        BillingPeriodBucketToJSONTyped: Xn,
        BlobApiResponse: Lg,
        COLLECTION_FORMATS: Bg,
        CheckOplSyntaxResultFromJSON: ri,
        CheckOplSyntaxResultFromJSONTyped: ni,
        CheckOplSyntaxResultToJSON: Wm,
        CheckOplSyntaxResultToJSONTyped: ii,
        CheckPermissionResultFromJSON: V,
        CheckPermissionResultFromJSONTyped: oi,
        CheckPermissionResultToJSON: Mm,
        CheckPermissionResultToJSONTyped: _i,
        CheckPermissionResultWithErrorFromJSON: mn,
        CheckPermissionResultWithErrorFromJSONTyped: yn,
        CheckPermissionResultWithErrorToJSON: kn,
        CheckPermissionResultWithErrorToJSONTyped: bn,
        CloudAccountFromJSON: Gm,
        CloudAccountFromJSONTyped: ai,
        CloudAccountToJSON: Km,
        CloudAccountToJSONTyped: si,
        Configuration: Nr,
        ConsistencyRequestParametersConsistencyEnum: Vm,
        ConsistencyRequestParametersFromJSON: Xm,
        ConsistencyRequestParametersFromJSONTyped: di,
        ConsistencyRequestParametersToJSON: Qm,
        ConsistencyRequestParametersToJSONTyped: ci,
        ContinueWithFromJSON: H,
        ContinueWithFromJSONTyped: Ai,
        ContinueWithRecoveryUiActionEnum: Zm,
        ContinueWithRecoveryUiFlowFromJSON: ui,
        ContinueWithRecoveryUiFlowFromJSONTyped: li,
        ContinueWithRecoveryUiFlowToJSON: fi,
        ContinueWithRecoveryUiFlowToJSONTyped: pi,
        ContinueWithRecoveryUiFromJSON: ey,
        ContinueWithRecoveryUiFromJSONTyped: Xe,
        ContinueWithRecoveryUiToJSON: hi,
        ContinueWithRecoveryUiToJSONTyped: gi,
        ContinueWithRedirectBrowserToActionEnum: ty,
        ContinueWithRedirectBrowserToFromJSON: ny,
        ContinueWithRedirectBrowserToFromJSONTyped: Qe,
        ContinueWithRedirectBrowserToToJSON: mi,
        ContinueWithRedirectBrowserToToJSONTyped: yi,
        ContinueWithSetOrySessionTokenActionEnum: iy,
        ContinueWithSetOrySessionTokenFromJSON: _y,
        ContinueWithSetOrySessionTokenFromJSONTyped: Ye,
        ContinueWithSetOrySessionTokenToJSON: ki,
        ContinueWithSetOrySessionTokenToJSONTyped: bi,
        ContinueWithSettingsUiActionEnum: sy,
        ContinueWithSettingsUiFlowFromJSON: wi,
        ContinueWithSettingsUiFlowFromJSONTyped: Si,
        ContinueWithSettingsUiFlowToJSON: Oi,
        ContinueWithSettingsUiFlowToJSONTyped: Ti,
        ContinueWithSettingsUiFromJSON: cy,
        ContinueWithSettingsUiFromJSONTyped: Ze,
        ContinueWithSettingsUiToJSON: vi,
        ContinueWithSettingsUiToJSONTyped: Ni,
        ContinueWithToJSON: X,
        ContinueWithToJSONTyped: Ii,
        ContinueWithVerificationUiActionEnum: ly,
        ContinueWithVerificationUiFlowFromJSON: Ji,
        ContinueWithVerificationUiFlowFromJSONTyped: Ri,
        ContinueWithVerificationUiFlowToJSON: Fi,
        ContinueWithVerificationUiFlowToJSONTyped: Ci,
        ContinueWithVerificationUiFromJSON: py,
        ContinueWithVerificationUiFromJSONTyped: je,
        ContinueWithVerificationUiToJSON: Di,
        ContinueWithVerificationUiToJSONTyped: xi,
        CourierApi: nF,
        CourierMessageStatus: he,
        CourierMessageStatusFromJSON: Pi,
        CourierMessageStatusFromJSONTyped: qi,
        CourierMessageStatusToJSON: gy,
        CourierMessageStatusToJSONTyped: my,
        CourierMessageType: ge,
        CourierMessageTypeFromJSON: zi,
        CourierMessageTypeFromJSONTyped: Ui,
        CourierMessageTypeToJSON: ky,
        CourierMessageTypeToJSONTyped: by,
        CreateCustomDomainBodyFromJSON: Sy,
        CreateCustomDomainBodyFromJSONTyped: Ei,
        CreateCustomDomainBodyToJSON: Oy,
        CreateCustomDomainBodyToJSONTyped: Bi,
        CreateEventStreamBodyFromJSON: Ny,
        CreateEventStreamBodyFromJSONTyped: Wi,
        CreateEventStreamBodyToJSON: Li,
        CreateEventStreamBodyToJSONTyped: Mi,
        CreateEventStreamBodyTypeEnum: Ty,
        CreateFedcmFlowResponseFromJSON: Hi,
        CreateFedcmFlowResponseFromJSONTyped: Xi,
        CreateFedcmFlowResponseToJSON: Fy,
        CreateFedcmFlowResponseToJSONTyped: Qi,
        CreateIdentityBodyFromJSON: qo,
        CreateIdentityBodyFromJSONTyped: zo,
        CreateIdentityBodyStateEnum: Ly,
        CreateIdentityBodyToJSON: _t,
        CreateIdentityBodyToJSONTyped: Uo,
        CreateInviteResponseFromJSON: Vy,
        CreateInviteResponseFromJSONTyped: Wo,
        CreateInviteResponseToJSON: Hy,
        CreateInviteResponseToJSONTyped: Lo,
        CreateJsonWebKeySetFromJSON: Qy,
        CreateJsonWebKeySetFromJSONTyped: Mo,
        CreateJsonWebKeySetToJSON: $o,
        CreateJsonWebKeySetToJSONTyped: Go,
        CreateOrganizationOnboardingPortalLinkBodyFromJSON: Zy,
        CreateOrganizationOnboardingPortalLinkBodyFromJSONTyped: Ko,
        CreateOrganizationOnboardingPortalLinkBodyToJSON: Vo,
        CreateOrganizationOnboardingPortalLinkBodyToJSONTyped: Ho,
        CreateProjectApiKeyRequestFromJSON: ek,
        CreateProjectApiKeyRequestFromJSONTyped: Xo,
        CreateProjectApiKeyRequestToJSON: Qo,
        CreateProjectApiKeyRequestToJSONTyped: Yo,
        CreateProjectBodyEnvironmentEnum: tk,
        CreateProjectBodyFromJSON: ik,
        CreateProjectBodyFromJSONTyped: Zo,
        CreateProjectBodyHomeRegionEnum: rk,
        CreateProjectBodyToJSON: jo,
        CreateProjectBodyToJSONTyped: e_,
        CreateProjectBrandingFromJSON: ak,
        CreateProjectBrandingFromJSONTyped: n_,
        CreateProjectBrandingToJSON: sk,
        CreateProjectBrandingToJSONTyped: i_,
        CreateProjectMemberInviteBodyFromJSON: ck,
        CreateProjectMemberInviteBodyFromJSONTyped: o_,
        CreateProjectMemberInviteBodyToJSON: uk,
        CreateProjectMemberInviteBodyToJSONTyped: __,
        CreateProjectNormalizedPayloadEnvironmentEnum: Rk,
        CreateProjectNormalizedPayloadFromJSON: qk,
        CreateProjectNormalizedPayloadFromJSONTyped: F_,
        CreateProjectNormalizedPayloadHomeRegionEnum: Fk,
        CreateProjectNormalizedPayloadHydraStrategiesAccessTokenEnum: Ck,
        CreateProjectNormalizedPayloadHydraStrategiesJwtScopeClaimEnum: Dk,
        CreateProjectNormalizedPayloadHydraStrategiesScopeEnum: xk,
        CreateProjectNormalizedPayloadKratosSelfserviceFlowsRecoveryUseEnum: Ak,
        CreateProjectNormalizedPayloadKratosSelfserviceFlowsVerificationUseEnum: Ik,
        CreateProjectNormalizedPayloadToJSON: zk,
        CreateProjectNormalizedPayloadToJSONTyped: C_,
        CreateRecoveryCodeForIdentityBodyFromJSON: Ek,
        CreateRecoveryCodeForIdentityBodyFromJSONTyped: D_,
        CreateRecoveryCodeForIdentityBodyToJSON: x_,
        CreateRecoveryCodeForIdentityBodyToJSONTyped: A_,
        CreateRecoveryLinkForIdentityBodyFromJSON: Wk,
        CreateRecoveryLinkForIdentityBodyFromJSONTyped: I_,
        CreateRecoveryLinkForIdentityBodyToJSON: P_,
        CreateRecoveryLinkForIdentityBodyToJSONTyped: q_,
        CreateRelationshipBodyFromJSON: Mk,
        CreateRelationshipBodyFromJSONTyped: z_,
        CreateRelationshipBodyToJSON: U_,
        CreateRelationshipBodyToJSONTyped: E_,
        CreateSubscriptionBodyCurrencyEnum: $k,
        CreateSubscriptionBodyFromJSON: Vk,
        CreateSubscriptionBodyFromJSONTyped: B_,
        CreateSubscriptionBodyIntervalEnum: Gk,
        CreateSubscriptionBodyToJSON: Hk,
        CreateSubscriptionBodyToJSONTyped: W_,
        CreateSubscriptionCommonCurrencyEnum: Xk,
        CreateSubscriptionCommonFromJSON: Zk,
        CreateSubscriptionCommonFromJSONTyped: L_,
        CreateSubscriptionCommonIntervalEnum: Qk,
        CreateSubscriptionCommonToJSON: jk,
        CreateSubscriptionCommonToJSONTyped: M_,
        CreateVerifiableCredentialRequestBodyFromJSON: rb,
        CreateVerifiableCredentialRequestBodyFromJSONTyped: H_,
        CreateVerifiableCredentialRequestBodyToJSON: X_,
        CreateVerifiableCredentialRequestBodyToJSONTyped: Q_,
        CreateWorkspaceApiKeyBodyFromJSON: ib,
        CreateWorkspaceApiKeyBodyFromJSONTyped: Y_,
        CreateWorkspaceApiKeyBodyToJSON: Z_,
        CreateWorkspaceApiKeyBodyToJSONTyped: j_,
        CreateWorkspaceBodyFromJSON: _b,
        CreateWorkspaceBodyFromJSONTyped: ea,
        CreateWorkspaceBodyToJSON: ta,
        CreateWorkspaceBodyToJSONTyped: ra,
        CreateWorkspaceMemberInviteBodyFromJSON: db,
        CreateWorkspaceMemberInviteBodyFromJSONTyped: na,
        CreateWorkspaceMemberInviteBodyRoleEnum: ab,
        CreateWorkspaceMemberInviteBodyToJSON: cb,
        CreateWorkspaceMemberInviteBodyToJSONTyped: ia,
        CreateWorkspaceSubscriptionBodyCurrencyEnum: ub,
        CreateWorkspaceSubscriptionBodyFromJSON: pb,
        CreateWorkspaceSubscriptionBodyFromJSONTyped: oa,
        CreateWorkspaceSubscriptionBodyIntervalEnum: lb,
        CreateWorkspaceSubscriptionBodyToJSON: hb,
        CreateWorkspaceSubscriptionBodyToJSONTyped: _a,
        CredentialSupportedDraft00FromJSON: aa,
        CredentialSupportedDraft00FromJSONTyped: sa,
        CredentialSupportedDraft00ToJSON: da,
        CredentialSupportedDraft00ToJSONTyped: ca,
        CustomDomainFromJSON: kb,
        CustomDomainFromJSONTyped: ua,
        CustomDomainSslStatusEnum: mb,
        CustomDomainToJSON: bb,
        CustomDomainToJSONTyped: la,
        DefaultConfig: Jr,
        DeleteIdentityCredentialsTypeEnum: aF,
        DeleteMySessionsCountFromJSON: fa,
        DeleteMySessionsCountFromJSONTyped: pa,
        DeleteMySessionsCountToJSON: Sb,
        DeleteMySessionsCountToJSONTyped: ha,
        DeviceAuthorizationFromJSON: ga,
        DeviceAuthorizationFromJSONTyped: ma,
        DeviceAuthorizationToJSON: Tb,
        DeviceAuthorizationToJSONTyped: ya,
        DeviceUserAuthRequestFromJSON: Fb,
        DeviceUserAuthRequestFromJSONTyped: va,
        DeviceUserAuthRequestToJSON: Cb,
        DeviceUserAuthRequestToJSONTyped: Na,
        EmailTemplateDataBodyFromJSON: Ja,
        EmailTemplateDataBodyFromJSONTyped: Ra,
        EmailTemplateDataBodyToJSON: Fa,
        EmailTemplateDataBodyToJSONTyped: Ca,
        EmailTemplateDataFromJSON: Ab,
        EmailTemplateDataFromJSONTyped: Da,
        EmailTemplateDataToJSON: Ib,
        EmailTemplateDataToJSONTyped: xa,
        ErrorAuthenticatorAssuranceLevelNotSatisfiedFromJSON: Eb,
        ErrorAuthenticatorAssuranceLevelNotSatisfiedFromJSONTyped: za,
        ErrorAuthenticatorAssuranceLevelNotSatisfiedToJSON: Bb,
        ErrorAuthenticatorAssuranceLevelNotSatisfiedToJSONTyped: Ua,
        ErrorBrowserLocationChangeRequiredFromJSON: Mb,
        ErrorBrowserLocationChangeRequiredFromJSONTyped: Ma,
        ErrorBrowserLocationChangeRequiredToJSON: $b,
        ErrorBrowserLocationChangeRequiredToJSONTyped: $a,
        ErrorFlowReplacedFromJSON: Kb,
        ErrorFlowReplacedFromJSONTyped: Ga,
        ErrorFlowReplacedToJSON: Vb,
        ErrorFlowReplacedToJSONTyped: Ka,
        ErrorGenericFromJSON: Ea,
        ErrorGenericFromJSONTyped: Ba,
        ErrorGenericToJSON: Wa,
        ErrorGenericToJSONTyped: La,
        ErrorOAuth2FromJSON: Tt,
        ErrorOAuth2FromJSONTyped: Va,
        ErrorOAuth2ToJSON: Xb,
        ErrorOAuth2ToJSONTyped: Ha,
        EventStreamFromJSON: ke,
        EventStreamFromJSONTyped: Xa,
        EventStreamToJSON: Qa,
        EventStreamToJSONTyped: Ya,
        EventsApi: iF,
        ExpandedPermissionTreeFromJSON: vt,
        ExpandedPermissionTreeFromJSONTyped: Za,
        ExpandedPermissionTreeToJSON: ja,
        ExpandedPermissionTreeToJSONTyped: es,
        ExpandedPermissionTreeTypeEnum: Yb,
        FetchError: ue,
        FlowErrorFromJSON: ts,
        FlowErrorFromJSONTyped: rs,
        FlowErrorToJSON: ew,
        FlowErrorToJSONTyped: ns,
        get FlowType() {
            return Or
        },
        FrontendApi: oF,
        GenericErrorContentFromJSON: St,
        GenericErrorContentFromJSONTyped: Aa,
        GenericErrorContentIdEnum: Pb,
        GenericErrorContentToJSON: Ot,
        GenericErrorContentToJSONTyped: Ia,
        GenericErrorFromJSON: ne,
        GenericErrorFromJSONTyped: Pa,
        GenericErrorToJSON: ie,
        GenericErrorToJSONTyped: qa,
        GenericUsageFromJSON: Nt,
        GenericUsageFromJSONTyped: ss,
        GenericUsageToJSON: Jt,
        GenericUsageToJSONTyped: ds,
        GetAttributesCountResponseFromJSON: iw,
        GetAttributesCountResponseFromJSONTyped: cs,
        GetAttributesCountResponseToJSON: ow,
        GetAttributesCountResponseToJSONTyped: us,
        GetIdentityByExternalIDIncludeCredentialEnum: dF,
        GetIdentityIncludeCredentialEnum: sF,
        GetManagedIdentitySchemaLocationFromJSON: aw,
        GetManagedIdentitySchemaLocationFromJSONTyped: ls,
        GetManagedIdentitySchemaLocationToJSON: sw,
        GetManagedIdentitySchemaLocationToJSONTyped: fs,
        GetMetricsEventAttributesResponseFromJSON: cw,
        GetMetricsEventAttributesResponseFromJSONTyped: ps,
        GetMetricsEventAttributesResponseToJSON: uw,
        GetMetricsEventAttributesResponseToJSONTyped: hs,
        GetMetricsEventTypesResponseFromJSON: fw,
        GetMetricsEventTypesResponseFromJSONTyped: gs,
        GetMetricsEventTypesResponseToJSON: pw,
        GetMetricsEventTypesResponseToJSONTyped: ms,
        GetOrganizationResponseFromJSON: ys,
        GetOrganizationResponseFromJSONTyped: ks,
        GetOrganizationResponseToJSON: gw,
        GetOrganizationResponseToJSONTyped: bs,
        GetProjectEventsBodyFromJSON: yw,
        GetProjectEventsBodyFromJSONTyped: ws,
        GetProjectEventsBodyToJSON: kw,
        GetProjectEventsBodyToJSONTyped: Ss,
        GetProjectEventsResponseFromJSON: Ow,
        GetProjectEventsResponseFromJSONTyped: Ns,
        GetProjectEventsResponseToJSON: Tw,
        GetProjectEventsResponseToJSONTyped: Js,
        GetProjectMetricsResponseFromJSON: Rw,
        GetProjectMetricsResponseFromJSONTyped: Ds,
        GetProjectMetricsResponseToJSON: Fw,
        GetProjectMetricsResponseToJSONTyped: xs,
        GetSessionActivityResponseFromJSON: Aw,
        GetSessionActivityResponseFromJSONTyped: qs,
        GetSessionActivityResponseToJSON: Iw,
        GetSessionActivityResponseToJSONTyped: zs,
        GetSessionExpandEnum: cF,
        GetVersion200ResponseFromJSON: Us,
        GetVersion200ResponseFromJSONTyped: Es,
        GetVersion200ResponseToJSON: qw,
        GetVersion200ResponseToJSONTyped: Bs,
        HealthNotReadyStatusFromJSON: Uw,
        HealthNotReadyStatusFromJSONTyped: Ws,
        HealthNotReadyStatusToJSON: Ew,
        HealthNotReadyStatusToJSONTyped: Ls,
        HealthStatusFromJSON: Ww,
        HealthStatusFromJSONTyped: Ms,
        HealthStatusToJSON: Lw,
        HealthStatusToJSONTyped: $s,
        IdentityApi: _F,
        IdentityCredentialsCodeAddressFromJSON: Ys,
        IdentityCredentialsCodeAddressFromJSONTyped: Zs,
        IdentityCredentialsCodeAddressToJSON: js,
        IdentityCredentialsCodeAddressToJSONTyped: ed,
        IdentityCredentialsCodeFromJSON: Xw,
        IdentityCredentialsCodeFromJSONTyped: td,
        IdentityCredentialsCodeToJSON: Qw,
        IdentityCredentialsCodeToJSONTyped: rd,
        IdentityCredentialsFromJSON: Gs,
        IdentityCredentialsFromJSONTyped: Ks,
        IdentityCredentialsOidcFromJSON: jw,
        IdentityCredentialsOidcFromJSONTyped: ad,
        IdentityCredentialsOidcProviderFromJSON: nd,
        IdentityCredentialsOidcProviderFromJSONTyped: id,
        IdentityCredentialsOidcProviderToJSON: od,
        IdentityCredentialsOidcProviderToJSONTyped: _d,
        IdentityCredentialsOidcToJSON: eS,
        IdentityCredentialsOidcToJSONTyped: sd,
        IdentityCredentialsPasswordFromJSON: rS,
        IdentityCredentialsPasswordFromJSONTyped: dd,
        IdentityCredentialsPasswordToJSON: nS,
        IdentityCredentialsPasswordToJSONTyped: cd,
        IdentityCredentialsToJSON: Vs,
        IdentityCredentialsToJSONTyped: Hs,
        IdentityCredentialsTypeEnum: Mw,
        IdentityFromJSON: F,
        IdentityFromJSONTyped: Xs,
        IdentityPatchFromJSON: ud,
        IdentityPatchFromJSONTyped: ld,
        IdentityPatchResponseActionEnum: Jm,
        IdentityPatchResponseFromJSON: Tn,
        IdentityPatchResponseFromJSONTyped: vn,
        IdentityPatchResponseToJSON: Nn,
        IdentityPatchResponseToJSONTyped: Jn,
        IdentityPatchToJSON: fd,
        IdentityPatchToJSONTyped: pd,
        IdentitySchemaContainerFromJSON: hd,
        IdentitySchemaContainerFromJSONTyped: gd,
        IdentitySchemaContainerToJSON: _S,
        IdentitySchemaContainerToJSONTyped: md,
        IdentitySchemaPresetFromJSON: sS,
        IdentitySchemaPresetFromJSONTyped: yd,
        IdentitySchemaPresetToJSON: dS,
        IdentitySchemaPresetToJSONTyped: kd,
        IdentityStateEnum: Gw,
        IdentityToJSON: be,
        IdentityToJSONTyped: Qs,
        IdentityWithCredentialsFromJSON: it,
        IdentityWithCredentialsFromJSONTyped: Io,
        IdentityWithCredentialsOidcConfigFromJSON: yo,
        IdentityWithCredentialsOidcConfigFromJSONTyped: ko,
        IdentityWithCredentialsOidcConfigProviderFromJSON: po,
        IdentityWithCredentialsOidcConfigProviderFromJSONTyped: ho,
        IdentityWithCredentialsOidcConfigProviderToJSON: go,
        IdentityWithCredentialsOidcConfigProviderToJSONTyped: mo,
        IdentityWithCredentialsOidcConfigToJSON: bo,
        IdentityWithCredentialsOidcConfigToJSONTyped: wo,
        IdentityWithCredentialsOidcFromJSON: So,
        IdentityWithCredentialsOidcFromJSONTyped: Oo,
        IdentityWithCredentialsOidcToJSON: To,
        IdentityWithCredentialsOidcToJSONTyped: vo,
        IdentityWithCredentialsPasswordConfigFromJSON: No,
        IdentityWithCredentialsPasswordConfigFromJSONTyped: Jo,
        IdentityWithCredentialsPasswordConfigToJSON: Ro,
        IdentityWithCredentialsPasswordConfigToJSONTyped: Fo,
        IdentityWithCredentialsPasswordFromJSON: Co,
        IdentityWithCredentialsPasswordFromJSONTyped: Do,
        IdentityWithCredentialsPasswordToJSON: xo,
        IdentityWithCredentialsPasswordToJSONTyped: Ao,
        IdentityWithCredentialsSamlConfigFromJSON: oo,
        IdentityWithCredentialsSamlConfigFromJSONTyped: _o,
        IdentityWithCredentialsSamlConfigProviderFromJSON: to,
        IdentityWithCredentialsSamlConfigProviderFromJSONTyped: ro,
        IdentityWithCredentialsSamlConfigProviderToJSON: no,
        IdentityWithCredentialsSamlConfigProviderToJSONTyped: io,
        IdentityWithCredentialsSamlConfigToJSON: ao,
        IdentityWithCredentialsSamlConfigToJSONTyped: so,
        IdentityWithCredentialsSamlFromJSON: co,
        IdentityWithCredentialsSamlFromJSONTyped: uo,
        IdentityWithCredentialsSamlToJSON: lo,
        IdentityWithCredentialsSamlToJSONTyped: fo,
        IdentityWithCredentialsToJSON: ot,
        IdentityWithCredentialsToJSONTyped: Po,
        InternalGetProjectBrandingBodyFromJSON: uS,
        InternalGetProjectBrandingBodyFromJSONTyped: bd,
        InternalGetProjectBrandingBodyToJSON: lS,
        InternalGetProjectBrandingBodyToJSONTyped: wd,
        InternalIsAXWelcomeScreenEnabledForProjectBodyFromJSON: pS,
        InternalIsAXWelcomeScreenEnabledForProjectBodyFromJSONTyped: Sd,
        InternalIsAXWelcomeScreenEnabledForProjectBodyToJSON: hS,
        InternalIsAXWelcomeScreenEnabledForProjectBodyToJSONTyped: Od,
        InternalIsOwnerForProjectBySlugBodyFromJSON: yS,
        InternalIsOwnerForProjectBySlugBodyFromJSONTyped: Td,
        InternalIsOwnerForProjectBySlugBodyNamespaceEnum: gS,
        InternalIsOwnerForProjectBySlugBodyToJSON: kS,
        InternalIsOwnerForProjectBySlugBodyToJSONTyped: vd,
        InternalIsOwnerForProjectBySlugResponseFromJSON: wS,
        InternalIsOwnerForProjectBySlugResponseFromJSONTyped: Nd,
        InternalIsOwnerForProjectBySlugResponseToJSON: SS,
        InternalIsOwnerForProjectBySlugResponseToJSONTyped: Jd,
        IntrospectedOAuth2TokenFromJSON: Rd,
        IntrospectedOAuth2TokenFromJSONTyped: Fd,
        IntrospectedOAuth2TokenToJSON: TS,
        IntrospectedOAuth2TokenToJSONTyped: Cd,
        InviteTokenBodyFromJSON: NS,
        InviteTokenBodyFromJSONTyped: Dd,
        InviteTokenBodyToJSON: JS,
        InviteTokenBodyToJSONTyped: xd,
        InvoiceDataV1FromJSON: Bn,
        InvoiceDataV1FromJSONTyped: Wn,
        InvoiceDataV1ToJSON: Ln,
        InvoiceDataV1ToJSONTyped: Mn,
        InvoiceFromJSON: Ge,
        InvoiceFromJSONTyped: $n,
        InvoiceToJSON: Ke,
        InvoiceToJSONTyped: Gn,
        InvoiceTypeEnum: Pm,
        IsOwnerForProjectBySlugFromJSON: FS,
        IsOwnerForProjectBySlugFromJSONTyped: Ad,
        IsOwnerForProjectBySlugToJSON: CS,
        IsOwnerForProjectBySlugToJSONTyped: Id,
        JSONApiResponse: c,
        JsonPatchFromJSON: AS,
        JsonPatchFromJSONTyped: Pd,
        JsonPatchOpEnum: DS,
        JsonPatchToJSON: oe,
        JsonPatchToJSONTyped: qd,
        JsonWebKeyFromJSON: me,
        JsonWebKeyFromJSONTyped: ka,
        JsonWebKeySetFromJSON: A,
        JsonWebKeySetFromJSONTyped: wa,
        JsonWebKeySetToJSON: wt,
        JsonWebKeySetToJSONTyped: Sa,
        JsonWebKeyToJSON: ye,
        JsonWebKeyToJSONTyped: ba,
        JwkApi: fF,
        KetoNamespaceFromJSON: ft,
        KetoNamespaceFromJSONTyped: d_,
        KetoNamespaceToJSON: pt,
        KetoNamespaceToJSONTyped: c_,
        KeysetPaginationRequestParametersFromJSON: PS,
        KeysetPaginationRequestParametersFromJSONTyped: zd,
        KeysetPaginationRequestParametersToJSON: qS,
        KeysetPaginationRequestParametersToJSONTyped: Ud,
        KeysetPaginationResponseHeadersFromJSON: US,
        KeysetPaginationResponseHeadersFromJSONTyped: Ed,
        KeysetPaginationResponseHeadersToJSON: ES,
        KeysetPaginationResponseHeadersToJSONTyped: Bd,
        LineItemV1FromJSON: $e,
        LineItemV1FromJSONTyped: zn,
        LineItemV1ToJSON: Un,
        LineItemV1ToJSONTyped: En,
        ListEventStreamsFromJSON: Wd,
        ListEventStreamsFromJSONTyped: Ld,
        ListEventStreamsToJSON: WS,
        ListEventStreamsToJSONTyped: Md,
        ListIdentitiesConsistencyEnum: uF,
        ListInvoicesResponseFromJSON: MS,
        ListInvoicesResponseFromJSONTyped: $d,
        ListInvoicesResponseToJSON: $S,
        ListInvoicesResponseToJSONTyped: Gd,
        ListOrganizationsResponseFromJSON: Kd,
        ListOrganizationsResponseFromJSONTyped: Vd,
        ListOrganizationsResponseToJSON: KS,
        ListOrganizationsResponseToJSONTyped: Hd,
        ListSessionsExpandEnum: lF,
        ListWorkspaceProjectsFromJSON: ec,
        ListWorkspaceProjectsFromJSONTyped: tc,
        ListWorkspaceProjectsToJSON: jS,
        ListWorkspaceProjectsToJSONTyped: rc,
        ListWorkspacesFromJSON: nc,
        ListWorkspacesFromJSONTyped: ic,
        ListWorkspacesToJSON: tO,
        ListWorkspacesToJSONTyped: oc,
        LoginFlowActiveEnum: AO,
        LoginFlowFromJSON: Oe,
        LoginFlowFromJSONTyped: Uc,
        LoginFlowState: Te,
        LoginFlowStateFromJSON: zO,
        LoginFlowStateFromJSONTyped: Bc,
        LoginFlowStateToJSON: UO,
        LoginFlowStateToJSONTyped: EO,
        LoginFlowToJSON: PO,
        LoginFlowToJSONTyped: Ec,
        LogoutFlowFromJSON: Wc,
        LogoutFlowFromJSONTyped: Lc,
        LogoutFlowToJSON: WO,
        LogoutFlowToJSONTyped: Mc,
        ManagedIdentitySchemaFromJSON: h_,
        ManagedIdentitySchemaFromJSONTyped: g_,
        ManagedIdentitySchemaToJSON: m_,
        ManagedIdentitySchemaToJSONTyped: y_,
        ManagedIdentitySchemaValidationResultFromJSON: MO,
        ManagedIdentitySchemaValidationResultFromJSONTyped: $c,
        ManagedIdentitySchemaValidationResultToJSON: $O,
        ManagedIdentitySchemaValidationResultToJSONTyped: Gc,
        MemberInviteFromJSON: at,
        MemberInviteFromJSONTyped: Eo,
        MemberInviteStatusEnum: $y,
        MemberInviteToJSON: st,
        MemberInviteToJSONTyped: Bo,
        MessageDispatchFromJSON: Kc,
        MessageDispatchFromJSONTyped: Vc,
        MessageDispatchStatusEnum: GO,
        MessageDispatchToJSON: Hc,
        MessageDispatchToJSONTyped: Xc,
        MessageFromJSON: Ut,
        MessageFromJSONTyped: Qc,
        MessageTemplateTypeEnum: VO,
        MessageToJSON: XO,
        MessageToJSONTyped: Yc,
        MetadataApi: pF,
        MetricsDatapointFromJSON: Rs,
        MetricsDatapointFromJSONTyped: Fs,
        MetricsDatapointToJSON: Nw,
        MetricsDatapointToJSONTyped: Cs,
        MoneyFromJSON: is,
        MoneyFromJSONTyped: os,
        MoneyToJSON: _s,
        MoneyToJSONTyped: as,
        NamespaceFromJSON: Zc,
        NamespaceFromJSONTyped: jc,
        NamespaceToJSON: eu,
        NamespaceToJSONTyped: tu,
        NeedsPrivilegedSessionErrorFromJSON: ZO,
        NeedsPrivilegedSessionErrorFromJSONTyped: ru,
        NeedsPrivilegedSessionErrorToJSON: jO,
        NeedsPrivilegedSessionErrorToJSONTyped: nu,
        NormalizedProjectEnvironmentEnum: _T,
        NormalizedProjectFromJSON: cT,
        NormalizedProjectFromJSONTyped: su,
        NormalizedProjectHomeRegionEnum: aT,
        NormalizedProjectRevisionCourierChannelFromJSON: ut,
        NormalizedProjectRevisionCourierChannelFromJSONTyped: a_,
        NormalizedProjectRevisionCourierChannelRequestConfigAuthTypeEnum: lk,
        NormalizedProjectRevisionCourierChannelToJSON: lt,
        NormalizedProjectRevisionCourierChannelToJSONTyped: s_,
        NormalizedProjectRevisionFromJSON: iu,
        NormalizedProjectRevisionFromJSONTyped: ou,
        NormalizedProjectRevisionHookFromJSON: mt,
        NormalizedProjectRevisionHookFromJSONTyped: O_,
        NormalizedProjectRevisionHookToJSON: yt,
        NormalizedProjectRevisionHookToJSONTyped: T_,
        NormalizedProjectRevisionHydraStrategiesAccessTokenEnum: eT,
        NormalizedProjectRevisionHydraStrategiesJwtScopeClaimEnum: tT,
        NormalizedProjectRevisionHydraStrategiesScopeEnum: rT,
        NormalizedProjectRevisionIdentitySchemaFromJSON: ht,
        NormalizedProjectRevisionIdentitySchemaFromJSONTyped: k_,
        NormalizedProjectRevisionIdentitySchemaToJSON: gt,
        NormalizedProjectRevisionIdentitySchemaToJSONTyped: b_,
        NormalizedProjectRevisionKratosSelfserviceFlowsRecoveryUseEnum: nT,
        NormalizedProjectRevisionKratosSelfserviceFlowsVerificationUseEnum: iT,
        NormalizedProjectRevisionSAMLProviderFromJSON: te,
        NormalizedProjectRevisionSAMLProviderFromJSONTyped: v_,
        NormalizedProjectRevisionSAMLProviderStateEnum: Tk,
        NormalizedProjectRevisionSAMLProviderToJSON: re,
        NormalizedProjectRevisionSAMLProviderToJSONTyped: N_,
        NormalizedProjectRevisionScimClientFromJSON: Q,
        NormalizedProjectRevisionScimClientFromJSONTyped: u_,
        NormalizedProjectRevisionScimClientStateEnum: hk,
        NormalizedProjectRevisionScimClientToJSON: Y,
        NormalizedProjectRevisionScimClientToJSONTyped: l_,
        NormalizedProjectRevisionThirdPartyProviderFromJSON: j,
        NormalizedProjectRevisionThirdPartyProviderFromJSONTyped: w_,
        NormalizedProjectRevisionThirdPartyProviderPkceEnum: bk,
        NormalizedProjectRevisionThirdPartyProviderStateEnum: wk,
        NormalizedProjectRevisionThirdPartyProviderToJSON: ee,
        NormalizedProjectRevisionThirdPartyProviderToJSONTyped: S_,
        NormalizedProjectRevisionToJSON: _u,
        NormalizedProjectRevisionToJSONTyped: au,
        NormalizedProjectRevisionTokenizerTemplateFromJSON: kt,
        NormalizedProjectRevisionTokenizerTemplateFromJSONTyped: J_,
        NormalizedProjectRevisionTokenizerTemplateSubjectSourceEnum: Nk,
        NormalizedProjectRevisionTokenizerTemplateToJSON: bt,
        NormalizedProjectRevisionTokenizerTemplateToJSONTyped: R_,
        NormalizedProjectStateEnum: sT,
        NormalizedProjectToJSON: uT,
        NormalizedProjectToJSONTyped: du,
        OAuth2Api: hF,
        OAuth2ClientFromJSON: O,
        OAuth2ClientFromJSONTyped: Oa,
        OAuth2ClientToJSON: R,
        OAuth2ClientToJSONTyped: Ta,
        OAuth2ClientTokenLifespansFromJSON: fT,
        OAuth2ClientTokenLifespansFromJSONTyped: cu,
        OAuth2ClientTokenLifespansToJSON: uu,
        OAuth2ClientTokenLifespansToJSONTyped: lu,
        OAuth2ConsentRequestFromJSON: Et,
        OAuth2ConsentRequestFromJSONTyped: fu,
        OAuth2ConsentRequestOpenIDConnectContextFromJSON: Ft,
        OAuth2ConsentRequestOpenIDConnectContextFromJSONTyped: _c,
        OAuth2ConsentRequestOpenIDConnectContextToJSON: Ct,
        OAuth2ConsentRequestOpenIDConnectContextToJSONTyped: ac,
        OAuth2ConsentRequestToJSON: pu,
        OAuth2ConsentRequestToJSONTyped: hu,
        OAuth2ConsentSessionFromJSON: gu,
        OAuth2ConsentSessionFromJSONTyped: mu,
        OAuth2ConsentSessionToJSON: gT,
        OAuth2ConsentSessionToJSONTyped: yu,
        OAuth2LoginRequestFromJSON: Se,
        OAuth2LoginRequestFromJSONTyped: sc,
        OAuth2LoginRequestToJSON: Dt,
        OAuth2LoginRequestToJSONTyped: dc,
        OAuth2LogoutRequestFromJSON: ku,
        OAuth2LogoutRequestFromJSONTyped: bu,
        OAuth2LogoutRequestToJSON: yT,
        OAuth2LogoutRequestToJSONTyped: wu,
        OAuth2RedirectToFromJSON: z,
        OAuth2RedirectToFromJSONTyped: Su,
        OAuth2RedirectToToJSON: bT,
        OAuth2RedirectToToJSONTyped: Ou,
        OAuth2TokenExchangeFromJSON: Tu,
        OAuth2TokenExchangeFromJSONTyped: vu,
        OAuth2TokenExchangeToJSON: ST,
        OAuth2TokenExchangeToJSONTyped: Nu,
        OidcApi: gF,
        OidcConfigurationFromJSON: Ju,
        OidcConfigurationFromJSONTyped: Ru,
        OidcConfigurationToJSON: TT,
        OidcConfigurationToJSONTyped: Fu,
        OidcUserInfoFromJSON: Cu,
        OidcUserInfoFromJSONTyped: Du,
        OidcUserInfoToJSON: NT,
        OidcUserInfoToJSONTyped: xu,
        OnboardingPortalLinkFromJSON: ve,
        OnboardingPortalLinkFromJSONTyped: Au,
        OnboardingPortalLinkToJSON: Iu,
        OnboardingPortalLinkToJSONTyped: Pu,
        OnboardingPortalOrganizationFromJSON: FT,
        OnboardingPortalOrganizationFromJSONTyped: qu,
        OnboardingPortalOrganizationToJSON: CT,
        OnboardingPortalOrganizationToJSONTyped: zu,
        OrganizationBodyFromJSON: xT,
        OrganizationBodyFromJSONTyped: Uu,
        OrganizationBodyToJSON: Bt,
        OrganizationBodyToJSONTyped: Eu,
        OrganizationFromJSON: x,
        OrganizationFromJSONTyped: f_,
        OrganizationOnboardingPortalLinksResponseFromJSON: Bu,
        OrganizationOnboardingPortalLinksResponseFromJSONTyped: Wu,
        OrganizationOnboardingPortalLinksResponseToJSON: IT,
        OrganizationOnboardingPortalLinksResponseToJSONTyped: Lu,
        OrganizationToJSON: Z,
        OrganizationToJSONTyped: p_,
        ParseErrorFromJSON: Zn,
        ParseErrorFromJSONTyped: jn,
        ParseErrorToJSON: ei,
        ParseErrorToJSONTyped: ti,
        PatchIdentitiesBodyFromJSON: qT,
        PatchIdentitiesBodyFromJSONTyped: Mu,
        PatchIdentitiesBodyToJSON: $u,
        PatchIdentitiesBodyToJSONTyped: Gu,
        PerformNativeLogoutBodyFromJSON: UT,
        PerformNativeLogoutBodyFromJSONTyped: Ku,
        PerformNativeLogoutBodyToJSON: Vu,
        PerformNativeLogoutBodyToJSONTyped: Hu,
        PermissionApi: mF,
        PermissionsOnWorkspaceFromJSON: BT,
        PermissionsOnWorkspaceFromJSONTyped: Xu,
        PermissionsOnWorkspaceToJSON: WT,
        PermissionsOnWorkspaceToJSONTyped: Qu,
        PlanDetailsFromJSON: ju,
        PlanDetailsFromJSONTyped: el,
        PlanDetailsToJSON: tl,
        PlanDetailsToJSONTyped: rl,
        PlanFromJSON: MT,
        PlanFromJSONTyped: Yu,
        PlanToJSON: $T,
        PlanToJSONTyped: Zu,
        PostCheckPermissionBodyFromJSON: VT,
        PostCheckPermissionBodyFromJSONTyped: nl,
        PostCheckPermissionBodyToJSON: il,
        PostCheckPermissionBodyToJSONTyped: ol,
        PostCheckPermissionOrErrorBodyFromJSON: XT,
        PostCheckPermissionOrErrorBodyFromJSONTyped: _l,
        PostCheckPermissionOrErrorBodyToJSON: al,
        PostCheckPermissionOrErrorBodyToJSONTyped: sl,
        ProjectApi: yF,
        ProjectApiKeyFromJSON: Mt,
        ProjectApiKeyFromJSONTyped: xl,
        ProjectApiKeyToJSON: av,
        ProjectApiKeyToJSONTyped: Al,
        ProjectBrandingColorsFromJSON: dt,
        ProjectBrandingColorsFromJSONTyped: t_,
        ProjectBrandingColorsToJSON: ct,
        ProjectBrandingColorsToJSONTyped: r_,
        ProjectBrandingFromJSON: cv,
        ProjectBrandingFromJSONTyped: ql,
        ProjectBrandingThemeFromJSON: $t,
        ProjectBrandingThemeFromJSONTyped: Il,
        ProjectBrandingThemeToJSON: Gt,
        ProjectBrandingThemeToJSONTyped: Pl,
        ProjectBrandingToJSON: uv,
        ProjectBrandingToJSONTyped: zl,
        ProjectCorsFromJSON: _e,
        ProjectCorsFromJSONTyped: Jl,
        ProjectCorsToJSON: ae,
        ProjectCorsToJSONTyped: Rl,
        ProjectEnvironmentEnum: rv,
        ProjectEventsDatapointFromJSON: Os,
        ProjectEventsDatapointFromJSONTyped: Ts,
        ProjectEventsDatapointToJSON: ww,
        ProjectEventsDatapointToJSONTyped: vs,
        ProjectFromJSON: Ne,
        ProjectFromJSONTyped: Fl,
        ProjectHomeRegionEnum: nv,
        ProjectHostFromJSON: fv,
        ProjectHostFromJSONTyped: Ul,
        ProjectHostToJSON: pv,
        ProjectHostToJSONTyped: El,
        ProjectMemberFromJSON: Bl,
        ProjectMemberFromJSONTyped: Wl,
        ProjectMemberToJSON: gv,
        ProjectMemberToJSONTyped: Ll,
        ProjectMetadataEnvironmentEnum: HS,
        ProjectMetadataFromJSON: Rt,
        ProjectMetadataFromJSONTyped: Yd,
        ProjectMetadataHomeRegionEnum: XS,
        ProjectMetadataStateEnum: QS,
        ProjectMetadataToJSON: Zd,
        ProjectMetadataToJSONTyped: jd,
        ProjectServiceAccountExperienceFromJSON: wl,
        ProjectServiceAccountExperienceFromJSONTyped: Sl,
        ProjectServiceAccountExperienceToJSON: Ol,
        ProjectServiceAccountExperienceToJSONTyped: Tl,
        ProjectServiceIdentityFromJSON: ml,
        ProjectServiceIdentityFromJSONTyped: yl,
        ProjectServiceIdentityToJSON: kl,
        ProjectServiceIdentityToJSONTyped: bl,
        ProjectServiceOAuth2FromJSON: dl,
        ProjectServiceOAuth2FromJSONTyped: cl,
        ProjectServiceOAuth2ToJSON: ul,
        ProjectServiceOAuth2ToJSONTyped: ll,
        ProjectServicePermissionFromJSON: fl,
        ProjectServicePermissionFromJSONTyped: pl,
        ProjectServicePermissionToJSON: hl,
        ProjectServicePermissionToJSONTyped: gl,
        ProjectServicesFromJSON: Wt,
        ProjectServicesFromJSONTyped: vl,
        ProjectServicesToJSON: Lt,
        ProjectServicesToJSONTyped: Nl,
        ProjectStateEnum: iv,
        ProjectToJSON: Cl,
        ProjectToJSONTyped: Dl,
        ProviderFromJSON: $i,
        ProviderFromJSONTyped: Gi,
        ProviderToJSON: Ki,
        ProviderToJSONTyped: Vi,
        QuotaUsageFeatureEnum: mv,
        QuotaUsageFromJSON: kv,
        QuotaUsageFromJSONTyped: Ml,
        QuotaUsageToJSON: bv,
        QuotaUsageToJSONTyped: $l,
        RFC6749ErrorJsonFromJSON: Sv,
        RFC6749ErrorJsonFromJSONTyped: Gl,
        RFC6749ErrorJsonToJSON: Ov,
        RFC6749ErrorJsonToJSONTyped: Kl,
        RecoveryCodeForIdentityFromJSON: Vl,
        RecoveryCodeForIdentityFromJSONTyped: Hl,
        RecoveryCodeForIdentityToJSON: vv,
        RecoveryCodeForIdentityToJSONTyped: Xl,
        RecoveryFlowFromJSON: se,
        RecoveryFlowFromJSONTyped: Ql,
        RecoveryFlowState: Je,
        RecoveryFlowStateFromJSON: Fv,
        RecoveryFlowStateFromJSONTyped: Zl,
        RecoveryFlowStateToJSON: Cv,
        RecoveryFlowStateToJSONTyped: Dv,
        RecoveryFlowToJSON: Jv,
        RecoveryFlowToJSONTyped: Yl,
        RecoveryIdentityAddressFromJSON: rt,
        RecoveryIdentityAddressFromJSONTyped: ji,
        RecoveryIdentityAddressToJSON: nt,
        RecoveryIdentityAddressToJSONTyped: eo,
        RecoveryLinkForIdentityFromJSON: jl,
        RecoveryLinkForIdentityFromJSONTyped: ef,
        RecoveryLinkForIdentityToJSON: Av,
        RecoveryLinkForIdentityToJSONTyped: tf,
        RegistrationFlowActiveEnum: Iv,
        RegistrationFlowFromJSON: Re,
        RegistrationFlowFromJSONTyped: rf,
        RegistrationFlowState: Fe,
        RegistrationFlowStateFromJSON: Uv,
        RegistrationFlowStateFromJSONTyped: of ,
        RegistrationFlowStateToJSON: Ev,
        RegistrationFlowStateToJSONTyped: Bv,
        RegistrationFlowToJSON: qv,
        RegistrationFlowToJSONTyped: nf,
        RejectOAuth2RequestFromJSON: Lv,
        RejectOAuth2RequestFromJSONTyped: _f,
        RejectOAuth2RequestToJSON: Kt,
        RejectOAuth2RequestToJSONTyped: af,
        RelationQueryFromJSON: $v,
        RelationQueryFromJSONTyped: sf,
        RelationQueryToJSON: Gv,
        RelationQueryToJSONTyped: df,
        RelationshipApi: kF,
        RelationshipFromJSON: L,
        RelationshipFromJSONTyped: ln,
        RelationshipNamespacesFromJSON: cf,
        RelationshipNamespacesFromJSONTyped: uf,
        RelationshipNamespacesToJSON: Vv,
        RelationshipNamespacesToJSONTyped: lf,
        RelationshipPatchActionEnum: Hv,
        RelationshipPatchFromJSON: Qv,
        RelationshipPatchFromJSONTyped: ff,
        RelationshipPatchToJSON: pf,
        RelationshipPatchToJSONTyped: hf,
        RelationshipToJSON: K,
        RelationshipToJSONTyped: fn,
        RelationshipsFromJSON: gf,
        RelationshipsFromJSONTyped: mf,
        RelationshipsToJSON: Zv,
        RelationshipsToJSONTyped: yf,
        RequiredError: s,
        ResponseError: E,
        SchemaPatchFromJSON: eN,
        SchemaPatchFromJSONTyped: kf,
        SchemaPatchToJSON: tN,
        SchemaPatchToJSONTyped: bf,
        SelfServiceFlowExpiredErrorFromJSON: nN,
        SelfServiceFlowExpiredErrorFromJSONTyped: wf,
        SelfServiceFlowExpiredErrorToJSON: iN,
        SelfServiceFlowExpiredErrorToJSONTyped: Sf,
        SessionActivityDatapointFromJSON: As,
        SessionActivityDatapointFromJSONTyped: Is,
        SessionActivityDatapointToJSON: Dw,
        SessionActivityDatapointToJSONTyped: Ps,
        SessionAuthenticationMethodFromJSON: Jf,
        SessionAuthenticationMethodFromJSONTyped: Rf,
        SessionAuthenticationMethodMethodEnum: _N,
        SessionAuthenticationMethodToJSON: Ff,
        SessionAuthenticationMethodToJSONTyped: Cf,
        SessionDeviceFromJSON: Of,
        SessionDeviceFromJSONTyped: Tf,
        SessionDeviceToJSON: vf,
        SessionDeviceToJSONTyped: Nf,
        SessionFromJSON: C,
        SessionFromJSONTyped: Df,
        SessionToJSON: Ce,
        SessionToJSONTyped: xf,
        SetActiveProjectInConsoleBodyFromJSON: cN,
        SetActiveProjectInConsoleBodyFromJSONTyped: Af,
        SetActiveProjectInConsoleBodyToJSON: uN,
        SetActiveProjectInConsoleBodyToJSONTyped: If,
        SetCustomDomainBodyFromJSON: fN,
        SetCustomDomainBodyFromJSONTyped: Pf,
        SetCustomDomainBodyToJSON: pN,
        SetCustomDomainBodyToJSONTyped: qf,
        SetEventStreamBodyFromJSON: mN,
        SetEventStreamBodyFromJSONTyped: zf,
        SetEventStreamBodyToJSON: Uf,
        SetEventStreamBodyToJSONTyped: Ef,
        SetEventStreamBodyTypeEnum: hN,
        SetOrganizationFromOnboardingPortalLinkBodyFromJSON: kN,
        SetOrganizationFromOnboardingPortalLinkBodyFromJSONTyped: Bf,
        SetOrganizationFromOnboardingPortalLinkBodyToJSON: bN,
        SetOrganizationFromOnboardingPortalLinkBodyToJSONTyped: Wf,
        SetProjectBrandingThemeBodyFromJSON: TN,
        SetProjectBrandingThemeBodyFromJSONTyped: Gf,
        SetProjectBrandingThemeBodyToJSON: vN,
        SetProjectBrandingThemeBodyToJSONTyped: Kf,
        SetProjectFromJSON: SN,
        SetProjectFromJSONTyped: Lf,
        SetProjectToJSON: Mf,
        SetProjectToJSONTyped: $f,
        SettingsFlowFromJSON: de,
        SettingsFlowFromJSONTyped: Vf,
        SettingsFlowState: De,
        SettingsFlowStateFromJSON: FN,
        SettingsFlowStateFromJSONTyped: Xf,
        SettingsFlowStateToJSON: CN,
        SettingsFlowStateToJSONTyped: DN,
        SettingsFlowToJSON: JN,
        SettingsFlowToJSONTyped: Hf,
        SourcePositionFromJSON: Ve,
        SourcePositionFromJSONTyped: Qn,
        SourcePositionToJSON: He,
        SourcePositionToJSONTyped: Yn,
        SubjectSetFromJSON: B,
        SubjectSetFromJSONTyped: cn,
        SubjectSetToJSON: W,
        SubjectSetToJSONTyped: un,
        SubscriptionCurrencyEnum: xN,
        SubscriptionCurrentIntervalEnum: AN,
        SubscriptionFromJSON: PN,
        SubscriptionFromJSONTyped: Qf,
        SubscriptionToJSON: qN,
        SubscriptionToJSONTyped: Yf,
        SuccessfulCodeExchangeResponseFromJSON: UN,
        SuccessfulCodeExchangeResponseFromJSONTyped: Zf,
        SuccessfulCodeExchangeResponseToJSON: EN,
        SuccessfulCodeExchangeResponseToJSONTyped: jf,
        SuccessfulNativeLoginFromJSON: xe,
        SuccessfulNativeLoginFromJSONTyped: ep,
        SuccessfulNativeLoginToJSON: WN,
        SuccessfulNativeLoginToJSONTyped: tp,
        SuccessfulNativeRegistrationFromJSON: rp,
        SuccessfulNativeRegistrationFromJSONTyped: np,
        SuccessfulNativeRegistrationToJSON: MN,
        SuccessfulNativeRegistrationToJSONTyped: ip,
        SuccessfulProjectUpdateFromJSON: Ae,
        SuccessfulProjectUpdateFromJSONTyped: dp,
        SuccessfulProjectUpdateToJSON: KN,
        SuccessfulProjectUpdateToJSONTyped: cp,
        TaxLineItemFromJSON: Dn,
        TaxLineItemFromJSONTyped: xn,
        TaxLineItemToJSON: An,
        TaxLineItemToJSONTyped: In,
        TextApiResponse: Fr,
        TimeIntervalFromJSON: Le,
        TimeIntervalFromJSONTyped: Pn,
        TimeIntervalToJSON: Me,
        TimeIntervalToJSONTyped: qn,
        TokenPaginationFromJSON: HN,
        TokenPaginationFromJSONTyped: up,
        TokenPaginationHeadersFromJSON: YN,
        TokenPaginationHeadersFromJSONTyped: fp,
        TokenPaginationHeadersToJSON: ZN,
        TokenPaginationHeadersToJSONTyped: pp,
        TokenPaginationRequestParametersFromJSON: eJ,
        TokenPaginationRequestParametersFromJSONTyped: hp,
        TokenPaginationRequestParametersToJSON: tJ,
        TokenPaginationRequestParametersToJSONTyped: gp,
        TokenPaginationResponseHeadersFromJSON: nJ,
        TokenPaginationResponseHeadersFromJSONTyped: mp,
        TokenPaginationResponseHeadersToJSON: iJ,
        TokenPaginationResponseHeadersToJSONTyped: yp,
        TokenPaginationToJSON: XN,
        TokenPaginationToJSONTyped: lp,
        TrustOAuth2JwtGrantIssuerFromJSON: _J,
        TrustOAuth2JwtGrantIssuerFromJSONTyped: kp,
        TrustOAuth2JwtGrantIssuerToJSON: bp,
        TrustOAuth2JwtGrantIssuerToJSONTyped: wp,
        TrustedOAuth2JwtGrantIssuerFromJSON: Ie,
        TrustedOAuth2JwtGrantIssuerFromJSONTyped: Np,
        TrustedOAuth2JwtGrantIssuerToJSON: dJ,
        TrustedOAuth2JwtGrantIssuerToJSONTyped: Jp,
        TrustedOAuth2JwtGrantJsonWebKeyFromJSON: Sp,
        TrustedOAuth2JwtGrantJsonWebKeyFromJSONTyped: Op,
        TrustedOAuth2JwtGrantJsonWebKeyToJSON: Tp,
        TrustedOAuth2JwtGrantJsonWebKeyToJSONTyped: vp,
        UiContainerFromJSON: M,
        UiContainerFromJSONTyped: qc,
        UiContainerToJSON: $,
        UiContainerToJSONTyped: zc,
        UiNodeAnchorAttributesFromJSON: dO,
        UiNodeAnchorAttributesFromJSONTyped: xt,
        UiNodeAnchorAttributesNodeTypeEnum: aO,
        UiNodeAnchorAttributesToJSON: gc,
        UiNodeAnchorAttributesToJSONTyped: mc,
        UiNodeAttributesFromJSON: Rc,
        UiNodeAttributesFromJSONTyped: Fc,
        UiNodeAttributesToJSON: Cc,
        UiNodeAttributesToJSONTyped: Dc,
        UiNodeDivisionAttributesFromJSON: lO,
        UiNodeDivisionAttributesFromJSONTyped: At,
        UiNodeDivisionAttributesNodeTypeEnum: cO,
        UiNodeDivisionAttributesToJSON: yc,
        UiNodeDivisionAttributesToJSONTyped: kc,
        UiNodeFromJSON: xc,
        UiNodeFromJSONTyped: Ac,
        UiNodeGroupEnum: FO,
        UiNodeImageAttributesFromJSON: hO,
        UiNodeImageAttributesFromJSONTyped: It,
        UiNodeImageAttributesNodeTypeEnum: fO,
        UiNodeImageAttributesToJSON: bc,
        UiNodeImageAttributesToJSONTyped: wc,
        UiNodeInputAttributesAutocompleteEnum: gO,
        UiNodeInputAttributesFromJSON: SO,
        UiNodeInputAttributesFromJSONTyped: Pt,
        UiNodeInputAttributesNodeTypeEnum: mO,
        UiNodeInputAttributesOnclickTriggerEnum: yO,
        UiNodeInputAttributesOnloadTriggerEnum: kO,
        UiNodeInputAttributesToJSON: Sc,
        UiNodeInputAttributesToJSONTyped: Oc,
        UiNodeInputAttributesTypeEnum: bO,
        UiNodeMetaFromJSON: lc,
        UiNodeMetaFromJSONTyped: fc,
        UiNodeMetaToJSON: pc,
        UiNodeMetaToJSONTyped: hc,
        UiNodeScriptAttributesFromJSON: vO,
        UiNodeScriptAttributesFromJSONTyped: qt,
        UiNodeScriptAttributesNodeTypeEnum: OO,
        UiNodeScriptAttributesToJSON: Tc,
        UiNodeScriptAttributesToJSONTyped: vc,
        UiNodeTextAttributesFromJSON: RO,
        UiNodeTextAttributesFromJSONTyped: zt,
        UiNodeTextAttributesNodeTypeEnum: NO,
        UiNodeTextAttributesToJSON: Nc,
        UiNodeTextAttributesToJSONTyped: Jc,
        UiNodeToJSON: Ic,
        UiNodeToJSONTyped: Pc,
        UiNodeTypeEnum: CO,
        UiTextFromJSON: P,
        UiTextFromJSONTyped: cc,
        UiTextToJSON: q,
        UiTextToJSONTyped: uc,
        UiTextTypeEnum: iO,
        UpdateFedcmFlowBodyFromJSON: uJ,
        UpdateFedcmFlowBodyFromJSONTyped: Rp,
        UpdateFedcmFlowBodyToJSON: Fp,
        UpdateFedcmFlowBodyToJSONTyped: Cp,
        UpdateIdentityBodyFromJSON: pJ,
        UpdateIdentityBodyFromJSONTyped: Dp,
        UpdateIdentityBodyStateEnum: lJ,
        UpdateIdentityBodyToJSON: xp,
        UpdateIdentityBodyToJSONTyped: Ap,
        UpdateLoginFlowBodyFromJSON: AJ,
        UpdateLoginFlowBodyFromJSONTyped: Zp,
        UpdateLoginFlowBodyToJSON: jp,
        UpdateLoginFlowBodyToJSONTyped: eh,
        UpdateLoginFlowWithCodeMethodFromJSON: gJ,
        UpdateLoginFlowWithCodeMethodFromJSONTyped: Vt,
        UpdateLoginFlowWithCodeMethodToJSON: Ip,
        UpdateLoginFlowWithCodeMethodToJSONTyped: Pp,
        UpdateLoginFlowWithIdentifierFirstMethodFromJSON: yJ,
        UpdateLoginFlowWithIdentifierFirstMethodFromJSONTyped: Ht,
        UpdateLoginFlowWithIdentifierFirstMethodToJSON: qp,
        UpdateLoginFlowWithIdentifierFirstMethodToJSONTyped: zp,
        UpdateLoginFlowWithLookupSecretMethodFromJSON: bJ,
        UpdateLoginFlowWithLookupSecretMethodFromJSONTyped: Xt,
        UpdateLoginFlowWithLookupSecretMethodToJSON: Up,
        UpdateLoginFlowWithLookupSecretMethodToJSONTyped: Ep,
        UpdateLoginFlowWithOidcMethodFromJSON: SJ,
        UpdateLoginFlowWithOidcMethodFromJSONTyped: Qt,
        UpdateLoginFlowWithOidcMethodToJSON: Bp,
        UpdateLoginFlowWithOidcMethodToJSONTyped: Wp,
        UpdateLoginFlowWithPasskeyMethodFromJSON: TJ,
        UpdateLoginFlowWithPasskeyMethodFromJSONTyped: Yt,
        UpdateLoginFlowWithPasskeyMethodToJSON: Lp,
        UpdateLoginFlowWithPasskeyMethodToJSONTyped: Mp,
        UpdateLoginFlowWithPasswordMethodFromJSON: NJ,
        UpdateLoginFlowWithPasswordMethodFromJSONTyped: Zt,
        UpdateLoginFlowWithPasswordMethodToJSON: $p,
        UpdateLoginFlowWithPasswordMethodToJSONTyped: Gp,
        UpdateLoginFlowWithSamlMethodFromJSON: RJ,
        UpdateLoginFlowWithSamlMethodFromJSONTyped: jt,
        UpdateLoginFlowWithSamlMethodToJSON: Kp,
        UpdateLoginFlowWithSamlMethodToJSONTyped: Vp,
        UpdateLoginFlowWithTotpMethodFromJSON: CJ,
        UpdateLoginFlowWithTotpMethodFromJSONTyped: er,
        UpdateLoginFlowWithTotpMethodToJSON: Hp,
        UpdateLoginFlowWithTotpMethodToJSONTyped: Xp,
        UpdateLoginFlowWithWebAuthnMethodFromJSON: xJ,
        UpdateLoginFlowWithWebAuthnMethodFromJSONTyped: tr,
        UpdateLoginFlowWithWebAuthnMethodToJSON: Qp,
        UpdateLoginFlowWithWebAuthnMethodToJSONTyped: Yp,
        UpdateOrganizationOnboardingPortalLinkBodyFromJSON: PJ,
        UpdateOrganizationOnboardingPortalLinkBodyFromJSONTyped: th,
        UpdateOrganizationOnboardingPortalLinkBodyToJSON: rh,
        UpdateOrganizationOnboardingPortalLinkBodyToJSONTyped: nh,
        UpdateRecoveryFlowBodyFromJSON: LJ,
        UpdateRecoveryFlowBodyFromJSONTyped: sh,
        UpdateRecoveryFlowBodyToJSON: dh,
        UpdateRecoveryFlowBodyToJSONTyped: ch,
        UpdateRecoveryFlowWithCodeMethodFromJSON: UJ,
        UpdateRecoveryFlowWithCodeMethodFromJSONTyped: rr,
        UpdateRecoveryFlowWithCodeMethodMethodEnum: qJ,
        UpdateRecoveryFlowWithCodeMethodToJSON: ih,
        UpdateRecoveryFlowWithCodeMethodToJSONTyped: oh,
        UpdateRecoveryFlowWithLinkMethodFromJSON: WJ,
        UpdateRecoveryFlowWithLinkMethodFromJSONTyped: nr,
        UpdateRecoveryFlowWithLinkMethodMethodEnum: EJ,
        UpdateRecoveryFlowWithLinkMethodToJSON: _h,
        UpdateRecoveryFlowWithLinkMethodToJSONTyped: ah,
        UpdateRegistrationFlowBodyFromJSON: iR,
        UpdateRegistrationFlowBodyFromJSONTyped: vh,
        UpdateRegistrationFlowBodyToJSON: Nh,
        UpdateRegistrationFlowBodyToJSONTyped: Jh,
        UpdateRegistrationFlowWithCodeMethodFromJSON: $J,
        UpdateRegistrationFlowWithCodeMethodFromJSONTyped: ir,
        UpdateRegistrationFlowWithCodeMethodToJSON: uh,
        UpdateRegistrationFlowWithCodeMethodToJSONTyped: lh,
        UpdateRegistrationFlowWithOidcMethodFromJSON: KJ,
        UpdateRegistrationFlowWithOidcMethodFromJSONTyped: or,
        UpdateRegistrationFlowWithOidcMethodToJSON: fh,
        UpdateRegistrationFlowWithOidcMethodToJSONTyped: ph,
        UpdateRegistrationFlowWithPasskeyMethodFromJSON: HJ,
        UpdateRegistrationFlowWithPasskeyMethodFromJSONTyped: _r,
        UpdateRegistrationFlowWithPasskeyMethodToJSON: hh,
        UpdateRegistrationFlowWithPasskeyMethodToJSONTyped: gh,
        UpdateRegistrationFlowWithPasswordMethodFromJSON: QJ,
        UpdateRegistrationFlowWithPasswordMethodFromJSONTyped: ar,
        UpdateRegistrationFlowWithPasswordMethodToJSON: mh,
        UpdateRegistrationFlowWithPasswordMethodToJSONTyped: yh,
        UpdateRegistrationFlowWithProfileMethodFromJSON: jJ,
        UpdateRegistrationFlowWithProfileMethodFromJSONTyped: sr,
        UpdateRegistrationFlowWithProfileMethodScreenEnum: YJ,
        UpdateRegistrationFlowWithProfileMethodToJSON: kh,
        UpdateRegistrationFlowWithProfileMethodToJSONTyped: bh,
        UpdateRegistrationFlowWithSamlMethodFromJSON: tR,
        UpdateRegistrationFlowWithSamlMethodFromJSONTyped: dr,
        UpdateRegistrationFlowWithSamlMethodToJSON: wh,
        UpdateRegistrationFlowWithSamlMethodToJSONTyped: Sh,
        UpdateRegistrationFlowWithWebAuthnMethodFromJSON: nR,
        UpdateRegistrationFlowWithWebAuthnMethodFromJSONTyped: cr,
        UpdateRegistrationFlowWithWebAuthnMethodToJSON: Oh,
        UpdateRegistrationFlowWithWebAuthnMethodToJSONTyped: Th,
        UpdateSettingsFlowBodyFromJSON: wR,
        UpdateSettingsFlowBodyFromJSONTyped: $h,
        UpdateSettingsFlowBodyToJSON: Gh,
        UpdateSettingsFlowBodyToJSONTyped: Kh,
        UpdateSettingsFlowWithLookupMethodFromJSON: _R,
        UpdateSettingsFlowWithLookupMethodFromJSONTyped: ur,
        UpdateSettingsFlowWithLookupMethodToJSON: Rh,
        UpdateSettingsFlowWithLookupMethodToJSONTyped: Fh,
        UpdateSettingsFlowWithOidcMethodFromJSON: sR,
        UpdateSettingsFlowWithOidcMethodFromJSONTyped: lr,
        UpdateSettingsFlowWithOidcMethodToJSON: Ch,
        UpdateSettingsFlowWithOidcMethodToJSONTyped: Dh,
        UpdateSettingsFlowWithPasskeyMethodFromJSON: cR,
        UpdateSettingsFlowWithPasskeyMethodFromJSONTyped: fr,
        UpdateSettingsFlowWithPasskeyMethodToJSON: xh,
        UpdateSettingsFlowWithPasskeyMethodToJSONTyped: Ah,
        UpdateSettingsFlowWithPasswordMethodFromJSON: lR,
        UpdateSettingsFlowWithPasswordMethodFromJSONTyped: pr,
        UpdateSettingsFlowWithPasswordMethodToJSON: Ih,
        UpdateSettingsFlowWithPasswordMethodToJSONTyped: Ph,
        UpdateSettingsFlowWithProfileMethodFromJSON: pR,
        UpdateSettingsFlowWithProfileMethodFromJSONTyped: hr,
        UpdateSettingsFlowWithProfileMethodToJSON: qh,
        UpdateSettingsFlowWithProfileMethodToJSONTyped: zh,
        UpdateSettingsFlowWithSamlMethodFromJSON: gR,
        UpdateSettingsFlowWithSamlMethodFromJSONTyped: gr,
        UpdateSettingsFlowWithSamlMethodToJSON: Uh,
        UpdateSettingsFlowWithSamlMethodToJSONTyped: Eh,
        UpdateSettingsFlowWithTotpMethodFromJSON: yR,
        UpdateSettingsFlowWithTotpMethodFromJSONTyped: mr,
        UpdateSettingsFlowWithTotpMethodToJSON: Bh,
        UpdateSettingsFlowWithTotpMethodToJSONTyped: Wh,
        UpdateSettingsFlowWithWebAuthnMethodFromJSON: bR,
        UpdateSettingsFlowWithWebAuthnMethodFromJSONTyped: yr,
        UpdateSettingsFlowWithWebAuthnMethodToJSON: Lh,
        UpdateSettingsFlowWithWebAuthnMethodToJSONTyped: Mh,
        UpdateSubscriptionBodyFromJSON: TR,
        UpdateSubscriptionBodyFromJSONTyped: Vh,
        UpdateSubscriptionBodyIntervalEnum: SR,
        UpdateSubscriptionBodyToJSON: vR,
        UpdateSubscriptionBodyToJSONTyped: Hh,
        UpdateVerificationFlowBodyFromJSON: xR,
        UpdateVerificationFlowBodyFromJSONTyped: jh,
        UpdateVerificationFlowBodyToJSON: eg,
        UpdateVerificationFlowBodyToJSONTyped: tg,
        UpdateVerificationFlowWithCodeMethodFromJSON: RR,
        UpdateVerificationFlowWithCodeMethodFromJSONTyped: kr,
        UpdateVerificationFlowWithCodeMethodMethodEnum: NR,
        UpdateVerificationFlowWithCodeMethodToJSON: Xh,
        UpdateVerificationFlowWithCodeMethodToJSONTyped: Qh,
        UpdateVerificationFlowWithLinkMethodFromJSON: DR,
        UpdateVerificationFlowWithLinkMethodFromJSONTyped: br,
        UpdateVerificationFlowWithLinkMethodMethodEnum: FR,
        UpdateVerificationFlowWithLinkMethodToJSON: Yh,
        UpdateVerificationFlowWithLinkMethodToJSONTyped: Zh,
        UpdateWorkspaceBodyFromJSON: IR,
        UpdateWorkspaceBodyFromJSONTyped: rg,
        UpdateWorkspaceBodyToJSON: ng,
        UpdateWorkspaceBodyToJSONTyped: ig,
        UsageFromJSON: qR,
        UsageFromJSONTyped: og,
        UsageToJSON: zR,
        UsageToJSONTyped: _g,
        VerifiableCredentialPrimingResponseFromJSON: ER,
        VerifiableCredentialPrimingResponseFromJSONTyped: ag,
        VerifiableCredentialPrimingResponseToJSON: BR,
        VerifiableCredentialPrimingResponseToJSONTyped: sg,
        VerifiableCredentialProofFromJSON: $_,
        VerifiableCredentialProofFromJSONTyped: G_,
        VerifiableCredentialProofToJSON: K_,
        VerifiableCredentialProofToJSONTyped: V_,
        VerifiableCredentialResponseFromJSON: dg,
        VerifiableCredentialResponseFromJSONTyped: cg,
        VerifiableCredentialResponseToJSON: LR,
        VerifiableCredentialResponseToJSONTyped: ug,
        VerifiableIdentityAddressFromJSON: et,
        VerifiableIdentityAddressFromJSONTyped: Yi,
        VerifiableIdentityAddressToJSON: tt,
        VerifiableIdentityAddressToJSONTyped: Zi,
        VerifiableIdentityAddressViaEnum: Cy,
        VerificationFlowFromJSON: ce,
        VerificationFlowFromJSONTyped: lg,
        VerificationFlowState: Pe,
        VerificationFlowStateFromJSON: KR,
        VerificationFlowStateFromJSONTyped: pg,
        VerificationFlowStateToJSON: VR,
        VerificationFlowStateToJSONTyped: HR,
        VerificationFlowToJSON: $R,
        VerificationFlowToJSONTyped: fg,
        VerifyUserCodeRequestFromJSON: QR,
        VerifyUserCodeRequestFromJSONTyped: hg,
        VerifyUserCodeRequestToJSON: YR,
        VerifyUserCodeRequestToJSONTyped: gg,
        VersionFromJSON: jR,
        VersionFromJSONTyped: mg,
        VersionToJSON: eF,
        VersionToJSONTyped: yg,
        VoidApiResponse: y,
        WarningFromJSON: op,
        WarningFromJSONTyped: _p,
        WarningToJSON: ap,
        WarningToJSONTyped: sp,
        WellknownApi: bF,
        WorkspaceApi: wF,
        WorkspaceApiKeyFromJSON: wr,
        WorkspaceApiKeyFromJSONTyped: kg,
        WorkspaceApiKeyToJSON: rF,
        WorkspaceApiKeyToJSONTyped: bg,
        WorkspaceFromJSON: I,
        WorkspaceFromJSONTyped: Xd,
        WorkspaceToJSON: we,
        WorkspaceToJSONTyped: Qd,
        canConsumeForm: le,
        exists: Wg,
        getNodeId: MF,
        getNodeInputType: e => "type" in e && typeof e?.type == "string" ? e.type : "",
        getNodeLabel: EF,
        handleContinueWith: UF,
        handleFlowError: zF,
        instanceOfAcceptDeviceUserCodeRequest: Mg,
        instanceOfAcceptOAuth2ConsentRequest: Kg,
        instanceOfAcceptOAuth2ConsentRequestSession: Gg,
        instanceOfAcceptOAuth2LoginRequest: Hg,
        instanceOfAccountExperienceColors: Qg,
        instanceOfAccountExperienceConfiguration: em,
        instanceOfActiveProjectInConsole: nm,
        instanceOfAddProjectToWorkspaceBody: sm,
        instanceOfAttribute: um,
        instanceOfAttributeFilter: fm,
        instanceOfAttributesCountDatapoint: pm,
        instanceOfAuthenticatorAssuranceLevel: gm,
        instanceOfBasicOrganization: km,
        instanceOfBatchCheckPermissionBody: Sm,
        instanceOfBatchCheckPermissionResult: vm,
        instanceOfBatchPatchIdentitiesResponse: Fm,
        instanceOfBillingPeriodBucket: zm,
        instanceOfCheckOplSyntaxResult: Bm,
        instanceOfCheckPermissionResult: Lm,
        instanceOfCheckPermissionResultWithError: Tm,
        instanceOfCloudAccount: $m,
        instanceOfConsistencyRequestParameters: Hm,
        instanceOfContinueWithRecoveryUi: jm,
        instanceOfContinueWithRecoveryUiFlow: Ym,
        instanceOfContinueWithRedirectBrowserTo: ry,
        instanceOfContinueWithSetOrySessionToken: oy,
        instanceOfContinueWithSettingsUi: dy,
        instanceOfContinueWithSettingsUiFlow: ay,
        instanceOfContinueWithVerificationUi: fy,
        instanceOfContinueWithVerificationUiFlow: uy,
        instanceOfCourierMessageStatus: hy,
        instanceOfCourierMessageType: yy,
        instanceOfCreateCustomDomainBody: wy,
        instanceOfCreateEventStreamBody: vy,
        instanceOfCreateFedcmFlowResponse: Ry,
        instanceOfCreateIdentityBody: My,
        instanceOfCreateInviteResponse: Ky,
        instanceOfCreateJsonWebKeySet: Xy,
        instanceOfCreateOrganizationOnboardingPortalLinkBody: Yy,
        instanceOfCreateProjectApiKeyRequest: jy,
        instanceOfCreateProjectBody: nk,
        instanceOfCreateProjectBranding: _k,
        instanceOfCreateProjectMemberInviteBody: dk,
        instanceOfCreateProjectNormalizedPayload: Pk,
        instanceOfCreateRecoveryCodeForIdentityBody: Uk,
        instanceOfCreateRecoveryLinkForIdentityBody: Bk,
        instanceOfCreateRelationshipBody: Lk,
        instanceOfCreateSubscriptionBody: Kk,
        instanceOfCreateSubscriptionCommon: Yk,
        instanceOfCreateVerifiableCredentialRequestBody: tb,
        instanceOfCreateWorkspaceApiKeyBody: nb,
        instanceOfCreateWorkspaceBody: ob,
        instanceOfCreateWorkspaceMemberInviteBody: sb,
        instanceOfCreateWorkspaceSubscriptionBody: fb,
        instanceOfCredentialSupportedDraft00: gb,
        instanceOfCustomDomain: yb,
        instanceOfDeleteMySessionsCount: wb,
        instanceOfDeviceAuthorization: Ob,
        instanceOfDeviceUserAuthRequest: Rb,
        instanceOfEmailTemplateData: xb,
        instanceOfEmailTemplateDataBody: Db,
        instanceOfErrorAuthenticatorAssuranceLevelNotSatisfied: Ub,
        instanceOfErrorBrowserLocationChangeRequired: Lb,
        instanceOfErrorFlowReplaced: Gb,
        instanceOfErrorGeneric: Wb,
        instanceOfErrorOAuth2: Hb,
        instanceOfEventStream: Qb,
        instanceOfExpandedPermissionTree: Zb,
        instanceOfFlowError: jb,
        instanceOfGenericError: zb,
        instanceOfGenericErrorContent: qb,
        instanceOfGenericUsage: rw,
        instanceOfGetAttributesCountResponse: nw,
        instanceOfGetManagedIdentitySchemaLocation: _w,
        instanceOfGetMetricsEventAttributesResponse: dw,
        instanceOfGetMetricsEventTypesResponse: lw,
        instanceOfGetOrganizationResponse: hw,
        instanceOfGetProjectEventsBody: mw,
        instanceOfGetProjectEventsResponse: Sw,
        instanceOfGetProjectMetricsResponse: Jw,
        instanceOfGetSessionActivityResponse: xw,
        instanceOfGetVersion200Response: Pw,
        instanceOfHealthNotReadyStatus: zw,
        instanceOfHealthStatus: Bw,
        instanceOfIdentity: Kw,
        instanceOfIdentityCredentials: $w,
        instanceOfIdentityCredentialsCode: Hw,
        instanceOfIdentityCredentialsCodeAddress: Vw,
        instanceOfIdentityCredentialsOidc: Zw,
        instanceOfIdentityCredentialsOidcProvider: Yw,
        instanceOfIdentityCredentialsPassword: tS,
        instanceOfIdentityPatch: iS,
        instanceOfIdentityPatchResponse: Rm,
        instanceOfIdentitySchemaContainer: oS,
        instanceOfIdentitySchemaPreset: aS,
        instanceOfIdentityWithCredentials: Wy,
        instanceOfIdentityWithCredentialsOidc: Uy,
        instanceOfIdentityWithCredentialsOidcConfig: zy,
        instanceOfIdentityWithCredentialsOidcConfigProvider: qy,
        instanceOfIdentityWithCredentialsPassword: By,
        instanceOfIdentityWithCredentialsPasswordConfig: Ey,
        instanceOfIdentityWithCredentialsSaml: Py,
        instanceOfIdentityWithCredentialsSamlConfig: Iy,
        instanceOfIdentityWithCredentialsSamlConfigProvider: Ay,
        instanceOfInternalGetProjectBrandingBody: cS,
        instanceOfInternalIsAXWelcomeScreenEnabledForProjectBody: fS,
        instanceOfInternalIsOwnerForProjectBySlugBody: mS,
        instanceOfInternalIsOwnerForProjectBySlugResponse: bS,
        instanceOfIntrospectedOAuth2Token: OS,
        instanceOfInviteTokenBody: vS,
        instanceOfInvoice: qm,
        instanceOfInvoiceDataV1: Im,
        instanceOfIsOwnerForProjectBySlug: RS,
        instanceOfJsonPatch: xS,
        instanceOfJsonWebKey: vb,
        instanceOfJsonWebKeySet: Nb,
        instanceOfKetoNamespace: pk,
        instanceOfKeysetPaginationRequestParameters: IS,
        instanceOfKeysetPaginationResponseHeaders: zS,
        instanceOfLineItemV1: Am,
        instanceOfListEventStreams: BS,
        instanceOfListInvoicesResponse: LS,
        instanceOfListOrganizationsResponse: GS,
        instanceOfListWorkspaceProjects: ZS,
        instanceOfListWorkspaces: eO,
        instanceOfLoginFlow: IO,
        instanceOfLoginFlowState: qO,
        instanceOfLogoutFlow: BO,
        instanceOfManagedIdentitySchema: yk,
        instanceOfManagedIdentitySchemaValidationResult: LO,
        instanceOfMemberInvite: Gy,
        instanceOfMessage: HO,
        instanceOfMessageDispatch: KO,
        instanceOfMetricsDatapoint: vw,
        instanceOfMoney: tw,
        instanceOfNamespace: QO,
        instanceOfNeedsPrivilegedSessionError: YO,
        instanceOfNormalizedProject: dT,
        instanceOfNormalizedProjectRevision: oT,
        instanceOfNormalizedProjectRevisionCourierChannel: fk,
        instanceOfNormalizedProjectRevisionHook: Ok,
        instanceOfNormalizedProjectRevisionIdentitySchema: kk,
        instanceOfNormalizedProjectRevisionSAMLProvider: vk,
        instanceOfNormalizedProjectRevisionScimClient: gk,
        instanceOfNormalizedProjectRevisionThirdPartyProvider: Sk,
        instanceOfNormalizedProjectRevisionTokenizerTemplate: Jk,
        instanceOfOAuth2Client: Jb,
        instanceOfOAuth2ClientTokenLifespans: lT,
        instanceOfOAuth2ConsentRequest: pT,
        instanceOfOAuth2ConsentRequestOpenIDConnectContext: rO,
        instanceOfOAuth2ConsentSession: hT,
        instanceOfOAuth2LoginRequest: nO,
        instanceOfOAuth2LogoutRequest: mT,
        instanceOfOAuth2RedirectTo: kT,
        instanceOfOAuth2TokenExchange: wT,
        instanceOfOidcConfiguration: OT,
        instanceOfOidcUserInfo: vT,
        instanceOfOnboardingPortalLink: JT,
        instanceOfOnboardingPortalOrganization: RT,
        instanceOfOrganization: mk,
        instanceOfOrganizationBody: DT,
        instanceOfOrganizationOnboardingPortalLinksResponse: AT,
        instanceOfParseError: Em,
        instanceOfPatchIdentitiesBody: PT,
        instanceOfPerformNativeLogoutBody: zT,
        instanceOfPermissionsOnWorkspace: ET,
        instanceOfPlan: LT,
        instanceOfPlanDetails: GT,
        instanceOfPostCheckPermissionBody: KT,
        instanceOfPostCheckPermissionOrErrorBody: HT,
        instanceOfProject: ov,
        instanceOfProjectApiKey: _v,
        instanceOfProjectBranding: dv,
        instanceOfProjectBrandingColors: ok,
        instanceOfProjectBrandingTheme: sv,
        instanceOfProjectCors: tv,
        instanceOfProjectEventsDatapoint: bw,
        instanceOfProjectHost: lv,
        instanceOfProjectMember: hv,
        instanceOfProjectMetadata: YS,
        instanceOfProjectServiceAccountExperience: jT,
        instanceOfProjectServiceIdentity: ZT,
        instanceOfProjectServiceOAuth2: QT,
        instanceOfProjectServicePermission: YT,
        instanceOfProjectServices: ev,
        instanceOfProvider: Jy,
        instanceOfQuotaUsage: yv,
        instanceOfRFC6749ErrorJson: wv,
        instanceOfRecoveryCodeForIdentity: Tv,
        instanceOfRecoveryFlow: Nv,
        instanceOfRecoveryFlowState: Rv,
        instanceOfRecoveryIdentityAddress: xy,
        instanceOfRecoveryLinkForIdentity: xv,
        instanceOfRegistrationFlow: Pv,
        instanceOfRegistrationFlowState: zv,
        instanceOfRejectOAuth2Request: Wv,
        instanceOfRelationQuery: Mv,
        instanceOfRelationship: wm,
        instanceOfRelationshipNamespaces: Kv,
        instanceOfRelationshipPatch: Xv,
        instanceOfRelationships: Yv,
        instanceOfSchemaPatch: jv,
        instanceOfSelfServiceFlowExpiredError: rN,
        instanceOfSession: sN,
        instanceOfSessionActivityDatapoint: Cw,
        instanceOfSessionAuthenticationMethod: aN,
        instanceOfSessionDevice: oN,
        instanceOfSetActiveProjectInConsoleBody: dN,
        instanceOfSetCustomDomainBody: lN,
        instanceOfSetEventStreamBody: gN,
        instanceOfSetOrganizationFromOnboardingPortalLinkBody: yN,
        instanceOfSetProject: wN,
        instanceOfSetProjectBrandingThemeBody: ON,
        instanceOfSettingsFlow: NN,
        instanceOfSettingsFlowState: RN,
        instanceOfSourcePosition: Um,
        instanceOfSubjectSet: bm,
        instanceOfSubscription: IN,
        instanceOfSuccessfulCodeExchangeResponse: zN,
        instanceOfSuccessfulNativeLogin: BN,
        instanceOfSuccessfulNativeRegistration: LN,
        instanceOfSuccessfulProjectUpdate: GN,
        instanceOfTaxLineItem: Dm,
        instanceOfTimeInterval: xm,
        instanceOfTokenPagination: VN,
        instanceOfTokenPaginationHeaders: QN,
        instanceOfTokenPaginationRequestParameters: jN,
        instanceOfTokenPaginationResponseHeaders: rJ,
        instanceOfTrustOAuth2JwtGrantIssuer: oJ,
        instanceOfTrustedOAuth2JwtGrantIssuer: sJ,
        instanceOfTrustedOAuth2JwtGrantJsonWebKey: aJ,
        instanceOfUiContainer: xO,
        instanceOfUiNode: DO,
        instanceOfUiNodeAnchorAttributes: sO,
        instanceOfUiNodeDivisionAttributes: uO,
        instanceOfUiNodeImageAttributes: pO,
        instanceOfUiNodeInputAttributes: wO,
        instanceOfUiNodeMeta: _O,
        instanceOfUiNodeScriptAttributes: TO,
        instanceOfUiNodeTextAttributes: JO,
        instanceOfUiText: oO,
        instanceOfUpdateFedcmFlowBody: cJ,
        instanceOfUpdateIdentityBody: fJ,
        instanceOfUpdateLoginFlowWithCodeMethod: hJ,
        instanceOfUpdateLoginFlowWithIdentifierFirstMethod: mJ,
        instanceOfUpdateLoginFlowWithLookupSecretMethod: kJ,
        instanceOfUpdateLoginFlowWithOidcMethod: wJ,
        instanceOfUpdateLoginFlowWithPasskeyMethod: OJ,
        instanceOfUpdateLoginFlowWithPasswordMethod: vJ,
        instanceOfUpdateLoginFlowWithSamlMethod: JJ,
        instanceOfUpdateLoginFlowWithTotpMethod: FJ,
        instanceOfUpdateLoginFlowWithWebAuthnMethod: DJ,
        instanceOfUpdateOrganizationOnboardingPortalLinkBody: IJ,
        instanceOfUpdateRecoveryFlowWithCodeMethod: zJ,
        instanceOfUpdateRecoveryFlowWithLinkMethod: BJ,
        instanceOfUpdateRegistrationFlowWithCodeMethod: MJ,
        instanceOfUpdateRegistrationFlowWithOidcMethod: GJ,
        instanceOfUpdateRegistrationFlowWithPasskeyMethod: VJ,
        instanceOfUpdateRegistrationFlowWithPasswordMethod: XJ,
        instanceOfUpdateRegistrationFlowWithProfileMethod: ZJ,
        instanceOfUpdateRegistrationFlowWithSamlMethod: eR,
        instanceOfUpdateRegistrationFlowWithWebAuthnMethod: rR,
        instanceOfUpdateSettingsFlowWithLookupMethod: oR,
        instanceOfUpdateSettingsFlowWithOidcMethod: aR,
        instanceOfUpdateSettingsFlowWithPasskeyMethod: dR,
        instanceOfUpdateSettingsFlowWithPasswordMethod: uR,
        instanceOfUpdateSettingsFlowWithProfileMethod: fR,
        instanceOfUpdateSettingsFlowWithSamlMethod: hR,
        instanceOfUpdateSettingsFlowWithTotpMethod: mR,
        instanceOfUpdateSettingsFlowWithWebAuthnMethod: kR,
        instanceOfUpdateSubscriptionBody: OR,
        instanceOfUpdateVerificationFlowWithCodeMethod: JR,
        instanceOfUpdateVerificationFlowWithLinkMethod: CR,
        instanceOfUpdateWorkspaceBody: AR,
        instanceOfUsage: PR,
        instanceOfVerifiableCredentialPrimingResponse: UR,
        instanceOfVerifiableCredentialProof: eb,
        instanceOfVerifiableCredentialResponse: WR,
        instanceOfVerifiableIdentityAddress: Dy,
        instanceOfVerificationFlow: MR,
        instanceOfVerificationFlowState: GR,
        instanceOfVerifyUserCodeRequest: XR,
        instanceOfVersion: ZR,
        instanceOfWarning: $N,
        instanceOfWorkspace: VS,
        instanceOfWorkspaceApiKey: tF,
        isAalAlreadyFulfilled: NF,
        isAddressNotVerified: vF,
        isBrowserLocationChangeRequired: Tg,
        isCsrfError: vg,
        isGenericErrorResponse: b,
        isNeedsPrivilegedSessionError: Og,
        isNoActiveSession: FF,
        isRedirectBrowserTo: Dg,
        isRedirectUrlNotAllowed: CF,
        isResponseError: Ng,
        isSecurityIdentityMismatch: DF,
        isSelfServiceFlowDisabled: SF,
        isSelfServiceFlowExpiredError: Sr,
        isSelfServiceFlowReplaced: OF,
        isSessionAal1Required: JF,
        isSessionAal2Required: RF,
        isSessionAlreadyAvailable: TF,
        isSetOrySessionToken: Cg,
        isShowRecoveryUi: xg,
        isShowSettingsUi: Ag,
        isShowVerificationUi: Ig,
        isUiNodeAnchorAttributes: Pg,
        isUiNodeDivAttributes: BF,
        isUiNodeImageAttributes: qg,
        isUiNodeInputAttributes: vr,
        isUiNodeScriptAttributes: LF,
        isUiNodeTextAttributes: WF,
        loginUrl: AF,
        mapValues: G,
        pickBestContinueWith: Fg,
        querystring: ze,
        recoveryUrl: PF,
        registrationUrl: xF,
        settingsUrl: IF,
        toBody: Tr,
        verificationUrl: qF
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    return window.ory = zg, zg
}));


//Config settings
const {
    FrontendApi,
    Configuration
} = window.ory
const Oryapi = new FrontendApi(
    new Configuration({
        basePath: 'https://staging-auth.deriv.com',
        credentials: 'include',
        headers: {
            Accept: 'application/json',

        },
    })
)