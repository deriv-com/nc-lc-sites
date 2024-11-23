import {
    a as p
} from "./_oschunk-AP2LGV3I.js";
import {
    n as W
} from "./_oschunk-OO36B6PN.js";
import {
    a as T
} from "./_oschunk-6WALBPGV.js";
import {
    a as L,
    g as O,
    i as A
} from "./_oschunk-IL57OEHH.js";
import {
    p as V
} from "./_oschunk-DW3HXDMW.js";
import {
    Xc as d,
    od as w,
    pd as f
} from "./_oschunk-JXJHSAQS.js";
import {
    ia as g
} from "./_oschunk-5KJVGEL7.js";
import {
    c as i,
    h as $
} from "./_oschunk-QHO7QY6K.js";
var S = $(L());
var c = g,
    D = class D extends c.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("EventImages", "eventImagesVar", "EventImages", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new d)
            }, !1, d), this.attr("IsLoading", "isLoadingVar", "IsLoading", !0, !1, c.DataTypes.DataTypes.Boolean, function() {
                return !0
            }, !1), this.attr("EventDetails", "eventDetailsIn", "EventDetails", !0, !1, c.DataTypes.DataTypes.Record, function() {
                return c.DataTypes.ImmutableBase.getData(new f)
            }, !1, f), this.attr("_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", "_eventDetailsInDataFetchStatus", !0, !1, c.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(c.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
i(D, "VariablesRecord");
var b = D;
b.init();
var C = class C extends c.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
i(C, "WidgetsRecord");
var I = C,
    m = class m extends c.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return b
        }
        static getWidgetsRecordConstructor() {
            return I
        }
        static get hasValidationWidgets() {
            return m._hasValidationWidgetsValue === void 0 && (m._hasValidationWidgetsValue = void 0), m._hasValidationWidgetsValue
        }
        setInputs(a) {
            "EventDetails" in a && (this.variables.eventDetailsIn = a.EventDetails, "_eventDetailsInDataFetchStatus" in a && (this.variables._eventDetailsInDataFetchStatus = a._eventDetailsInDataFetchStatus))
        }
    };
i(m, "Model");
var y = m;
y._hasValidationWidgetsValue = void 0;
var N = new c.Model.ModelFactory(y);
var x = {};
var n = g; {
    let a = class a extends n.Controller.BaseViewController {
        constructor(e, r, t) {
            super(e, r, t, x);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get getImage$ServerAction() {
            return this.hasOwnProperty("_getImage$ServerAction") || (this._getImage$ServerAction = function(e, r) {
                var t = this.controller;
                return n.Logger.startActiveSpan("GetImage", function(o) {
                    return o && (o.setAttribute("code.function", "GetImage"), o.setAttribute("outsystems.function.key", "e685222a-663e-4f5c-820d-16fd548ee409"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "SCREEN_SERVICE_SERVER_ACTION_CALL")), n.Flow.tryFinally(function() {
                        var s = {
                            BucketObject: n.DataConversion.ServerDataConverter.to(e, n.DataTypes.DataTypes.Record)
                        };
                        return t.callServerAction("GetImage", "screenservices/PartnersHub/Events/EventBannerImage/ActionGetImage", "ULoHOeBreyU_Ww8a99xVaw", s, t.callContext(r), void 0, void 0, !0).then(function(v) {
                            var l = new(t.constructor.getVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage"));
                            return l.eventImagesOut = n.DataConversion.ServerDataConverter.from(v.EventImages, d), l
                        })
                    }, function() {
                        o && o.end()
                    })
                }, 0)
            }), this._getImage$ServerAction
        }
        set getImage$ServerAction(e) {
            this._getImage$ServerAction = e
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
                    return s && (s.setAttribute("code.function", "OnReady"), s.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e);
                        var v = new n.DataTypes.VariableHolder;
                        return n.Flow.executeAsyncFlow(function() {
                            return r.flush(), t.getImage$ServerAction(function() {
                                var l = new f;
                                return l.idAttr = r.variables.eventDetailsIn.idAttr, l.fileNamesAttr = function() {
                                    var h = new w;
                                    return h.desktopImageNameAttr = r.variables.eventDetailsIn.fileNamesAttr.desktopImageNameAttr, h.mobileImageNameAttr = r.variables.eventDetailsIn.fileNamesAttr.mobileImageNameAttr, h
                                }(), l
                            }(), e).then(function(l) {
                                v.value = l
                            }).then(function() {
                                r.variables.eventImagesVar = v.value.eventImagesOut, r.variables.isLoadingVar = !1
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
                return t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "9c87b409-78ec-49ba-908b-4668c0c0b2b4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), n.Flow.tryFinally(function() {
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
            return V.defaultTimeout
        }
    };
    i(a, "ControllerInner");
    let _ = a;
    H = _, H.registerVariableGroupType("PartnersHub.Events.EventBannerImage$ActionGetImage", [{
        name: "EventImages",
        attrName: "eventImagesOut",
        mandatory: !1,
        dataType: n.DataTypes.DataTypes.Record,
        defaultValue: i(function() {
            return new d
        }, "defaultValue"),
        complexType: d
    }])
}
var H, B = new n.Controller.ControllerFactory(H, T);
var G = A.PlaceholderContent,
    ge = A.IteratorPlaceholderContent,
    u = class u extends O.BaseWebBlock {
        static get displayName() {
            return "Events.EventBannerImage"
        }
        static getAttributes() {
            return {
                codeFunction: "EventBannerImage",
                functionKey: "0eee1dbe-5cb3-43bc-b84b-c57a97a31b50",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventBannerImage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [p]
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return B
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                E = this.controller,
                e = this.idService,
                r = E.validationService,
                t = this.widgetsRecordProvider,
                o = E.callContext(),
                s = u.ifWidget,
                v = u.textWidget,
                l = u.asPrimitiveValue,
                h = u.getTranslation,
                R = this;
            return S.createElement("div", this.getRootNodeProperties(), S.createElement(p, {
                getOwnerSpan: i(function() {
                    return R.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return R.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsLoading: a.variables.isLoadingVar,
                    ClassName: "ph-event-image",
                    SkeletonHeight: "154px"
                },
                events: {
                    _handleError: i(function(M) {
                        E.handleError(M)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: r
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new G(function() {
                        return [S.createElement(W, {
                            imageContent: a.variables.eventImagesVar.mobileImageAttr,
                            style: "ph-event-card-image",
                            type: 2,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        })]
                    })
                },
                _dependencies: [l(a.variables.eventImagesVar.mobileImageAttr)]
            }))
        }
    };
i(u, "View");
var P = u,
    fe = P;
export {
    fe as a
};