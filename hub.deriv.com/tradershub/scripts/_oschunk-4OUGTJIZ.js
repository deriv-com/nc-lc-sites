import {
    a as ae
} from "./_oschunk-BWT437TH.js";
import {
    a as oe
} from "./_oschunk-7DSYGUE3.js";
import "./_oschunk-FF7WZDTZ.js";
import {
    a as L
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as I,
    f as z,
    g as w,
    h as c,
    p as W,
    r as O,
    s as E,
    t as C,
    u as ie,
    y
} from "./_oschunk-42NACYKQ.js";
import {
    a as te
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as re,
    g as T,
    i as V
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as l,
    c as ee
} from "./_oschunk-DOFMR6EA.js";
import {
    l as N
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    md as U,
    p as M,
    wd as Z
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as h
} from "./_oschunk-2JKANR6M.js";
import {
    c as p,
    g as j
} from "./_oschunk-DVBKI63I.js";
var r = j(re());
var s = j(re());
var R = h,
    K = class K extends R.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(R.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
p(K, "VariablesRecord");
var k = K;
k.init();
var B = class B extends R.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            NameForm: R.Model.ValidationWidgetRecord,
            salutation: R.Model.ValidationWidgetRecord,
            Input_FirstName: R.Model.ValidationWidgetRecord,
            Input_LastName: R.Model.ValidationWidgetRecord
        }
    }
};
p(B, "WidgetsRecord");
var H = B,
    q = class q extends R.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return k
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(v) {}
    };
p(q, "Model");
var D = q;
D._hasValidationWidgetsValue = void 0;
var ne = new R.Model.ModelFactory(D);
var le = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "\u0627\u0644\u062A\u0627\u0644\u064A",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "\u0645\u062B\u0627\u0644:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "\u062A\u0645\u0627\u0645\u064B\u0627 \u0643\u0645\u0627 \u064A\u0638\u0647\u0631 \u0641\u064A \u0648\u062B\u064A\u0642\u0629 \u0647\u0648\u064A\u062A\u0643.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "\u0627\u0644\u0627\u0633\u0645",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "\u0642\u0645 \u0628\u0625\u062F\u062E\u0627\u0644",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645\u0643 \u0627\u0644\u0623\u0648\u0644 (\u0648\u0627\u0644\u0623\u0648\u0633\u0637)",
        "zoWitfJS5UayquvqrK5HXA#Value": "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0644 (\u0648\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0623\u0648\u0633\u0637)"
    },
    ce = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "N\xE4chste",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "Beispiel:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "genau wie es auf Ihrem Ausweisdokument erscheint.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "Name",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Geben Sie ein",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Geben Sie Ihren Nachnamen ein",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Nachname",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Geben Sie Ihren Vornamen (und zweiten Vornamen) ein",
        "zoWitfJS5UayquvqrK5HXA#Value": "Vorname (und Zweitname)"
    },
    ue = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Siguiente",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "Ejemplo:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "exactamente como aparece en su documento de identidad.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "nombre",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Introduzca su",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Introduzca su apellido",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Apellido",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Introduzca su primer nombre (y segundo nombre)",
        "zoWitfJS5UayquvqrK5HXA#Value": "Nombre (y segundo nombre)"
    },
    me = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Suivant",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "exactement comme il appara\xEEt sur votre document d'identit\xE9.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "nom",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Entrez",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Entrez votre nom de famille",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Nom de famille",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Entrez votre pr\xE9nom (et deuxi\xE8me pr\xE9nom)",
        "zoWitfJS5UayquvqrK5HXA#Value": "Pr\xE9nom (et deuxi\xE8me pr\xE9nom)",
        "rWgtlUMPlEiYJqnSTzttFA#Value": "Non",
        "8mHQs4JqHEy_4XSAE1D3qQ#Value": "Oui"
    },
    pe = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Avanti",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "Esempio:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "esattamente come appare sul tuo documento d'identit\xE0.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "nome",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Inserisci",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Inserisci il tuo cognome",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Cognome",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Inserisci il tuo nome (e secondo nome)",
        "zoWitfJS5UayquvqrK5HXA#Value": "Nome (e secondo nome)"
    },
    ge = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Dalej",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "Przyk\u0142ad:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "dok\u0142adnie tak, jak figuruje w Twoim dokumencie to\u017Csamo\u015Bci.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "Imi\u0119 i nazwisko",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Wprowad\u017A",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Wprowad\u017A swoje nazwisko",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Nazwisko",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Wprowad\u017A swoje imi\u0119 (i drugie imi\u0119)",
        "zoWitfJS5UayquvqrK5HXA#Value": "Imi\u0119 (i drugie imi\u0119)"
    },
    ve = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "Pr\xF3ximo",
        "KvIUyJ7rlUanpBcPRlwLeA#Value": "Exemplo:",
        "HnUKgbuKnk2ntHPgutrthQ#Value": " exatamente como consta no seu documento de identifica\xE7\xE3o.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "nome",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "Introduza",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "Introduza o seu apelido",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "Apelido",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "Introduza o seu nome pr\xF3prio (e o segundo nome)",
        "zoWitfJS5UayquvqrK5HXA#Value": "Nome pr\xF3prio (e nome do meio)"
    },
    fe = {
        "LpW2OGqeaUiOXtNYVMfCYQ#Value": "\u0414\u0430\u043B\u0435\u0435",
        "HnUKgbuKnk2ntHPgutrthQ#Value": "\u0442\u043E\u0447\u043D\u043E \u0442\u0430\u043A, \u043A\u0430\u043A \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u0432 \u0432\u0430\u0448\u0435\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u044F\u044E\u0449\u0435\u043C \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u044C.",
        "HNzGxxooR02wz0iCoXz5XA#Value": "\u0438\u043C\u044F",
        "5Ej7sfPx4Eq9J+cCgMqaiA#Value": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435",
        "zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0444\u0430\u043C\u0438\u043B\u0438\u044E",
        "3szrtOFgn0SyvVNBVKprTQ#Value": "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
        "y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F (\u0438 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E)",
        "zoWitfJS5UayquvqrK5HXA#Value": "\u0418\u043C\u044F (\u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0435 \u0438\u043C\u044F)"
    },
    se = {
        "ar-001": {
            translations: le,
            isRTL: !0
        },
        "de-DE": {
            translations: ce,
            isRTL: !1
        },
        "es-ES": {
            translations: ue,
            isRTL: !1
        },
        "fr-FR": {
            translations: me,
            isRTL: !1
        },
        "it-IT": {
            translations: pe,
            isRTL: !1
        },
        "pl-PL": {
            translations: ge,
            isRTL: !1
        },
        "pt-PT": {
            translations: ve,
            isRTL: !1
        },
        "ru-RU": {
            translations: fe,
            isRTL: !1
        }
    };

