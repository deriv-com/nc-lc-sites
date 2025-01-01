import {
    a as A
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as V,
    b as N
} from "./_oschunk-D7QQHUMV.js";
import {
    d as u,
    f,
    g as D,
    n as M,
    u as T
} from "./_oschunk-LWMGEL7F.js";
import {
    a as H
} from "./_oschunk-4GXKK3IG.js";
import {
    a as B,
    g as w,
    i as C
} from "./_oschunk-WZHUAZJP.js";
import {
    a as F,
    q as R
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as g
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as x
} from "./_oschunk-QHO7QY6K.js";
var s = x(B());
var W = {};
var L = g; {
    let t = class t extends L.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, W);
            var P = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
            return R.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let h = t;
    $ = h
}
var $, j = new L.Controller.ControllerFactory($, H);
var p = g,
    Se = C.PlaceholderContent,
    Pe = C.IteratorPlaceholderContent,
    _ = class _ extends w.BaseWebBlock {
        static get displayName() {
            return "Events.EventLocationDateTime"
        }
        static getAttributes() {
            return {
                codeFunction: "EventLocationDateTime",
                functionKey: "78424b30-bacc-4809-bfb6-fcbbfcf3e00e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.EventLocationDateTime.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [A]
        }
        get modelFactory() {
            return V
        }
        get controllerFactory() {
            return j
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                P = v.callContext(),
                i = _.ifWidget,
                m = _.textWidget,
                l = _.asPrimitiveValue,
                b = _.getTranslation,
                E = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(u, {
                align: 0,
                animate: !1,
                style: "ph-location-block-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, s.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, s.createElement(A, {
                getOwnerSpan: a(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.7188 19.625C12.3438 20.0938 11.625 20.0938 11.25 19.625C9.65625 17.5938 6 12.75 6 10C6 6.6875 8.6875 4 12 4C15.3125 4 18 6.6875 18 10C18 12.75 14.3438 17.5938 12.7188 19.625ZM12 8C11.2812 8 10.625 8.40625 10.25 9C9.90625 9.625 9.90625 10.4062 10.25 11C10.625 11.625 11.2812 12 12 12C12.6875 12 13.3438 11.625 13.7188 11C14.0625 10.4062 14.0625 9.625 13.7188 9C13.3438 8.40625 12.6875 8 12 8Z" fill="#101213"/>\r
</svg>\r
`,
                    ExtendedClass: "display-flex justify-content-center"
                },
                events: {
                    _handleError: a(function(o) {
                        v.handleError(o)
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
                _widgetRecordProvider: r,
                _dependencies: []
            }), s.createElement(f, {
                style: "ph-location-label",
                value: t.variables.dataIn.locationAttr,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: p.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            })), s.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r
            }, s.createElement(A, {
                getOwnerSpan: a(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex justify-content-center",
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8 5C8 4.46875 8.4375 4 9 4C9.53125 4 10 4.46875 10 5V6H14V5C14 4.46875 14.4375 4 15 4C15.5312 4 16 4.46875 16 5V6H17.5C18.3125 6 19 6.6875 19 7.5V9H5V7.5C5 6.6875 5.65625 6 6.5 6H8V5ZM19 10V18.5C19 19.3438 18.3125 20 17.5 20H6.5C5.65625 20 5 19.3438 5 18.5V10H19Z" fill="#101213"/>\r
</svg>`
                },
                events: {
                    _handleError: a(function(o) {
                        v.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }), s.createElement(f, {
                style: "ph-location-label",
                value: t.getCachedValue(e.getId("iTLus9UpD0awN5y_gleOLg.Value"), function() {
                    return t.variables.dataIn.eventModeAttr === "2" ? p.BuiltinFunctions.formatDateTime(t.variables.dataIn.startDateTimeAttr, "dddd, MMMM d") : p.BuiltinFunctions.formatDateTime(t.variables.dataIn.startDateTimeAttr, "MMM d") + " - " + p.BuiltinFunctions.formatDateTime(t.variables.dataIn.endDateTimeAttr, "MMM d")
                }, function() {
                    return t.variables.dataIn.eventModeAttr
                }, function() {
                    return t.variables.dataIn.startDateTimeAttr
                }, function() {
                    return t.variables.dataIn.endDateTimeAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: p.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            })), s.createElement(u, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; gap: 8px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }, s.createElement(A, {
                getOwnerSpan: a(function() {
                    return E.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return E.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex justify-content-center",
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4ZM11.25 7.75V12C11.25 12.4375 11.5625 12.75 12 12.75H15.25C15.6562 12.75 16 12.4375 16 12C16 11.5938 15.6562 11.25 15.25 11.25H12.75V7.75C12.75 7.34375 12.4062 7 12 7C11.5625 7 11.25 7.34375 11.25 7.75Z" fill="#101213"/>\r
</svg>\r
`
                },
                events: {
                    _handleError: a(function(o) {
                        v.handleError(o)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: e,
                    uuid: "8",
                    alias: "3"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }), s.createElement(f, {
                style: "ph-location-label",
                value: t.getCachedValue(e.getId("wTn8fIUgQU+o5HcvsRAdGg.Value"), function() {
                    return p.BuiltinFunctions.formatDateTime(t.variables.dataIn.startDateTimeAttr, "HH:mm") + (t.variables.dataIn.eventModeAttr === "2" ? "" : " - " + p.BuiltinFunctions.formatDateTime(t.variables.dataIn.startDateTimeAttr, "HH:mm")) + " " + t.variables.dataIn.timeZoneAttr
                }, function() {
                    return t.variables.dataIn.startDateTimeAttr
                }, function() {
                    return t.variables.dataIn.eventModeAttr
                }, function() {
                    return t.variables.dataIn.timeZoneAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: p.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            }))))
        }
    };
a(_, "View");
var O = _,
    be = O;
var c = x(B());
var J = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "\u0627\u0644\u0645\u062A\u062D\u062F\u062B\u0648\u0646"
    },
    X = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Redner"
    },
    q = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Ponentes"
    },
    Y = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Intervenants"
    },
    ee = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Relatori"
    },
    te = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "M\xF3wcy"
    },
    re = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Palestrantes"
    },
    ne = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "\u0421\u043F\u0438\u043A\u0435\u0440\u044B"
    },
    Z = {
        "ar-001": {
            translations: J,
            isRTL: !0
        },
        "de-DE": {
            translations: X,
            isRTL: !1
        },
        "es-ES": {
            translations: q,
            isRTL: !1
        },
        "fr-FR": {
            translations: Y,
            isRTL: !1
        },
        "it-IT": {
            translations: ee,
            isRTL: !1
        },
        "pl-PL": {
            translations: te,
            isRTL: !1
        },
        "pt-PT": {
            translations: re,
            isRTL: !1
        },
        "ru-RU": {
            translations: ne,
            isRTL: !1
        }
    };
var d = g; {
    let t = class t extends d.Controller.BaseViewController {
        constructor(e, n, r) {
            super(e, n, r, Z);
            var P = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEventSpeakerMappingsByEventId$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEventSpeakerMappingsByEventId$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getEventSpeakerMappingsByEventId$AggrRefresh() {
            return this.hasOwnProperty("_getEventSpeakerMappingsByEventId$AggrRefresh") || (this._getEventSpeakerMappingsByEventId$AggrRefresh = function() {
                var e = function(n, r, l) {
                    var i = this.model,
                        m = this.controller,
                        l = m.callContext(l);
                    return m.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEventSpeakerMappingsByEventId", "screenservices/PartnersHub/Events/SpeakersBlock/ScreenDataSetGetEventSpeakerMappingsByEventId", "WlRxLg3BbwLW02VIlTgXxw", n, r, function(b) {
                        i.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr = b
                    }, function(b) {
                        i.variables.getEventSpeakerMappingsByEventIdAggr.replaceWith(d.DataConversion.ServerDataConverter.from(b, i.variables.getEventSpeakerMappingsByEventIdAggr.constructor))
                    }, void 0, void 0, void 0, l, F, !0)
                }.bind(this);
                return d.Logger.startActiveSpan("GetEventSpeakerMappingsByEventId", function(n) {
                    return n && (n.setAttribute("code.function", "GetEventSpeakerMappingsByEventId"), n.setAttribute("outsystems.function.key", "7560cc89-0ac2-41fd-aa26-40842c7a091c"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), d.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        n && n.end()
                    })
                }, 0)
            }), this._getEventSpeakerMappingsByEventId$AggrRefresh
        }
        set getEventSpeakerMappingsByEventId$AggrRefresh(e) {
            this._getEventSpeakerMappingsByEventId$AggrRefresh = e
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = ["getEventSpeakerMappingsByEventId$AggrRefresh"]), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var n = this.model,
                    r = this.controller,
                    P = this.idService;
                return d.Logger.startActiveSpan("OnParametersChanged", function(i) {
                    return i && (i.setAttribute("code.function", "OnParametersChanged"), i.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4"), i.setAttribute("outsystems.function.owner.name", "PartnersHub"), i.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), i.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                        return r.ensureControllerAlive("OnParametersChanged"), e = r.callContext(e), d.Flow.executeAsyncFlow(function() {
                            var m = r.getEventSpeakerMappingsByEventId$AggrRefresh(50, 0, e);
                            return n.flush(), m
                        })
                    }, function() {
                        i && i.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onParametersChanged$Action(e) {
            var n = this.controller;
            return d.Logger.startActiveSpan("OnParametersChanged__proxy", function(r) {
                return r && (r.setAttribute("code.function", "OnParametersChanged"), r.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4"), r.setAttribute("outsystems.function.owner.name", "PartnersHub"), r.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), d.Flow.tryFinally(function() {
                    return n.safeExecuteClientAction(n._onParametersChanged$Action, e)
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
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = null), this._onReadyEventHandler
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
                    r = this.model,
                    P = this.idService;
                return n.onParametersChanged$Action(e)
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
            return R.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let h = t;
    G = h
}
var G, z = new d.Controller.ControllerFactory(G, H);
var k = g,
    Ve = C.PlaceholderContent,
    ae = C.IteratorPlaceholderContent,
    S = class S extends w.BaseWebBlock {
        static get displayName() {
            return "Events.SpeakersBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "SpeakersBlock",
                functionKey: "98cdfca2-8e3f-4e3f-b414-47012db7f7f1",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Events.SpeakersBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return N
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                v = this.controller,
                e = this.idService,
                n = v.validationService,
                r = this.widgetsRecordProvider,
                P = v.callContext(),
                i = S.ifWidget,
                m = S.textWidget,
                l = S.asPrimitiveValue,
                b = S.getTranslation,
                E = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, c.createElement(T, {
                style: "ph-section-subtitle",
                text: [m(b("fnjbbcrASE+gN242r_ZjnQ#Value", "Speakers"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }), c.createElement(D, {
                animateItems: !0,
                extendedProperties: {
                    "disable-virtualization": "True",
                    style: "gap: 16px;"
                },
                gridProperties: {
                    classes: "OSFillParent"
                },
                mode: 0,
                source: t.variables.getEventSpeakerMappingsByEventIdAggr.listOut,
                style: "display-flex flex-direction-column",
                tag: "div",
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: r,
                source_dataFetchStatus: k.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new ae(function(o, y) {
                        return [c.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: o,
                                uuid: "3"
                            },
                            _widgetRecordProvider: r,
                            _dependencies: [l(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr), l(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).speakerRoleAttr.roleAttr), l(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).eventSpeakersAttr.nameAttr), l(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).eventSpeakersAttr.imageNameAttr)]
                        }, c.createElement(M, {
                            extendedProperties: {
                                style: "border-radius: 100%; height: 66px;"
                            },
                            gridProperties: {
                                width: "66px"
                            },
                            type: 1,
                            url: "https://pub-25da5cfeec1b4792a6dbb4d683cd363d.r2.dev/" + t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).eventSpeakersAttr.imageNameAttr,
                            _idProps: {
                                service: o,
                                uuid: "4"
                            },
                            _widgetRecordProvider: r,
                            url_dataFetchStatus: k.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), c.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 4px;"
                            },
                            style: "ph-speaker-name-container",
                            visible: !0,
                            _idProps: {
                                service: o,
                                uuid: "5"
                            },
                            _widgetRecordProvider: r
                        }, c.createElement(f, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-speaker-name",
                            value: t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).eventSpeakersAttr.nameAttr,
                            _idProps: {
                                service: o,
                                uuid: "6"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: k.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), c.createElement(f, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-section-text ph-speaker-role",
                            value: t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(y.iterationContext).speakerRoleAttr.roleAttr,
                            _idProps: {
                                service: o,
                                uuid: "7"
                            },
                            _widgetRecordProvider: r,
                            value_dataFetchStatus: k.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        })))]
                    }, P, e, "1")
                },
                _dependencies: [l(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)]
            })))
        }
    };
a(S, "View");
var I = S,
    Ne = I;
export {
    be as a, Ne as b
};