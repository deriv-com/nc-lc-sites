import {
    a as C
} from "./_oschunk-HFW3V2GI.js";
import {
    f as c,
    h as m
} from "./_oschunk-VR5BNL2K.js";
import {
    a as L,
    g as I,
    m as P,
    o as H,
    q as T,
    r as V,
    s as R,
    t as M
} from "./_oschunk-4VHUVDBV.js";
import {
    a as x
} from "./_oschunk-KXORGPRQ.js";
import {
    Sb as w
} from "./_oschunk-Z7QRTJDJ.js";
import {
    I as d,
    W as v,
    c as r,
    e as k,
    m as _,
    n as S,
    w as g
} from "./_oschunk-M5BUVJ72.js";
var s = k(L());
var i = v,
    D = class D extends i.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Title", "titleIn", "Title", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_titleInDataFetchStatus", "_titleInDataFetchStatus", "_titleInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Content", "contentIn", "Content", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_contentInDataFetchStatus", "_contentInDataFetchStatus", "_contentInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Action", "actionIn", "Action", !0, !1, i.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_actionInDataFetchStatus", "_actionInDataFetchStatus", "_actionInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("is_disabled", "is_disabledIn", "is_disabled", !0, !1, i.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_is_disabledInDataFetchStatus", "_is_disabledInDataFetchStatus", "_is_disabledInDataFetchStatus", !0, !1, i.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(i.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(D, "VariablesRecord");
var y = D;
y.init();
var F = class F extends i.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(F, "WidgetsRecord");
var b = F,
    u = class u extends i.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return b
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {
            "Title" in t && (this.variables.titleIn = t.Title, "_titleInDataFetchStatus" in t && (this.variables._titleInDataFetchStatus = t._titleInDataFetchStatus)), "Content" in t && (this.variables.contentIn = t.Content, "_contentInDataFetchStatus" in t && (this.variables._contentInDataFetchStatus = t._contentInDataFetchStatus)), "Action" in t && (this.variables.actionIn = t.Action, "_actionInDataFetchStatus" in t && (this.variables._actionInDataFetchStatus = t._actionInDataFetchStatus)), "is_disabled" in t && (this.variables.is_disabledIn = t.is_disabled, "_is_disabledInDataFetchStatus" in t && (this.variables._is_disabledInDataFetchStatus = t._is_disabledInDataFetchStatus))
        }
    };
r(u, "Model");
var p = u;
p._hasValidationWidgetsValue = void 0;
var A = new i.Model.ModelFactory(p);
var U = {
        "Y+9eJ+zTgUukW7MuMuoz1A#ValueExpression.1044674678.1": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0631\u0645\u0632 \u062C\u062F\u064A\u062F",
        "V5yR+qa8nEatlc6Gs+zKGA#ValueExpression.-936120643.1": "\u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u0648\u0627\u062D\u062F \u062C\u062F\u064A\u062F",
        "QmyX3srzAEyHjJwmFhIa4Q#ValueExpression.745801746.1": "\u0627\u0646\u062A\u0647\u062A \u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0631\u0645\u0632"
    },
    z = {
        "ar-001": {
            translations: U,
            isRTL: !0
        }
    };
