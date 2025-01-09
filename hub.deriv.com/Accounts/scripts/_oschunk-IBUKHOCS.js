import {
    d as C,
    f as S,
    k as T
} from "./_oschunk-M2CKCDBB.js";
import {
    a as p
} from "./_oschunk-NQZZDANH.js";
import {
    a as P,
    g as E,
    i as m
} from "./_oschunk-WZHUAZJP.js";
import {
    a as R
} from "./_oschunk-NRRLMT6C.js";
import {
    o as b
} from "./_oschunk-KZFTAIEG.js";
import {
    a as _,
    ck as y
} from "./_oschunk-UATY3RVV.js";
import {
    ia as f
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l,
    h as M
} from "./_oschunk-QHO7QY6K.js";
var u = M(P());
var n = f; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get getMessageType$ServerAction() {
            return this.hasOwnProperty("_getMessageType$ServerAction") || (this._getMessageType$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetMessageType", function(o) {
                    return o && (o.setAttribute("code.function", "GetMessageType"), o.setAttribute("outsystems.function.key", "ff51ddb2-fce9-46fd-9b8e-2e806b393a38.#GetEntity"), o.setAttribute("outsystems.function.owner.name", "Accounts"), o.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), o.setAttribute("outsystems.function.type", "CLIENT_ENTITY_ACTION")), n.Flow.tryFinally(function() {
                        var s = {
                            Id: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Text)
                        };
                        return t.callServerAction("GetMessageType", "screenservices/Accounts/Common/MessageBanner2/ssGetMessageType", "1hOWIxemOFBw57Zx53hZ8w", s, t.callContext(r), void 0, void 0, !1).then(function(c) {
                            var d = new(t.constructor.getVariableGroupType("Accounts.Common.MessageBanner2$ssGetMessageType"));
                            return d.recordOut = n.DataConversion.ServerDataConverter.from(c.Record, y), d
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getMessageType$ServerAction
        }
        set getMessageType$ServerAction(e) {
            this._getMessageType$ServerAction = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var r = this.model,
                    t = this.controller,
                    o = this.idService;
                return n.Logger.startActiveSpan("OnReady", function(s) {
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "ddbdd88b-e451-4f57-83fa-bffe59c768d4"), s.setAttribute("outsystems.function.owner.name", "Accounts"), s.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var c = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.flush(), t.getMessageType$ServerAction(n.BuiltinFunctions.textToIdentifier(r.variables.typeIn), e).then(function(d) {
                                c.value = d
                            }).then(function() {
                                r.variables.bannerConfigVar = c.value.recordOut.messageTypeAttr
                            })
                        })
                    }, function() {
                        s && s.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        onReady$Action(e) {
            var r = this.controller;
            return n.Logger.startActiveSpan("OnReady__proxy", function(t) {
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "ddbdd88b-e451-4f57-83fa-bffe59c768d4"), t.setAttribute("outsystems.function.owner.name", "Accounts"), t.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, e)
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
                var r = this.controller,
                    t = this.model,
                    o = this.idService;
                return r.onReady$Action(e)
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
    l(a, "ControllerInner");
    let h = a;
    v = h, v.registerVariableGroupType("Accounts.Common.MessageBanner2$ssGetMessageType", [{
        name: "Record",
        attrName: "recordOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: l(function() {
            return new y
        }, "defaultValue"),
        complexType: y
    }])
}
var v, O = new n.Controller.ControllerFactory(v, p);
var w = f,
    J = m.PlaceholderContent,
    Q = m.IteratorPlaceholderContent,
    i = class i extends E.BaseWebBlock {
        static get displayName() {
            return "Common.MessageBanner2"
        }
        static getAttributes() {
            return {
                codeFunction: "MessageBanner2",
                functionKey: "5f132009-98e1-44b2-836a-1028a95635ac",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.MessageBanner2.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return R
        }
        get controllerFactory() {
            return O
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                A = this.controller,
                e = this.idService,
                r = A.validationService,
                t = this.widgetsRecordProvider,
                o = A.callContext(),
                s = i.ifWidget,
                c = i.textWidget,
                d = i.asPrimitiveValue,
                F = i.getTranslation,
                D = this;
            return u.createElement("div", this.getRootNodeProperties(), u.createElement(C, {
                align: 0,
                animate: !1,
                style: a.getCachedValue(e.getId("rsMQ1b9FLEGO1CM59ZbdnA.Style"), function() {
                    return "display-flex padding-s banner-message-layout font-size-xs " + (a.variables.typeIn === _.messageType.error ? "error-banner" : "")
                }, function() {
                    return a.variables.typeIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: w.Model.calculateDataFetchStatus(a.variables._typeInDataFetchStatus)
            }, u.createElement(T, {
                type: 1,
                url: a.variables.bannerConfigVar.iconAttr,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }), u.createElement(S, {
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                style: "align-self-center",
                value: a.variables.textIn,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: w.Model.calculateDataFetchStatus(a.variables._textInDataFetchStatus)
            })))
        }
    };
l(i, "View");
var g = i,
    Y = g;
export {
    Y as a
};