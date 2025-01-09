import {
    a as S
} from "./_oschunk-CKBUXFBK.js";
import {
    a as _
} from "./_oschunk-7TZ3KR6K.js";
import {
    a as E,
    b
} from "./_oschunk-FSWTA5WV.js";
import {
    d as f,
    p as g
} from "./_oschunk-M2CKCDBB.js";
import {
    a as P,
    g as k,
    i as m
} from "./_oschunk-WZHUAZJP.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var c = O(P());
var o = h; {
    let r = class r extends o.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
            var u = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onClickClose$Action() {
            return this.hasOwnProperty("__onClickClose$Action") || (this.__onClickClose$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickClose", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickClose"), n.setAttribute("outsystems.function.key", "1f3bffd5-eaf2-41c9-9ebf-83e1e9d946cc"), n.setAttribute("outsystems.function.owner.name", "UIKit"), n.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnClickClose"), t = e.callContext(t), o.Flow.executeAsyncFlow(function() {
                            return e.eventClose$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickClose$Action
        }
        set _onClickClose$Action(t) {
            this.__onClickClose$Action = t
        }
        get _onClickBack$Action() {
            return this.hasOwnProperty("__onClickBack$Action") || (this.__onClickBack$Action = function(t) {
                var i = this.model,
                    e = this.controller,
                    u = this.idService;
                return o.Logger.startActiveSpan("OnClickBack", function(n) {
                    return n && (n.setAttribute("code.function", "OnClickBack"), n.setAttribute("outsystems.function.key", "35fb48c0-4bb2-4649-a220-609be2069191"), n.setAttribute("outsystems.function.owner.name", "UIKit"), n.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnClickBack"), t = e.callContext(t), o.Flow.executeAsyncFlow(function() {
                            return e.eventBack$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__onClickBack$Action
        }
        set _onClickBack$Action(t) {
            this.__onClickBack$Action = t
        }
        onClickClose$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnClickClose__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnClickClose"), e.setAttribute("outsystems.function.key", "1f3bffd5-eaf2-41c9-9ebf-83e1e9d946cc"), e.setAttribute("outsystems.function.owner.name", "UIKit"), e.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickClose$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        onClickBack$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("OnClickBack__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnClickBack"), e.setAttribute("outsystems.function.key", "35fb48c0-4bb2-4649-a220-609be2069191"), e.setAttribute("outsystems.function.owner.name", "UIKit"), e.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._onClickBack$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get eventClose$Action() {
            return this.hasOwnProperty("_eventClose$Action") || (this._eventClose$Action = function() {
                return Promise.resolve()
            }), this._eventClose$Action
        }
        set eventClose$Action(t) {
            this._eventClose$Action = t
        }
        get eventBack$Action() {
            return this.hasOwnProperty("_eventBack$Action") || (this._eventBack$Action = function() {
                return Promise.resolve()
            }), this._eventBack$Action
        }
        set eventBack$Action(t) {
            this._eventBack$Action = t
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
            return E.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let v = r;
    p = v
}
var p, w = new o.Controller.ControllerFactory(p, b);
var y = h,
    B = m.PlaceholderContent,
    z = m.IteratorPlaceholderContent,
    l = class l extends k.BaseWebBlock {
        static get displayName() {
            return "Components.MobileSectionContentLayout"
        }
        static getAttributes() {
            return {
                codeFunction: "MobileSectionContentLayout",
                functionKey: "825114f9-ae98-443c-8b8d-afccab829cb9",
                functionOwnerName: "UIKit",
                functionOwnerKey: "895880e5-5422-4df6-a1a2-263897502224",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/UIKit.Components.MobileSectionContentLayout.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [_]
        }
        get modelFactory() {
            return S
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                a = this.controller,
                t = this.idService,
                i = a.validationService,
                e = this.widgetsRecordProvider,
                u = a.callContext(),
                n = l.ifWidget,
                I = l.textWidget,
                R = l.asPrimitiveValue,
                $ = l.getTranslation,
                C = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(f, {
                align: 0,
                animate: !1,
                style: "mobile-section",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, c.createElement(f, {
                align: 0,
                animate: !1,
                style: "mobile-section-seperator",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e
            }, c.createElement(_, {
                getOwnerSpan: s(function() {
                    return C.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return C.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ShouldDisplayBackButton: r.variables.displayBackButtonIn,
                    _shouldDisplayBackButtonInDataFetchStatus: y.Model.calculateDataFetchStatus(r.variables._displayBackButtonInDataFetchStatus),
                    Title: r.variables.titleIn,
                    _titleInDataFetchStatus: y.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus),
                    ShouldDisplayCloseButton: r.variables.displayCloseButtonIn,
                    _shouldDisplayCloseButtonInDataFetchStatus: y.Model.calculateDataFetchStatus(r.variables._displayCloseButtonInDataFetchStatus)
                },
                events: {
                    _handleError: s(function(d) {
                        a.handleError(d)
                    }, "_handleError"),
                    onClickBackButton$Action: s(function() {
                        return Promise.resolve().then(function() {
                            var d = u.clone();
                            return a.onClickBack$Action(a.callContext(d))
                        })
                    }, "onClickBackButton$Action"),
                    onClickClose$Action: s(function() {
                        return Promise.resolve().then(function() {
                            var d = u.clone();
                            return a.onClickClose$Action(a.callContext(d))
                        })
                    }, "onClickClose$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    additionalcontent: B.Empty
                },
                _dependencies: []
            })), c.createElement(f, {
                align: 0,
                animate: !1,
                style: "mobile-section--content",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: e
            }, c.createElement(g, {
                align: 0,
                content: C.props.placeholders.sectioncontent,
                style: "full-height",
                _idProps: {
                    service: t,
                    name: "Sectioncontent"
                },
                _widgetRecordProvider: e
            }))))
        }
    };
s(l, "View");
var A = l,
    G = A;
export {
    G as a
};