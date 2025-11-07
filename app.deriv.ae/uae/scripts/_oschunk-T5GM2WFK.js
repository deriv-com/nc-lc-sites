import {
    a as I
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as L
} from "./_oschunk-GONH5KKX.js";
import {
    a as T
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    f as _,
    h as x,
    i as X,
    j as Z,
    n as V,
    o as ee,
    p as te,
    u as re
} from "./_oschunk-VR5BNL2K.js";
import {
    a as ae,
    g as P,
    m as J,
    n as K,
    q as Q,
    r as Y,
    s as q,
    t as O
} from "./_oschunk-4VHUVDBV.js";
import {
    a as j
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    C as p,
    Sb as w,
    ub as v
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as d,
    e as oe,
    m as B,
    n as U,
    p as R,
    v as z
} from "./_oschunk-M5BUVJ72.js";
var se = {
        "vN8sstV4tU6Pc8Yelyf54g#ValueExpression.-1822469688.1": "\u0628\u062D\u062B",
        "blHJhre6DEiCdpt10Ok6oQ#Value": "\u0645\u0631\u0628\u0639 \u0627\u0644\u0628\u062D\u062B",
        "mww8coP4I0C3hVu3RvHkVg#Value": "\u0645\u0627 \u0647\u064A \u0628\u0644\u062F \u0625\u0642\u0627\u0645\u062A\u0643\u061F"
    },
    ne = {
        "ar-001": {
            translations: se,
            isRTL: !0
        }
    };
