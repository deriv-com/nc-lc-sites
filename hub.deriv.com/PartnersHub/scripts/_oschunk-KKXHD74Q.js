import {
    a as G,
    b as z,
    c as V
} from "./_oschunk-EYRQI7EL.js";
import {
    b as Q
} from "./_oschunk-M6PGXRNF.js";
import {
    a as H,
    b as U
} from "./_oschunk-JIDGT34X.js";
import {
    a as ee,
    b as te,
    c as re
} from "./_oschunk-P54PMFIB.js";
import "./_oschunk-EMBKZDDX.js";
import "./_oschunk-LRO77GHL.js";
import "./_oschunk-D47O3LMJ.js";
import {
    a as ne
} from "./_oschunk-2RCZKANU.js";
import "./_oschunk-UCNPNPZ6.js";
import "./_oschunk-6GUPLSMV.js";
import "./_oschunk-DO3AOXOM.js";
import "./_oschunk-JT4WSYKL.js";
import {
    a as T
} from "./_oschunk-6Y6HK4H4.js";
import "./_oschunk-QM6TPNLS.js";
import "./_oschunk-B5VQOPQY.js";
import "./_oschunk-PISKEOZB.js";
import {
    a as F
} from "./_oschunk-OOK37A5O.js";
import "./_oschunk-ANY3DTL7.js";
import "./_oschunk-MUB32TUL.js";
import {
    a as Z
} from "./_oschunk-ND5NIK2B.js";
import "./_oschunk-4YFBPYRH.js";
import "./_oschunk-NR4KXK35.js";
import {
    d as u,
    f as S,
    g as X,
    n as I,
    u as D
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-D7X2Q6KG.js";
import {
    a as k
} from "./_oschunk-6WALBPGV.js";
import {
    a as j,
    g as b,
    i as E
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-RFCNRBVT.js";
import "./_oschunk-Y3C3IKDF.js";
import "./_oschunk-GP4JCHX2.js";
import {
    a as q,
    p as B
} from "./_oschunk-FZ6FUHBV.js";
import "./_oschunk-S5DOOZ7G.js";
import {
    Fc as $
} from "./_oschunk-5FYEKNKX.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as r,
    h as N
} from "./_oschunk-QHO7QY6K.js";
var c = N(j());
var p = N(j());
var ae = {};
var ie = h; {
    let t = class t extends ie.Controller.BaseViewController {
        constructor(e, s, n) {
            super(e, s, n, ae);
            var o = this.controller;
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
            return B.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let C = t;
    se = C
}
var se, oe = new ie.Controller.ControllerFactory(se, k);
var x = h,
    Me = E.PlaceholderContent,
    We = E.IteratorPlaceholderContent,
    A = class A extends b.BaseWebBlock {
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
            return [H]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return oe
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                i = this.controller,
                e = this.idService,
                s = i.validationService,
                n = this.widgetsRecordProvider,
                o = i.callContext(),
                g = A.ifWidget,
                P = A.textWidget,
                d = A.asPrimitiveValue,
                y = A.getTranslation,
                l = this;
            return p.createElement("div", this.getRootNodeProperties(), p.createElement(u, {
                align: 0,
                animate: !1,
                style: "ph-location-block-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, p.createElement(u, {
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
                _widgetRecordProvider: n
            }, p.createElement(H, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.7188 19.625C12.3438 20.0938 11.625 20.0938 11.25 19.625C9.65625 17.5938 6 12.75 6 10C6 6.6875 8.6875 4 12 4C15.3125 4 18 6.6875 18 10C18 12.75 14.3438 17.5938 12.7188 19.625ZM12 8C11.2812 8 10.625 8.40625 10.25 9C9.90625 9.625 9.90625 10.4062 10.25 11C10.625 11.625 11.2812 12 12 12C12.6875 12 13.3438 11.625 13.7188 11C14.0625 10.4062 14.0625 9.625 13.7188 9C13.3438 8.40625 12.6875 8 12 8Z" fill="#101213"/>\r
</svg>\r
`,
                    ExtendedClass: "display-flex justify-content-center"
                },
                events: {
                    _handleError: r(function(a) {
                        i.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), p.createElement(S, {
                style: "ph-location-label",
                value: t.variables.dataIn.locationAttr,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: x.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            })), p.createElement(u, {
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
                _widgetRecordProvider: n
            }, p.createElement(H, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex justify-content-center",
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8 5C8 4.46875 8.4375 4 9 4C9.53125 4 10 4.46875 10 5V6H14V5C14 4.46875 14.4375 4 15 4C15.5312 4 16 4.46875 16 5V6H17.5C18.3125 6 19 6.6875 19 7.5V9H5V7.5C5 6.6875 5.65625 6 6.5 6H8V5ZM19 10V18.5C19 19.3438 18.3125 20 17.5 20H6.5C5.65625 20 5 19.3438 5 18.5V10H19Z" fill="#101213"/>\r
</svg>`
                },
                events: {
                    _handleError: r(function(a) {
                        i.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "2"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), p.createElement(S, {
                style: "ph-location-label",
                value: t.getCachedValue(e.getId("iTLus9UpD0awN5y_gleOLg.Value"), function() {
                    return x.BuiltinFunctions.formatDateTime(t.variables.dataIn.dateTimeAttr, "dddd, MMMM d")
                }, function() {
                    return t.variables.dataIn.dateTimeAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: x.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            })), p.createElement(u, {
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
                _widgetRecordProvider: n
            }, p.createElement(H, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExtendedClass: "display-flex justify-content-center",
                    SVGCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12 4C14.8438 4 17.4688 5.53125 18.9062 8C20.3438 10.5 20.3438 13.5312 18.9062 16C17.4688 18.5 14.8438 20 12 20C9.125 20 6.5 18.5 5.0625 16C3.625 13.5312 3.625 10.5 5.0625 8C6.5 5.53125 9.125 4 12 4ZM11.25 7.75V12C11.25 12.4375 11.5625 12.75 12 12.75H15.25C15.6562 12.75 16 12.4375 16 12C16 11.5938 15.6562 11.25 15.25 11.25H12.75V7.75C12.75 7.34375 12.4062 7 12 7C11.5625 7 11.25 7.34375 11.25 7.75Z" fill="#101213"/>\r
</svg>\r
`
                },
                events: {
                    _handleError: r(function(a) {
                        i.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: s
                },
                _idProps: {
                    service: e,
                    uuid: "8",
                    alias: "3"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }), p.createElement(S, {
                style: "ph-location-label",
                value: t.getCachedValue(e.getId("wTn8fIUgQU+o5HcvsRAdGg.Value"), function() {
                    return x.BuiltinFunctions.formatDateTime(t.variables.dataIn.dateTimeAttr, "HH:mm") + " " + t.variables.dataIn.timeZoneAttr
                }, function() {
                    return t.variables.dataIn.dateTimeAttr
                }, function() {
                    return t.variables.dataIn.timeZoneAttr
                }),
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: x.Model.calculateDataFetchStatus(t.variables._dataInDataFetchStatus)
            }))))
        }
    };
r(A, "View");
var K = A,
    M = K;
var f = N(j());
var pe = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "\u0627\u0644\u0645\u062A\u062D\u062F\u062B\u0648\u0646"
    },
    me = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Redner"
    },
    he = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Ponentes"
    },
    _e = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Intervenants"
    },
    fe = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Relatori"
    },
    Ee = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "M\xF3wcy"
    },
    Se = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "Palestrantes"
    },
    Pe = {
        "fnjbbcrASE+gN242r_ZjnQ#Value": "\u0421\u043F\u0438\u043A\u0435\u0440\u044B"
    },
    ce = {
        "ar-001": {
            translations: pe,
            isRTL: !0
        },
        "de-DE": {
            translations: me,
            isRTL: !1
        },
        "es-ES": {
            translations: he,
            isRTL: !1
        },
        "fr-FR": {
            translations: _e,
            isRTL: !1
        },
        "it-IT": {
            translations: fe,
            isRTL: !1
        },
        "pl-PL": {
            translations: Ee,
            isRTL: !1
        },
        "pt-PT": {
            translations: Se,
            isRTL: !1
        },
        "ru-RU": {
            translations: Pe,
            isRTL: !1
        }
    };
var _ = h; {
    let t = class t extends _.Controller.BaseViewController {
        constructor(e, s, n) {
            super(e, s, n, ce);
            var o = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {
                getEventSpeakerMappingsByEventId$AggrRefresh: 0
            }, this.dataFetchDependentsGraph = {
                getEventSpeakerMappingsByEventId$AggrRefresh: []
            }, this.shouldSendClientVarsToDataSources = !0
        }
        get getEventSpeakerMappingsByEventId$AggrRefresh() {
            return this.hasOwnProperty("_getEventSpeakerMappingsByEventId$AggrRefresh") || (this._getEventSpeakerMappingsByEventId$AggrRefresh = function() {
                var e = function(s, n, d) {
                    var g = this.model,
                        P = this.controller,
                        d = P.callContext(d);
                    return P.callAggregateWithStartIndexAndClientVars("ScreenDataSetGetEventSpeakerMappingsByEventId", "screenservices/PartnersHub/Events/SpeakersBlock/ScreenDataSetGetEventSpeakerMappingsByEventId", "bEGeKT8bsYOJP1di7absZg", s, n, function(y) {
                        g.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr = y
                    }, function(y) {
                        g.variables.getEventSpeakerMappingsByEventIdAggr.replaceWith(_.DataConversion.ServerDataConverter.from(y, g.variables.getEventSpeakerMappingsByEventIdAggr.constructor))
                    }, void 0, void 0, void 0, d, q, !0)
                }.bind(this);
                return _.Logger.startActiveSpan("GetEventSpeakerMappingsByEventId", function(s) {
                    return s && (s.setAttribute("code.function", "GetEventSpeakerMappingsByEventId"), s.setAttribute("outsystems.function.key", "7560cc89-0ac2-41fd-aa26-40842c7a091c"), s.setAttribute("outsystems.function.owner.name", "PartnersHub"), s.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), s.setAttribute("outsystems.function.type", "SCREEN_SERVICE_AGGREGATE_CALL")), _.Flow.tryFinally(function() {
                        return e()
                    }, function() {
                        s && s.end()
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
                var s = this.model,
                    n = this.controller,
                    o = this.idService;
                return _.Logger.startActiveSpan("OnParametersChanged", function(g) {
                    return g && (g.setAttribute("code.function", "OnParametersChanged"), g.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4"), g.setAttribute("outsystems.function.owner.name", "PartnersHub"), g.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), g.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnParametersChanged"), e = n.callContext(e), _.Flow.executeAsyncFlow(function() {
                            var P = n.getEventSpeakerMappingsByEventId$AggrRefresh(50, 0, e);
                            return s.flush(), P
                        })
                    }, function() {
                        g && g.end()
                    })
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        onParametersChanged$Action(e) {
            var s = this.controller;
            return _.Logger.startActiveSpan("OnParametersChanged__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "bc24ef44-c69d-415e-a0f0-ef1a44c00ce4"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), _.Flow.tryFinally(function() {
                    return s.safeExecuteClientAction(s._onParametersChanged$Action, e)
                }, function() {
                    n && n.end()
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
                var s = this.controller,
                    n = this.model,
                    o = this.idService;
                return s.onParametersChanged$Action(e)
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
            return B.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let C = t;
    ue = C
}
var ue, ve = new _.Controller.ControllerFactory(ue, k);
var W = h,
    tt = E.PlaceholderContent,
    Ce = E.IteratorPlaceholderContent,
    R = class R extends b.BaseWebBlock {
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
            return te
        }
        get controllerFactory() {
            return ve
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                i = this.controller,
                e = this.idService,
                s = i.validationService,
                n = this.widgetsRecordProvider,
                o = i.callContext(),
                g = R.ifWidget,
                P = R.textWidget,
                d = R.asPrimitiveValue,
                y = R.getTranslation,
                l = this;
            return f.createElement("div", this.getRootNodeProperties(), f.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column gap-base",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, f.createElement(D, {
                style: "ph-section-subtitle",
                text: [P(y("fnjbbcrASE+gN242r_ZjnQ#Value", "Speakers"))],
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }), f.createElement(X, {
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
                _widgetRecordProvider: n,
                source_dataFetchStatus: W.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr),
                placeholders: {
                    content: new Ce(function(a, O) {
                        return [f.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "align-items: center; display: flex; gap: 16px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "3"
                            },
                            _widgetRecordProvider: n,
                            _dependencies: [d(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr), d(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).speakerRoleAttr.roleAttr), d(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).eventSpeakersAttr.nameAttr), d(t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).eventSpeakersAttr.imageNameAttr)]
                        }, f.createElement(I, {
                            extendedProperties: {
                                style: "border-radius: 100%; height: 66px;"
                            },
                            gridProperties: {
                                width: "66px"
                            },
                            type: 1,
                            url: "https://pub-25da5cfeec1b4792a6dbb4d683cd363d.r2.dev/" + t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).eventSpeakersAttr.imageNameAttr,
                            _idProps: {
                                service: a,
                                uuid: "4"
                            },
                            _widgetRecordProvider: n,
                            url_dataFetchStatus: W.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), f.createElement(u, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "gap: 4px;"
                            },
                            style: "display-flex flex-direction-column",
                            visible: !0,
                            _idProps: {
                                service: a,
                                uuid: "5"
                            },
                            _widgetRecordProvider: n
                        }, f.createElement(S, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-speaker-name",
                            value: t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).eventSpeakersAttr.nameAttr,
                            _idProps: {
                                service: a,
                                uuid: "6"
                            },
                            _widgetRecordProvider: n,
                            value_dataFetchStatus: W.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        }), f.createElement(S, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            style: "ph-section-text",
                            value: t.variables.getEventSpeakerMappingsByEventIdAggr.listOut.getCurrent(O.iterationContext).speakerRoleAttr.roleAttr,
                            _idProps: {
                                service: a,
                                uuid: "7"
                            },
                            _widgetRecordProvider: n,
                            value_dataFetchStatus: W.Model.calculateDataFetchStatus(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)
                        })))]
                    }, o, e, "1")
                },
                _dependencies: [d(t.variables.getEventSpeakerMappingsByEventIdAggr.dataFetchStatusAttr)]
            })))
        }
    };
r(R, "View");
var J = R,
    L = J;
var v = h,
    m = E.PlaceholderContent,
    Pt = E.IteratorPlaceholderContent,
    w = class w extends b.BaseWebScreen {
        static get displayName() {
            return "Events.EventDetails"
        }
        static getAttributes() {
            return {
                codeFunction: "EventDetails",
                functionKey: "9d53f2b6-a18b-4d87-8408-c0f4386f1572",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.Events.EventDetails.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [G, F, z, V, T, U, M, L, Z, Q]
        }
        get modelFactory() {
            return re
        }
        get controllerFactory() {
            return ne
        }
        get title() {
            return b.BaseWebScreen.getTranslation("tvJTnYuhh02ECMD0OG8Vcg#Title", "EventDetails")
        }
        internalRender() {
            let t = this.model,
                i = this.controller,
                e = this.idService,
                s = i.validationService,
                n = this.widgetsRecordProvider,
                o = i.callContext(),
                g = w.ifWidget,
                P = w.textWidget,
                d = w.asPrimitiveValue,
                y = w.getTranslation,
                l = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(G, {
                getOwnerSpan: r(function() {
                    return l.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return l.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    StickyFooter: !0
                },
                events: {
                    _handleError: r(function(a) {
                        i.handleError(a)
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
                _widgetRecordProvider: n,
                placeholders: {
                    header: new m(function() {
                        return [c.createElement(F, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: r(function(a) {
                                    i.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: s
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                onDesktop: new m(function() {
                                    return [c.createElement(z, {
                                        getOwnerSpan: r(function() {
                                            return l.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return l.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: r(function(a) {
                                                i.handleError(a)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: s
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                }),
                                onTablet: new m(function() {
                                    return [c.createElement(V, {
                                        getOwnerSpan: r(function() {
                                            return l.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return l.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Title: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("tsmnET5cO0ivOl3ppmYOXA#Value.318568092.1", "Event details"),
                                            ShowLeftButton: !0
                                        },
                                        events: {
                                            _handleError: r(function(a) {
                                                i.handleError(a)
                                            }, "_handleError"),
                                            onClickLeftButton$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockBackButtonAction$Action(i.callContext(a))
                                            }, "onClickLeftButton$Action"),
                                            onClickRightButton$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockCloseButtonAction$Action(i.callContext(a))
                                            }, "onClickRightButton$Action")
                                        },
                                        _validationProps: {
                                            validationService: s
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "3",
                                            alias: "4"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                }),
                                onPhone: new m(function() {
                                    return [c.createElement(V, {
                                        getOwnerSpan: r(function() {
                                            return l.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return l.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            Title: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("a5wZqJsbVkGhbk8Mk1L12Q#Value.318568092.1", "Event details"),
                                            ShowLeftButton: !0
                                        },
                                        events: {
                                            _handleError: r(function(a) {
                                                i.handleError(a)
                                            }, "_handleError"),
                                            onClickRightButton$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockCloseButtonAction$Action(i.callContext(a))
                                            }, "onClickRightButton$Action"),
                                            onClickLeftButton$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockBackButtonAction$Action(i.callContext(a))
                                            }, "onClickLeftButton$Action")
                                        },
                                        _validationProps: {
                                            validationService: s
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "4",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    content: new m(function() {
                        return [c.createElement(T, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsLoading: t.variables.isLoadingVar
                            },
                            events: {
                                _handleError: r(function(a) {
                                    i.handleError(a)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: s
                            },
                            _idProps: {
                                service: e,
                                uuid: "5",
                                alias: "6"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                content: new m(function() {
                                    return [c.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-event-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "6"
                                        },
                                        _widgetRecordProvider: n
                                    }, c.createElement(u, {
                                        align: 0,
                                        animate: !1,
                                        style: "ph-event-details-header-block",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "7"
                                        },
                                        _widgetRecordProvider: n
                                    }, c.createElement(U, {
                                        getOwnerSpan: r(function() {
                                            return l.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: r(function() {
                                            return l.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {
                                            ShowLeftButton: !0,
                                            Title: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("zKQaYwKo0Eqr6GV8gKuL+g#Value.318568092.1", "Event details")
                                        },
                                        events: {
                                            _handleError: r(function(a) {
                                                i.handleError(a)
                                            }, "_handleError"),
                                            leftButtonAction$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockBackButtonAction$Action(i.callContext(a))
                                            }, "leftButtonAction$Action"),
                                            rightButtonAction$Action: r(function() {
                                                var a = o.clone();
                                                i.titleBlockCloseButtonAction$Action(i.callContext(a))
                                            }, "rightButtonAction$Action")
                                        },
                                        _validationProps: {
                                            validationService: s
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "8",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: n,
                                        _dependencies: []
                                    })), g(!t.variables.getEventByIdAggr.listOut.isEmpty, !1, this, function() {
                                        return [c.createElement(T, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                IsLoading: t.variables.isLoadingImagesVar,
                                                SkeletonHeight: "162px"
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "9",
                                                alias: "8"
                                            },
                                            _widgetRecordProvider: n,
                                            placeholders: {
                                                content: new m(function() {
                                                    return [c.createElement(F, {
                                                        getOwnerSpan: r(function() {
                                                            return l.getChildSpan("render")
                                                        }, "getOwnerSpan"),
                                                        getOwnerDisposeSpan: r(function() {
                                                            return l.getChildSpan("destroy")
                                                        }, "getOwnerDisposeSpan"),
                                                        inputs: {},
                                                        events: {
                                                            _handleError: r(function(a) {
                                                                i.handleError(a)
                                                            }, "_handleError")
                                                        },
                                                        _validationProps: {
                                                            validationService: s
                                                        },
                                                        _idProps: {
                                                            service: e,
                                                            uuid: "10",
                                                            alias: "9"
                                                        },
                                                        _widgetRecordProvider: n,
                                                        placeholders: {
                                                            onDesktop: new m(function() {
                                                                return [c.createElement(I, {
                                                                    gridProperties: {
                                                                        classes: "OSFillParent"
                                                                    },
                                                                    imageContent: t.variables.eventImagesVar.desktopImageAttr,
                                                                    style: "ph-event-details-banner",
                                                                    type: 2,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "11"
                                                                    },
                                                                    _widgetRecordProvider: n
                                                                })]
                                                            }),
                                                            onTablet: new m(function() {
                                                                return [c.createElement(I, {
                                                                    gridProperties: {
                                                                        classes: "OSFillParent"
                                                                    },
                                                                    imageContent: t.variables.eventImagesVar.desktopImageAttr,
                                                                    style: "ph-event-details-banner",
                                                                    type: 2,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "12"
                                                                    },
                                                                    _widgetRecordProvider: n
                                                                })]
                                                            }),
                                                            onPhone: new m(function() {
                                                                return [c.createElement(I, {
                                                                    gridProperties: {
                                                                        classes: "OSFillParent"
                                                                    },
                                                                    imageContent: t.variables.eventImagesVar.mobileImageAttr,
                                                                    style: "ph-event-details-banner",
                                                                    type: 2,
                                                                    _idProps: {
                                                                        service: e,
                                                                        uuid: "13"
                                                                    },
                                                                    _widgetRecordProvider: n
                                                                })]
                                                            })
                                                        },
                                                        _dependencies: [d(t.variables.eventImagesVar.mobileImageAttr), d(t.variables.eventImagesVar.desktopImageAttr)]
                                                    })]
                                                })
                                            },
                                            _dependencies: [d(t.variables.eventImagesVar.mobileImageAttr), d(t.variables.eventImagesVar.desktopImageAttr)]
                                        }), c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "gap: 36px;"
                                            },
                                            style: "display-flex",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "14"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            style: "gap-base display-flex flex-direction-column flex1",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "15"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "display: flex; flex-direction: column; gap: 8px;"
                                            },
                                            style: "ph-event-details-content",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "16"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(S, {
                                            style: "ph-section-title",
                                            value: t.getCachedValue(e.getId("9D11JWuFykiyml3jEj1sRQ.Value"), function() {
                                                return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.titleAttr + ", " + v.BuiltinFunctions.year(v.BuiltinFunctions.textToDateTime(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr)).toString()
                                            }, function() {
                                                return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.titleAttr
                                            }, function() {
                                                return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr
                                            }),
                                            _idProps: {
                                                service: e,
                                                uuid: "17"
                                            },
                                            _widgetRecordProvider: n,
                                            value_dataFetchStatus: v.Model.calculateDataFetchStatus(t.variables.getEventByIdAggr.dataFetchStatusAttr)
                                        }), c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            style: "hide-on-desktop",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "18"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(M, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Data: t.getCachedValue(e.getId("ZnOFOrroeUCdlI7HzIcc0g.Data"), function() {
                                                    return function() {
                                                        var a = new $;
                                                        return a.locationAttr = t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr, a.dateTimeAttr = v.BuiltinFunctions.textToDateTime(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr), a.timeZoneAttr = t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr, a
                                                    }()
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr
                                                }),
                                                _dataInDataFetchStatus: v.Model.calculateDataFetchStatus(t.variables.getEventByIdAggr.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "19",
                                                alias: "10"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        }))), c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: justify;"
                                            },
                                            style: "ck-content",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "EventDetails"
                                            },
                                            _widgetRecordProvider: n
                                        }), c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            style: "hide-on-desktop",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "21"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(L, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                EventId: t.variables.eventIdIn
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "22",
                                                alias: "11"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        }))), c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            style: "flex-direction-column gap-m hide-on-mobile",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "23"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(M, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                Data: t.getCachedValue(e.getId("klv4D34BiUyXCJ7nF46lHw.Data"), function() {
                                                    return function() {
                                                        var a = new $;
                                                        return a.locationAttr = t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr, a.dateTimeAttr = v.BuiltinFunctions.textToDateTime(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr), a.timeZoneAttr = t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr, a
                                                    }()
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr
                                                }, function() {
                                                    return t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr
                                                }),
                                                _dataInDataFetchStatus: v.Model.calculateDataFetchStatus(t.variables.getEventByIdAggr.dataFetchStatusAttr)
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "24",
                                                alias: "12"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        }), c.createElement(Z, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                title: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("vRm_Xrocm0qshos2KUA2WA#Value.233912628.1", "Join us"),
                                                height: "40px",
                                                borderRadius: "100px",
                                                Width: "100%"
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError"),
                                                onClick$Action: r(function() {
                                                    var a = o.clone();
                                                    i.stickyButtonBottomOnClick$Action(i.callContext(a))
                                                }, "onClick$Action")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "25",
                                                alias: "13"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        }), c.createElement(L, {
                                            getOwnerSpan: r(function() {
                                                return l.getChildSpan("render")
                                            }, "getOwnerSpan"),
                                            getOwnerDisposeSpan: r(function() {
                                                return l.getChildSpan("destroy")
                                            }, "getOwnerDisposeSpan"),
                                            inputs: {
                                                EventId: t.variables.eventIdIn
                                            },
                                            events: {
                                                _handleError: r(function(a) {
                                                    i.handleError(a)
                                                }, "_handleError")
                                            },
                                            _validationProps: {
                                                validationService: s
                                            },
                                            _idProps: {
                                                service: e,
                                                uuid: "26",
                                                alias: "14"
                                            },
                                            _widgetRecordProvider: n,
                                            _dependencies: []
                                        })))]
                                    }, function() {
                                        return [c.createElement(u, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "text-align: center;"
                                            },
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "27"
                                            },
                                            _widgetRecordProvider: n
                                        }, c.createElement(D, {
                                            style: "ph-text",
                                            text: ["Event not available"],
                                            _idProps: {
                                                service: e,
                                                uuid: "28"
                                            },
                                            _widgetRecordProvider: n
                                        }))]
                                    }))]
                                })
                            },
                            _dependencies: [d(t.variables.eventIdIn), d(t.variables.eventImagesVar.mobileImageAttr), d(t.variables.eventImagesVar.desktopImageAttr), d(t.variables.isLoadingImagesVar), d(t.variables.getEventByIdAggr.dataFetchStatusAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.titleAttr), d(t.variables.getEventByIdAggr.listOut.isEmpty)]
                        })]
                    }),
                    footer: new m(function() {
                        return [c.createElement(Q, {
                            getOwnerSpan: r(function() {
                                return l.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return l.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                PrimaryButtonLabel: v.Injector.resolve(v.ServiceNames.TranslationsService).getMessage("VWslWT2HPESKigtC1HF7bA#Value.233912628.1", "Join us")
                            },
                            events: {
                                _handleError: r(function(a) {
                                    i.handleError(a)
                                }, "_handleError"),
                                primaryOnClick$Action: r(function() {
                                    var a = o.clone();
                                    i.stickyButtonBottomOnClick$Action(i.callContext(a))
                                }, "primaryOnClick$Action")
                            },
                            _validationProps: {
                                validationService: s
                            },
                            _idProps: {
                                service: e,
                                uuid: "29",
                                alias: "15"
                            },
                            _widgetRecordProvider: n,
                            placeholders: {
                                customButton: m.Empty
                            },
                            _dependencies: []
                        })]
                    })
                },
                _dependencies: [d(t.variables.eventIdIn), d(t.variables.eventImagesVar.mobileImageAttr), d(t.variables.eventImagesVar.desktopImageAttr), d(t.variables.isLoadingImagesVar), d(t.variables.getEventByIdAggr.dataFetchStatusAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.timeZoneAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).countryAttr.nameAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.startDateTimeAttr), d(t.variables.getEventByIdAggr.listOut.getCurrent(o.iterationContext).eventAttr.titleAttr), d(t.variables.getEventByIdAggr.listOut.isEmpty), d(t.variables.isLoadingVar)]
            }))
        }
    };
r(w, "View");
var Y = w,
    Ct = Y;
export {
    Ct as
    default
};