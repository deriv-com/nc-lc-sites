import {
    a as pe
} from "./_oschunk-3W2YYCPD.js";
import {
    a as ve
} from "./_oschunk-KHCQ2H5P.js";
import {
    a as J
} from "./_oschunk-X2V7XQCM.js";
import "./_oschunk-RAL2ZUKY.js";
import {
    a as B
} from "./_oschunk-3T2MUKOP.js";
import "./_oschunk-ILTRYJXV.js";
import {
    a as M
} from "./_oschunk-MDM6SINN.js";
import "./_oschunk-Z3EGUX6T.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import {
    a as U
} from "./_oschunk-2FL724PB.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as se,
    h as g,
    j as de,
    k as le,
    l as ce,
    p as ue,
    r as I,
    s as A,
    t as w,
    u as H,
    v as me,
    y as T
} from "./_oschunk-HUOHOHZB.js";
import {
    a as ne
} from "./_oschunk-Y45M2O2K.js";
import {
    a as oe,
    g as D,
    i as E
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as m,
    d as ae
} from "./_oschunk-27GDEXUT.js";
import {
    a as L
} from "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    Ef as $,
    sb as re,
    se as b,
    xf as ie
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as C
} from "./_oschunk-NTQBNJ73.js";
import {
    c as i,
    g as te
} from "./_oschunk-DVBKI63I.js";
var n = te(oe());
var h = te(oe());
var f = C,
    G = class G extends f.DataTypes.GenericRecord {
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
i(G, "VariablesRecord");
var V = G;
V.init();
var K = class K extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: f.Model.ValidationWidgetRecord
        }
    }
};
i(K, "WidgetsRecord");
var z = K,
    Y = class Y extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return V
        }
        static getWidgetsRecordConstructor() {
            return z
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(a) {
            "StatesList" in a && (this.variables.statesListIn = a.StatesList, "_statesListInDataFetchStatus" in a && (this.variables._statesListInDataFetchStatus = a._statesListInDataFetchStatus))
        }
    };
i(Y, "Model");
var W = Y;
W._hasValidationWidgetsValue = void 0;
var fe = new f.Model.ModelFactory(W);
var ye = {
        "bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1": "Rechercher",
        "9+2y6YecvkC5Qcq0e5qwRA#Value": "Champ de recherche"
    },
    Se = {
        "fr-FR": {
            translations: ye,
            isRTL: !1
        }
    };

