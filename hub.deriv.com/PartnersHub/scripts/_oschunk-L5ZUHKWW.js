import {
    a as x
} from "./_oschunk-B5VQOPQY.js";
import {
    a as G
} from "./_oschunk-NBUQHDFU.js";
import {
    a as E
} from "./_oschunk-B2TFZ35O.js";
import {
    d as h,
    f as $,
    g as W,
    h as F,
    m as J,
    o as z
} from "./_oschunk-5HXBKFJV.js";
import {
    a as N
} from "./_oschunk-6WALBPGV.js";
import {
    a as Q,
    g as V,
    i as O
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as R,
    p as b
} from "./_oschunk-FZ6FUHBV.js";
import {
    a as k
} from "./_oschunk-S5DOOZ7G.js";
import {
    Ge as C,
    ae as I
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as P
} from "./_oschunk-5KJVGEL7.js";
import {
    c,
    h as B
} from "./_oschunk-QHO7QY6K.js";
var d = B(Q());
var X = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "\u0628\u062D\u062B"
    },
    j = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Suche"
    },
    K = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Buscar"
    },
    q = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Rechercher"
    },
    Y = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Cerca"
    },
    Z = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Szukaj"
    },
    ee = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "Pesquisar"
    },
    te = {
        "L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A"
    },
    M = {
        "ar-001": {
            translations: X,
            isRTL: !0
        },
        "de-DE": {
            translations: j,
            isRTL: !1
        },
        "es-ES": {
            translations: K,
            isRTL: !1
        },
        "fr-FR": {
            translations: q,
            isRTL: !1
        },
        "it-IT": {
            translations: Y,
            isRTL: !1
        },
        "pl-PL": {
            translations: Z,
            isRTL: !1
        },
        "pt-PT": {
            translations: ee,
            isRTL: !1
        },
        "ru-RU": {
            translations: te,
            isRTL: !1
        }
    };

function L(m, l, v, e) {
    let n = JSON.parse(m.StatesList),
        t = m.SearchedState;
    Array.isArray(n.states_list) ? n.states_list = n.states_list.filter(i => i.text && i.text.toLowerCase().includes(t.toLowerCase())) : m.NoSearchedText = !0, console.log(n), m.FilteredStatesList = JSON.stringify(n)
}
c(L, "default");

