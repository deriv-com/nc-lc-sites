import {
    a as A,
    b as M
} from "./_oschunk-GPU7XYUR.js";
import {
    a as _,
    b as E
} from "./_oschunk-4YFBPYRH.js";
import {
    d,
    f as w,
    n as P,
    s as x
} from "./_oschunk-OO36B6PN.js";
import {
    a as b,
    g as C,
    i as v
} from "./_oschunk-IL57OEHH.js";
import {
    ia as s
} from "./_oschunk-5KJVGEL7.js";
import {
    c as r,
    h as F
} from "./_oschunk-QHO7QY6K.js";
var p = F(b());
var D = s; {
    let t = class t extends D.Controller.BaseViewController {
        constructor(e, m, n) {
            super(e, m, n);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClose$Action() {
            return this.hasOwnProperty("_onClose$Action") || (this._onClose$Action = function() {
                return Promise.resolve()
            }), this._onClose$Action
        }
        set onClose$Action(e) {
            this._onClose$Action = e
        }
        get onBack$Action() {
            return this.hasOwnProperty("_onBack$Action") || (this._onBack$Action = function() {
                return Promise.resolve()
            }), this._onBack$Action
        }
        set onBack$Action(e) {
            this._onBack$Action = e
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
            return _.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let l = t;
    B = l
}
var B, I = new D.Controller.ControllerFactory(B, E);
var a = F(b());
var $ = s; {
    let t = class t extends $.Controller.BaseViewController {
        constructor(e, m, n) {
            super(e, m, n);
            var c = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onBack$Action() {
            return this.hasOwnProperty("_onBack$Action") || (this._onBack$Action = function() {
                return Promise.resolve()
            }), this._onBack$Action
        }
        set onBack$Action(e) {
            this._onBack$Action = e
        }
        get onClose$Action() {
            return this.hasOwnProperty("_onClose$Action") || (this._onClose$Action = function() {
                return Promise.resolve()
            }), this._onClose$Action
        }
        set onClose$Action(e) {
            this._onClose$Action = e
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
            return _.defaultTimeout
        }
    };
    r(t, "ControllerInner");
    let l = t;
    k = l
}
var k, W = new $.Controller.ControllerFactory(k, E);
var O = s,
    re = v.PlaceholderContent,
    oe = v.IteratorPlaceholderContent,
    u = class u extends C.BaseWebBlock {
        static get displayName() {
            return "FullScreenMobileModal.FullScreenMobileModalHeader"
        }
        static getAttributes() {
            return {
                codeFunction: "FullScreenMobileModalHeader",
                functionKey: "9dae0dfa-648a-441d-9b4f-851d7788ee4d",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
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
            return A
        }
        get controllerFactory() {
            return W
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                o = this.controller,
                e = this.idService,
                m = o.validationService,
                n = this.widgetsRecordProvider,
                c = o.callContext(),
                f = u.ifWidget,
                N = u.textWidget,
                V = u.asPrimitiveValue,
                z = u.getTranslation,
                g = this;
            return a.createElement("div", this.getRootNodeProperties(), a.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; border: none; display: flex; justify-content: flex-start; padding: 16px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, a.createElement(d, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: n
            }, f(t.variables.hasBackButtonIn, !1, this, function() {
                return [a.createElement(P, {
                    extendedEvents: {
                        onClick: r(function() {
                            var i = c.clone();
                            o.onBack$Action(o.callContext(i))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "cursor: pointer; font-size: 18px; margin-right: 16px;"
                    },
                    gridProperties: {
                        width: "18px"
                    },
                    image: O.Navigation.VersionedURL.getVersionedUrl("img/CustomComponentsOfficial.arrowleftsm.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return []
            }), a.createElement(w, {
                extendedProperties: {
                    style: "font-size: 18px; font-weight: bold;"
                },
                value: t.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: n,
                value_dataFetchStatus: O.Model.calculateDataFetchStatus(t.variables._titleInDataFetchStatus)
            })), f(t.variables.hasCloseIconIn, !1, this, function() {
                return [a.createElement(P, {
                    extendedEvents: {
                        onClick: r(function() {
                            var i = c.clone();
                            o.onClose$Action(o.callContext(i))
                        }, "onClick")
                    },
                    extendedProperties: {
                        style: "cursor: pointer; font-size: 16px;"
                    },
                    gridProperties: {
                        width: "16px"
                    },
                    image: O.Navigation.VersionedURL.getVersionedUrl("img/CustomComponentsOfficial.xmarkmd.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return [a.createElement(d, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: n
                })]
            })), f(t.variables.hasSeparatorIn, !1, this, function() {
                return [a.createElement(d, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "background-color: #F1F3F5; height: 2px;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: n
                })]
            }, function() {
                return []
            }))
        }
    };
r(u, "View");
var S = u,
    H = S;
var y = s,
    he = v.PlaceholderContent,
    me = v.IteratorPlaceholderContent,
    h = class h extends C.BaseWebBlock {
        static get displayName() {
            return "FullScreenMobileModal.FullScreenMobileModal"
        }
        static getAttributes() {
            return {
                codeFunction: "FullScreenMobileModal",
                functionKey: "15c6f3ef-f141-4271-b3f8-7efeb6fb0f57",
                functionOwnerName: "CustomComponentsOfficial",
                functionOwnerKey: "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/CustomComponentsOfficial.FullScreenMobileModal.FullScreenMobileModal.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [H]
        }
        get modelFactory() {
            return M
        }
        get controllerFactory() {
            return I
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                o = this.controller,
                e = this.idService,
                m = o.validationService,
                n = this.widgetsRecordProvider,
                c = o.callContext(),
                f = h.ifWidget,
                N = h.textWidget,
                V = h.asPrimitiveValue,
                z = h.getTranslation,
                g = this;
            return p.createElement("div", this.getRootNodeProperties(), p.createElement(d, {
                align: 0,
                animate: !1,
                style: "deriv-full-screen-mobile-modal",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n
            }, f(t.variables.isHeaderVisibleIn, !1, this, function() {
                return [p.createElement(H, {
                    getOwnerSpan: r(function() {
                        return g.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: r(function() {
                        return g.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        Title: t.variables.titleIn,
                        _titleInDataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._titleInDataFetchStatus),
                        HasBackButton: t.variables.hasBackButtonIn,
                        _hasBackButtonInDataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._hasBackButtonInDataFetchStatus),
                        HasCloseIcon: t.variables.hasCloseIconIn,
                        _hasCloseIconInDataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._hasCloseIconInDataFetchStatus)
                    },
                    events: {
                        _handleError: r(function(i) {
                            o.handleError(i)
                        }, "_handleError"),
                        onClose$Action: r(function() {
                            var i = c.clone();
                            o.onClose$Action(o.callContext(i))
                        }, "onClose$Action"),
                        onBack$Action: r(function() {
                            var i = c.clone();
                            o.onBack$Action(o.callContext(i))
                        }, "onBack$Action")
                    },
                    _validationProps: {
                        validationService: m
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    _dependencies: []
                })]
            }, function() {
                return []
            }), p.createElement(x, {
                align: 0,
                content: g.props.placeholders.content,
                _idProps: {
                    service: e,
                    name: "Content"
                },
                _widgetRecordProvider: n
            })))
        }
    };
r(h, "View");
var R = h,
    ve = R;
export {
    ve as a
};