import {
    a as I
} from "./_oschunk-3T2MUKOP.js";
import {
    h as O,
    j as U,
    k as G,
    l as j,
    r as q,
    s as K,
    t as Q
} from "./_oschunk-HUOHOHZB.js";
import {
    a as W
} from "./_oschunk-Y45M2O2K.js";
import {
    a as te,
    g as B,
    i as D
} from "./_oschunk-6LASTRK7.js";
import {
    d as M
} from "./_oschunk-27GDEXUT.js";
import {
    a as z
} from "./_oschunk-D2MH3QEK.js";
import {
    Db as S,
    Pd as R
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as g
} from "./_oschunk-NTQBNJ73.js";
import {
    a as F,
    b as k,
    c,
    g as ee
} from "./_oschunk-DVBKI63I.js";
var f = ee(te());
var l = g,
    E = class E extends l.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("FilteredResidenceList", "filteredResidenceListVar", "FilteredResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("SearchedResidence", "searchedResidenceVar", "SearchedResidence", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("CurrentResidence", "currentResidenceVar", "CurrentResidence", !0, !1, l.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("SortedResidenceList", "sortedResidenceListVar", "SortedResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("ResidenceList", "residenceListIn", "ResidenceList", !0, !1, l.DataTypes.DataTypes.RecordList, function() {
                return l.DataTypes.ImmutableBase.getData(new S)
            }, !1, S), this.attr("_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", "_residenceListInDataFetchStatus", !0, !1, l.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(l.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
c(E, "VariablesRecord");
var A = E;
A.init();
var P = class P extends l.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: l.Model.ValidationWidgetRecord
        }
    }
};
c(P, "WidgetsRecord");
var x = P,
    N = class N extends l.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return A
        }
        static getWidgetsRecordConstructor() {
            return x
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(s) {
            "ResidenceList" in s && (this.variables.residenceListIn = s.ResidenceList, "_residenceListInDataFetchStatus" in s && (this.variables._residenceListInDataFetchStatus = s._residenceListInDataFetchStatus))
        }
    };
c(N, "Model");
var T = N;
T._hasValidationWidgetsValue = void 0;
var X = new l.Model.ModelFactory(T);
var ne = {
        "v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1": "Rechercher",
        "eF3Njcn7SUegNqJnlBnmag#Value": "Champ de recherche"
    },
    Y = {
        "fr-FR": {
            translations: ne,
            isRTL: !1
        }
    };

function V(y, s, m, e) {
    var i;
    let n = JSON.parse((i = y.ResidenceList) != null ? i : JSON.stringify({})),
        t = JSON.stringify(k(F({}, n), {
            residence_list: n.filter(o => o.text.toLowerCase().includes(y.SearchedResidence.toLowerCase()))
        }));
    y.FilteredResidenceList = t
}
c(V, "default");

