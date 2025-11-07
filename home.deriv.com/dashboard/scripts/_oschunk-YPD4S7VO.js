import {
    h as P,
    i as T,
    q as k
} from "./_oschunk-O5KC3WOL.js";
import {
    a as W,
    g as _,
    m as O,
    o as H,
    q as F,
    r as x,
    s as A,
    t as w
} from "./_oschunk-NVHFAAS2.js";
import {
    a as I
} from "./_oschunk-AW35UT34.js";
import {
    Ga as v,
    Ka as D
} from "./_oschunk-WCMQG33O.js";
import {
    J as f,
    X as u,
    c as o,
    f as N
} from "./_oschunk-DFKJJKI4.js";
var i = u,
    g = class g extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Icon", "iconIn", "Icon", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_iconInDataFetchStatus", "_iconInDataFetchStatus", "_iconInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Text", "textIn", "Text", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_textInDataFetchStatus", "_textInDataFetchStatus", "_textInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsDisabled", "isDisabledIn", "IsDisabled", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", "_isDisabledInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
o(g, "VariablesRecord");
var m = g;
m.init();
var p = class p extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
o(p, "WidgetsRecord");
var C = p,
    E = class E extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return m
        }
        static getWidgetsRecordConstructor() {
            return C
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "Icon" in e && (this.variables.iconIn = e.Icon, "_iconInDataFetchStatus" in e && (this.variables._iconInDataFetchStatus = e._iconInDataFetchStatus)), "Text" in e && (this.variables.textIn = e.Text, "_textInDataFetchStatus" in e && (this.variables._textInDataFetchStatus = e._textInDataFetchStatus)), "IsDisabled" in e && (this.variables.isDisabledIn = e.IsDisabled, "_isDisabledInDataFetchStatus" in e && (this.variables._isDisabledInDataFetchStatus = e._isDisabledInDataFetchStatus))
        }
    };
o(E, "Model");
var y = E;
y._hasValidationWidgetsValue = void 0;
var R = new i.Model.ModelFactory(y);
var h = N(W());
var B = {};
var d = u; {
    let e = class e extends d.Controller.BaseViewController {
        constructor(t, r, n) {
            super(t, r, n, B);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClick$Action() {
            return this.hasOwnProperty("__onClick$Action") || (this.__onClick$Action = function(t) {
                var r = this.model,
                    n = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("OnClick", function(s) {
                    return s && (s.setAttribute("code.function", "OnClick"), s.setAttribute("outsystems.function.key", "fbe50bbb-f9f1-4bbd-b774-1641392b631a"), s.setAttribute("outsystems.function.owner.name", "dashboard"), s.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnClick"), t = n.callContext(t), d.Flow.executeAsyncFlow(function() {
                            return d.Flow.executeSequence(function() {
                                if (!r.variables.isDisabledIn) return n.onClickButton$Action(t)
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onClick$Action
        }
        set _onClick$Action(t) {
            this.__onClick$Action = t
        }
        onClick$Action(t) {
            var r = this.controller;
            return d.Logger.startActiveSpan("OnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnClick"), n.setAttribute("outsystems.function.key", "fbe50bbb-f9f1-4bbd-b774-1641392b631a"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onClick$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onClickButton$Action() {
            return this.hasOwnProperty("_onClickButton$Action") || (this._onClickButton$Action = function() {
                return Promise.resolve()
            }), this._onClickButton$Action
        }
        set onClickButton$Action(t) {
            this._onClickButton$Action = t
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
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
            return D.defaultTimeout
        }
    };
    o(e, "ControllerInner");
    let l = e;
    V = l
}
var V, $ = new d.Controller.ControllerFactory(V, I);
var _t = _.PlaceholderContent,
    Ct = _.IteratorPlaceholderContent,
    M = o(function() {
        var l = H(function(e) {
            var a = e.model,
                t = e.controller,
                r = e.controller.idService,
                n = t.validationService,
                c = t.callContext(),
                s = A,
                z = w,
                L = {
                    props: e,
                    validateWidget: o(function(b) {
                        e.validateWidget(e, b)
                    }, "validateWidget")
                },
                S = a,
                U = x,
                G = F,
                J = O();
            return h.createElement("div", e.rootNodeProperties, h.createElement(P, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: o(function() {
                        return Promise.resolve().then(function() {
                            var b = typeof c != "undefined" && c !== null ? c.clone() : t.callContext().clone();
                            return t.onClick$Action(t.callContext(b))
                        })
                    }, "onClick")
                },
                extendedProperties: {
                    style: "align-items: center; border-radius: 16px; display: flex; flex: 1 0 0; flex-direction: column; gap: 8px; padding: 16px;"
                },
                style: a.getCachedValue(r.getId("OptionsHeaderButtonContainer.Style"), function() {
                    return (a.variables.isDisabledIn ? "options-header-button-disabled" : "") + (v.isDesktop$Action(c).isDesktopOut ? " desktop-options-header-button" : "")
                }, function() {
                    return a.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: r,
                    name: "OptionsHeaderButtonContainer"
                },
                _widgetRecordProvider: S,
                style_dataFetchStatus: f.calculateDataFetchStatus(a.variables._isDisabledInDataFetchStatus)
            }, h.createElement(k, {
                style: a.getCachedValue(r.getId("38JRR69teUugPKW6Z1ghDw.Style"), function() {
                    return v.isDesktop$Action(c).isDesktopOut ? "desktop-image-size" : ""
                }),
                type: 1,
                url: a.variables.iconIn,
                _idProps: {
                    service: r,
                    uuid: "1"
                },
                _widgetRecordProvider: S,
                url_dataFetchStatus: f.calculateDataFetchStatus(a.variables._iconInDataFetchStatus)
            }), h.createElement(T, {
                extendedProperties: {
                    style: "color: #181C25; font-size: 12px;"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                style: a.getCachedValue(r.getId("73fBNClp8keARfNChGXJAg.Style"), function() {
                    return v.isDesktop$Action(c).isDesktopOut ? "desktop-text-size" : ""
                }),
                value: a.variables.textIn,
                _idProps: {
                    service: r,
                    uuid: "2"
                },
                _widgetRecordProvider: S,
                value_dataFetchStatus: f.calculateDataFetchStatus(a.variables._textInDataFetchStatus)
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: o(function() {
                return {
                    codeFunction: "TradeBottomSheetButton",
                    functionKey: "fbce581d-21dc-4e07-9420-da31266ce6ec",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OptionsTrading.TradeBottomSheetButton",
            modelFactory: R,
            controllerFactory: $
        });
        return l.getCssDependencies = function() {
            return ["css/dashboard.OptionsTrading.TradeBottomSheetButton.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return []
        }, l
    }, "componentFactory"),
    gt = M();
export {
    gt as a
};