import {
    a as W
} from "./_oschunk-ZCAHOMG4.js";
import {
    a as O
} from "./_oschunk-B5VQOPQY.js";
import {
    a as A
} from "./_oschunk-B2TFZ35O.js";
import {
    d as p,
    f as B,
    g as $,
    h as k,
    m as U,
    o as F
} from "./_oschunk-5HXBKFJV.js";
import {
    a as V
} from "./_oschunk-6WALBPGV.js";
import {
    a as X,
    g as I,
    i as C
} from "./_oschunk-2Q3BG5XZ.js";
import {
    a as N,
    p as J
} from "./_oschunk-FZ6FUHBV.js";
import {
    sb as b
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as R
} from "./_oschunk-5KJVGEL7.js";
import {
    a as w,
    b as D,
    c as s,
    h as Q
} from "./_oschunk-QHO7QY6K.js";
var l = Q(X());
var j = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "\u0628\u062D\u062B"
    },
    G = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Suche"
    },
    M = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Buscar"
    },
    K = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Rechercher"
    },
    Y = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Cerca"
    },
    Z = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Szukaj"
    },
    ee = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "Pesquisar"
    },
    te = {
        "9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A"
    },
    z = {
        "ar-001": {
            translations: j,
            isRTL: !0
        },
        "de-DE": {
            translations: G,
            isRTL: !1
        },
        "es-ES": {
            translations: M,
            isRTL: !1
        },
        "fr-FR": {
            translations: K,
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

function E(v, o, f, e) {
    let n = JSON.parse(v.ResidenceList);
    v.SortedResidenceList = JSON.stringify({
        residence_list: n
    })
}
s(E, "default");

function H(v, o, f, e) {
    let n = JSON.parse(v.ResidenceList),
        t = JSON.stringify(D(w({}, n), {
            residence_list: n.filter(i => i.text.toLowerCase().startsWith(v.SearchedResidence.toLowerCase()))
        }));
    v.FilteredResidenceList = t
}
s(H, "default");
var r = R; {
    let o = class o extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, z);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(m) {
                    m && (m.setAttribute("code.function", "OnReady"), m.setAttribute("outsystems.function.key", "a8152c19-4586-40c4-8716-2a47a3a4bb51"), m.setAttribute("outsystems.function.owner.name", "PartnersHub"), m.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new r.DataTypes.VariableHolder,
                            y = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            _ = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(b)));
                        y.value.jSONOut = r.JSONUtils.serializeToJSON(n.variables.residenceListIn, !1, !1), u.value = r.Logger.startActiveSpan("JavaScript1", function(c) {
                            c && (c.setAttribute("code.function", "JavaScript1"), c.setAttribute("outsystems.function.key", "6c32a453-c25d-45db-9f3b-820173d634f8"), c.setAttribute("outsystems.function.owner.name", "PartnersHub"), c.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(E, "JavaScript1", "OnReady", {
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(y.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    SortedResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(a) {
                                    var d = new(t.constructor.getVariableGroupType("PartnersHub.Common.ResidenceList.OnReady$javaScript1JSResult"));
                                    return d.sortedResidenceListOut = r.DataConversion.JSNodeParamConverter.from(a.SortedResidenceList, r.DataTypes.DataTypes.Text), d
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), _.value.dataOut = r.JSONUtils.deserializeFromJSON(u.value.sortedResidenceListOut, b, !1), n.variables.filteredResidenceListVar = _.value.dataOut.residence_listAttr, n.variables.sortedResidenceListVar = _.value.dataOut.residence_listAttr, N.setClientCountry(n.variables.websiteStatusIn.clients_countryAttr)
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, n) {
                var t = this.model,
                    i = this.controller,
                    m = this.idService;
                return r.Logger.startActiveSpan("OnSearch", function(u) {
                    u && (u.setAttribute("code.function", "OnSearch"), u.setAttribute("outsystems.function.key", "f92717aa-97b8-4c96-b908-1c95b6ce6690"), u.setAttribute("outsystems.function.owner.name", "PartnersHub"), u.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSearch"), n = i.callContext(n);
                        var y = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("PartnersHub.Common.ResidenceList.OnSearch$vars")));
                        y.value.searchedItemArgInLocal = e;
                        var _ = new r.DataTypes.VariableHolder,
                            c = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            a = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(b)));
                        r.BuiltinFunctions.length(y.value.searchedItemArgInLocal) > 0 ? (c.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.filteredResidenceListVar, !1, !1), _.value = r.Logger.startActiveSpan("JavaScript1", function(d) {
                            d && (d.setAttribute("code.function", "JavaScript1"), d.setAttribute("outsystems.function.key", "b903c2ca-27f0-410c-a193-04331c9d0783"), d.setAttribute("outsystems.function.owner.name", "PartnersHub"), d.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(H, "JavaScript1", "OnSearch", {
                                    SearchedResidence: r.DataConversion.JSNodeParamConverter.to(y.value.searchedItemArgInLocal, r.DataTypes.DataTypes.Text),
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(c.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(P) {
                                    var x = new(i.constructor.getVariableGroupType("PartnersHub.Common.ResidenceList.OnSearch$javaScript1JSResult"));
                                    return x.filteredResidenceListOut = r.DataConversion.JSNodeParamConverter.from(P.FilteredResidenceList, r.DataTypes.DataTypes.Text), x
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), a.value.dataOut = r.JSONUtils.deserializeFromJSON(_.value.filteredResidenceListOut, b, !1), t.variables.filteredResidenceListVar = a.value.dataOut.residence_listAttr) : t.variables.filteredResidenceListVar = t.variables.sortedResidenceListVar
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "a8152c19-4586-40c4-8716-2a47a3a4bb51"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSearch$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSearch__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSearch"), i.setAttribute("outsystems.function.key", "f92717aa-97b8-4c96-b908-1c95b6ce6690"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        get onClickCountry$Action() {
            return this.hasOwnProperty("_onClickCountry$Action") || (this._onClickCountry$Action = function() {
                return Promise.resolve()
            }), this._onClickCountry$Action
        }
        set onClickCountry$Action(e) {
            this._onClickCountry$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    i = this.idService;
                return n.onReady$Action(e)
            }), this._onParametersChangedEventHandler
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
            return J.defaultTimeout
        }
    };
    s(o, "ControllerInner");
    let v = o;
    g = v, g.registerVariableGroupType("PartnersHub.Common.ResidenceList.OnReady$javaScript1JSResult", [{
        name: "SortedResidenceList",
        attrName: "sortedResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("PartnersHub.Common.ResidenceList.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), g.registerVariableGroupType("PartnersHub.Common.ResidenceList.OnSearch$javaScript1JSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var g, q = new r.Controller.ControllerFactory(g, V);
var T = R,
    S = C.PlaceholderContent,
    re = C.IteratorPlaceholderContent,
    h = class h extends I.BaseWebBlock {
        static get displayName() {
            return "Common.ResidenceList"
        }
        static getAttributes() {
            return {
                codeFunction: "ResidenceList",
                functionKey: "c1df3771-6a2b-4806-9d79-5402878d6d07",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.ResidenceList.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [A, O]
        }
        get modelFactory() {
            return W
        }
        get controllerFactory() {
            return q
        }
        get title() {
            return ""
        }
        internalRender() {
            let o = this.model,
                f = this.controller,
                e = this.idService,
                n = f.validationService,
                t = this.widgetsRecordProvider,
                i = f.callContext(),
                m = h.ifWidget,
                u = h.textWidget,
                y = h.asPrimitiveValue,
                _ = h.getTranslation,
                c = this;
            return l.createElement("div", this.getRootNodeProperties(), l.createElement(p, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff; height: 100vh;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, l.createElement(p, {
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
            }, l.createElement(A, {
                getOwnerSpan: s(function() {
                    return c.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return c.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(a) {
                        f.handleError(a)
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
                    input: new S(function() {
                        return [l.createElement(F, {
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
                            onChange: s(function() {
                                var a = i.clone();
                                f.onSearch$Action(o.variables.searchedResidenceVar, f.callContext(a))
                            }, "onChange"),
                            prompt: T.Injector.resolve(T.ServiceNames.TranslationsService).getMessage("9UB8EXBBqUa1vQHHfJbvyA#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: o.createVariable(T.DataTypes.DataTypes.Text, o.variables.searchedResidenceVar, function(a) {
                                o.variables.searchedResidenceVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [y(o.variables.searchedResidenceVar)]
            })), m(o.variables.filteredResidenceListVar.length > 0, !1, this, function() {
                return [l.createElement($, {
                    animateItems: !0,
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    mode: 0,
                    source: o.variables.filteredResidenceListVar,
                    style: "list list-group residence-list",
                    tag: "div",
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t,
                    placeholders: {
                        content: new re(function(a, d) {
                            return [l.createElement(p, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: a,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: [y(o.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr)]
                            }, l.createElement(k, {
                                extendedProperties: {
                                    style: "cursor: pointer; height: fit-content; margin-bottom: 0px; margin-top: 0px;"
                                },
                                onClick: s(function() {
                                    var P = d.clone();
                                    f.onClickCountry$Action(o.variables.filteredResidenceListVar.getCurrent(d.iterationContext), f.callContext(P))
                                }, "onClick"),
                                style: '"list-item"',
                                triggerActionOnFullSwipeLeft: !0,
                                triggerActionOnFullSwipeRight: !0,
                                _idProps: {
                                    service: a,
                                    name: "ListItem1"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    leftActions: S.Empty,
                                    content: new S(function() {
                                        return [l.createElement(p, {
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
                                                service: a,
                                                uuid: "7"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "8"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(p, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "align-items: center; display: flex; gap: 8px;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "9"
                                            },
                                            _widgetRecordProvider: t
                                        }, l.createElement(B, {
                                            extendedProperties: {
                                                style: "font-size: 15px; font-weight: normal;"
                                            },
                                            gridProperties: {
                                                marginLeft: "0px"
                                            },
                                            value: o.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr,
                                            _idProps: {
                                                service: a,
                                                uuid: "10"
                                            },
                                            _widgetRecordProvider: t
                                        }))), l.createElement(U, {
                                            extendedProperties: {
                                                style: "color: #6A7178; cursor: pointer;"
                                            },
                                            icon: "angle-right",
                                            iconSize: 1,
                                            style: "icon",
                                            visible: !0,
                                            _idProps: {
                                                service: a,
                                                uuid: "11"
                                            },
                                            _widgetRecordProvider: t
                                        }))]
                                    }),
                                    rightActions: S.Empty
                                }
                            }))]
                        }, i, e, "1")
                    },
                    _dependencies: []
                })]
            }, function() {
                return [l.createElement(p, {
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
                }, l.createElement(O, {
                    getOwnerSpan: s(function() {
                        return c.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: s(function() {
                        return c.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: s(function(a) {
                            f.handleError(a)
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
s(h, "View");
var L = h,
    Ee = L;
export {
    Ee as a
};