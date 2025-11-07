import {
    a as I,
    c as C
} from "./_oschunk-I5JGASAI.js";
import {
    a as V,
    f as _
} from "./_oschunk-VR5BNL2K.js";
import {
    a as K,
    g as E,
    m as D,
    o as F,
    q as P,
    r as T,
    s as $,
    t as M
} from "./_oschunk-4VHUVDBV.js";
import {
    a as H
} from "./_oschunk-KXORGPRQ.js";
import {
    Qb as y,
    Sb as R
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as S,
    c as a,
    e as G
} from "./_oschunk-M5BUVJ72.js";
var l = G(K());
var u = S,
    O = class O extends u.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("ActiveItem", "activeItemIn", "ActiveItem", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return -1
            }, !1), this.attr("_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", "_activeItemInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ActiveSubItem", "activeSubItemIn", "ActiveSubItem", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return -1
            }, !1), this.attr("_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", "_activeSubItemInDataFetchStatus", !0, !1, u.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(u.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
a(O, "VariablesRecord");
var b = O;
b.init();
var p = class p extends u.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
a(p, "WidgetsRecord");
var w = p,
    h = class h extends u.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return w
        }
        static get hasValidationWidgets() {
            return h._hasValidationWidgetsValue === void 0 && (h._hasValidationWidgetsValue = void 0 || void 0), h._hasValidationWidgetsValue
        }
        setInputs(i) {
            "ActiveItem" in i && (this.variables.activeItemIn = i.ActiveItem, "_activeItemInDataFetchStatus" in i && (this.variables._activeItemInDataFetchStatus = i._activeItemInDataFetchStatus)), "ActiveSubItem" in i && (this.variables.activeSubItemIn = i.ActiveSubItem, "_activeSubItemInDataFetchStatus" in i && (this.variables._activeSubItemInDataFetchStatus = i._activeSubItemInDataFetchStatus))
        }
    };