var i = S; {
    let m = class m extends i.Controller.BaseViewController {
        constructor(e, t, r) {
            super(e, t, r, ne);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onSearch$Action() {
            return this.hasOwnProperty("__onSearch$Action") || (this.__onSearch$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnSearch", function(n) {
                    n && (n.setAttribute("code.function", "OnSearch"), n.setAttribute("outsystems.function.key", "18c3512c-afb8-4eb8-8536-83f61b4b5084"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        r.ensureControllerAlive("OnSearch"), e = r.callContext(e);
                        var u = new i.DataTypes.VariableHolder;
                        u.value = i.SystemActions.listFilter(t.variables.country_listVar, function(g) {
                            return i.BuiltinFunctions.length(t.variables.country_search_inputVar) > 1 ? i.BuiltinFunctions.index(i.BuiltinFunctions.toLower(g.nameAttr), i.BuiltinFunctions.toLower(t.variables.country_search_inputVar), 0, !1, !1) > -1 : !0
                        }, e), t.variables.filtered_country_listVar = u.value.filteredListOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onSearch$Action
        }
        set _onSearch$Action(e) {
            this.__onSearch$Action = e
        }
        get _onSelectResidence$Action() {
            return this.hasOwnProperty("__onSelectResidence$Action") || (this.__onSelectResidence$Action = function(e, t) {
                var r = this.model,
                    c = this.controller,
                    n = this.idService;
                return i.Logger.startActiveSpan("OnSelectResidence", function(u) {
                    u && (u.setAttribute("code.function", "OnSelectResidence"), u.setAttribute("outsystems.function.key", "2e7a4185-e474-47fb-a786-97a47ddddc82"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        c.ensureControllerAlive("OnSelectResidence"), t = c.callContext(t);
                        var g = new i.DataTypes.VariableHolder(new(c.constructor.getVariableGroupType("uae.OnboardingFlow.ResidenceSelection.OnSelectResidence$vars")));
                        if (g.value.selected_countryInLocal = e.clone(), !g.value.selected_countryInLocal.client_restrictedAttr) return v.setresidence(g.value.selected_countryInLocal.alpha2Attr), v.setresidence_fullname_en(g.value.selected_countryInLocal.nameAttr), i.Navigation.navigateTo(i.Navigation.generateScreenURL("uae", "home", {}), i.Transitions.createTransition(i.Transitions.TransitionAnimation.None), t, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__onSelectResidence$Action
        }
        set _onSelectResidence$Action(e) {
            this.__onSelectResidence$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("OnReady", function(n) {
                    return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "62dc2b47-c81a-43ea-8d3c-f49351eeb167"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnReady"), e = r.callContext(e), i.Flow.executeAsyncFlow(function() {
                            return r._fetchCountryList$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _fetchCountryList$Action() {
            return this.hasOwnProperty("__fetchCountryList$Action") || (this.__fetchCountryList$Action = function(e) {
                var t = this.model,
                    r = this.controller,
                    c = this.idService;
                return i.Logger.startActiveSpan("FetchCountryList", function(n) {
                    return n && (n.setAttribute("code.function", "FetchCountryList"), n.setAttribute("outsystems.function.key", "df5caecf-b65e-4858-b873-e0a966a7051d"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                        r.ensureControllerAlive("FetchCountryList"), e = r.callContext(e);
                        var u = new i.DataTypes.VariableHolder,
                            g = new i.DataTypes.VariableHolder;
                        return i.Flow.executeAsyncFlow(function() {
                            return t.variables.is_loadingVar = !0, t.flush(), w.getCountryListCache$Action(e).then(function(o) {
                                g.value = o
                            }).then(function() {
                                t.variables.is_loadingVar = !1, t.variables.country_listVar = g.value.countries_listOut, u.value = i.SystemActions.listFilter(g.value.countries_listOut, function(o) {
                                    return o.client_enabledAttr
                                }, e), t.variables.filtered_country_listVar = t.variables.country_listVar
                            })
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__fetchCountryList$Action
        }
        set _fetchCountryList$Action(e) {
            this.__fetchCountryList$Action = e
        }
        onSearch$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnSearch__proxy", function(r) {
                r && (r.setAttribute("code.function", "OnSearch"), r.setAttribute("outsystems.function.key", "18c3512c-afb8-4eb8-8536-83f61b4b5084"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._onSearch$Action, e)
                } finally {
                    r && r.end()
                }
            }, 0)
        }
        onSelectResidence$Action(e, t) {
            var r = this.controller;
            return i.Logger.startActiveSpan("OnSelectResidence__proxy", function(c) {
                c && (c.setAttribute("code.function", "OnSelectResidence"), c.setAttribute("outsystems.function.key", "2e7a4185-e474-47fb-a786-97a47ddddc82"), c.setAttribute("outsystems.function.owner.name", "uae"), c.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), c.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return r.safeExecuteClientAction(r._onSelectResidence$Action, t, e)
                } finally {
                    c && c.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("OnReady__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "62dc2b47-c81a-43ea-8d3c-f49351eeb167"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._onReady$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        fetchCountryList$Action(e) {
            var t = this.controller;
            return i.Logger.startActiveSpan("FetchCountryList__proxy", function(r) {
                return r && (r.setAttribute("code.function", "FetchCountryList"), r.setAttribute("outsystems.function.key", "df5caecf-b65e-4858-b873-e0a966a7051d"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), i.Flow.tryFinally(function() {
                    return t.safeExecuteClientAction(t._fetchCountryList$Action, e)
                }, function() {
                    r && r.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var t = this.controller,
                    r = this.model,
                    c = this.idService;
                return t.onReady$Action(e)
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(e) {
                return I.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return w.defaultTimeout
        }
    };
    d(m, "ControllerInner");
    let h = m;
    H = h, H.registerVariableGroupType("uae.OnboardingFlow.ResidenceSelection.OnSelectResidence$vars", [{
        name: "selected_country",
        attrName: "selected_countryInLocal",
        mandatory: !0,
        dataType: i.DataTypes.DataTypes.Record,
        defaultValue: d(function() {
            return new p
        }, "defaultValue"),
        complexType: p
    }])
}
var H, F = new i.Controller.ControllerFactory(H, j);
var a = oe(ae());
var f = S,
    D = class D extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("is_loading", "is_loadingVar", "is_loading", !0, !1, f.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("country_list", "country_listVar", "country_list", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new(f.GenericTypeCache.getGenericList(p)))
            }, !1, f.GenericTypeCache.getGenericList(p)), this.attr("filtered_country_list", "filtered_country_listVar", "filtered_country_list", !0, !1, f.DataTypes.DataTypes.RecordList, function() {
                return f.DataTypes.ImmutableBase.getData(new(f.GenericTypeCache.getGenericList(p)))
            }, !1, f.GenericTypeCache.getGenericList(p)), this.attr("country_search_input", "country_search_inputVar", "country_search_input", !0, !1, f.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1)].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
d(D, "VariablesRecord");
var C = D;
C.init();
var W = class W extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            Input_SearchedItem: f.Model.ValidationWidgetRecord
        }
    }
};
d(W, "WidgetsRecord");
var N = W,
    k = class k extends f.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return C
        }
        static getWidgetsRecordConstructor() {
            return N
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(m) {}
    };
d(k, "Model");
var E = k;
E._hasValidationWidgetsValue = void 0;
var $ = new f.Model.ModelFactory(E);
var b = P.PlaceholderContent,
    le = P.IteratorPlaceholderContent,
    de = d(function() {
        var h = K(function(m) {
            var s = m.model,
                e = m.controller,
                t = m.controller.idService,
                r = e.validationService,
                c = e.callContext(),
                n = q,
                u = O,
                g = {
                    props: m,
                    validateWidget: d(function(l) {
                        m.validateWidget(m, l)
                    }, "validateWidget")
                },
                o = s,
                M = Y,
                G = Q,
                A = J();
            return a.createElement("div", m.rootNodeProperties, a.createElement(T, {
                getOwnerSpan: d(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: d(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    back_destination: "otp",
                    has_back_button: !0
                },
                events: {
                    _handleError: d(function(l) {
                        e.handleError(l)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: t,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new b(function() {
                        return [a.createElement(_, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: t,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 24px;"
                            },
                            style: "heading",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "PageHeading"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(re, {
                            extendedProperties: {
                                style: "color: var(--text-brandPrimaryProminent, #00375C); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal;"
                            },
                            text: [G(u("mww8coP4I0C3hVu3RvHkVg#Value", "What\u2019s your country of residence?"))],
                            _idProps: {
                                service: t,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        })), a.createElement(_, {
                            align: 0,
                            animate: !1,
                            style: "currency-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "ListContainer"
                            },
                            _widgetRecordProvider: o
                        }, a.createElement(L, {
                            getOwnerSpan: d(function() {
                                return A.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: d(function() {
                                return A.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: d(function(l) {
                                    e.handleError(l)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: r
                            },
                            _idProps: {
                                service: t,
                                uuid: "5",
                                alias: "2"
                            },
                            _widgetRecordProvider: o,
                            placeholders: {
                                input: new b(function() {
                                    return [a.createElement(te, {
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        style: "wcag-hide-text",
                                        _idProps: {
                                            service: t,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: o
                                    }, G(u("blHJhre6DEiCdpt10Ok6oQ#Value", "Search input"))), a.createElement(ee, {
                                        _validationProps: {
                                            validationService: r
                                        },
                                        enabled: !0,
                                        extendedProperties: {
                                            style: "font-size: 14px; margin-bottom: 16px; margin-top: 16px;"
                                        },
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        inputType: 8,
                                        mandatory: !1,
                                        maxLength: 0,
                                        onChange: d(function() {
                                            var l = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                            e.onSearch$Action(e.callContext(l))
                                        }, "onChange"),
                                        prompt: B.resolve(U.TranslationsService).getMessage("vN8sstV4tU6Pc8Yelyf54g#ValueExpression.-1822469688.1", "Search"),
                                        style: "form-control",
                                        variable: s.createVariable(z.DataTypes.Text, s.variables.country_search_inputVar, function(l) {
                                            s.variables.country_search_inputVar = l
                                        }),
                                        _idProps: {
                                            service: t,
                                            name: "Input_SearchedItem"
                                        },
                                        _widgetRecordProvider: o
                                    })]
                                })
                            },
                            _dependencies: [n(s.variables.country_search_inputVar)]
                        }), a.createElement(_, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 8px; margin-top: 16px;"
                            },
                            gridProperties: {
                                marginLeft: "8px"
                            },
                            style: "category-container",
                            visible: !0,
                            _idProps: {
                                service: t,
                                name: "Container"
                            },
                            _widgetRecordProvider: o
                        }, M(s.variables.is_loadingVar, !1, this, function() {
                            return [a.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "align-items: center; display: flex; flex-direction: column; gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "animate-pulse w-full currency list-container",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "LoaderContainer"
                                },
                                _widgetRecordProvider: o
                            }, a.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ListItemPlaceholder2"
                                },
                                _widgetRecordProvider: o
                            }), a.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ListItemPlaceholder3"
                                },
                                _widgetRecordProvider: o
                            }), a.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ListItemPlaceholder4"
                                },
                                _widgetRecordProvider: o
                            }), a.createElement(_, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "background: #e5e7eb; border-radius: 8px; height: 56px;"
                                },
                                gridProperties: {
                                    classes: "OSInline"
                                },
                                style: "w-full",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    name: "ListItemPlaceholder5"
                                },
                                _widgetRecordProvider: o
                            }))]
                        }, function() {
                            return [a.createElement(X, {
                                animateItems: !0,
                                extendedProperties: {
                                    style: "display: flex; flex-direction: column; row-gap: 8px;"
                                },
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: s.variables.filtered_country_listVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: t,
                                    name: "Container2"
                                },
                                _widgetRecordProvider: o,
                                placeholders: {
                                    content: new le(function(l, y) {
                                        return [a.createElement(Z, {
                                            extendedProperties: {
                                                className: s.getCachedValue(l.getId("ListItem1.class"), function() {
                                                    return s.variables.filtered_country_listVar.getCurrent(y.iterationContext).alpha2Attr === v.getresidence() ? "item item-selected" : "item"
                                                }, function() {
                                                    return s.variables.filtered_country_listVar.getCurrent(y.iterationContext).alpha2Attr
                                                }, function() {
                                                    return v.getresidence()
                                                }),
                                                "data-disabled": s.getCachedValue(l.getId("ListItem1.data-disabled"), function() {
                                                    return s.variables.filtered_country_listVar.getCurrent(y.iterationContext).client_restrictedAttr ? "True" : "False"
                                                }, function() {
                                                    return s.variables.filtered_country_listVar.getCurrent(y.iterationContext).client_restrictedAttr
                                                })
                                            },
                                            onClick: d(function() {
                                                var ie = typeof y != "undefined" && y !== null ? y.clone() : e.callContext().clone();
                                                e.onSelectResidence$Action(s.variables.filtered_country_listVar.getCurrent(y.iterationContext), e.callContext(ie))
                                            }, "onClick"),
                                            style: '"list-item"',
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: l,
                                                name: "ListItem1"
                                            },
                                            _widgetRecordProvider: o,
                                            placeholders: {
                                                leftActions: b.Empty,
                                                content: new b(function() {
                                                    return [a.createElement(_, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; align-self: stretch; display: flex; gap: 16px;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "100%"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "16"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, a.createElement(_, {
                                                        align: 0,
                                                        animate: !1,
                                                        gridProperties: {
                                                            classes: "OSInline"
                                                        },
                                                        style: "flex align-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "17"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, a.createElement(x, {
                                                        extendedProperties: {
                                                            style: "font-size: 24px;"
                                                        },
                                                        value: s.variables.filtered_country_listVar.getCurrent(y.iterationContext).emojiAttr,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "18"
                                                        },
                                                        _widgetRecordProvider: o
                                                    })), a.createElement(x, {
                                                        gridProperties: {
                                                            marginLeft: "0"
                                                        },
                                                        value: s.variables.filtered_country_listVar.getCurrent(y.iterationContext).nameAttr,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "19"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }), a.createElement(_, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "align-items: center; display: flex; justify-content: center;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "32px",
                                                            marginLeft: "auto"
                                                        },
                                                        visible: !0,
                                                        _idProps: {
                                                            service: l,
                                                            uuid: "20"
                                                        },
                                                        _widgetRecordProvider: o
                                                    }, M(s.variables.filtered_country_listVar.getCurrent(y.iterationContext).alpha2Attr === v.getresidence(), !1, this, function() {
                                                        return [a.createElement(V, {
                                                            image: R.VersionedURL.getVersionedUrl("img/uae.circlecheck.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: l,
                                                                uuid: "21"
                                                            },
                                                            _widgetRecordProvider: o
                                                        })]
                                                    }, function() {
                                                        return [a.createElement(V, {
                                                            image: R.VersionedURL.getVersionedUrl("img/uae.chevronright.svg"),
                                                            type: 0,
                                                            _idProps: {
                                                                service: l,
                                                                uuid: "22"
                                                            },
                                                            _widgetRecordProvider: o
                                                        })]
                                                    })))]
                                                }),
                                                rightActions: b.Empty
                                            },
                                            _dependencies: [n(v.getresidence()), n(s.variables.filtered_country_listVar.getCurrent(y.iterationContext).alpha2Attr), n(s.variables.filtered_country_listVar.getCurrent(y.iterationContext).nameAttr), n(s.variables.filtered_country_listVar.getCurrent(y.iterationContext).emojiAttr)]
                                        })]
                                    }, c, t, "1")
                                },
                                _dependencies: [n(v.getresidence())]
                            })]
                        }))))]
                    }),
                    footer: b.Empty
                },
                _dependencies: [n(v.getresidence()), n(s.variables.filtered_country_listVar), n(s.variables.is_loadingVar), n(s.variables.country_search_inputVar)]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: d(function() {
                return {
                    codeFunction: "ResidenceSelection",
                    functionKey: "3c315151-5663-4992-a3fe-ac74bf6a2032",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.ResidenceSelection",
            modelFactory: $,
            controllerFactory: F,
            getTitle: d(function() {
                return O("UVExPGNWkkmj_qx0v2ogMg#Title", "ResidenceSelection")
            }, "getTitle")
        });
        return h.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.OnboardingFlow.ResidenceSelection.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, h.getJsDependencies = function() {
            return []
        }, h.getBlocks = function() {
            return [T, L]
        }, h
    }, "componentFactory"),
    ue = de();
export {
    F as controllerModule, $ as modelModule, ue as viewModule, I as webFlowControllerModule
};