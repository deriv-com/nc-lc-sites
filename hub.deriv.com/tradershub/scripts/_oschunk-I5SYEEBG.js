import {
    a as ve
} from "./_oschunk-DCBZU6MK.js";
import {
    a as pe
} from "./_oschunk-42W7MBM2.js";
import {
    a as Y
} from "./_oschunk-RRHQSMAE.js";
import "./_oschunk-OCLFI2KS.js";
import {
    a as q
} from "./_oschunk-QBWPQPXH.js";
import "./_oschunk-FF7WZDTZ.js";
import {
    a as M
} from "./_oschunk-367MCH7Z.js";
import "./_oschunk-V52U2IZU.js";
import "./_oschunk-MOYCBUII.js";
import "./_oschunk-NYD6CGWS.js";
import {
    a as H
} from "./_oschunk-CM2AGQGL.js";
import "./_oschunk-EROCOLS7.js";
import {
    b as oe,
    h as S,
    j as de,
    k as le,
    l as ce,
    p as ue,
    r as T,
    s as w,
    t as O,
    u as $,
    v as me,
    y as I
} from "./_oschunk-42NACYKQ.js";
import {
    a as ne
} from "./_oschunk-2M7PXTSQ.js";
import {
    a as se,
    g as D,
    i as E
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import {
    a as v,
    c as ie
} from "./_oschunk-DOFMR6EA.js";
import {
    l as L
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import {
    Dk as U,
    Li as b,
    uk as ae,
    wd as re
} from "./_oschunk-MSUVGI3L.js";
import {
    ia as C
} from "./_oschunk-2JKANR6M.js";
import {
    c as a,
    g as te
} from "./_oschunk-DVBKI63I.js";
var n = te(se());
var y = te(se());
var f = C,
    J = class J extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredStatesList", "filteredStatesListVar", "FilteredStatesList", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("SearchKeyword", "searchKeywordVar", "SearchKeyword", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("StatesList2", "statesList2Var", "StatesList2", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("StatesList", "statesListIn", "StatesList", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new b)
            }, !1, b), this.attr("_statesListInDataFetchStatus", "_statesListInDataFetchStatus", "_statesListInDataFetchStatus", !0, !1, f.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(J, "VariablesRecord");
var V = J;
V.init();
var G = class G extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: f.Model.ValidationWidgetRecord
        }
    }
};
a(G, "WidgetsRecord");
var B = G,
    z = class z extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return B
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(i) {
            "StatesList" in i && (this.variables.statesListIn = i.StatesList, "_statesListInDataFetchStatus" in i && (this.variables._statesListInDataFetchStatus = i._statesListInDataFetchStatus))
        }
    };
a(z, "Model");
var W = z;
W._hasValidationWidgetsValue = void 0;
var Se = new f.Model.ModelFactory(W);
var ye = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B"
    },
    _e = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Suche",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Suchfeld"
    },
    be = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Buscar",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Campo de b\xFAsqueda"
    },
    Pe = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Rechercher",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Champ de recherche"
    },
    Ce = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Cerca",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Campo di ricerca"
    },
    Re = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Szukaj",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Pole wyszukiwania"
    },
    Ae = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Pesquisar",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Campo de pesquisa"
    },
    we = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "\u041F\u043E\u0438\u0441\u043A",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "\u041F\u043E\u043B\u0435 \u043F\u043E\u0438\u0441\u043A\u0430"
    },
    fe = {
        "ar-001": {
            translations: ye,
            isRTL: !0
        },
        "de-DE": {
            translations: _e,
            isRTL: !1
        },
        "es-ES": {
            translations: be,
            isRTL: !1
        },
        "fr-FR": {
            translations: Pe,
            isRTL: !1
        },
        "it-IT": {
            translations: Ce,
            isRTL: !1
        },
        "pl-PL": {
            translations: Re,
            isRTL: !1
        },
        "pt-PT": {
            translations: Ae,
            isRTL: !1
        },
        "ru-RU": {
            translations: we,
            isRTL: !1
        }
    };