a(h, "Model");
var g = h;
g._hasValidationWidgetsValue = void 0;
var L = new u.Model.ModelFactory(g);
var k = {};
var o = S; {
    let i = class i extends o.Controller.BaseViewController {
        constructor(e, n, t) {
            super(e, n, t, k);
            var s = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onRender$Action() {
            return this.hasOwnProperty("__onRender$Action") || (this.__onRender$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnRender", function(r) {
                    return r && (r.setAttribute("code.function", "OnRender"), r.setAttribute("outsystems.function.key", "663c0ab9-8ace-4453-a696-2883195a0480"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnRender"), e = t.callContext(e);
                        var f = new o.DataTypes.VariableHolder,
                            m = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), y.setMenuListeners$Action("", e).then(function(c) {
                                m.value = c
                            }).then(function() {
                                return n.flush(), y.setActiveMenuItems$Action("", n.variables.activeItemIn, n.variables.activeSubItemIn, e).then(function(c) {
                                    f.value = c
                                })
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onRender$Action
        }
        set _onRender$Action(e) {
            this.__onRender$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnReady", function(r) {
                    return r && (r.setAttribute("code.function", "OnReady"), r.setAttribute("outsystems.function.key", "70c07a28-a7f4-4678-92fd-b7fb100cd9fb"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var f = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), y.menuReady$Action(null, e).then(function(m) {
                                f.value = m
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _hideMenu$Action() {
            return this.hasOwnProperty("__hideMenu$Action") || (this.__hideMenu$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("HideMenu", function(r) {
                    return r && (r.setAttribute("code.function", "HideMenu"), r.setAttribute("outsystems.function.key", "745b3af9-3377-42ce-8564-04895cbed2c8"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("HideMenu"), e = t.callContext(e);
                        var f = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), y.toggleSideMenu$Action(e).then(function(m) {
                                f.value = m
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__hideMenu$Action
        }
        set _hideMenu$Action(e) {
            this.__hideMenu$Action = e
        }
        get _onDestroy$Action() {
            return this.hasOwnProperty("__onDestroy$Action") || (this.__onDestroy$Action = function(e) {
                var n = this.model,
                    t = this.controller,
                    s = this.idService;
                return o.Logger.startActiveSpan("OnDestroy", function(r) {
                    return r && (r.setAttribute("code.function", "OnDestroy"), r.setAttribute("outsystems.function.key", "94227e5e-7cee-4096-ad6a-a98c44c36616"), r.setAttribute("outsystems.function.owner.name", "uae"), r.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnDestroy"), e = t.callContext(e);
                        var f = new o.DataTypes.VariableHolder;
                        return o.Flow.executeAsyncFlow(function() {
                            return n.flush(), y.menuDestroy$Action(e).then(function(m) {
                                f.value = m
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__onDestroy$Action
        }
        set _onDestroy$Action(e) {
            this.__onDestroy$Action = e
        }
        onRender$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnRender__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnRender"), t.setAttribute("outsystems.function.key", "663c0ab9-8ace-4453-a696-2883195a0480"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onRender$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onReady$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "70c07a28-a7f4-4678-92fd-b7fb100cd9fb"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onReady$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        hideMenu$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("HideMenu__proxy", function(t) {
                return t && (t.setAttribute("code.function", "HideMenu"), t.setAttribute("outsystems.function.key", "745b3af9-3377-42ce-8564-04895cbed2c8"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._hideMenu$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onDestroy$Action(e) {
            var n = this.controller;
            return o.Logger.startActiveSpan("OnDestroy__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnDestroy"), t.setAttribute("outsystems.function.key", "94227e5e-7cee-4096-ad6a-a98c44c36616"), t.setAttribute("outsystems.function.owner.name", "uae"), t.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onDestroy$Action, e)
                }, function() {
                    t && t.end()
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
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onReady$Action(e)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(e) {
            this._onReadyEventHandler = e
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onRender$Action(e)
            }), this._onRenderEventHandler
        }
        set onRenderEventHandler(e) {
            this._onRenderEventHandler = e
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onDestroy$Action(e)
            }), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(e) {
            this._onDestroyEventHandler = e
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var n = this.controller,
                    t = this.model,
                    s = this.idService;
                return n.onRender$Action(e)
            }), this._onParametersChangedEventHandler
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
                return controller.handleError(e)
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return R.defaultTimeout
        }
    };
    a(i, "ControllerInner");
    let d = i;
    W = d
}
var W, U = new o.Controller.ControllerFactory(W, H);
var pe = E.PlaceholderContent,
    Re = E.IteratorPlaceholderContent,
    J = a(function() {
        var d = F(function(i) {
            var z = i.model,
                e = i.controller,
                n = i.controller.idService,
                t = e.validationService,
                s = e.callContext(),
                r = $,
                f = M,
                m = {
                    props: i,
                    validateWidget: a(function(v) {
                        i.validateWidget(i, v)
                    }, "validateWidget")
                },
                c = z,
                B = T,
                j = P,
                A = D();
            return l.createElement("div", i.rootNodeProperties, l.createElement(V, {
                extendedProperties: {
                    className: "app-menu-content display-flex",
                    role: "navigation"
                },
                tag: "nav",
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, l.createElement(_, {
                align: 0,
                animate: !1,
                style: "header-logo ph",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: c
            }, B(!1, !1, this, function() {
                return []
            }, function() {
                return [l.createElement(I, {
                    getOwnerSpan: a(function() {
                        return A.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: a(function() {
                        return A.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: a(function(v) {
                            e.handleError(v)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: t
                    },
                    _idProps: {
                        service: n,
                        uuid: "2",
                        alias: "1"
                    },
                    _widgetRecordProvider: c,
                    _dependencies: []
                })]
            })), l.createElement(_, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    role: "menubar"
                },
                style: "app-menu-links",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "PageLinks"
                },
                _widgetRecordProvider: c
            }), l.createElement(_, {
                align: 0,
                animate: !1,
                style: "app-login-info ph",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "LoginInfo"
                },
                _widgetRecordProvider: c
            }, l.createElement(C, {
                getOwnerSpan: a(function() {
                    return A.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return A.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: a(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: t
                },
                _idProps: {
                    service: n,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: c,
                _dependencies: []
            }))), l.createElement(_, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var v = typeof s != "undefined" && s !== null ? s.clone() : e.callContext().clone();
                            return e.hideMenu$Action(e.callContext(v))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    role: "button"
                },
                style: "app-menu-overlay",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: c
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: a(function() {
                return {
                    codeFunction: "Menu",
                    functionKey: "9f7a690d-5e1e-450f-ace4-494fef971f81",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.Menu",
            modelFactory: L,
            controllerFactory: U
        });
        return d.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, d.getJsDependencies = function() {
            return []
        }, d.getBlocks = function() {
            return [I, C]
        }, d
    }, "componentFactory"),
    He = J();
export {
    He as a
};