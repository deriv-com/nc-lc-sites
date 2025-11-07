import {
    a as V
} from "./_oschunk-LRPUW3LC.js";
import {
    a as R
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import {
    a as H
} from "./_oschunk-SNXHD6UR.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import {
    a as S
} from "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b,
    f as d,
    u as g
} from "./_oschunk-VR5BNL2K.js";
import {
    a as te,
    g as P,
    m as Z,
    n as B,
    q as Q,
    r as K,
    s as O,
    t as x
} from "./_oschunk-4VHUVDBV.js";
import {
    a as z
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Qb as N,
    Sb as U,
    ub as C
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as p,
    c as n,
    e as ee,
    m as I,
    n as F
} from "./_oschunk-M5BUVJ72.js";
var ne = {
        "KsaLe_W2_EqKzvSzbTc6aQ#Value": "\u062A\u0645",
        "lSTMv6tFAkG01dBx95po2Q#Value": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u062E\u0644\u0627\u0644 5 \u062F\u0642\u0627\u0626\u0642.",
        "7SKiSs6rtUiwYyv43FQxYQ#Value": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642",
        "RgxZCJTU50emeZE14JKopg#Value": "\u062A\u0645",
        "Axu3gIHdC0q7QiFuXb5HcA#Value": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u062E\u0644\u0627\u0644 5 \u062F\u0642\u0627\u0626\u0642.",
        "stLVzlR3n0iebBhpsWgN7w#Value": "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0642\u0642",
        "_gtgCgoOUE6cg9ZQk6YwfA#Title": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 | Deriv",
        "_gtgCgoOUE6cg9ZQk6YwfA#TitleExpression.-1408363139.1": "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u062D\u0642\u0642 | Deriv"
    },
    Y = {
        "ar-001": {
            translations: ne,
            isRTL: !0
        }
    };
var o = p; {
    let a = class a extends o.Controller.BaseViewController {
        constructor(e, t, s) {
            super(e, t, s, Y);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _handleOnClickDone$Action() {
            return this.hasOwnProperty("__handleOnClickDone$Action") || (this.__handleOnClickDone$Action = function(e) {
                var t = this.model,
                    s = this.controller,
                    c = this.idService;
                return o.Logger.startActiveSpan("HandleOnClickDone", function(u) {
                    u && (u.setAttribute("code.function", "HandleOnClickDone"), u.setAttribute("outsystems.function.key", "ef1a69fd-caea-44f2-a460-7d3f1c168963"), u.setAttribute("outsystems.function.owner.name", "uae"), u.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), u.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return s.ensureControllerAlive("HandleOnClickDone"), e = s.callContext(e), C.getkyc_flow_from() === "banner" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "home", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : C.getkyc_flow_from() === "first_deposit" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "wallet", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : C.getkyc_flow_from() === "banner_poa" || C.getkyc_flow_from() === "banner_poi" ? o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "identity-verification-status", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0) : o.Navigation.navigateTo(o.Navigation.generateScreenURL("uae", "home", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), e, !0)
                    } finally {
                        u && u.end()
                    }
                }, 1)
            }), this.__handleOnClickDone$Action
        }
        set _handleOnClickDone$Action(e) {
            this.__handleOnClickDone$Action = e
        }
        handleOnClickDone$Action(e) {
            var t = this.controller;
            return o.Logger.startActiveSpan("HandleOnClickDone__proxy", function(s) {
                s && (s.setAttribute("code.function", "HandleOnClickDone"), s.setAttribute("outsystems.function.key", "ef1a69fd-caea-44f2-a460-7d3f1c168963"), s.setAttribute("outsystems.function.owner.name", "uae"), s.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), s.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._handleOnClickDone$Action, e)
                } finally {
                    s && s.end()
                }
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
                return V.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return U.defaultTimeout
        }
    };
    n(a, "ControllerInner");
    let v = a;
    $ = v
}
var $, A = new o.Controller.ControllerFactory($, z);
var i = ee(te());
var y = p,
    L = class L extends y.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(y.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(L, "VariablesRecord");
var w = L;
w.init();
var W = class W extends y.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
n(W, "WidgetsRecord");
var T = W,
    _ = class _ extends y.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return w
        }
        static getWidgetsRecordConstructor() {
            return T
        }
        static get hasValidationWidgets() {
            return _._hasValidationWidgetsValue === void 0 && (_._hasValidationWidgetsValue = void 0 || void 0 || void 0), _._hasValidationWidgetsValue
        }
        setInputs(a) {}
    };