function j(R, a, d, e) {
    var t;
    let o = JSON.parse((t = R.StatesList) != null ? t : JSON.stringify([]));
    R.FilteredStatesList = JSON.stringify(o.filter(s => s.text.toLowerCase().includes(R.SearchedState.toLowerCase())))
}
i(j, "default");
var l = C; {
    let a = class a extends l.Controller.BaseViewController {
        constructor(e, o, t) {
            super(e, o, t, Se);
            var s = this.controller;
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
                var o = this.model,
                    t = this.controller,
                    s = this.idService;
                return l.Logger.startActiveSpan("OnReady", function(S) {
                    S && (S.setAttribute("code.function", "OnReady"), S.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9"), S.setAttribute("outsystems.function.owner.name", "tradershub"), S.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), S.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new l.DataTypes.VariableHolder,
                            p = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType);
                        p.value.jSONOut = l.JSONUtils.serializeToJSON(o.variables.statesListIn, !1, !1), o.variables.filteredStatesListVar = o.variables.statesListIn, o.variables.statesList2Var = o.variables.statesListIn, u.value = L.setFocus$Action(s.getId("Input_SearchedItem"), e)
                    } finally {
                        S && S.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e, o) {
                var t = this.model,
                    s = this.controller,
                    S = this.idService;
                return l.Logger.startActiveSpan("OnSearch", function(u) {
                    u && (u.setAttribute("code.function", "OnSearch"), u.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        s.ensureControllerAlive("OnSearch"), o = s.callContext(o);
                        var p = new l.DataTypes.VariableHolder(new(s.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars")));
                        p.value.searchedItemArgInLocal = e;
                        var y = new l.DataTypes.VariableHolder,
                            v = new l.DataTypes.VariableHolder(new l.DataTypes.JSONSerializeOutputType),
                            r = new l.DataTypes.VariableHolder(new(l.Controller.BaseController.getJSONDeserializeOutputType(b)));
                        l.BuiltinFunctions.length(p.value.searchedItemArgInLocal) > 0 ? (v.value.jSONOut = l.JSONUtils.serializeToJSON(t.variables.statesListIn, !1, !1), y.value = l.Logger.startActiveSpan("SearchCountry", function(c) {
                            c && (c.setAttribute("code.function", "SearchCountry"), c.setAttribute("outsystems.function.key", "89c3d12b-efb6-4bf9-8522-680133c31874"), c.setAttribute("outsystems.function.owner.name", "tradershub"), c.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), c.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return s.safeExecuteJSNode(j, "SearchCountry", "OnSearch", {
                                    SearchedState: l.DataConversion.JSNodeParamConverter.to(p.value.searchedItemArgInLocal, l.DataTypes.DataTypes.Text),
                                    StatesList: l.DataConversion.JSNodeParamConverter.to(v.value.jSONOut, l.DataTypes.DataTypes.Text),
                                    FilteredStatesList: l.DataConversion.JSNodeParamConverter.to("", l.DataTypes.DataTypes.Text)
                                }, function(O) {
                                    var ee = new(s.constructor.getVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult"));
                                    return ee.filteredStatesListOut = l.DataConversion.JSNodeParamConverter.from(O.FilteredStatesList, l.DataTypes.DataTypes.Text), ee
                                }, {}, {})
                            } finally {
                                c && c.end()
                            }
                        }, 1), r.value.dataOut = l.JSONUtils.deserializeFromJSON(y.value.filteredStatesListOut, b, !1), t.variables.filteredStatesListVar = r.value.dataOut) : t.variables.filteredStatesListVar = t.variables.statesList2Var
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
            var o = this.controller;
            return l.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "aba7e2a6-9453-44a7-9b3a-3225ee6700b9"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return o.safeExecuteClientAction(o._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onSearch$Action(e, o) {
            var t = this.controller;
            return l.Logger.startActiveSpan("OnSearch__proxy", function(s) {
                s && (s.setAttribute("code.function", "OnSearch"), s.setAttribute("outsystems.function.key", "b8234306-ffad-4f77-a87c-d3ce4d400bd9"), s.setAttribute("outsystems.function.owner.name", "tradershub"), s.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, o, e)
                } finally {
                    s && s.end()
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
                var o = this.controller,
                    t = this.model,
                    s = this.idService;
                return o.onReady$Action(e)
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
                var o = this.controller,
                    t = this.model,
                    s = this.idService;
                return o.onReady$Action(e)
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
            return ae.defaultTimeout
        }
    };
    i(a, "ControllerInner");
    let R = a;
    F = R, F.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }]), F.registerVariableGroupType("tradershub.Common.StateSelector.OnSearch$searchCountryJSResult", [{
        name: "FilteredStatesList",
        attrName: "filteredStatesListOut",
        mandatory: !0,
        dataType: l.DataTypes.DataTypes.Text,
        defaultValue: i(function() {
            return ""
        }, "defaultValue")
    }])
}
var F, he = new l.Controller.ControllerFactory(F, ne);
var k = C,
    N = E.PlaceholderContent,
    Ce = E.IteratorPlaceholderContent,
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
            return [B]
        }
        get modelFactory() {
            return fe
        }
        get controllerFactory() {
            return he
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                o = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                S = x.ifWidget,
                u = x.textWidget,
                p = x.asPrimitiveValue,
                y = x.getTranslation,
                v = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(g, {
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
            }, h.createElement(B, {
                getOwnerSpan: i(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: i(function(r) {
                        d.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    input: new N(function() {
                        return [h.createElement(w, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "wcag-hide-text",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, u(y("9+2y6YecvkC5Qcq0e5qwRA#Value", "Search input"))), h.createElement(A, {
                            _validationProps: {
                                validationService: o
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
                            onChange: i(function() {
                                var r = s.clone();
                                d.onSearch$Action(a.variables.searchKeywordVar, d.callContext(r))
                            }, "onChange"),
                            prompt: k.Injector.resolve(k.ServiceNames.TranslationsService).getMessage("bfADhYZmqUWYdbd5UiwmBg#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: a.createVariable(k.DataTypes.DataTypes.Text, a.variables.searchKeywordVar, function(r) {
                                a.variables.searchKeywordVar = r
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [p(a.variables.searchKeywordVar)]
            }), h.createElement(g, {
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
            }, h.createElement(le, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: a.variables.filteredStatesListVar,
                style: "list list-group residence-list ",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new Ce(function(r, c) {
                        return [h.createElement(ce, {
                            extendedProperties: {
                                style: "cursor: pointer; height: fit-content;"
                            },
                            onClick: i(function() {
                                var O = c.clone();
                                d.onClickCountry$Action(a.variables.filteredStatesListVar.getCurrent(c.iterationContext).valueAttr, a.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr, d.callContext(O))
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
                                    return [h.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: r,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, h.createElement(de, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 500;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: a.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr,
                                        _idProps: {
                                            service: r,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), h.createElement(I, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: k.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
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
                            _dependencies: [p(a.variables.filteredStatesListVar.getCurrent(c.iterationContext).textAttr)]
                        })]
                    }, s, e, "1")
                },
                _dependencies: []
            }))))
        }
    };
i(x, "View");
var q = x,
    X = q;
var _ = C,
    Z = E.PlaceholderContent,
    dt = E.IteratorPlaceholderContent,
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
            return [M, J, U, X]
        }
        get modelFactory() {
            return pe
        }
        get controllerFactory() {
            return ve
        }
        get title() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                o = d.validationService,
                t = d.callContext(),
                s = P.asPrimitiveValue,
                S = P.getTranslation,
                u = this;
            return _.Injector.resolve(_.ServiceNames.TranslationsService).getMessage("yMGSwV1DFkKTgBF4Yx_L4w#TitleExpression.445684752.1", "Address details | Deriv")
        }
        internalRender() {
            let a = this.model,
                d = this.controller,
                e = this.idService,
                o = d.validationService,
                t = this.widgetsRecordProvider,
                s = d.callContext(),
                S = P.ifWidget,
                u = P.textWidget,
                p = P.asPrimitiveValue,
                y = P.getTranslation,
                v = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(M, {
                getOwnerSpan: i(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: "Address details",
                    Analytics: a.getCachedValue(e.getId("5_eT_ufK30yOnDIHcx9M5g.Analytics"), function() {
                        return function() {
                            var r = new re;
                            return r.stepCodenameAttr = "address_details", r.stepNumberAttr = "3", r
                        }()
                    })
                },
                events: {
                    _handleError: i(function(r) {
                        d.handleError(r)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: o
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
                                validationService: o
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
                        }, n.createElement(g, {
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
                        }, n.createElement(g, {
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
                        }, n.createElement(w, {
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
                        }, n.createElement(T, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px; margin-bottom: 0px;"
                            },
                            text: [u(y("I9ASAW8xR0Ggye8Pc48FEg#Value", "Address"))],
                            _idProps: {
                                service: e,
                                uuid: "5"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(A, {
                            _validationProps: {
                                validationService: o,
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
                            prompt: "Enter your address",
                            style: "form-control",
                            variable: a.createVariable(_.DataTypes.DataTypes.Text, m.getRealSignupAddress(), function(r) {
                                m.setRealSignupAddress(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Address"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(g, {
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
                        }, n.createElement(w, {
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
                        }, n.createElement(T, {
                            extendedProperties: {
                                style: "color: #4F575E; font-size: 16px;"
                            },
                            text: [u(y("hbG5YV4ub0upRZHLQdGEgA#Value", "Town/City"))],
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(A, {
                            _validationProps: {
                                validationService: o,
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
                            prompt: "Enter your town/city",
                            style: "form-control",
                            variable: a.createVariable(_.DataTypes.DataTypes.Text, m.getRealSignupAddressTown(), function(r) {
                                m.setRealSignupAddressTown(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_Town"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(g, {
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
                        }, n.createElement(w, {
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
                        }, n.createElement(T, {
                            extendedProperties: {
                                style: "color: #4F575E;"
                            },
                            text: [u(y("mYN8wVUc2UK27u4F3fXjCg#Value", "State/Province"))],
                            _idProps: {
                                service: e,
                                uuid: "13"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(g, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("60ZK39hVTkGoGO_rnwqJ3Q.Visible"), function() {
                                return L.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "14"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(J, {
                            getOwnerSpan: i(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                OptionsList: a.getCachedValue(e.getId("S131jaXsakKJEDXPxYyfcg.OptionsList"), function() {
                                    return _.DataConversion.JSConversions.typeConvertRecordList(a.variables.stateListVar, new $, function(r, c) {
                                        return c.valueAttr = r.valueAttr, c.labelAttr = r.textAttr, c
                                    })
                                }, function() {
                                    return a.variables.stateListVar
                                }),
                                StartingSelection: a.getCachedValue(e.getId("S131jaXsakKJEDXPxYyfcg.StartingSelection"), function() {
                                    return function() {
                                        var r = new $;
                                        return r.pushAll([function() {
                                            var c = new ie;
                                            return c.valueAttr = m.getRealSignupAddressState(), c.labelAttr = m.getRealSignupAddressStateLabel(), c
                                        }()]), r
                                    }()
                                }, function() {
                                    return m.getRealSignupAddressState()
                                }, function() {
                                    return m.getRealSignupAddressStateLabel()
                                }),
                                Prompt: "Select your state/province"
                            },
                            events: {
                                _handleError: i(function(r) {
                                    d.handleError(r)
                                }, "_handleError"),
                                onChanged$Action: i(function(r, c) {
                                    var O = s.clone();
                                    d.dropdownSearchOnChanged$Action(c, d.callContext(O))
                                }, "onChanged$Action")
                            },
                            _validationProps: {
                                validationService: o,
                                validationParentId: e.getId("AddressForm")
                            },
                            _idProps: {
                                service: e,
                                uuid: "15",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), n.createElement(g, {
                            align: 0,
                            animate: !0,
                            visible: a.getCachedValue(e.getId("235ZdWMqyEqSDx00tkdX2g.Visible"), function() {
                                return !L.isDesktop$Action(s).isDesktopOut
                            }),
                            _idProps: {
                                service: e,
                                uuid: "16"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(U, {
                            getOwnerSpan: i(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                AlignIconRight: !0
                            },
                            events: {
                                _handleError: i(function(r) {
                                    d.handleError(r)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: o,
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
                                    return [n.createElement(A, {
                                        _validationProps: {
                                            validationService: o,
                                            validationParentId: e.getId("AddressForm")
                                        },
                                        enabled: !0,
                                        extendedEvents: {
                                            onClick: i(function() {
                                                var r = s.clone();
                                                d.stateOnClickMobile$Action(d.callContext(r))
                                            }, "onClick")
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 0,
                                        mandatory: !1,
                                        maxLength: 50,
                                        prompt: "Select your state/province",
                                        style: "form-control",
                                        variable: a.createVariable(_.DataTypes.DataTypes.Text, m.getRealSignupAddressStateLabel(), function(r) {
                                            m.setRealSignupAddressStateLabel(r)
                                        }),
                                        _idProps: {
                                            service: e,
                                            name: "Input_InputState"
                                        },
                                        _widgetRecordProvider: t
                                    }), n.createElement(I, {
                                        extendedEvents: {
                                            onClick: i(function() {
                                                var r = s.clone();
                                                d.stateOnClickMobile$Action(d.callContext(r))
                                            }, "onClick")
                                        },
                                        image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowdown.svg"),
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
                            _dependencies: [p(m.getRealSignupAddressStateLabel())]
                        }))), n.createElement(g, {
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
                        }, n.createElement(w, {
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
                        }, n.createElement(T, {
                            extendedProperties: {
                                style: "font-size: 16px;"
                            },
                            text: [u(y("XcQhG2GCtk2su3luQZGIXA#Value", "Postal/ZIP code"))],
                            _idProps: {
                                service: e,
                                uuid: "22"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(A, {
                            _validationProps: {
                                validationService: o,
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
                            prompt: "Enter your postal/ZIP code",
                            style: "form-control",
                            variable: a.createVariable(_.DataTypes.DataTypes.Text, m.getRealSignupAddressPostCode(), function(r) {
                                m.setRealSignupAddressPostCode(r)
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_PostCode"
                            },
                            _widgetRecordProvider: t
                        }))), n.createElement(g, {
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
                        }, n.createElement(se, {
                            enabled: !0,
                            isDefault: !0,
                            onClick: i(function() {
                                v.validateWidget(e.getId("AddressForm"));
                                var r = s.clone();
                                d.saveOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            style: "btn btn-primary ",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "25"
                            },
                            _widgetRecordProvider: t
                        }, u(y("w38dbPW8mUGI0DeQhHYdmg#Value", "Next"))))), n.createElement(me, {
                            showPopup: a.variables.isStateSelectionPopopOpenVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                uuid: "26"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "27"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(g, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "28"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(H, {
                            enabled: !0,
                            onClick: i(function() {
                                var r = s.clone();
                                d.closeStateSelectionPopupOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "29"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "30"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(T, {
                            extendedProperties: {
                                style: "font-size: 18px; font-weight: bold;"
                            },
                            style: "margin-left-base",
                            text: [u(y("8Pnh1OZ9xEqJ+TUX87m6BA#Value", "State/Province"))],
                            _idProps: {
                                service: e,
                                uuid: "31"
                            },
                            _widgetRecordProvider: t
                        })), n.createElement(H, {
                            enabled: !0,
                            onClick: i(function() {
                                var r = s.clone();
                                d.closeStateSelectionPopupOnClick$Action(d.callContext(r))
                            }, "onClick"),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "32"
                            },
                            _widgetRecordProvider: t
                        }, n.createElement(I, {
                            image: _.Navigation.VersionedURL.getVersionedUrl("img/tradershub.closeicon.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "33"
                            },
                            _widgetRecordProvider: t
                        }))), n.createElement(X, {
                            getOwnerSpan: i(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: i(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                StatesList: a.variables.stateListVar
                            },
                            events: {
                                _handleError: i(function(r) {
                                    d.handleError(r)
                                }, "_handleError"),
                                onClickCountry$Action: i(function(r, c) {
                                    var O = s.clone();
                                    d.stateSelectorOnClickCountry$Action(r, c, d.callContext(O))
                                }, "onClickCountry$Action")
                            },
                            _validationProps: {
                                validationService: o
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
                _dependencies: [p(a.variables.isStateSelectionPopopOpenVar), p(m.getRealSignupAddressPostCode()), p(m.getRealSignupAddressStateLabel()), p(m.getRealSignupAddressState()), p(a.variables.stateListVar), p(m.getRealSignupAddressTown()), p(m.getRealSignupAddress())]
            }))
        }
    };
i(P, "View");
var Q = P,
    lt = Q;
export {
    lt as
    default
};