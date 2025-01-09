import {
    a as P,
    b as R
} from "./_oschunk-FSWTA5WV.js";
import {
    d as u,
    f as E,
    k as g,
    n as C,
    p as k
} from "./_oschunk-M2CKCDBB.js";
import {
    a as p,
    g as A,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import {
    a as B
} from "./_oschunk-YIVLIJ7Z.js";
import {
    ia as v
} from "./_oschunk-3RH6DZJJ.js";
import {
    c,
    h as H
} from "./_oschunk-QHO7QY6K.js";
var i = H(p());
var o = v; {
    let r = class r extends o.Controller.BaseViewController {
        constructor(t, a, e) {
            super(t, a, e);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _handleCloseButton$Action() {
            return this.hasOwnProperty("__handleCloseButton$Action") || (this.__handleCloseButton$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("HandleCloseButton", function(n) {
                    return n && (n.setAttribute("code.function", "HandleCloseButton"), n.setAttribute("outsystems.function.key", "e7087691-72d5-4a0f-8121-d15461796b63"), n.setAttribute("outsystems.function.owner.name", "UIKit"), n.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("HandleCloseButton"), t = e.callContext(t), o.Flow.executeAsyncFlow(function() {
                            return e.onClickClose$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__handleCloseButton$Action
        }
        set _handleCloseButton$Action(t) {
            this.__handleCloseButton$Action = t
        }
        get _handleBackButton$Action() {
            return this.hasOwnProperty("__handleBackButton$Action") || (this.__handleBackButton$Action = function(t) {
                var a = this.model,
                    e = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("HandleBackButton", function(n) {
                    return n && (n.setAttribute("code.function", "HandleBackButton"), n.setAttribute("outsystems.function.key", "ed20e486-1436-46d3-a777-09d9b7766936"), n.setAttribute("outsystems.function.owner.name", "UIKit"), n.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("HandleBackButton"), t = e.callContext(t), o.Flow.executeAsyncFlow(function() {
                            return e.onClickBackButton$Action(t)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__handleBackButton$Action
        }
        set _handleBackButton$Action(t) {
            this.__handleBackButton$Action = t
        }
        handleCloseButton$Action(t) {
            var a = this.controller;
            return o.Logger.startActiveSpan("HandleCloseButton__proxy", function(e) {
                return e && (e.setAttribute("code.function", "HandleCloseButton"), e.setAttribute("outsystems.function.key", "e7087691-72d5-4a0f-8121-d15461796b63"), e.setAttribute("outsystems.function.owner.name", "UIKit"), e.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._handleCloseButton$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        handleBackButton$Action(t) {
            var a = this.controller;
            return o.Logger.startActiveSpan("HandleBackButton__proxy", function(e) {
                return e && (e.setAttribute("code.function", "HandleBackButton"), e.setAttribute("outsystems.function.key", "ed20e486-1436-46d3-a777-09d9b7766936"), e.setAttribute("outsystems.function.owner.name", "UIKit"), e.setAttribute("outsystems.function.owner.key", "895880e5-5422-4df6-a1a2-263897502224"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return a.safeExecuteClientAction(a._handleBackButton$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onClickBackButton$Action() {
            return this.hasOwnProperty("_onClickBackButton$Action") || (this._onClickBackButton$Action = function() {
                return Promise.resolve()
            }), this._onClickBackButton$Action
        }
        set onClickBackButton$Action(t) {
            this._onClickBackButton$Action = t
        }
        get onClickClose$Action() {
            return this.hasOwnProperty("_onClickClose$Action") || (this._onClickClose$Action = function() {
                return Promise.resolve()
            }), this._onClickClose$Action
        }
        set onClickClose$Action(t) {
            this._onClickClose$Action = t
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
            return P.defaultTimeout
        }
    };
    c(r, "ControllerInner");
    let f = r;
    w = f
}
var w, S = new o.Controller.ControllerFactory(w, R);
var h = v,
    M = _.PlaceholderContent,
    j = _.IteratorPlaceholderContent,
    s = class s extends A.BaseWebBlock {
        static get displayName() {
            return "Components.ContentHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "ContentHeader",
                functionKey: "52acd063-7396-4ddc-adb7-fea0701c794b",
                functionOwnerName: "UIKit",
                functionOwnerKey: "895880e5-5422-4df6-a1a2-263897502224",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/UIKit.Components.ContentHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return B
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                t = this.idService,
                a = l.validationService,
                e = this.widgetsRecordProvider,
                d = l.callContext(),
                n = s.ifWidget,
                I = s.textWidget,
                O = s.asPrimitiveValue,
                $ = s.getTranslation,
                b = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "align-items-center display-flex full-width column-gap-s full-height",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, i.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e
            }, i.createElement(C, {
                enabled: !0,
                onClick: c(function() {
                    return Promise.resolve().then(function() {
                        var m = d.clone();
                        return l.handleBackButton$Action(l.callContext(m))
                    })
                }, "onClick"),
                style: "display-flex align-self-flex-end",
                visible: r.variables.shouldDisplayBackButtonIn,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: h.Model.calculateDataFetchStatus(r.variables._shouldDisplayBackButtonInDataFetchStatus)
            }, i.createElement(g, {
                image: h.Navigation.VersionedURL.getVersionedUrl("img/UIKit.iconback.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: e
            }))), i.createElement(u, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center content-header__title",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: e
            }, i.createElement(E, {
                extendedProperties: {
                    style: "text-align:" + r.variables.textAlignmentIn
                },
                style: "font-size-h5 font-bold full-width",
                value: r.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: h.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            }), i.createElement(k, {
                align: 0,
                content: b.props.placeholders.additionalcontent,
                _idProps: {
                    service: t,
                    name: "Additionalcontent"
                },
                _widgetRecordProvider: e
            })), i.createElement(u, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: e
            }, i.createElement(C, {
                enabled: !0,
                onClick: c(function() {
                    return Promise.resolve().then(function() {
                        var m = d.clone();
                        return l.handleCloseButton$Action(l.callContext(m))
                    })
                }, "onClick"),
                style: "display-flex align-self-flex-end",
                visible: r.variables.shouldDisplayCloseButtonIn,
                _idProps: {
                    service: t,
                    uuid: "8"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: h.Model.calculateDataFetchStatus(r.variables._shouldDisplayCloseButtonInDataFetchStatus)
            }, i.createElement(g, {
                image: h.Navigation.VersionedURL.getVersionedUrl("img/UIKit.StandaloneXmarkRegularIcon.svg"),
                style: "desktop-content-header__icon",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "9"
                },
                _widgetRecordProvider: e
            })))))
        }
    };
c(s, "View");
var y = s,
    G = y;
export {
    G as a
};