n(_, "Model");
var E = _;
E._hasValidationWidgetsValue = void 0;
var D = new y.Model.ModelFactory(E);
var k = P.PlaceholderContent,
    Le = P.IteratorPlaceholderContent,
    re = n(function() {
        var v = B(function(a) {
            var M = a.model,
                e = a.controller,
                t = a.controller.idService,
                s = e.validationService,
                c = e.callContext(),
                u = O,
                m = x,
                j = {
                    props: a,
                    validateWidget: n(function(l) {
                        a.validateWidget(a, l)
                    }, "validateWidget")
                },
                r = M,
                X = K,
                h = Q,
                f = Z();
            return i.createElement("div", a.rootNodeProperties, X(N.isDesktop$Action(c).isDesktopOut, !1, this, function() {
                return [i.createElement(H, {
                    getOwnerSpan: n(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        ShowClosebutton: !1,
                        shouldShowQuestionInfo: !1,
                        ShowBackbutton: !1,
                        ShowInfoButton: !1
                    },
                    events: {
                        _handleError: n(function(l) {
                            e.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: t,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        contentbody: new k(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "flex flex-col items-center mb-8",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "1"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 96px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "96px"
                                },
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(S, {
                                getOwnerSpan: n(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='96' height='96' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M35 20.875C36.25 22 36.25 23.875 35.125 25.125L26.125 35.125C25.625 35.625 24.875 36 24 36C23.25 36.125 22.375 35.75 21.875 35.125L16.875 30.125C15.625 29 15.625 27.125 16.875 25.875C18 24.75 19.875 24.75 21 25.875L23.875 28.75L30.75 21C31.875 19.75 33.75 19.75 35 20.875ZM35 40.875C36.25 42 36.25 43.875 35.125 45.125L26.125 55.125C25.625 55.625 24.875 56 24 56C23.25 56.125 22.375 55.75 21.875 55.125L16.875 50.125C15.625 49 15.625 47.125 16.875 46C18 44.75 19.875 44.75 21 46L23.875 48.75L30.75 41C31.875 39.875 33.75 39.75 35 40.875ZM44 28C44 25.875 45.75 24 48 24H76C78.125 24 80 25.875 80 28C80 30.25 78.125 32 76 32H48C45.75 32 44 30.25 44 28ZM44 48C44 45.875 45.75 44 48 44H76C78.125 44 80 45.875 80 48C80 50.25 78.125 52 76 52H48C45.75 52 44 50.25 44 48ZM36 68C36 65.875 37.75 64 40 64H76C78.125 64 80 65.875 80 68C80 70.25 78.125 72 76 72H40C37.75 72 36 70.25 36 68ZM22 62C24.125 62 26 63.25 27.125 65C28.25 66.875 28.25 69.25 27.125 71C26 72.875 24.125 74 22 74C19.75 74 17.875 72.875 16.75 71C15.625 69.25 15.625 66.875 16.75 65C17.875 63.25 19.75 62 22 62Z' fill='#00080A'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: n(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "3",
                                    alias: "2"
                                },
                                _widgetRecordProvider: r,
                                _dependencies: []
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "mb-2",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; text-align: center;"
                                },
                                style: "mb-2",
                                text: [h(m("stLVzlR3n0iebBhpsWgN7w#Value", "Verification in progress"))],
                                _idProps: {
                                    service: t,
                                    uuid: "5"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                text: [h(m("Axu3gIHdC0q7QiFuXb5HcA#Value", "You can check the status within a few minutes."))],
                                _idProps: {
                                    service: t,
                                    uuid: "7"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                style: "w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "8"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(b, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: n(function() {
                                    var l = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                    e.handleOnClickDone$Action(e.callContext(l))
                                }, "onClick"),
                                style: "btn btn-primary action-button z-20",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "9"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [h(m("RgxZCJTU50emeZE14JKopg#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "10"
                                },
                                _widgetRecordProvider: r
                            })))]
                        })
                    },
                    _dependencies: []
                })]
            }, function() {
                return [i.createElement(R, {
                    getOwnerSpan: n(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        shouldShowQuestionInfo: !1,
                        hasActionLeftButton: !1,
                        has_close_icon: !1,
                        has_back_button: !1,
                        hasRighAction: !1
                    },
                    events: {
                        _handleError: n(function(l) {
                            e.handleError(l)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: s
                    },
                    _idProps: {
                        service: t,
                        uuid: "11",
                        alias: "3"
                    },
                    _widgetRecordProvider: r,
                    placeholders: {
                        content: new k(function() {
                            return [i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: calc(100% - 56px);"
                                },
                                style: "flex flex-col items-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "12"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "height: 96px;"
                                },
                                gridProperties: {
                                    classes: "OSInline",
                                    width: "96px"
                                },
                                style: "mb-6",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "13"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(S, {
                                getOwnerSpan: n(function() {
                                    return f.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: n(function() {
                                    return f.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    SVGCode: `<svg width='96' height='96' viewBox='0 0 96 96' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M35 20.875C36.25 22 36.25 23.875 35.125 25.125L26.125 35.125C25.625 35.625 24.875 36 24 36C23.25 36.125 22.375 35.75 21.875 35.125L16.875 30.125C15.625 29 15.625 27.125 16.875 25.875C18 24.75 19.875 24.75 21 25.875L23.875 28.75L30.75 21C31.875 19.75 33.75 19.75 35 20.875ZM35 40.875C36.25 42 36.25 43.875 35.125 45.125L26.125 55.125C25.625 55.625 24.875 56 24 56C23.25 56.125 22.375 55.75 21.875 55.125L16.875 50.125C15.625 49 15.625 47.125 16.875 46C18 44.75 19.875 44.75 21 46L23.875 48.75L30.75 41C31.875 39.875 33.75 39.75 35 40.875ZM44 28C44 25.875 45.75 24 48 24H76C78.125 24 80 25.875 80 28C80 30.25 78.125 32 76 32H48C45.75 32 44 30.25 44 28ZM44 48C44 45.875 45.75 44 48 44H76C78.125 44 80 45.875 80 48C80 50.25 78.125 52 76 52H48C45.75 52 44 50.25 44 48ZM36 68C36 65.875 37.75 64 40 64H76C78.125 64 80 65.875 80 68C80 70.25 78.125 72 76 72H40C37.75 72 36 70.25 36 68ZM22 62C24.125 62 26 63.25 27.125 65C28.25 66.875 28.25 69.25 27.125 71C26 72.875 24.125 74 22 74C19.75 74 17.875 72.875 16.75 71C15.625 69.25 15.625 66.875 16.75 65C17.875 63.25 19.75 62 22 62Z' fill='#00080A'/>\r
</svg>`
                                },
                                events: {
                                    _handleError: n(function(l) {
                                        e.handleError(l)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: s
                                },
                                _idProps: {
                                    service: t,
                                    uuid: "14",
                                    alias: "4"
                                },
                                _widgetRecordProvider: r,
                                _dependencies: []
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "15"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "color: var(--text-brandPrimaryProminent, #00080A); font-size: 24px; font-style: normal; font-weight: 900; line-height: normal; text-align: center;"
                                },
                                style: "mb-2",
                                text: [h(m("7SKiSs6rtUiwYyv43FQxYQ#Value", "Verification in progress"))],
                                _idProps: {
                                    service: t,
                                    uuid: "16"
                                },
                                _widgetRecordProvider: r
                            })), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "17"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "---comment-6: /* 150% */; color: var(--text-default, rgba(0, 0, 0, 0.72)); font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px; text-align: center;"
                                },
                                text: [h(m("lSTMv6tFAkG01dBx95po2Q#Value", "You can check the status within a few minutes."))],
                                _idProps: {
                                    service: t,
                                    uuid: "18"
                                },
                                _widgetRecordProvider: r
                            }))), i.createElement(d, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 16px;"
                                },
                                style: "fixed bottom-0 left-0 w-full flex justify-center",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "19"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(b, {
                                enabled: !0,
                                isDefault: !1,
                                onClick: n(function() {
                                    var l = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                    e.handleOnClickDone$Action(e.callContext(l))
                                }, "onClick"),
                                style: "btn btn-primary action-button",
                                visible: !0,
                                _idProps: {
                                    service: t,
                                    uuid: "20"
                                },
                                _widgetRecordProvider: r
                            }, i.createElement(g, {
                                extendedProperties: {
                                    style: "font-size: 16px; font-weight: bold;"
                                },
                                text: [h(m("KsaLe_W2_EqKzvSzbTc6aQ#Value", "Done"))],
                                _idProps: {
                                    service: t,
                                    uuid: "21"
                                },
                                _widgetRecordProvider: r
                            })))]
                        }),
                        footer: k.Empty
                    },
                    _dependencies: []
                })]
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: n(function() {
                return {
                    codeFunction: "VerificationInProgress",
                    functionKey: "0a600bfe-0e0a-4e50-9c83-d65093a6307c",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "KYCFlow.VerificationInProgress",
            modelFactory: D,
            controllerFactory: A,
            getTitle: n(function(a) {
                var M = a.model,
                    e = a.controller,
                    t = a.controller.idService,
                    s = e.validationService,
                    c = e.callContext(),
                    u = O,
                    m = x,
                    j = {
                        props: a,
                        validateWidget: n(function(r) {
                            a.validateWidget(a, r)
                        }, "validateWidget")
                    };
                return I.resolve(F.TranslationsService).getMessage("_gtgCgoOUE6cg9ZQk6YwfA#TitleExpression.-1408363139.1", "Verification in progress | Deriv")
            }, "getTitle")
        });
        return v.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, v.getJsDependencies = function() {
            return []
        }, v.getBlocks = function() {
            return [H, S, R]
        }, v
    }, "componentFactory"),
    ie = re();
export {
    A as controllerModule, D as modelModule, ie as viewModule, V as webFlowControllerModule
};