function w(m, l, v, e) {
    let n = localStorage.getItem("token");
    n && (m.token = n)
}
c(w, "default");
var r = P; {
    let l = class l extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, M);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    o = this.idService;
                return r.Logger.startActiveSpan("OnSearch", function(f) {
                    f && (f.setAttribute("code.function", "OnSearch"), f.setAttribute("outsystems.function.key", "119b5873-bf4a-42cf-bdc0-cddbd6691462"), f.setAttribute("outsystems.function.owner.name", "PartnersHub"), f.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), f.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSearch"), n = i.callContext(n);
                        var S = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnSearch$vars")));
                        S.value.searchedItemArgInLocal = e;
                        var y = new r.DataTypes.VariableHolder,
                            a = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            s = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(C)));
                        r.BuiltinFunctions.length(S.value.searchedItemArgInLocal) > 0 ? (a.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.filteredStatesListVar, !1, !1), y.value = r.Logger.startActiveSpan("JavaScript1", function(u) {
                            u && (u.setAttribute("code.function", "JavaScript1"), u.setAttribute("outsystems.function.key", "8f878789-171f-4577-8e6e-49b4292aba6a"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(L, "JavaScript1", "OnSearch", {
                                    StatesList: r.DataConversion.JSNodeParamConverter.to(a.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    SearchedState: r.DataConversion.JSNodeParamConverter.to(S.value.searchedItemArgInLocal, r.DataTypes.DataTypes.Text),
                                    FilteredStatesList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text),
                                    NoSearchedText: r.DataConversion.JSNodeParamConverter.to(!1, r.DataTypes.DataTypes.Boolean)
                                }, function(g) {
                                    var T = new(i.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnSearch$javaScript1JSResult"));
                                    return T.filteredStatesListOut = r.DataConversion.JSNodeParamConverter.from(g.FilteredStatesList, r.DataTypes.DataTypes.Text), T.noSearchedTextOut = r.DataConversion.JSNodeParamConverter.from(g.NoSearchedText, r.DataTypes.DataTypes.Boolean), T
                                }, {}, {})
                            } finally {
                                u && u.end()
                            }
                        }, 1), t.variables.noSearchTextVar = y.value.noSearchedTextOut, s.value.dataOut = r.JSONUtils.deserializeFromJSON(y.value.filteredStatesListOut, C, !1), t.variables.filteredStatesListVar = s.value.dataOut) : t.variables.filteredStatesListVar = t.variables.statesListResponseVar
                    } finally {
                        f && f.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    return o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "45b3fac9-c18c-489b-93bf-98dd0e18e556"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new r.DataTypes.VariableHolder,
                            S = new r.DataTypes.VariableHolder,
                            y = new r.DataTypes.VariableHolder;
                        return r.Flow.executeAsyncFlow(function() {
                            return y.value = r.Logger.startActiveSpan("GetAuthToken", function(a) {
                                a && (a.setAttribute("code.function", "GetAuthToken"), a.setAttribute("outsystems.function.key", "cbedcff9-7151-460d-aa7f-ce0a594bce2c"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                try {
                                    return t.safeExecuteJSNode(w, "GetAuthToken", "OnReady", {
                                        token: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                    }, function(s) {
                                        var u = new(t.constructor.getVariableGroupType("PartnersHub.Common.StatesList.OnReady$getAuthTokenJSResult"));
                                        return u.tokenOut = r.DataConversion.JSNodeParamConverter.from(s.token, r.DataTypes.DataTypes.Text), u
                                    }, {}, {})
                                } finally {
                                    a && a.end()
                                }
                            }, 1), b.mountDerivAPIClient$Action(e), n.flush(), k.getSettings$Action(R.getServer(), y.value.tokenOut, R.getAppId(), "EN", e).then(function(a) {
                                f.value = a
                            }).then(function() {
                                return n.flush(), b.sendStatesList$Action(function() {
                                    var a = new I;
                                    return a.states_listAttr = f.value.responseOut.get_settingsAttr.country_codeAttr, a
                                }(), e).then(function(a) {
                                    S.value = a
                                })
                            }).then(function() {
                                n.variables.statesListResponseVar = S.value.statesListResponseOut, n.variables.filteredStatesListVar = S.value.statesListResponseOut
                            })
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "ce733a3e-46e4-442f-b47a-f8787b19ea05"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e), b.mountDerivAPIClient$Action(e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onSearch$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSearch__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSearch"), i.setAttribute("outsystems.function.key", "119b5873-bf4a-42cf-bdc0-cddbd6691462"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "45b3fac9-c18c-489b-93bf-98dd0e18e556"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), r.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "ce733a3e-46e4-442f-b47a-f8787b19ea05"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get onClickState$Action() {
            return this.hasOwnProperty("_onClickState$Action") || (this._onClickState$Action = function() {
                return Promise.resolve()
            }), this._onClickState$Action
        }
        set onClickState$Action(e) {
            this._onClickState$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onReady$Action(e)
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
            return b.defaultTimeout
        }
    };
    c(l, "ControllerInner");
    let m = l;
    p = m, p.registerVariableGroupType("PartnersHub.Common.StatesList.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), p.registerVariableGroupType("PartnersHub.Common.StatesList.OnSearch$javaScript1JSResult", [{
        name: "FilteredStatesList",
        attrName: "filteredStatesListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "NoSearchedText",
        attrName: "noSearchedTextOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Boolean,
        defaultValue: c(function() {
            return !1
        }, "defaultValue")
    }]), p.registerVariableGroupType("PartnersHub.Common.StatesList.OnReady$getAuthTokenJSResult", [{
        name: "token",
        attrName: "tokenOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var p, U = new r.Controller.ControllerFactory(p, N);
var H = P,
    A = O.PlaceholderContent,
    re = O.IteratorPlaceholderContent,
    _ = class _ extends V.BaseWebBlock {
        static get displayName() {
            return "Common.StatesList"
        }
        static getAttributes() {
            return {
                codeFunction: "StatesList",
                functionKey: "8c1e50ea-52a8-4514-a967-86a64af8bb19",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [E, x]
        }
        get modelFactory() {
            return G
        }
        get controllerFactory() {
            return U
        }
        get title() {
            return ""
        }
        internalRender() {
            let l = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                t = this.widgetsRecordProvider,
                i = v.callContext(),
                o = _.ifWidget,
                f = _.textWidget,
                S = _.asPrimitiveValue,
                y = _.getTranslation,
                a = this;
            return d.createElement("div", this.getRootNodeProperties(), d.createElement(h, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, d.createElement(h, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: 16px;"
                },
                gridProperties: {
                    marginLeft: "16px"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, d.createElement(E, {
                getOwnerSpan: c(function() {
                    return a.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return a.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(s) {
                        v.handleError(s)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    input: new A(function() {
                        return [d.createElement(z, {
                            _validationProps: {
                                validationService: n
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 14px; height: 40px; margin-bottom: 16px; margin-right: 0px; margin-top: 0px; padding: 0px 0px 0px 38px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent",
                                marginLeft: "0px"
                            },
                            inputType: 8,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: c(function() {
                                var s = i.clone();
                                v.onSearch$Action(l.variables.searchedStateVar, v.callContext(s))
                            }, "onChange"),
                            prompt: H.Injector.resolve(H.ServiceNames.TranslationsService).getMessage("L6DcTU+GSkWmPl1ilbXMiQ#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: l.createVariable(H.DataTypes.DataTypes.Text, l.variables.searchedStateVar, function(s) {
                                l.variables.searchedStateVar = s
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [S(l.variables.searchedStateVar)]
            })), o(l.variables.filteredStatesListVar.states_listAttr.length > 0 && l.variables.noSearchTextVar === !1, !1, this, function() {
                return [d.createElement(W, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: l.variables.filteredStatesListVar.states_listAttr,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new re(function(s, u) {
                            return [d.createElement(h, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: s,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [S(l.variables.filteredStatesListVar.states_listAttr.getCurrent(u.iterationContext).textAttr)]
                            }, d.createElement(F, {
                                extendedProperties: {
                                    style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                },
                                onClick: c(function() {
                                    var g = u.clone();
                                    v.onClickState$Action(l.variables.filteredStatesListVar.states_listAttr.getCurrent(u.iterationContext).textAttr, v.callContext(g))
                                }, "onClick"),
                                style: '"list-item"',
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: s,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: A.Empty,
                                    content: new A(function() {
                                        return [d.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; justify-content: space-between; margin-bottom: 0px; margin-right: 0px; margin-top: 0px; padding: 12px 20px;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: t
                                        }, d.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: t
                                        }, d.createElement(h, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 8px;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: t
                                        }, d.createElement($, {
                                            extendedProperties: {
                                                style: "font-size: 15px; font-weight: normal;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            value: l.variables.filteredStatesListVar.states_listAttr.getCurrent(u.iterationContext).textAttr,
                                            _idProps: {
                                                service: s,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t
                                        }))), d.createElement(J, {
                                            extendedProperties: {
                                                style: "color: #6A7178; cursor: pointer;"
                                            },
                                            icon: "angle-right",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: s,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    }),
                                    rightActions: A.Empty
                                }
                            }))]
                        }, i, e, "1")
                    },
                    _dependencies: []
                })]
            }, function() {
                return [d.createElement(h, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "margin-top: 12px; text-align: center;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, d.createElement(x, {
                    getOwnerSpan: c(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: c(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: c(function(s) {
                            v.handleError(s)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: n
                    },
                    _idProps: {
                        service: e,
                        uuid: "13",
                        alias: "2"
                    },
                    _widgetRecordProvider: t,
                    _dependencies: []
                }))]
            })))
        }
    };
c(_, "View");
var D = _,
    He = D;
export {
    He as a
};