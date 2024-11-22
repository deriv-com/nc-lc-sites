import {
    a as h
} from "./_oschunk-EFUSIMB4.js";
import {
    a as u
} from "./_oschunk-Y45M2O2K.js";
import {
    d as c
} from "./_oschunk-27GDEXUT.js";
import {
    ia as d
} from "./_oschunk-NTQBNJ73.js";
import {
    c as l
} from "./_oschunk-DVBKI63I.js";
var g = {
        "hdQFn5_3IECkwU+bSdVyug#Value": "Cr\xE9er un nouveau compte",
        "dqgwmfMZeUO6XqFQXxzSaA#Value": "Vous n'avez pas encore de compte ?",
        "bUtExnuixk2gqiAekR1nog#Value": "Ou continuez avec",
        "i4ybhJdLMUWcznpWDEmjcQ#Value": "Connexion",
        "q4RWlIJ8qUyKMCK+0o+IEA#Value": "Mot de passe oubli\xE9 ?",
        "V7tX5SVSL0ueY8hezbDI2A#Value": "Mot de passe",
        "hgpdLHxjiUSlkc5NLW4ZKg#ValueExpression.-374653993.1": "Entrez votre email",
        "pC81f5qO0U2B5caMMpZ00Q#Value": "Email",
        "Cy8Rl6UZF0yj09NopdCIpA#Value": "Bon retour",
        "oJYXY5TdVEecVMblmaYbAw#Value.2117503773.1": "L'email est requis.",
        "X+Y_dvKPp0OBkh_NXEhXAQ#Value.1843755810.1": "Adresse e-mail invalide.",
        "G54H1giNtU6Ypz8OV2tcBQ#Title": "Connexion",
        "G54H1giNtU6Ypz8OV2tcBQ#TitleExpression.73596745.1": "Connexion"
    },
    f = {
        "fr-FR": {
            translations: g,
            isRTL: !1
        }
    };
var i = d; {
    let a = class a extends i.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, f);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onClickLogin$Action() {
            return this.hasOwnProperty("__onClickLogin$Action") || (this.__onClickLogin$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnClickLogin", function(r) {
                    r && (r.setAttribute("code.function", "OnClickLogin"), r.setAttribute("outsystems.function.key", "771f15ef-f29d-44fd-b4fa-8f60b8d557bd"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickLogin"), e = t.callContext(e), n.widgets.get(o.getId("LoginForm")).validAttr && n.widgets.get(o.getId("Input_Email")).validAttr && n.widgets.get(o.getId("Input_password")).validAttr || (n.widgets.get(o.getId("Input_Email")).validationMessageAttr = i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("oJYXY5TdVEecVMblmaYbAw#Value.2117503773.1", "Email is required."), n.widgets.get(o.getId("Input_password")).validationMessageAttr = "Password is required.", i.BuiltinFunctions.emailAddressValidate(n.variables.emailVar) || (n.widgets.get(o.getId("Input_Email")).validAttr = !1, n.widgets.get(o.getId("Input_Email")).validationMessageAttr = i.Injector.resolve(i.ServiceNames.TranslationsService).getMessage("X+Y_dvKPp0OBkh_NXEhXAQ#Value.1843755810.1", "Not a valid email.")))
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickLogin$Action
        }
        set _onClickLogin$Action(e) {
            this.__onClickLogin$Action = e
        }
        get _onClickShowPassword$Action() {
            return this.hasOwnProperty("__onClickShowPassword$Action") || (this.__onClickShowPassword$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    o = this.idService;
                return i.Logger.startActiveSpan("OnClickShowPassword", function(r) {
                    r && (r.setAttribute("code.function", "OnClickShowPassword"), r.setAttribute("outsystems.function.key", "900d59a2-126d-426f-af9c-af96742a0c0f"), r.setAttribute("outsystems.function.owner.name", "tradershub"), r.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickShowPassword"), e = t.callContext(e), n.variables.showPasswordVar ? n.variables.showPasswordVar = !1 : n.variables.showPasswordVar = !0
                    } finally {
                        r && r.end()
                    }
                }, 1)
            }), this.__onClickShowPassword$Action
        }
        set _onClickShowPassword$Action(e) {
            this.__onClickShowPassword$Action = e
        }
        onClickLogin$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnClickLogin__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickLogin"), t.setAttribute("outsystems.function.key", "771f15ef-f29d-44fd-b4fa-8f60b8d557bd"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickLogin$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickShowPassword$Action(e) {
            var n = this.controller;
            return i.Logger.startActiveSpan("OnClickShowPassword__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickShowPassword"), t.setAttribute("outsystems.function.key", "900d59a2-126d-426f-af9c-af96742a0c0f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onClickShowPassword$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(e) {
            this._onParametersChangedEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return h.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return c.defaultTimeout
        }
    };
    l(a, "ControllerInner");
    let s = a;
    _ = s
}
var _, k = new i.Controller.ControllerFactory(_, u);
export {
    k as a
};