var B = v; {
    let t = class t extends B.Controller.BaseViewController {
        constructor(e, n, E) {
            super(e, n, E, z);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get actionTrigger$Action() {
            return this.hasOwnProperty("_actionTrigger$Action") || (this._actionTrigger$Action = function() {
                return Promise.resolve()
            }), this._actionTrigger$Action
        }
        set actionTrigger$Action(e) {
            this._actionTrigger$Action = e
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
                return controller.handleError(e)
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
    r(t, "ControllerInner");
    let l = t;
    G = l
}
var G, N = new B.Controller.ControllerFactory(G, x);
var ye = I.PlaceholderContent,
    pe = I.IteratorPlaceholderContent,
    $ = r(function() {
        var l = H(function(t) {
            var a = t.model,
                e = t.controller,
                n = t.controller.idService,
                E = e.validationService,
                f = e.callContext(),
                j = R,
                q = M,
                J = {
                    props: t,
                    validateWidget: r(function(h) {
                        t.validateWidget(t, h)
                    }, "validateWidget")
                },
                o = a,
                Q = V,
                Z = T,
                O = P();
            return s.createElement("div", t.rootNodeProperties, s.createElement(c, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "background: rgba(230, 25, 14, 0.08); border-radius: 16px;"
                },
                style: "banner info-card display-flex flex-direction column-gap-s",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: o
            }, s.createElement(c, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "1"
                },
                _widgetRecordProvider: o
            }, s.createElement(C, {
                getOwnerSpan: r(function() {
                    return O.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return O.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>\r
<path d='M12.5312 6.65625L6.34375 16.8125C6.28125 16.9062 6.28125 16.9688 6.28125 17.0625C6.28125 17.3125 6.46875 17.5 6.71875 17.5H18.8125C19.0625 17.5 19.2812 17.3125 19.2812 17.0625C19.2812 16.9688 19.25 16.9062 19.1875 16.8125L13 6.65625C12.9688 6.5625 12.875 6.5 12.7812 6.5C12.6562 6.5 12.5938 6.5625 12.5312 6.65625ZM11.25 5.875C11.5625 5.34375 12.1562 5 12.7812 5C13.375 5 13.9688 5.34375 14.2812 5.875L20.4688 16.0312C20.6562 16.3438 20.7812 16.6875 20.7812 17.0625C20.7812 18.125 19.9062 19 18.8125 19H6.71875C5.65625 19 4.78125 18.125 4.78125 17.0625C4.78125 16.6875 4.875 16.3438 5.0625 16.0312L11.25 5.875ZM13.7812 15.5C13.7812 16.0625 13.3125 16.5 12.7812 16.5C12.2188 16.5 11.7812 16.0625 11.7812 15.5C11.7812 14.9688 12.2188 14.5 12.7812 14.5C13.3125 14.5 13.7812 14.9688 13.7812 15.5ZM13.5312 9.75V12.75C13.5312 13.1875 13.1875 13.5 12.7812 13.5C12.3438 13.5 12.0312 13.1875 12.0312 12.75V9.75C12.0312 9.34375 12.3438 9 12.7812 9C13.1875 9 13.5312 9.34375 13.5312 9.75Z' fill='#C40000'/>\r
</svg>`
                },
                events: {
                    _handleError: r(function(h) {
                        e.handleError(h)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: E
                },
                _idProps: {
                    service: n,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                _dependencies: []
            })), s.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-s  flex-1",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "3"
                },
                _widgetRecordProvider: o
            }, s.createElement(c, {
                align: 0,
                animate: !1,
                style: "display-flex flex-direction-column row-gap-xs",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "4"
                },
                _widgetRecordProvider: o
            }, s.createElement(m, {
                extendedProperties: {
                    style: "color: var(--text-prominent); font-size: 14px; font-style: normal; font-weight: 600; line-height: 22px;"
                },
                value: a.getCachedValue(n.getId("XOMMedD9k0em+bzNcQnmVw.Value"), function() {
                    return a.variables.titleIn !== g.nullTextIdentifier() ? a.variables.titleIn : _.resolve(S.TranslationsService).getMessage("QmyX3srzAEyHjJwmFhIa4Q#ValueExpression.745801746.1", "Code expired")
                }, function() {
                    return a.variables.titleIn
                }),
                _idProps: {
                    service: n,
                    uuid: "5"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: d.calculateDataFetchStatus(a.variables._titleInDataFetchStatus)
            }), s.createElement(m, {
                extendedProperties: {
                    style: "color: var(--text-default, rgba(0, 0, 0, 0.72));"
                },
                gridProperties: {
                    marginLeft: "0"
                },
                value: a.getCachedValue(n.getId("mUHALdkjhEqWhSFApaPCIQ.Value"), function() {
                    return a.variables.contentIn !== g.nullTextIdentifier() ? a.variables.contentIn : _.resolve(S.TranslationsService).getMessage("V5yR+qa8nEatlc6Gs+zKGA#ValueExpression.-936120643.1", "Get a new one")
                }, function() {
                    return a.variables.contentIn
                }),
                _idProps: {
                    service: n,
                    uuid: "6"
                },
                _widgetRecordProvider: o,
                value_dataFetchStatus: d.calculateDataFetchStatus(a.variables._contentInDataFetchStatus)
            })), s.createElement(c, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: r(function() {
                        var h = typeof f != "undefined" && f !== null ? f.clone() : e.callContext().clone();
                        e.actionTrigger$Action(e.callContext(h))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "text-decoration: underline;"
                },
                style: a.getCachedValue(n.getId("Q6pZ6nXStE2uxr2i4vxkLw.Style"), function() {
                    return "w-fit flex gap-4 " + (a.variables.is_disabledIn ? "pointer-events-none action-disabled" : "")
                }, function() {
                    return a.variables.is_disabledIn
                }),
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "7"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: d.calculateDataFetchStatus(a.variables._is_disabledInDataFetchStatus)
            }, s.createElement(m, {
                extendedProperties: {
                    style: "color: #000000;"
                },
                style: a.getCachedValue(n.getId("mdltJOVkWUqyjw7aIq8z6w.Style"), function() {
                    return a.variables.is_disabledIn ? "pointer-events-none action-disabled" : ""
                }, function() {
                    return a.variables.is_disabledIn
                }),
                value: a.getCachedValue(n.getId("mdltJOVkWUqyjw7aIq8z6w.Value"), function() {
                    return a.variables.actionIn !== g.nullTextIdentifier() ? a.variables.actionIn : _.resolve(S.TranslationsService).getMessage("Y+9eJ+zTgUukW7MuMuoz1A#ValueExpression.1044674678.1", "Get a new code")
                }, function() {
                    return a.variables.actionIn
                }),
                _idProps: {
                    service: n,
                    uuid: "8"
                },
                _widgetRecordProvider: o,
                style_dataFetchStatus: d.calculateDataFetchStatus(a.variables._is_disabledInDataFetchStatus),
                value_dataFetchStatus: d.calculateDataFetchStatus(a.variables._actionInDataFetchStatus)
            })))))
        }, {
            topLevelComponent: !1,
            getAttributes: r(function() {
                return {
                    codeFunction: "Banner",
                    functionKey: "d332825b-dbe3-47e1-8bd8-7ca36430cac7",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.Banner",
            modelFactory: A,
            controllerFactory: N
        });
        return l.getCssDependencies = function() {
            return ["css/uae.Common.Banner.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return [C]
        }, l
    }, "componentFactory"),
    Ee = $();
export {
    Ee as a
};