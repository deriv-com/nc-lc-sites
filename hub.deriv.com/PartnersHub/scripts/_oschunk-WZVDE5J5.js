import {
    a as U
} from "./_oschunk-SMNEJQCO.js";
import {
    d as A,
    f as O,
    g as x,
    h as F,
    n as h,
    p as L,
    u as N
} from "./_oschunk-LWMGEL7F.js";
import {
    a as J
} from "./_oschunk-4GXKK3IG.js";
import {
    a as G,
    g as B,
    i as k
} from "./_oschunk-WZHUAZJP.js";
import {
    a as m,
    q as W
} from "./_oschunk-BDI2RWOA.js";
import {
    a as T
} from "./_oschunk-P3RPGEI5.js";
import {
    D as $,
    Xf as b
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as S
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as f,
    h as j
} from "./_oschunk-QHO7QY6K.js";
var s = j(G());
var K = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "\u0623\u062E\u0631\u0649",
        "1BgQC1dOl0+suliu5QMy_A#Value": "\u0645\u0648\u0635\u0649 \u0628\u0647"
    },
    q = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Andere",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Empfohlen"
    },
    Z = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Otro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recomendado"
    },
    X = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Autre",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recommand\xE9"
    },
    Y = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Altro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Raccomandato"
    },
    ee = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Inne",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Zalecane"
    },
    te = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "Outro",
        "1BgQC1dOl0+suliu5QMy_A#Value": "Recomendado"
    },
    re = {
        "NavmSfU2vEqhUhapuAdKNA#Value": "\u0414\u0440\u0443\u0433\u043E\u0435",
        "1BgQC1dOl0+suliu5QMy_A#Value": "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435"
    },
    M = {
        "ar-001": {
            translations: K,
            isRTL: !0
        },
        "de-DE": {
            translations: q,
            isRTL: !1
        },
        "es-ES": {
            translations: Z,
            isRTL: !1
        },
        "fr-FR": {
            translations: X,
            isRTL: !1
        },
        "it-IT": {
            translations: Y,
            isRTL: !1
        },
        "pl-PL": {
            translations: ee,
            isRTL: !1
        },
        "pt-PT": {
            translations: te,
            isRTL: !1
        },
        "ru-RU": {
            translations: re,
            isRTL: !1
        }
    };

function V(C, o, _, t) {
    let i = JSON.parse(C.RawCurrenciesList),
        e = JSON.parse(C.LegalAllowedCurrencies),
        y = ["EUR", "ETH", "LTC", "USDC", "eUSDT", "tUSDT", "XRP"],
        n = i.filter(u => e.includes(u.Code) && u.Category === "Recommended"),
        v = i.filter(u => e.includes(u.Code) && u.Category === "Other").sort((u, g) => y.indexOf(u.Code) - y.indexOf(g.Code));
    C.RecommendedCurrencies = JSON.stringify(n), C.OtherCurrencies = JSON.stringify(v)
}
f(V, "default");