function J(b, v, f, e) {
    let i = {
            FirstName: b.FirstName,
            LastName: b.LastName
        },
        t = yup.object().shape({
            FirstName: yup.string().noConsecutiveSpaces("First name must not contain consecutive spaces.").validCharacters("First name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "First name must be at most 50 characters long.").required("First (and middle) name is required."),
            LastName: yup.string().noConsecutiveSpaces("Last name must not contain consecutive spaces.").validCharacters("Last name can only include letters, spaces, apostrophes, periods, and hyphens.").max(50, "Last name must be at most 50 characters long.").required("Last name is required.")
        }),
        {
            errors: g,
            validFields: o
        } = validate(t, i);
    b.ValidationErrors = JSON.stringify(g), b.ValidFields = JSON.stringify(o)
}
p(J, "default");

function G(b, v, f) {
    cacheTrackEvents.track({
        name: "ce_real_account_signup_form",
        properties: {
            action: "step_passed",
            step_num: .25,
            step_codename: "personal_details_1",
            form_name: "real_account_signup_form_outsystems"
        }
    })
}
p(G, "default");
var a = h; {
    let v = class v extends a.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, se);
            var g = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "224d9b63-ed59-4406-b3b7-3430d4029436"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var d = new a.DataTypes.VariableHolder;
                        d.value = N.setFocus$Action(g.getId("Input_FirstName"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onClickNext$Action() {
            return this.hasOwnProperty("__onClickNext$Action") || (this.__onClickNext$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnClickNext", function(o) {
                    o && (o.setAttribute("code.function", "OnClickNext"), o.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnClickNext"), e = t.callContext(e);
                        var d = new a.DataTypes.VariableHolder,
                            P = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(U))),
                            u = new a.DataTypes.VariableHolder(new(a.Controller.BaseController.getJSONDeserializeOutputType(M)));
                        if (d.value = a.Logger.startActiveSpan("Validate", function(m) {
                                m && (m.setAttribute("code.function", "Validate"), m.setAttribute("outsystems.function.key", "ac22c591-ee80-438a-8a1c-8b9ced1bfb28"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(J, "Validate", "OnClickNext", {
                                        FirstName: a.DataConversion.JSNodeParamConverter.to(l.getRealSignupFirstName(), a.DataTypes.DataTypes.Text),
                                        LastName: a.DataConversion.JSNodeParamConverter.to(l.getRealSignupLastName(), a.DataTypes.DataTypes.Text),
                                        ValidationErrors: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text),
                                        ValidFields: a.DataConversion.JSNodeParamConverter.to("", a.DataTypes.DataTypes.Text)
                                    }, function(n) {
                                        var F = new(t.constructor.getVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult"));
                                        return F.validationErrorsOut = a.DataConversion.JSNodeParamConverter.from(n.ValidationErrors, a.DataTypes.DataTypes.Text), F.validFieldsOut = a.DataConversion.JSNodeParamConverter.from(n.ValidFields, a.DataTypes.DataTypes.Text), F
                                    }, {}, {})
                                } finally {
                                    m && m.end()
                                }
                            }, 1), u.value.dataOut = a.JSONUtils.deserializeFromJSON(d.value.validationErrorsOut, M, !1), P.value.dataOut = a.JSONUtils.deserializeFromJSON(d.value.validFieldsOut, U, !1), i.widgets.get(g.getId("Input_FirstName")).validAttr = P.value.dataOut.firstNameAttr, i.widgets.get(g.getId("Input_FirstName")).validationMessageAttr = u.value.dataOut.firstNameAttr, i.widgets.get(g.getId("Input_LastName")).validAttr = P.value.dataOut.lastNameAttr, i.widgets.get(g.getId("Input_LastName")).validationMessageAttr = u.value.dataOut.lastNameAttr, i.widgets.get(g.getId("NameForm")).validAttr) return a.Logger.startActiveSpan("RudderStack", function(m) {
                            m && (m.setAttribute("code.function", "RudderStack"), m.setAttribute("outsystems.function.key", "c48ebec9-653b-4310-bca5-d103b331f154"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(G, "RudderStack", "OnClickNext", null, function(n) {}, {}, {})
                            } finally {
                                m && m.end()
                            }
                        }, 1), l.setRealSignupPassedStepCount(2), a.Navigation.navigateTo(a.Navigation.generateScreenURL("tradershub", "personal-details/dob", {}), a.Transitions.createTransition(a.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onClickNext$Action
        }
        set _onClickNext$Action(e) {
            this.__onClickNext$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    g = this.idService;
                return a.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "224d9b63-ed59-4406-b3b7-3430d4029436"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onClickNext$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnClickNext__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnClickNext"), t.setAttribute("outsystems.function.key", "873f0137-9df0-4178-8980-9bb0a2b6560d"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onClickNext$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return a.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "9b3981ef-5a57-4398-b62b-7b3d215e2933"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    g = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    g = this.idService;
                return i.onReady$Action(e)
            }), this._onReadyEventHandler
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return ee.defaultTimeout
        }
    };
    p(v, "ControllerInner");
    let b = v;
    X = b, X.registerVariableGroupType("tradershub.RealAccountCreationBlocks.PersonalDetailsMobile.OnClickNext$validateJSResult", [{
        name: "ValidationErrors",
        attrName: "validationErrorsOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: p(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ValidFields",
        attrName: "validFieldsOut",
        mandatory: !0,
        dataType: a.DataTypes.DataTypes.Text,
        defaultValue: p(function() {
            return ""
        }, "defaultValue")
    }])
}
var X, de = new a.Controller.ControllerFactory(X, te);
var S = h,
    $e = V.PlaceholderContent,
    Ye = V.IteratorPlaceholderContent,
    A = class A extends T.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationBlocks.PersonalDetailsMobile"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetailsMobile",
                functionKey: "dbfca696-91b3-42d4-9476-b0c44b06bc53",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ne
        }
        get controllerFactory() {
            return de
        }
        get title() {
            return ""
        }
        internalRender() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = this.widgetsRecordProvider,
                g = f.callContext(),
                o = A.ifWidget,
                d = A.textWidget,
                P = A.asPrimitiveValue,
                u = A.getTranslation,
                m = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(c, {
                align: 0,
                animate: !1,
                style: "full-width personal-details-section__mobile",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, s.createElement(W, {
                _validationProps: {
                    validationService: i
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "",
                _idProps: {
                    service: e,
                    name: "NameForm"
                },
                _widgetRecordProvider: t
            }, s.createElement(c, {
                align: 0,
                animate: !1,
                style: "",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            }, s.createElement(c, {
                align: 0,
                animate: !0,
                style: "display-flex flex-direction-column margin-bottom-base",
                visible: l.getIsEuUser(),
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, s.createElement(z, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("NameForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                style: "radio-group display-flex flex-direction-column",
                variable: v.createVariable(S.DataTypes.DataTypes.Text, l.getSalutation(), function(n) {
                    l.setSalutation(n)
                }),
                _idProps: {
                    service: e,
                    name: "salutation"
                },
                _widgetRecordProvider: t
            }, s.createElement(w, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "radio-button",
                value: "Mr",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Mr"
                },
                _widgetRecordProvider: t
            }, d(u("8mHQs4JqHEy_4XSAE1D3qQ#Value", "Mr"))), s.createElement(w, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "radio-button",
                value: "Ms",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Ms"
                },
                _widgetRecordProvider: t
            }, d(u("rWgtlUMPlEiYJqnSTzttFA#Value", "Ms"))))), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "gap: 16px;"
                },
                style: "flex-1 display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: t
            }, s.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "8"
                },
                _widgetRecordProvider: t
            }, s.createElement(C, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_FirstName",
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: t
            }, s.createElement(y, {
                extendedProperties: {
                    style: "margin-bottom: 0px;"
                },
                text: [d(u("zoWitfJS5UayquvqrK5HXA#Value", "First (and middle) name"))],
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: t
            })), s.createElement(E, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("NameForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 50,
                prompt: S.Injector.resolve(S.ServiceNames.TranslationsService).getMessage("y53GOpzSE0KPZtuYzR8K4w#ValueExpression.1768419283.1", "Enter your first (and middle) name"),
                style: "form-control",
                variable: v.createVariable(S.DataTypes.DataTypes.Text, l.getRealSignupFirstName(), function(n) {
                    l.setRealSignupFirstName(n)
                }),
                _idProps: {
                    service: e,
                    name: "Input_FirstName"
                },
                _widgetRecordProvider: t
            })), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 0px;"
                },
                style: "display-flex flex-direction-column gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: t
            }, s.createElement(C, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !0,
                targetWidget: "Input_LastName",
                _idProps: {
                    service: e,
                    uuid: "13"
                },
                _widgetRecordProvider: t
            }, d(u("3szrtOFgn0SyvVNBVKprTQ#Value", "Last name"))), s.createElement(E, {
                _validationProps: {
                    validationService: i,
                    validationParentId: e.getId("NameForm")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !0,
                maxLength: 50,
                prompt: S.Injector.resolve(S.ServiceNames.TranslationsService).getMessage("zatVhU+Bf0O03MMUG0NvaA#ValueExpression.1572233360.1", "Enter your last name"),
                style: "form-control",
                variable: v.createVariable(S.DataTypes.DataTypes.Text, l.getRealSignupLastName(), function(n) {
                    l.setRealSignupLastName(n)
                }),
                _idProps: {
                    service: e,
                    name: "Input_LastName"
                },
                _widgetRecordProvider: t
            }))), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #E5F5FC; border-radius: 4px; margin-top: 16px; padding: 16px;"
                },
                style: "display-flex full-width gap-s",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: t
            }, s.createElement(O, {
                image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: t
            }), s.createElement(c, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "17"
                },
                _widgetRecordProvider: t
            }, s.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [d(u("5Ej7sfPx4Eq9J+cCgMqaiA#Value", "Enter your "))],
                _idProps: {
                    service: e,
                    uuid: "18"
                },
                _widgetRecordProvider: t
            }), s.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px; font-weight: bold;"
                },
                text: [d(u("HNzGxxooR02wz0iCoXz5XA#Value", "name"))],
                _idProps: {
                    service: e,
                    uuid: "19"
                },
                _widgetRecordProvider: t
            }), s.createElement(y, {
                extendedProperties: {
                    style: "font-size: 12px;"
                },
                text: [d(u("HnUKgbuKnk2ntHPgutrthQ#Value", " exactly as it appears on your identity document."))],
                _idProps: {
                    service: e,
                    uuid: "20"
                },
                _widgetRecordProvider: t
            }))), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 16px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "21"
                },
                _widgetRecordProvider: t
            }, s.createElement(y, {
                extendedProperties: {
                    style: "font-size: 10px; font-weight: bold;"
                },
                text: [d(u("KvIUyJ7rlUanpBcPRlwLeA#Value", "Example:"))],
                _idProps: {
                    service: e,
                    uuid: "22"
                },
                _widgetRecordProvider: t
            }), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 8px; text-align: center;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "23"
                },
                _widgetRecordProvider: t
            }, s.createElement(O, {
                image: S.Navigation.VersionedURL.getVersionedUrl("img/tradershub.content.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "24"
                },
                _widgetRecordProvider: t
            })))), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                style: "full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "25"
                },
                _widgetRecordProvider: t
            }, s.createElement(I, {
                enabled: !0,
                extendedProperties: {
                    style: "border-radius: 100px; border-width: 0px;"
                },
                isDefault: !0,
                onClick: p(function() {
                    m.validateWidget(e.getId("NameForm"));
                    var n = g.clone();
                    f.onClickNext$Action(f.callContext(n))
                }, "onClick"),
                style: "btn btn-primary full-width",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "26"
                },
                _widgetRecordProvider: t
            }, s.createElement(y, {
                style: "",
                text: [d(u("LpW2OGqeaUiOXtNYVMfCYQ#Value", "Next"))],
                _idProps: {
                    service: e,
                    uuid: "27"
                },
                _widgetRecordProvider: t
            }))))))
        }
    };
