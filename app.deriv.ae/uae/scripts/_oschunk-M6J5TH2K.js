import {
    a as x
} from "./_oschunk-NLNJ5SA5.js";
import {
    a as w
} from "./_oschunk-SFRA456L.js";
import "./_oschunk-L6JZD7VU.js";
import "./_oschunk-RVD4FS25.js";
import "./_oschunk-4SYOXZNK.js";
import "./_oschunk-YB2J7GTX.js";
import "./_oschunk-HFW3V2GI.js";
import "./_oschunk-LLAHPWP3.js";
import "./_oschunk-YVFTECWM.js";
import {
    b as Q,
    f as g,
    n as $,
    u as C
} from "./_oschunk-VR5BNL2K.js";
import {
    a as J,
    g as E,
    m as M,
    n as I,
    q as L,
    r as z,
    s as O,
    t as S
} from "./_oschunk-4VHUVDBV.js";
import {
    a as W
} from "./_oschunk-KXORGPRQ.js";
import "./_oschunk-ZM75JAVW.js";
import {
    Sb as D
} from "./_oschunk-Z7QRTJDJ.js";
import {
    W as m,
    c as r,
    e as G,
    m as N,
    n as T,
    p as k
} from "./_oschunk-M5BUVJ72.js";
var Z = {
        "n1NjJmKyOk6ICal0_uMq8w#Value": "\u062A\u0645",
        "0fOiFycg_kOOdAvRfVqFRg#Value": "\u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u0627\u0644\u0629 \u0641\u064A \u0635\u0641\u062D\u0629 Hub \u0623\u0648 \u0635\u0641\u062D\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A.",
        "zMKprsgOhkONN7IFOIzz7Q#Value": "\u062C\u0627\u0631\u064A \u0645\u0631\u0627\u062C\u0639\u0629 \u0645\u0633\u062A\u0646\u062F\u0627\u062A\u0643",
        "xDytQqsj1UWZQDhaM7Sw2Q#Title": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A | Deriv",
        "xDytQqsj1UWZQDhaM7Sw2Q#TitleExpression.-1273085453.1": "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0645\u0627\u0644\u064A | Deriv"
    },
    j = {
        "ar-001": {
            translations: Z,
            isRTL: !0
        }
    };