function $(y, s, m, e) {
    let n = JSON.parse(y.ResidenceList);
    n.sort((t, i) => t.value === y.CurrentResidence && t.disabled !== "DISABLED" ? -1 : 1), y.SortedResidenceList = JSON.stringify({
        residence_list: n
    })
}
c($, "default");
var r = g; {
    let s = class s extends r.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, Y);
            var i = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
                return r.Logger.startActiveSpan("OnSearch", function(u) {
                    u && (u.setAttribute("code.function", "OnSearch"), u.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05"), u.setAttribute("outsystems.function.owner.name", "tradershub"), u.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        i.ensureControllerAlive("OnSearch"), n = i.callContext(n);
                        var h = new r.DataTypes.VariableHolder(new(i.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars")));
                        h.value.searchedItemArgInLocal = e;
                        var b = new r.DataTypes.VariableHolder,
                            v = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            a = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        r.BuiltinFunctions.length(h.value.searchedItemArgInLocal) > 0 ? (v.value.jSONOut = r.JSONUtils.serializeToJSON(t.variables.residenceListIn, !1, !1), b.value = r.Logger.startActiveSpan("SearchCountry", function(d) {
                            d && (d.setAttribute("code.function", "SearchCountry"), d.setAttribute("outsystems.function.key", "7a1f9258-dca0-4f0b-b978-a43774a1fec3"), d.setAttribute("outsystems.function.owner.name", "tradershub"), d.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return i.safeExecuteJSNode(V, "SearchCountry", "OnSearch", {
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(v.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    SearchedResidence: r.DataConversion.JSNodeParamConverter.to(h.value.searchedItemArgInLocal, r.DataTypes.DataTypes.Text),
                                    FilteredResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(_) {
                                    var J = new(i.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult"));
                                    return J.filteredResidenceListOut = r.DataConversion.JSNodeParamConverter.from(_.FilteredResidenceList, r.DataTypes.DataTypes.Text), J
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), a.value.dataOut = r.JSONUtils.deserializeFromJSON(b.value.filteredResidenceListOut, R, !1), t.variables.filteredResidenceListVar = a.value.dataOut.residence_listAttr) : t.variables.filteredResidenceListVar = t.variables.sortedResidenceListVar
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnInitialize", function(o) {
                    o && (o.setAttribute("code.function", "OnInitialize"), o.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
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
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    i = this.idService;
                return r.Logger.startActiveSpan("OnReady", function(o) {
                    o && (o.setAttribute("code.function", "OnReady"), o.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f"), o.setAttribute("outsystems.function.owner.name", "tradershub"), o.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var u = new r.DataTypes.VariableHolder,
                            h = new r.DataTypes.VariableHolder,
                            b = new r.DataTypes.VariableHolder(new r.DataTypes.JSONSerializeOutputType),
                            v = new r.DataTypes.VariableHolder(new(r.Controller.BaseController.getJSONDeserializeOutputType(R)));
                        b.value.jSONOut = r.JSONUtils.serializeToJSON(n.variables.residenceListIn, !1, !1), h.value = r.Logger.startActiveSpan("JavaScript1", function(a) {
                            a && (a.setAttribute("code.function", "JavaScript1"), a.setAttribute("outsystems.function.key", "0a2ae31e-6b5a-4787-9df2-0bf5b668e89d"), a.setAttribute("outsystems.function.owner.name", "tradershub"), a.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), a.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode($, "JavaScript1", "OnReady", {
                                    ResidenceList: r.DataConversion.JSNodeParamConverter.to(b.value.jSONOut, r.DataTypes.DataTypes.Text),
                                    CurrentResidence: r.DataConversion.JSNodeParamConverter.to(n.variables.currentResidenceVar, r.DataTypes.DataTypes.Text),
                                    SortedResidenceList: r.DataConversion.JSNodeParamConverter.to("", r.DataTypes.DataTypes.Text)
                                }, function(d) {
                                    var _ = new(t.constructor.getVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult"));
                                    return _.sortedResidenceListOut = r.DataConversion.JSNodeParamConverter.from(d.SortedResidenceList, r.DataTypes.DataTypes.Text), _
                                }, {}, {})
                            } finally {
                                a && a.end()
                            }
                        }, 1), v.value.dataOut = r.JSONUtils.deserializeFromJSON(h.value.sortedResidenceListOut, R, !1), n.variables.filteredResidenceListVar = v.value.dataOut.residence_listAttr, n.variables.sortedResidenceListVar = v.value.dataOut.residence_listAttr, u.value = z.setFocus$Action(i.getId("Input_SearchedItem"), e)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onSearch$Action(e, n) {
            var t = this.controller;
            return r.Logger.startActiveSpan("OnSearch__proxy", function(i) {
                i && (i.setAttribute("code.function", "OnSearch"), i.setAttribute("outsystems.function.key", "2026693d-a035-4e07-bef6-f2c809f98b05"), i.setAttribute("outsystems.function.owner.name", "tradershub"), i.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, n, e)
                } finally {
                    i && i.end()
                }
            }, 0)
        }
        onInitialize$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "6b97c183-9128-4deb-be43-5bfe5ff23284"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return r.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "830927f6-a88e-450c-a3e3-1d768078bd0f"), t.setAttribute("outsystems.function.owner.name", "tradershub"), t.setAttribute("outsystems.function.owner.key", "2ad446d5-32d7-4fbf-959d-82d8325bcfbc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                } finally {
                    t && t.end()
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
            return M.defaultTimeout
        }
    };
    c(s, "ControllerInner");
    let y = s;
    C = y, C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$vars", [{
        name: "SearchedItemArg",
        attrName: "searchedItemArgInLocal",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnSearch$searchCountryJSResult", [{
        name: "FilteredResidenceList",
        attrName: "filteredResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }]), C.registerVariableGroupType("tradershub.Common.CountryOfTaxResidenceSelector.OnReady$javaScript1JSResult", [{
        name: "SortedResidenceList",
        attrName: "sortedResidenceListOut",
        mandatory: !0,
        dataType: r.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var C, Z = new r.Controller.ControllerFactory(C, W);
var L = g,
    w = D.PlaceholderContent,
    ie = D.IteratorPlaceholderContent,
    p = class p extends B.BaseWebBlock {
        static get displayName() {
            return "Common.CountryOfTaxResidenceSelector"
        }
        static getAttributes() {
            return {
                codeFunction: "CountryOfTaxResidenceSelector",
                functionKey: "04f5ac6c-5931-480d-8e1e-389c272225d8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.Common.CountryOfTaxResidenceSelector.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [I]
        }
        get modelFactory() {
            return X
        }
        get controllerFactory() {
            return Z
        }
        get title() {
            return ""
        }
        internalRender() {
            let s = this.model,
                m = this.controller,
                e = this.idService,
                n = m.validationService,
                t = this.widgetsRecordProvider,
                i = m.callContext(),
                o = p.ifWidget,
                u = p.textWidget,
                h = p.asPrimitiveValue,
                b = p.getTranslation,
                v = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(O, {
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
            }, f.createElement(I, {
                getOwnerSpan: c(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(a) {
                        m.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    input: new w(function() {
                        return [f.createElement(Q, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "wcag-hide-text",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, u(b("eF3Njcn7SUegNqJnlBnmag#Value", "Search input"))), f.createElement(K, {
                            _validationProps: {
                                validationService: n
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
                            onChange: c(function() {
                                var a = i.clone();
                                m.onSearch$Action(s.variables.searchedResidenceVar, m.callContext(a))
                            }, "onChange"),
                            prompt: L.Injector.resolve(L.ServiceNames.TranslationsService).getMessage("v7MCdtkPlk2rV9VAgeIqzA#ValueExpression.-1822469688.1", "Search"),
                            style: "form-control",
                            variable: s.createVariable(L.DataTypes.DataTypes.Text, s.variables.searchedResidenceVar, function(a) {
                                s.variables.searchedResidenceVar = a
                            }),
                            _idProps: {
                                service: e,
                                name: "Input_SearchedItem"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [h(s.variables.searchedResidenceVar)]
            }), f.createElement(O, {
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
            }, f.createElement(G, {
                animateItems: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: s.variables.filteredResidenceListVar,
                style: "list list-group residence-list ",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new ie(function(a, d) {
                        return [f.createElement(j, {
                            extendedProperties: {
                                style: "cursor: pointer; height: fit-content;"
                            },
                            onClick: c(function() {
                                var _ = d.clone();
                                m.onClickCountry$Action(s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).valueAttr, s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr, m.callContext(_))
                            }, "onClick"),
                            style: "margin-y-base",
                            triggerActionOnFullSwipeLeft: !0,
                            triggerActionOnFullSwipeRight: !0,
                            _idProps: {
                                service: a,
                                name: "ListItem1"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                leftActions: w.Empty,
                                content: new w(function() {
                                    return [f.createElement(O, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "align-items: center; display: flex; font-size: 18px; font-weight: bold; height: fit-content; justify-content: space-between;"
                                        },
                                        style: "display-flex justify-content-space-between full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: a,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: t
                                    }, f.createElement(U, {
                                        extendedProperties: {
                                            style: "font-size: 14px; font-weight: 400;"
                                        },
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr,
                                        _idProps: {
                                            service: a,
                                            uuid: "8"
                                        },
                                        _widgetRecordProvider: t
                                    }), f.createElement(q, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        image: L.Navigation.VersionedURL.getVersionedUrl("img/tradershub.iconarrow.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: a,
                                            uuid: "9"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                }),
                                rightActions: w.Empty
                            },
                            _dependencies: [h(s.variables.filteredResidenceListVar.getCurrent(d.iterationContext).textAttr)]
                        })]
                    }, i, e, "1")
                },
                _dependencies: []
            }))))
        }
    };
c(p, "View");
var H = p,
    Je = H;
export {
    Je as a
};