function j(R, i, d, e) {
    var t;
    let s = JSON.parse((t = R.StatesList) != null ? t : JSON.stringify([]));
    R.FilteredStatesList = JSON.stringify(s.filter(o => o.text.toLowerCase().includes(R.SearchedState.toLowerCase())))
}
a(j, "default");
var l = C; {
    let i = class i extends l.Controller.BaseViewController {
        constructor(e, s, t) {
            super(e, s, t, fe);
            var o = this.controller;
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
                var s = this.model,
                    t = this.controller,
                    o = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(h) {
                    h && (h.setAttribute("code.function", "OnReady"), h.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9"), h.setAttribute("outsystems.function.owner.name", "tradershub"), h.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), h.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var m = new l.DataTypes.VariableHolder,
                            p = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType);
                        p.value.jSONOut = l.JSONUtils.serializeToJSON(s.variables.statesListIn, !1, !1), s.variables.filteredStatesListVar = s.variables.statesListIn, s.variables.statesList2Var = s.variables.statesListIn, m.value = L.setFocus$Action(o.getId("Input_SearchedItem"), e)
                    } finally {
                        h && h.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, s) {
                var t = this.model,
                    o = this.controller,
                    h = this.idService;
                return l.Logger.startActiveSpan("OnSearch", function(m) {
                    m && (m.setAttribute("code.function", "OnSearch"), m.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9"), m.setAttribute("outsystems.function.owner.name", "tradershub"), m.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), m.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        o.ensureControllerAlive("OnSearch"), s = o.callContext(s);
                        var p = new l.DataTypes.VariableHolder(new(o.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars")));
                        p.value.searchedItemArgInLocal = e;
                        var _ = new l.DataTypes.VariableHolder,
                            g = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType),
                            r = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(b)));
                        l.BuiltinFunctions.length(p.value.searchedItemArgInLocal) > 0 ? (g.value.jSONOut = l.JSONUtils.serializeToJSON(t.variables.statesListIn, !1, !1), _.value = l.Logger.startActiveSpan("SearchCountry", function(c) {
                            c && (c.setAttribute("code.function", "SearchCountry"), c.setAttribute("outsystems.function.key", "89c3d12b-efb6-4bf9-8522-680133c31874"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return o.safeExecuteJSNode(j, "SearchCountry", "OnSearch", {
                                    SearchedState: l.DataConversion.JSNodeParamConverter.to(p.value.searchedItemArgInLocal, l.DataTypes.DataTypes.Text),
                                    StatesList: l.DataConversion.JSNodeParamConverter.to(g.value.jSONOut, l.DataTypes.DataTypes.Text),
                                    FilteredStatesList: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                }, function(A) {
                                    var ee = new(o.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult"));
                                    return ee.filteredStatesListOut = l.DataConversion.JSNodeParamConverter.from(A.FilteredStatesList, l.DataTypes.DataTypes.Text), ee
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), r.value.dataOut = l.JSONUtils.deserializeFromJSON(_.value.filteredStatesListOut, b, !1), t.variables.filteredStatesListVar = r.value.dataOut) : t.variables.filteredStatesListVar = t.variables.statesList2Var
                    } finally {
                        m && m.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        onReady$Action(e) {
            var s = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return s.safeExecuteClientAction(s._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSearch$Action(e, s) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnSearch__proxy", function(o) {
                o && (o.setAttribute("code.function", "OnSearch"), o.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, s, e)
                } finally {
                    o && o.end()
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
        get onClickBack$Action() {
            return this.hasOwnProperty("_onClickBack$Action") || (this._onClickBack$Action = function() {
                return Promise.resolve()
            }), this._onClickBack$Action
        }
        set onClickBack$Action(e) {
            this._onClickBack$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var s = this.controller,
                    t = this.model,
                    o = this.idService;
                return s.onReady$Action(e)
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
                var s = this.controller,
                    t = this.model,
                    o = this.idService;
                return s.onReady$Action(e)
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
            return ie.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let R = i;
    k = R, k.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }]), k.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult", [{
        name: "FilteredStatesList",
        attrName: "filteredStatesListOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: a(function() {
            return ""
        }, "defaultValue")
    }])
}
var k, he = new l.Controller.ControllerFactory(k, ne);
var F = C,
    N = E.PlaceholderContent,
    Te = E.IteratorPlaceholderContent,
    x = class x extends D.BaseWebBlock {
        static get displayName() {
            return "Common.StateSelector"
        }
        static getAttributes() {
            return {
                codeFunction: "StateSelector",
                functionKey: "f71357c2-9559-4edb-b5ca-ca38420aa89c",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.StateSelector.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [q]
        }
        get modelFactory() {
            return Se
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = this.widgetsRecordProvider,
                o = d.callContext(),
                h = x.ifWidget,
                m = x.textWidget,
                p = x.asPrimitiveValue,
                _ = x.getTranslation,
                g = this;
            return y.createElement("div", this.getRootNodeProperties(), y.createElement(S, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background-color: #fff;"
                },
                style: "display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, y.createElement(q, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(r) {
                        d.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    input: new N(function() {
                        return [y.createElement(O, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "wcag-hide-text",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, m(_("9+2y6YecvkC5Qcq0e5qwRA#Value", "Search input"))), y.createElement(w, {
                            _validationProps: {
                                validationService: s
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 14px; margin-bottom: 8px; margin-top: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 8,
                            mandatory: !1,
                            maxLength: 0,
                            onChange: a(function() {
                                var r = o.clone();
                                d.onSearch$Action(i.variables.searchKeywordVar, d.callContext(r))
                            }, "onChange"),
                            prompt: F.Injector.resolve(F.ServiceNames.TranslationsService).getMessage("bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: i.createVariable(F.DataTypes.DataTypes.Text, i.variables.searchKeywordVar, function(r) {
                                i.variables.searchKeywordVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [p(i.variables.searchKeywordVar)]
            }), y.createElement(S, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "height: calc(100vh - 140px); overflow-y: scroll;"
                },
                style: "country-list-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t
            }, y.createElement(le, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: i.variables.filteredStatesListVar,
                style: "list list-group residence-list ",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Te(function(r, c) {
                        return [y.createElement(ce, {
                            extendedProperties: {
                                style: "cursor: pointer; height: fit-content;"
                            },
                            onClick: a(function() {
                                var A = c.clone();
                                d.onClickCountry$Action(i.variables.filteredStatesListVar.getCurrent(c.iterationContext).valueAttr, i.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr, d.callContext(A))
                            }, "onClick"),
                            style: "margin-y-base",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: r,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: N.Empty,
                                content: new N(function() {
                                    return [y.createElement(S, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, y.createElement(de, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 500;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: i.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr,
                                        _idProps: {
                                            service: r,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), y.createElement(T, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: F.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: r,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: N.Empty
                            },
                            _dependencies: [p(i.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr)]
                        })]
                    }, o, e, "1")
                },
                _dependencies: []
            }))))
        }
    };
a(x, "View");
var K = x,
    Q = K;
var u = C,
    Z = E.PlaceholderContent,
    gt = E.IteratorPlaceholderContent,
    P = class P extends D.BaseWebScreen {
        static get displayName() {
            return "RealAccountCreation.AddressDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "AddressDetails",
                functionKey: "c192c1c8-435d-4216-9380-1178631fcbe3",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.RealAccountCreation.AddressDetails.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [M, Y, H, Q]
        }
        get modelFactory() {
            return ve
        }
        get controllerFactory() {
            return pe
        }
        get title() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = d.callContext(),
                o = P.asPrimitiveValue,
                h = P.getTranslation,
                m = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("yMGSwV1DFkKTgBF4Yx_L4w#TitleExpression.445684752.1", "Address details | Deriv")
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                s = d.validationService,
                t = this.widgetsRecordProvider,
                o = d.callContext(),
                h = P.ifWidget,
                m = P.textWidget,
                p = P.asPrimitiveValue,
                _ = P.getTranslation,
                g = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(M, {
                getOwnerSpan: a(function() {
                    return g.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return g.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("dHg9q0USYUynkS4dTGBR5Q#Value.311930358.1", "Address details"),
                    Analytics: i.getCachedValue(e.getId("5_eT_ufK30yOnDIHcx9M5g.Analytics"), function() {
                        return function() {
                            var r = new re;
                            return r.stepCodenameAttr = "address_details", r.stepNumberAttr = "3", r
                        }()
                    })
                },
                events: {
                    _handleError: a(function(r) {
                        d.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Z(function() {
                        return [n.createElement(ue, {
                            _validationProps: {
                                validationService: s
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "",
                            _idProps: {
                                service: e,
                                name: "AddressForm"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "FormContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "AddressContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(O, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Address",
                            _idProps: {
                                service: e,
                                uuid: "4"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px; margin-bottom: 0px;"
                            },
                            text: [m(_("I9ASAW8xR0Ggye8Pc48FEg#Value", "Address"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(w, {
                            _validationProps: {
                                validationService: s,
                                validationParentId: e.getId("AddressForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 70,
                            prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("NRtr49dgY0CkIHapelmxUg#ValueExpression.1225091439.1", "Enter your address"),
                            style: "form-control",
                            variable: i.createVariable(u.DataTypes.DataTypes.Text, v.getRealSignupAddress(), function(r) {
                                v.setRealSignupAddress(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Address"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 0px;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "TownContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(O, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !0,
                            targetWidget: "Input_Town",
                            _idProps: {
                                service: e,
                                uuid: "8"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px;"
                            },
                            text: [m(_("hbG5YV4ub0upRZHLQdGEgA#Value", "Town/City"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(w, {
                            _validationProps: {
                                validationService: s,
                                validationParentId: e.getId("AddressForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !0,
                            maxLength: 50,
                            prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("R_Obl6qiLEmEpgFZlDPP2Q#ValueExpression.2018813315.1", "Enter your town/city"),
                            style: "form-control",
                            variable: i.createVariable(u.DataTypes.DataTypes.Text, v.getRealSignupAddressTown(), function(r) {
                                v.setRealSignupAddressTown(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Town"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px; margin-top: 0px;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "StateContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(O, {
                            extendedProperties: {
                                style: "font-size: 16px; margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            targetWidget: "Input_PostCode",
                            _idProps: {
                                service: e,
                                uuid: "12"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            extendedProperties: {
                                style: "color: #4F575E;"
                            },
                            text: [m(_("mYN8wVUc2UK27u4F3fXjCg#Value", "State/Province"))],
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(S, {
                            align: 0,
                            animate: !0,
                            visible: i.getCachedValue(e.getId("60ZK39hVTkGoGO_rnwqJ3Q.Visible"), function() {
                                return L.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(Y, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                OptionsList: i.getCachedValue(e.getId("S131jaXsakKJEDXPxYyfcg.OptionsList"), function() {
                                    return u.DataConversion.JSConversions.typeConvertRecordList(i.variables.stateListVar, new U, function(r, c) {
                                        return c.valueAttr = r.valueAttr, c.labelAttr = r.textAttr, c
                                    })
                                }, function() {
                                    return i.variables.stateListVar
                                }),
                                StartingSelection: i.getCachedValue(e.getId("S131jaXsakKJEDXPxYyfcg.StartingSelection"), function() {
                                    return function() {
                                        var r = new U;
                                        return r.pushAll([function() {
                                            var c = new ae;
                                            return c.valueAttr = v.getRealSignupAddressState(), c.labelAttr = v.getRealSignupAddressStateLabel(), c
                                        }()]), r
                                    }()
                                }, function() {
                                    return v.getRealSignupAddressState()
                                }, function() {
                                    return v.getRealSignupAddressStateLabel()
                                }),
                                Prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("xDvOOsijqU6n20G9C86y1Q#Value.1298951543.1", "Select your state/province")
                            },
                            events: {
                                _handleError: a(function(r) {
                                    d.handleError(r)
                                }, "_handleError"),
                                onChanged$Action: a(function(r, c) {
                                    var A = o.clone();
                                    d.dropdownSearchOnChanged$Action(c, d.callContext(A))
                                }, "onChanged$Action")
                            },
                            _validationProps: {
                                validationService: s,
                                validationParentId: e.getId("AddressForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), n.createElement(S, {
                            align: 0,
                            animate: !0,
                            visible: i.getCachedValue(e.getId("235ZdWMqyEqSDx00tkdX2g.Visible"), function() {
                                return !L.isDesktop$Action(o).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(H, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: a(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: s,
                                validationParentId: e.getId("AddressForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "17",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                icon: Z.Empty,
                                input: new Z(function() {
                                    return [n.createElement(w, {
                                        _validationProps: {
                                            validationService: s,
                                            validationParentId: e.getId("AddressForm")
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: a(function() {
                                                var r = o.clone();
                                                d.stateOnClickMobile$Action(d.callContext(r))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !1,
                                        maxLength: 50,
                                        prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("SxN54wo5wUGP5KPhl_PhcA#ValueExpression.1298951543.1", "Select your state/province"),
                                        style: "form-control",
                                        variable: i.createVariable(u.DataTypes.DataTypes.Text, v.getRealSignupAddressStateLabel(), function(r) {
                                            v.setRealSignupAddressStateLabel(r)
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_InputState"
                                        },
                                        _widgetRecordProvider: t
                                    }), n.createElement(T, {
                                        extendedEvents: {
                                            onClick: a(function() {
                                                var r = o.clone();
                                                d.stateOnClickMobile$Action(d.callContext(r))
                                            }, "onClick")
                                        },
                                        image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "19"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                })
                            },
                            _dependencies: [p(v.getRealSignupAddressStateLabel())]
                        }))), n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 0px;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "PostalContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(O, {
                            extendedProperties: {
                                style: "margin-bottom: 8px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mandatory: !1,
                            targetWidget: "Input_PostCode",
                            _idProps: {
                                service: e,
                                uuid: "21"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [m(_("XcQhG2GCtk2su3luQZGIXA#Value", "Postal/ZIP code"))],
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(w, {
                            _validationProps: {
                                validationService: s,
                                validationParentId: e.getId("AddressForm")
                            },
                            enabled: !0,
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            inputType: 0,
                            mandatory: !1,
                            maxLength: 50,
                            prompt: u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("uERmRiyMg0GYP4T4ktY6DQ#ValueExpression.-1842366741.1", "Enter your postal/ZIP code"),
                            style: "form-control",
                            variable: i.createVariable(u.DataTypes.DataTypes.Text, v.getRealSignupAddressPostCode(), function(r) {
                                v.setRealSignupAddressPostCode(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_PostCode"
                            },
                            _widgetRecordProvider: t
                        }))), n.createElement(S, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 24px; text-align: right;"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ButtonContainer"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(oe, {
                            enabled: !0,
                            isDefault: !0,
                            onClick: a(function() {
                                g.validateWidget(e.getId("AddressForm"));
                                var r = o.clone();
                                d.saveOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            style: "btn btn-primary ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: t
                        }, m(_("w38dbPW8mUGI0DeQhHYdmg#Value", "Next"))))), n.createElement(me, {
                            showPopup: i.variables.isStateSelectionPopopOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(S, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(S, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement($, {
                            enabled: !0,
                            onClick: a(function() {
                                var r = o.clone();
                                d.closeStateSelectionPopupOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(T, {
                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(I, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: [m(_("8Pnh1OZ9xEqJ+TUX87m6BA#Value", "State/Province"))],
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement($, {
                            enabled: !0,
                            onClick: a(function() {
                                var r = o.clone();
                                d.closeStateSelectionPopupOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(T, {
                            image: u.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }))), n.createElement(Q, {
                            getOwnerSpan: a(function() {
                                return g.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: a(function() {
                                return g.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                StatesList: i.variables.stateListVar
                            },
                            events: {
                                _handleError: a(function(r) {
                                    d.handleError(r)
                                }, "_handleError"),
                                onClickCountry$Action: a(function(r, c) {
                                    var A = o.clone();
                                    d.stateSelectorOnClickCountry$Action(r, c, d.callContext(A))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: s
                            },
                            _idProps: {
                                service: e,
                                uuid: "34",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: [p(i.variables.isStateSelectionPopopOpenVar), p(v.getRealSignupAddressPostCode()), p(v.getRealSignupAddressStateLabel()), p(v.getRealSignupAddressState()), p(i.variables.stateListVar), p(v.getRealSignupAddressTown()), p(v.getRealSignupAddress())]
            }))
        }
    };
a(P, "View");
var X = P,
    St = X;
export {
    St as
    default
};