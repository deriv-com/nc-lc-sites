import {
    a as P
} from "./_oschunk-XH5MAFIM.js";
import {
    d as _,
    f as E,
    k as A,
    n as C,
    p as k
} from "./_oschunk-M2CKCDBB.js";
import {
    a as B
} from "./_oschunk-NQZZDANH.js";
import {
    a as p,
    g as b,
    i as v
} from "./_oschunk-WZHUAZJP.js";
import {
    o as g
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as h
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as l,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var s = R(p());
var o = h; {
    let r = class r extends o.Controller.BaseViewController {
        constructor(t, i, e) {
            super(t, i, e);
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
                var i = this.model,
                    e = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("HandleCloseButton", function(n) {
                    return n && (n.setAttribute("code.function", "HandleCloseButton"), n.setAttribute("outsystems.function.key", "1a2f5382-beae-4895-b741-3e4c32970a39"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
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
                var i = this.model,
                    e = this.controller,
                    d = this.idService;
                return o.Logger.startActiveSpan("HandleBackButton", function(n) {
                    return n && (n.setAttribute("code.function", "HandleBackButton"), n.setAttribute("outsystems.function.key", "99df3da2-184e-4681-a969-9f94fc84e6bb"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
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
            var i = this.controller;
            return o.Logger.startActiveSpan("HandleCloseButton__proxy", function(e) {
                return e && (e.setAttribute("code.function", "HandleCloseButton"), e.setAttribute("outsystems.function.key", "1a2f5382-beae-4895-b741-3e4c32970a39"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._handleCloseButton$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        handleBackButton$Action(t) {
            var i = this.controller;
            return o.Logger.startActiveSpan("HandleBackButton__proxy", function(e) {
                return e && (e.setAttribute("code.function", "HandleBackButton"), e.setAttribute("outsystems.function.key", "99df3da2-184e-4681-a969-9f94fc84e6bb"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), o.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._handleBackButton$Action, t)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onClickClose$Action() {
            return this.hasOwnProperty("_onClickClose$Action") || (this._onClickClose$Action = function() {
                return Promise.resolve()
            }), this._onClickClose$Action
        }
        set onClickClose$Action(t) {
            this._onClickClose$Action = t
        }
        get onClickBackButton$Action() {
            return this.hasOwnProperty("_onClickBackButton$Action") || (this._onClickBackButton$Action = function() {
                return Promise.resolve()
            }), this._onClickBackButton$Action
        }
        set onClickBackButton$Action(t) {
            this._onClickBackButton$Action = t
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
            return g.defaultTimeout
        }
    };
    l(r, "ControllerInner");
    let f = r;
    H = f
}
var H, w = new o.Controller.ControllerFactory(H, B);
var u = h,
    X = v.PlaceholderContent,
    q = v.IteratorPlaceholderContent,
    a = class a extends b.BaseWebBlock {
        static get displayName() {
            return "Common.ContentHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "ContentHeader",
                functionKey: "d837592e-7494-4f18-bf91-f00b51ecf6d8",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.ContentHeader.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return P
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                c = this.controller,
                t = this.idService,
                i = c.validationService,
                e = this.widgetsRecordProvider,
                d = c.callContext(),
                n = a.ifWidget,
                O = a.textWidget,
                $ = a.asPrimitiveValue,
                F = a.getTranslation,
                S = this;
            return s.createElement("div", this.getRootNodeProperties(), s.createElement(_, {
                align: 0,
                animate: !1,
                style: "align-items-center display-flex full-width column-gap-s",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, s.createElement(C, {
                enabled: !0,
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var m = d.clone();
                        return c.handleBackButton$Action(c.callContext(m))
                    })
                }, "onClick"),
                style: "display-flex align-self-flex-end",
                visible: r.variables.shouldDisplayBackButtonIn,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: u.Model.calculateDataFetchStatus(r.variables._shouldDisplayBackButtonInDataFetchStatus)
            }, s.createElement(A, {
                image: u.Navigation.VersionedURL.getVersionedUrl("img/Accounts.iconback.svg"),
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "2"
                },
                _widgetRecordProvider: e
            })), s.createElement(_, {
                align: 0,
                animate: !1,
                style: "display-flex justify-content-center content-header__title",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: e
            }, s.createElement(E, {
                extendedProperties: {
                    style: "text-align:" + r.variables.textAlignmentIn
                },
                style: "font-size-h5 font-bold full-width",
                value: r.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: e,
                value_dataFetchStatus: u.Model.calculateDataFetchStatus(r.variables._titleInDataFetchStatus)
            }), s.createElement(k, {
                align: 0,
                content: S.props.placeholders.additionalcontent,
                _idProps: {
                    service: t,
                    name: "Additionalcontent"
                },
                _widgetRecordProvider: e
            })), s.createElement(C, {
                enabled: !0,
                onClick: l(function() {
                    return Promise.resolve().then(function() {
                        var m = d.clone();
                        return c.handleCloseButton$Action(c.callContext(m))
                    })
                }, "onClick"),
                style: "display-flex align-self-flex-end",
                visible: r.variables.shouldDisplayCloseButtonIn,
                _idProps: {
                    service: t,
                    uuid: "6"
                },
                _widgetRecordProvider: e,
                visible_dataFetchStatus: u.Model.calculateDataFetchStatus(r.variables._shouldDisplayCloseButtonInDataFetchStatus)
            }, s.createElement(A, {
                image: u.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneXmarkRegularIcon.svg"),
                style: "desktop-content-header__icon",
                type: 0,
                _idProps: {
                    service: t,
                    uuid: "7"
                },
                _widgetRecordProvider: e
            }))))
        }
    };
l(a, "View");
var y = a,
    Q = y;
export {
    Q as a
};