function H(C, o, _, t) {
    let i = localStorage.getItem("token");
    C.authToken = i
}
f(H, "default");
var r = S; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e, M);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get currenciesList$ServerAction() {
            return this.hasOwnProperty("_currenciesList$ServerAction") || (this._currenciesList$ServerAction = function(t) {
                var i = this.controller;
                return r.Logger.startActiveSpan("CurrenciesList", function(e) {
                    return e && (e.setAttribute("code.function", "CurrenciesList"), e.setAttribute("outsystems.function.key", "afbc9da7-955b-42ad-b0aa-05595261bdd1"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), r.Flow.tryFinally(function() {
                        return i.callServerAction("CurrenciesList", "screenservices/PartnersHub/RealAccountCreationFlow/AccountCurrencyBlock/ActionCurrenciesList", "cJRrY5eZDn0IQr27TWbSWQ", {}, i.callContext(t), void 0, void 0, !0).then(function(y) {
                            var n = new(i.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock$ActionCurrenciesList"));
                            return n.currenciesListOut = r.DataConversion.ServerDataConverter.from(y.CurrenciesList, b), n
                        })
                    }, function() {
                        e && e.end()
                    })
                }, 0)
            }), this._currenciesList$ServerAction
        }
        set currenciesList$ServerAction(t) {
            this._currenciesList$ServerAction = t
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _filterCurrenciesFunction$Action() {
            return this.hasOwnProperty("__filterCurrenciesFunction$Action") || (this.__filterCurrenciesFunction$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return r.Logger.startActiveSpan("FilterCurrenciesFunction", function(n) {
                    return n && (n.setAttribute("code.function", "FilterCurrenciesFunction"), n.setAttribute("outsystems.function.key", "0e4bd242-43e9-48d3-83b4-a3017098e464"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("FilterCurrenciesFunction"), t = e.callContext(t);
                        var v = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            l = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            a = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(b))),
                            c = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(b)));
                        return r.Flow.executeAsyncFlow(function() {
                            return i.flush(), e.currenciesList$ServerAction(t).then(function(d) {
                                v.value = d
                            }).then(function() {
                                l.value.jSONOut = r.JSONUtils.serializeToJSON(v.value.currenciesListOut, !1, !1), g.value.jSONOut = r.JSONUtils.serializeToJSON(i.variables.landingCompanyVar.landing_companyAttr.gaming_companyAttr.legal_allowed_currenciesAttr, !1, !1, r.DataTypes.DataTypes.Text), u.value = r.Logger.startActiveSpan("JavaScript1", function(d) {
                                    d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "764cf0f0-8309-4182-be00-fa96cf2381a9"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(V, "JavaScript1", "FilterCurrenciesFunction", {
                                            RawCurrenciesList: r.DataConversion.JSNodeParamConverter.to(l.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            LegalAllowedCurrencies: r.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, r.DataTypes.DataTypes.Text),
                                            RecommendedCurrencies: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                            OtherCurrencies: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                        }, function(D) {
                                            var E = new(e.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult"));
                                            return E.recommendedCurrenciesOut = r.DataConversion.JSNodeParamConverter.from(D.RecommendedCurrencies, r.DataTypes.DataTypes.Text), E.otherCurrenciesOut = r.DataConversion.JSNodeParamConverter.from(D.OtherCurrencies, r.DataTypes.DataTypes.Text), E
                                        }, {}, {})
                                    } finally {
                                        d && d.end()
                                    }
                                }, 1), c.value.dataOut = r.JSONUtils.deserializeFromJSON(u.value.recommendedCurrenciesOut, b, !1), a.value.dataOut = r.JSONUtils.deserializeFromJSON(u.value.otherCurrenciesOut, b, !1), i.variables.filteredRecommendedCurrenciesVar = c.value.dataOut, i.variables.filteredOtherCurrenciesVar = a.value.dataOut
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__filterCurrenciesFunction$Action
        }
        set _filterCurrenciesFunction$Action(t) {
            this.__filterCurrenciesFunction$Action = t
        }
        get _recommendedListItemOnClick$Action() {
            return this.hasOwnProperty("__recommendedListItemOnClick$Action") || (this.__recommendedListItemOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return r.Logger.startActiveSpan("RecommendedListItemOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "RecommendedListItemOnClick"), n.setAttribute("outsystems.function.key", "7899af20-fc0f-48c5-aae8-1ffe14623e64"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("RecommendedListItemOnClick"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return m.setSelectedCurrencyCode(i.variables.filteredRecommendedCurrenciesVar.getCurrent(t.iterationContext).codeAttr), e.nextStepEvent$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__recommendedListItemOnClick$Action
        }
        set _recommendedListItemOnClick$Action(t) {
            this.__recommendedListItemOnClick$Action = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "7e81f65d-ef77-4630-b85b-7726cde9245b"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        e.ensureControllerAlive("OnReady"), t = e.callContext(t);
                        var v = new r.DataTypes.VariableHolder,
                            u = new r.DataTypes.VariableHolder,
                            g = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return g.value = r.Logger.startActiveSpan("GetToken", function(l) {
                                l && (l.setAttribute("code.function", "GetToken"), l.setAttribute("outsystems.function.key", "66b8d8ba-f40b-4f3b-ba28-aee20c7cc52b"), l.setAttribute("outsystems.function.owner.name", "PartnersHub"), l.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), l.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return e.safeExecuteJSNode(H, "GetToken", "OnReady", {
                                        authToken: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(a) {
                                        var c = new(e.constructor.getVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.OnReady$getTokenJSResult"));
                                        return c.authTokenOut = r.DataConversion.JSNodeParamConverter.from(a.authToken, r.DataTypes.DataTypes.Text), c
                                    }, {}, {})
                                } finally {
                                    l && l.end()
                                }
                            }, 1), i.flush(), T.getSettings$Action("green.derivws.com", g.value.authTokenOut, "1", "en", t).then(function(l) {
                                u.value = l
                            }).then(function() {
                                return i.flush(), T.landingCompany$Action(function() {
                                    var l = new $;
                                    return l.landing_companyAttr = u.value.responseOut.get_settingsAttr.country_codeAttr, l
                                }(), "green.derivws.com", "1", "en", t).then(function(l) {
                                    v.value = l
                                })
                            }).then(function() {
                                return i.variables.landingCompanyVar = v.value.responseOut, e._filterCurrenciesFunction$Action(t)
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _otherCurrenciesItemOnClick$Action() {
            return this.hasOwnProperty("__otherCurrenciesItemOnClick$Action") || (this.__otherCurrenciesItemOnClick$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    y = this.idService;
                return r.Logger.startActiveSpan("OtherCurrenciesItemOnClick", function(n) {
                    return n && (n.setAttribute("code.function", "OtherCurrenciesItemOnClick"), n.setAttribute("outsystems.function.key", "e239aa59-6b9d-4979-af3d-c2837fd19160"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OtherCurrenciesItemOnClick"), t = e.callContext(t), r.Flow.executeAsyncFlow(function() {
                            return m.setSelectedCurrencyCode(i.variables.filteredOtherCurrenciesVar.getCurrent(t.iterationContext).codeAttr), e.nextStepEvent$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__otherCurrenciesItemOnClick$Action
        }
        set _otherCurrenciesItemOnClick$Action(t) {
            this.__otherCurrenciesItemOnClick$Action = t
        }
        filterCurrenciesFunction$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("FilterCurrenciesFunction__proxy", function(e) {
                return e && (e.setAttribute("code.function", "FilterCurrenciesFunction"), e.setAttribute("outsystems.function.key", "0e4bd242-43e9-48d3-83b4-a3017098e464"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._filterCurrenciesFunction$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        recommendedListItemOnClick$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("RecommendedListItemOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "RecommendedListItemOnClick"), e.setAttribute("outsystems.function.key", "7899af20-fc0f-48c5-aae8-1ffe14623e64"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._recommendedListItemOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onReady$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "7e81f65d-ef77-4630-b85b-7726cde9245b"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onReady$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        otherCurrenciesItemOnClick$Action(t) {
            var i = this.controller;
            return r.Logger.startActiveSpan("OtherCurrenciesItemOnClick__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OtherCurrenciesItemOnClick"), e.setAttribute("outsystems.function.key", "e239aa59-6b9d-4979-af3d-c2837fd19160"), e.setAttribute("outsystems.function.owner.name", "PartnersHub"), e.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._otherCurrenciesItemOnClick$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get nextStepEvent$Action() {
            return this.hasOwnProperty("_nextStepEvent$Action") || (this._nextStepEvent$Action = function() {
                return Promise.resolve()
            }), this._nextStepEvent$Action
        }
        set nextStepEvent$Action(t) {
            this._nextStepEvent$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var i = this.controller,
                    e = this.model,
                    y = this.idService;
                return i.onReady$Action(t)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(t) {
            this._onReadyEventHandler = t
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(t) {
            this._onRenderEventHandler = t
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(t) {
            this._onDestroyEventHandler = t
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(t) {
            this._onParametersChangedEventHandler = t
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(t) {
                return controller.handleError(t)
            }), this._handleError
        }
        set handleError(t) {
            this._handleError = t
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return W.defaultTimeout
        }
    };
    f(o, "ControllerInner");
    let C = o;
    P = C, P.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock$ActionCurrenciesList", [{
        name: "CurrenciesList",
        attrName: "currenciesListOut",
        mandatory: !1,
        dataType: r.DataTypes.DataTypes.RecordList,
        defaultValue: f(function() {
            return new b
        }, "defaultValue"),
        complexType: b
    }]), P.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.FilterCurrenciesFunction$javaScript1JSResult", [{
        name: "RecommendedCurrencies",
        attrName: "recommendedCurrenciesOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "OtherCurrencies",
        attrName: "otherCurrenciesOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }]), P.registerVariableGroupType("PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.OnReady$getTokenJSResult", [{
        name: "authToken",
        attrName: "authTokenOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: f(function() {
            return ""
        }, "defaultValue")
    }])
}
var P, z = new r.Controller.ControllerFactory(P, J);
var w = S,
    p = k.PlaceholderContent,
    Q = k.IteratorPlaceholderContent,
    R = class R extends B.BaseWebBlock {
        static get displayName() {
            return "RealAccountCreationFlow.AccountCurrencyBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "AccountCurrencyBlock",
                functionKey: "a9c60d9f-6c5c-4606-9d6d-f2e271fdd63a",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.RealAccountCreationFlow.AccountCurrencyBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return U
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                _ = this.controller,
                t = this.idService,
                i = _.validationService,
                e = this.widgetsRecordProvider,
                y = _.callContext(),
                n = R.ifWidget,
                v = R.textWidget,
                u = R.asPrimitiveValue,
                g = R.getTranslation,
                l = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(A, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: flex-start; display: flex; flex-direction: column; gap: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, s.createElement(N, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [v(g("1BgQC1dOl0+suliu5QMy_A#Value", "Recommended"))],
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e
            }), n(o.variables.filteredRecommendedCurrenciesVar.length > 0, !1, this, function() {
                return [s.createElement(x, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filteredRecommendedCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: t,
                        name: "RecommendedList"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        content: new Q(function(a, c) {
                            return [s.createElement(F, {
                                onClick: f(function() {
                                    return Promise.resolve().then(function() {
                                        var d = c.clone();
                                        return _.recommendedListItemOnClick$Action(_.callContext(d))
                                    })
                                }, "onClick"),
                                style: o.getCachedValue(a.getId("RecommendedListItem.Style"), function() {
                                    return o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).codeAttr === m.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).codeAttr
                                }, function() {
                                    return m.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: a,
                                    name: "RecommendedListItem"
                                },
                                _widgetRecordProvider: e,
                                placeholders: {
                                    leftActions: p.Empty,
                                    content: new p(function() {
                                        return [s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "4"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "5"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(h, {
                                            gridProperties: {
                                                width: "24px"
                                            },
                                            type: 1,
                                            url: o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).iconAttr,
                                            _idProps: {
                                                service: a,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: e
                                        }), s.createElement(L, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex ",
                                            _idProps: {
                                                service: a,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(O, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            style: "display-flex align-items-center flex-direction-row",
                                            value: o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).nameAttr,
                                            _idProps: {
                                                service: a,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: e
                                        }), s.createElement(O, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            value: "(" + o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: a,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: e
                                        }))), s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: e
                                        }, n(m.getSelectedCurrencyCode() === o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).codeAttr, !1, this, function() {
                                            return [s.createElement(h, {
                                                image: w.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "11"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [s.createElement(h, {
                                                image: w.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "12"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })))]
                                    }),
                                    rightActions: p.Empty
                                },
                                _dependencies: [u(m.getSelectedCurrencyCode()), u(o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).codeAttr), u(o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).nameAttr), u(o.variables.filteredRecommendedCurrenciesVar.getCurrent(c.iterationContext).iconAttr)]
                            })]
                        }, y, t, "1")
                    },
                    _dependencies: [u(m.getSelectedCurrencyCode())]
                })]
            }, function() {
                return [s.createElement(A, {
                    align: 0,
                    animate: !1,
                    style: "skeleton-loader",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "13"
                    },
                    _widgetRecordProvider: e
                })]
            }), s.createElement(N, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                text: [v(g("NavmSfU2vEqhUhapuAdKNA#Value", "Other"))],
                _idProps: {
                    service: t,
                    uuid: "14"
                },
                _widgetRecordProvider: e
            }), n(o.variables.filteredRecommendedCurrenciesVar.length > 0, !1, this, function() {
                return [s.createElement(x, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filteredOtherCurrenciesVar,
                    style: "list list-group display-flex flex-direction-column gap-base",
                    tag: "div",
                    _idProps: {
                        service: t,
                        name: "OtherCurrencies"
                    },
                    _widgetRecordProvider: e,
                    placeholders: {
                        content: new Q(function(a, c) {
                            return [s.createElement(F, {
                                onClick: f(function() {
                                    return Promise.resolve().then(function() {
                                        var d = c.clone();
                                        return _.otherCurrenciesItemOnClick$Action(_.callContext(d))
                                    })
                                }, "onClick"),
                                style: o.getCachedValue(a.getId("OtherCurrenciesItem.Style"), function() {
                                    return o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).codeAttr === m.getSelectedCurrencyCode() ? "currency-list--selected" : "currency-list"
                                }, function() {
                                    return o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).codeAttr
                                }, function() {
                                    return m.getSelectedCurrencyCode()
                                }),
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: a,
                                    name: "OtherCurrenciesItem"
                                },
                                _widgetRecordProvider: e,
                                placeholders: {
                                    leftActions: p.Empty,
                                    content: new p(function() {
                                        return [s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between;"
                                            },
                                            gridProperties: {
                                                classes: "OSInline",
                                                width: "100%"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            style: "display-flex align-items-center gap-s",
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(h, {
                                            gridProperties: {
                                                width: "32px"
                                            },
                                            type: 1,
                                            url: o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).iconAttr,
                                            _idProps: {
                                                service: a,
                                                uuid: "19"
                                            },
                                            _widgetRecordProvider: e
                                        }), s.createElement(L, {
                                            extendedProperties: {
                                                style: "color: #101213; font-weight: 500;"
                                            },
                                            gridProperties: {
                                                classes: "OSFillParent",
                                                marginLeft: "16px"
                                            },
                                            style: "display-flex",
                                            _idProps: {
                                                service: a,
                                                uuid: "20"
                                            },
                                            _widgetRecordProvider: e
                                        }, s.createElement(O, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            style: "display-flex align-items-center flex-direction-row",
                                            value: o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).nameAttr,
                                            _idProps: {
                                                service: a,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: e
                                        }), s.createElement(O, {
                                            extendedProperties: {
                                                style: "font-weight: 700;"
                                            },
                                            gridProperties: {
                                                marginLeft: "2px"
                                            },
                                            value: "(" + o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).codeAttr + ")",
                                            _idProps: {
                                                service: a,
                                                uuid: "22"
                                            },
                                            _widgetRecordProvider: e
                                        }))), s.createElement(A, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: e
                                        }, n(m.getSelectedCurrencyCode() === o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).codeAttr, !1, this, function() {
                                            return [s.createElement(h, {
                                                image: w.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.roundedblackcheckmark.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "24"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [s.createElement(h, {
                                                image: w.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.rightIcon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: a,
                                                    uuid: "25"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })))]
                                    }),
                                    rightActions: p.Empty
                                },
                                _dependencies: [u(m.getSelectedCurrencyCode()), u(o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).codeAttr), u(o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).nameAttr), u(o.variables.filteredOtherCurrenciesVar.getCurrent(c.iterationContext).iconAttr)]
                            })]
                        }, y, t, "2")
                    },
                    _dependencies: [u(m.getSelectedCurrencyCode())]
                })]
            }, function() {
                return [s.createElement(A, {
                    align: 0,
                    animate: !1,
                    style: "skeleton-loader",
                    visible: !0,
                    _idProps: {
                        service: t,
                        uuid: "26"
                    },
                    _widgetRecordProvider: e
                })]
            })))
        }
    };
f(R, "View");
var I = R,
    Te = I;
export {
    Te as a
};