p(A, "View");
var Q = A,
    $ = Q;
var _ = h,
    Re = V.PlaceholderContent,
    st = V.IteratorPlaceholderContent,
    x = class x extends T.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.PersonalDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "PersonalDetails",
                functionKey: "1fc65b5f-a963-48e3-a979-461b18005b67",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.PersonalDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [L, $]
        }
        get modelFactory() {
            return ae
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = f.callContext(),
                g = x.asPrimitiveValue,
                o = x.getTranslation,
                d = this;
            return _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("X1vGH2Op40ipeUYbGABbZw#TitleExpression.-545367396.1", "Personal details | Deriv")
        }
        internalRender() {
            let v = this.model,
                f = this.controller,
                e = this.idService,
                i = f.validationService,
                t = this.widgetsRecordProvider,
                g = f.callContext(),
                o = x.ifWidget,
                d = x.textWidget,
                P = x.asPrimitiveValue,
                u = x.getTranslation,
                m = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(L, {
                getOwnerSpan: p(function() {
                    return m.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: p(function() {
                    return m.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Analytics: v.getCachedValue(e.getId("cctcHV2MfkKJDt67Hgs5TA.Analytics"), function() {
                        return function() {
                            var n = new Z;
                            return n.stepCodenameAttr = "personal_details_1", n.stepNumberAttr = "0.25", n
                        }()
                    }),
                    Title: "Personal details"
                },
                events: {
                    _handleError: p(function(n) {
                        f.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Re(function() {
                        return [r.createElement(c, {
                            align: 0,
                            animate: !0,
                            style: "full-width personal-details-section__desktop ",
                            visible: v.getCachedValue(e.getId("wyspHXC0QECSxiMx+W123w.Visible"), function() {
                                return N.isDesktop$Action(g).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background-color: #E5F5FC; border-radius: 4px; height: 54px; padding: 16px;"
                            },
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "BlueContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(O, {
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info_black.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "3"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "7px"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [d(u("qCkbiF5mmEmfN1dAd5fEEQ#Value", "Enter your "))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [d(u("ZE4ihfYDwUGA+3lD68twQg#Value", "name"))],
                            _idProps: {
                                service: e,
                                uuid: "6"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [d(u("9vFpd9z6yE2EOaqTW3jrhQ#Value", " and "))],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px; font-weight: bold;"
                            },
                            text: [d(u("aWWMvx89EkSvdbAnWPKLxQ#Value", "date of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 12px;"
                            },
                            text: [d(u("Q4lyuhnNSEqoHjQAqLgX7w#Value", " exactly as it appears on your identity document."))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }))), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(W, {
                            _validationProps: {
                                validationService: i
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: e,
                                name: "DesktopForm"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Form"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            style: "display-flex flex-direction-column flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(c, {
                            align: 0,
                            animate: !0,
                            style: "",
                            visible: l.getIsEuUser(),
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(z, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            style: "radio-group",
                            variable: v.createVariable(_.DataTypes.DataTypes.Text, l.getSalutation(), function(n) {
                                l.setSalutation(n)
                            }),
                            _idProps: {
                                service: e,
                                name: "salutation"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(w, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Mr",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Mr"
                            },
                            _widgetRecordProvider: t
                        }, d(u("OWDtD_J_t0m8dkJoDobbOg#Value", "Mr"))), r.createElement(w, {
                            enabled: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "radio-button",
                            value: "Ms",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Ms"
                            },
                            _widgetRecordProvider: t
                        }, d(u("xvtUWPLELUu0GXGjHNkI+A#Value", "Ms"))))), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FirstName"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_FirstName",
                            _idProps: {
                                service: e,
                                uuid: "19"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [d(u("clYNjfu1dkOhXZJB3r4UgA#Value", "First (and middle) name"))],
                            _idProps: {
                                service: e,
                                uuid: "20"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(E, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("BcMKpNkFKEWE1gv4BsyjnQ#ValueExpression.1768419283.1", "Enter your first (and middle) name"),
                            style: "form-control",
                            variable: v.createVariable(_.DataTypes.DataTypes.Text, l.getRealSignupFirstName(), function(n) {
                                l.setRealSignupFirstName(n)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_FirstName"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LastName"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_LastName",
                            _idProps: {
                                service: e,
                                uuid: "23"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [d(u("F2iGiak390yOUQ_i6I53Wg#Value", "Last name"))],
                            _idProps: {
                                service: e,
                                uuid: "24"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(E, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px; margin-top: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("zG7L1rMfz0qYWl246r5Kbw#ValueExpression.1572233360.1", "Enter your last name"),
                            style: "form-control",
                            variable: v.createVariable(_.DataTypes.DataTypes.Text, l.getRealSignupLastName(), function(n) {
                                l.setRealSignupLastName(n)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_LastName"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "display-flex flex-direction-column gap-s position-relative date-input",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Birthdate"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(C, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Date",
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(y, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [d(u("OjWV19XHkke+IHNk9a6DPA#Value", "Date of birth"))],
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            style: "input-flatpickr position-relative",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(E, {
                            _validationProps: {
                                validationService: i,
                                validationParentId: e.getId("DesktopForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px; height: 48px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 0,
                            prompt: "dd/mm/yyyy",
                            style: "form-control input_dateofbirth",
                            variable: v.createVariable(_.DataTypes.DataTypes.Text, l.getRealSignupDateofBirth(), function(n) {
                                l.setRealSignupDateofBirth(n)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Date"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(ie, {
                            enabled: !0,
                            onClick: p(function() {
                                var n = g.clone();
                                f.iconOnClick$Action(f.callContext(n))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(O, {
                            extendedProperties: {
                                style: "right: 16px; top: 12px;"
                            },
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.calendar.svg"),
                            style: "position-absolute cursor-pointer",
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }))))), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                marginLeft: "24px"
                            },
                            style: "display-flex align-items-center justify-content-center flex-1",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(O, {
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.namedob2.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "34"
                            },
                            _widgetRecordProvider: t
                        }))), r.createElement(c, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px;"
                            },
                            style: "display-flex justify-content-flex-end",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "35"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(I, {
                            enabled: !0,
                            extendedProperties: {
                                style: "border-radius: 100px; border-width: 0px;"
                            },
                            gridProperties: {
                                width: "100px"
                            },
                            isDefault: !0,
                            onClick: p(function() {
                                m.validateWidget(e.getId("DesktopForm"));
                                var n = g.clone();
                                f.saveOnClick$Action(f.callContext(n))
                            }, "onClick"),
                            style: "btn btn-primary",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "36"
                            },
                            _widgetRecordProvider: t
                        }, d(u("X78ePeC7k0+pE9zc8bR0qA#Value", "Next"))))))), r.createElement(c, {
                            align: 0,
                            animate: !0,
                            style: "full-width personal-details-section__mobile",
                            visible: v.getCachedValue(e.getId("LifJMx9T4kq6GQm0jnLl7g.Visible"), function() {
                                return !N.isDesktop$Action(g).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "37"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement($, {
                            getOwnerSpan: p(function() {
                                return m.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: p(function() {
                                return m.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: p(function(n) {
                                    f.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                uuid: "38",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [P(l.getRealSignupDateofBirth()), P(l.getRealSignupLastName()), P(l.getRealSignupFirstName()), P(l.getSalutation()), P(l.getIsEuUser())]
            }))
        }
    };
p(x, "View");
var Y = x,
    dt = Y;
export {
    dt as
    default
};