var d = m; {
    let t = class t extends d.Controller.BaseViewController {
        constructor(e, i, n) {
            super(e, i, n, j);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _nextOnClick$Action() {
            return this.hasOwnProperty("__nextOnClick$Action") || (this.__nextOnClick$Action = function(e) {
                var i = this.model,
                    n = this.controller,
                    c = this.idService;
                return d.Logger.startActiveSpan("NextOnClick", function(a) {
                    a && (a.setAttribute("code.function", "NextOnClick"), a.setAttribute("outsystems.function.key", "ff0301b9-ea12-432b-a92f-f36526fe55c6"), a.setAttribute("outsystems.function.owner.name", "uae"), a.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return n.ensureControllerAlive("NextOnClick"), e = n.callContext(e), d.Navigation.navigateTo(d.Navigation.generateScreenURL("uae", "home", {}), d.Transitions.createTransition(d.Transitions.TransitionAnimation.None), e, !0)
                    } finally {
                        a && a.end()
                    }
                }, 1)
            }), this.__nextOnClick$Action
        }
        set _nextOnClick$Action(e) {
            this.__nextOnClick$Action = e
        }
        nextOnClick$Action(e) {
            var i = this.controller;
            return d.Logger.startActiveSpan("NextOnClick__proxy", function(n) {
                n && (n.setAttribute("code.function", "NextOnClick"), n.setAttribute("outsystems.function.key", "ff0301b9-ea12-432b-a92f-f36526fe55c6"), n.setAttribute("outsystems.function.owner.name", "uae"), n.setAttribute("outsystems.function.owner.key", "20b302d1-c31f-4d5e-b3c5-77cbc01783f7"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._nextOnClick$Action, e)
                } finally {
                    n && n.end()
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
                return x.default.handleError(e, this.callContext())
            }), this._handleError
        }
        set handleError(e) {
            this._handleError = e
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return D.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let l = t;
    U = l
}
var U, b = new d.Controller.ControllerFactory(U, W);
var s = G(J());
var f = m,
    R = class R extends f.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(f.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
r(R, "VariablesRecord");
var y = R;
y.init();
var A = class A extends f.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
r(A, "WidgetsRecord");
var P = A,
    u = class u extends f.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return y
        }
        static getWidgetsRecordConstructor() {
            return P
        }
        static get hasValidationWidgets() {
            return u._hasValidationWidgetsValue === void 0 && (u._hasValidationWidgetsValue = void 0), u._hasValidationWidgetsValue
        }
        setInputs(t) {}
    };
r(u, "Model");
var _ = u;
_._hasValidationWidgetsValue = void 0;
var H = new f.Model.ModelFactory(_);
var B = E.PlaceholderContent,
    we = E.IteratorPlaceholderContent,
    Y = r(function() {
        var l = I(function(t) {
            var V = t.model,
                e = t.controller,
                i = t.controller.idService,
                n = e.validationService,
                c = e.callContext(),
                a = O,
                h = S,
                K = {
                    props: t,
                    validateWidget: r(function(v) {
                        t.validateWidget(t, v)
                    }, "validateWidget")
                },
                o = V,
                ee = z,
                p = L,
                F = M();
            return s.createElement("div", t.rootNodeProperties, s.createElement(w, {
                getOwnerSpan: r(function() {
                    return F.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return F.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    has_back_button: !1,
                    hasRighAction: !1
                },
                events: {
                    _handleError: r(function(v) {
                        e.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: n
                },
                _idProps: {
                    service: i,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: o,
                placeholders: {
                    content: new B(function() {
                        return [s.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 150px;"
                            },
                            style: "flex flex-col justify-content-center align-items-center gap-6",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "1"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement($, {
                            gridProperties: {
                                width: "50px"
                            },
                            image: k.VersionedURL.getVersionedUrl("img/uae.document.svg"),
                            type: 0,
                            _idProps: {
                                service: i,
                                uuid: "2"
                            },
                            _widgetRecordProvider: o
                        }), s.createElement(g, {
                            align: 0,
                            animate: !1,
                            style: "flex flex-col gap-2 align-items-center justify-content-center text-align-center",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "3"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(C, {
                            extendedProperties: {
                                style: "font-size: 24px; font-weight: 900;"
                            },
                            text: [p(h("zMKprsgOhkONN7IFOIzz7Q#Value", "Your documents are in review"))],
                            _idProps: {
                                service: i,
                                uuid: "4"
                            },
                            _widgetRecordProvider: o
                        }), p(h("0fOiFycg_kOOdAvRfVqFRg#Value", "You may check the status on the Hub or Profile page.")))), s.createElement(g, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "background: white; padding: 16px;"
                            },
                            style: "fixed bottom-0 left-0 w-full flex justify-center",
                            visible: !0,
                            _idProps: {
                                service: i,
                                name: "ActionButton"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(Q, {
                            enabled: !0,
                            isDefault: !1,
                            onClick: r(function() {
                                var v = typeof c != "undefined" && c !== null ? c.clone() : e.callContext().clone();
                                e.nextOnClick$Action(e.callContext(v))
                            }, "onClick"),
                            style: "btn btn-primary action-button",
                            visible: !0,
                            _idProps: {
                                service: i,
                                uuid: "6"
                            },
                            _widgetRecordProvider: o
                        }, s.createElement(C, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold;"
                            },
                            text: [p(h("n1NjJmKyOk6ICal0_uMq8w#Value", "Done"))],
                            _idProps: {
                                service: i,
                                uuid: "7"
                            },
                            _widgetRecordProvider: o
                        })))]
                    }),
                    footer: B.Empty
                },
                _dependencies: []
            }))
        }, {
            topLevelComponent: !0,
            getAttributes: r(function() {
                return {
                    codeFunction: "FinancialAssessmentCompletion",
                    functionKey: "42ad3cc4-23ab-45d5-9940-385a33b4b0d9",
                    functionOwnerName: "uae",
                    functionOwnerKey: "20b302d1-c31f-4d5e-b3c5-77cbc01783f7",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "OnboardingFlow.FinancialAssessmentCompletion",
            modelFactory: H,
            controllerFactory: b,
            getTitle: r(function(t) {
                var V = t.model,
                    e = t.controller,
                    i = t.controller.idService,
                    n = e.validationService,
                    c = e.callContext(),
                    a = O,
                    h = S,
                    K = {
                        props: t,
                        validateWidget: r(function(o) {
                            t.validateWidget(t, o)
                        }, "validateWidget")
                    };
                return N.resolve(T.TranslationsService).getMessage("xDytQqsj1UWZQDhaM7Sw2Q#TitleExpression.-1273085453.1", "Financial assessment | Deriv")
            }, "getTitle")
        });
        return l.getCssDependencies = function() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/uae.ChampionApp.css", "css/uae.ChampionApp.extra.css", "css/OutSystemsReactWidgets.css"]
        }, l.getJsDependencies = function() {
            return []
        }, l.getBlocks = function() {
            return [w]
        }, l
    }, "componentFactory"),
    X = Y();
export {
    b as controllerModule, H as modelModule, X as viewModule, x as webFlowControllerModule
};