import {
    a as O
} from "./_oschunk-KD4VTSOC.js";
import "./_oschunk-BWDLGS7Q.js";
import {
    a as D
} from "./_oschunk-EROCOLS7.js";
import {
    h as g,
    q as W,
    u as F,
    w as _,
    y as k
} from "./_oschunk-42NACYKQ.js";
import {
    a as T,
    b as V
} from "./_oschunk-IXJS77ZD.js";
import "./_oschunk-2IXTPDP6.js";
import "./_oschunk-I4RPHWEA.js";
import {
    a as B
} from "./_oschunk-WDULSS7M.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as x,
    g as f,
    i as v
} from "./_oschunk-RKYF3TWC.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import {
    l as H
} from "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as h
} from "./_oschunk-2JKANR6M.js";
import {
    c as r,
    g as I
} from "./_oschunk-DVBKI63I.js";
var a = I(x());
var c = I(x());
var U = {};
var A = h; {
    let n = class n extends A.Controller.BaseViewController {
        constructor(e, m, t) {
            super(e, m, t, U);
            var y = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
            return H.defaultTimeout
        }
    };
    r(n, "ControllerInner");
    let P = n;
    N = P
}
var N, z = new A.Controller.ControllerFactory(N, D);
var G = h,
    re = v.PlaceholderContent,
    ie = v.IteratorPlaceholderContent,
    d = class d extends f.BaseWebBlock {
        static get displayName() {
            return "Content.BlankSlate"
        }
        static getAttributes() {
            return {
                codeFunction: "BlankSlate",
                functionKey: "7dafe718-172c-4583-aefa-0c9bd4823126",
                functionOwnerName: "OutSystemsUI",
                functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return T
        }
        get controllerFactory() {
            return z
        }
        get title() {
            return ""
        }
        internalRender() {
            let n = this.model,
                i = this.controller,
                e = this.idService,
                m = i.validationService,
                t = this.widgetsRecordProvider,
                y = i.callContext(),
                E = d.ifWidget,
                p = d.textWidget,
                K = d.asPrimitiveValue,
                S = d.getTranslation,
                s = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(g, {
                align: 0,
                animate: !1,
                style: n.getCachedValue(e.getId("BlankState.Style"), function() {
                    return "blank-slate" + (n.variables.fullHeightIn ? " large" : "") + " " + n.variables.extendedClassIn
                }, function() {
                    return n.variables.fullHeightIn
                }, function() {
                    return n.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    name: "BlankState"
                },
                _widgetRecordProvider: t,
                style_dataFetchStatus: G.Model.calculateDataFetchStatus(n.variables._fullHeightInDataFetchStatus, n.variables._extendedClassInDataFetchStatus)
            }, c.createElement(g, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: t
            }, c.createElement(_, {
                align: 0,
                content: s.props.placeholders.icon,
                style: "ph blank-slate-icon",
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            }), c.createElement(_, {
                align: 0,
                content: s.props.placeholders.content,
                style: "ph blank-slate-description",
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: t
            }), c.createElement(_, {
                align: 0,
                content: s.props.placeholders.actions,
                style: "ph blank-slate-actions",
                _idProps: {
                    service: e,
                    name: "Actions"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
r(d, "View");
var C = d,
    w = C;
var u = h,
    l = v.PlaceholderContent,
    ge = v.IteratorPlaceholderContent,
    o = class o extends f.BaseWebScreen {
        static get displayName() {
            return "Common.InvalidPermissions"
        }
        static getAttributes() {
            return {
                codeFunction: "InvalidPermissions",
                functionKey: "2b4875e6-4842-4a90-bbe5-5e12808a4563",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [O, w]
        }
        get modelFactory() {
            return V
        }
        get controllerFactory() {
            return B
        }
        get title() {
            let n = this.model,
                i = this.controller,
                e = this.idService,
                m = i.validationService,
                t = i.callContext(),
                y = o.asPrimitiveValue,
                E = o.getTranslation,
                p = this;
            return u.Injector.resolve(u.ServiceNames.TranslationsService).getMessage("5nVIK0JIkEq75V4SgIpFYw#TitleExpression.-1269489733.1", "Invalid permissions")
        }
        internalRender() {
            let n = this.model,
                i = this.controller,
                e = this.idService,
                m = i.validationService,
                t = this.widgetsRecordProvider,
                y = i.callContext(),
                E = o.ifWidget,
                p = o.textWidget,
                K = o.asPrimitiveValue,
                S = o.getTranslation,
                s = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(O, {
                getOwnerSpan: r(function() {
                    return s.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: r(function() {
                    return s.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: r(function(R) {
                        i.handleError(R)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: m
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    breadcrumbs: l.Empty,
                    title: l.Empty,
                    actions: l.Empty,
                    mainContent: new l(function() {
                        return [a.createElement(w, {
                            getOwnerSpan: r(function() {
                                return s.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: r(function() {
                                return s.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                FullHeight: !0
                            },
                            events: {
                                _handleError: r(function(R) {
                                    i.handleError(R)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: m
                            },
                            _idProps: {
                                service: e,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                icon: new l(function() {
                                    return [a.createElement(W, {
                                        icon: "lock",
                                        iconSize: 0,
                                        style: "icon text-neutral-4",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "Icon1"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                content: new l(function() {
                                    return [a.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "3"
                                        },
                                        _widgetRecordProvider: t
                                    }, a.createElement(k, {
                                        style: "heading6",
                                        text: [p(S("33gIhDYS6E6qIKReu+2PmA#Value", "You don't have the necessary permission to see this screen."))],
                                        _idProps: {
                                            service: e,
                                            uuid: "4"
                                        },
                                        _widgetRecordProvider: t
                                    })), a.createElement(g, {
                                        align: 0,
                                        animate: !1,
                                        style: "margin-top-s",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "5"
                                        },
                                        _widgetRecordProvider: t
                                    }, p(S("QGbT7R8uHkmdaWHw9qRphw#Value", "Please contact your system administrator.")))]
                                }),
                                actions: new l(function() {
                                    return [E(u.BuiltinFunctions.getUserId().toString() === u.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                        return [a.createElement(F, {
                                            enabled: !0,
                                            extendedProperties: {
                                                tabIndex: "1"
                                            },
                                            transition: u.Transitions.createTransition(u.Transitions.TransitionAnimation.Default),
                                            url: u.Navigation.generateScreenURL("tradershub", "CommonLogin", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "6"
                                            },
                                            _widgetRecordProvider: t
                                        }, p(S("Ok0_TnXGtUi0Kpgc0Z60Pg#Value", "Go to login")))]
                                    }, function() {
                                        return []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    footer: l.Empty
                },
                _dependencies: []
            }))
        }
    };
r(o, "View");
var b = o,
    pe = b;
export {
    pe as
    default
};