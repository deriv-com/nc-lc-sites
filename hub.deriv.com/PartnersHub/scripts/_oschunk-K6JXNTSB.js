import {
    a as H
} from "./_oschunk-CDQG5BIU.js";
import {
    a as v
} from "./_oschunk-5FKAOJ4S.js";
import {
    a as m
} from "./_oschunk-HMQSENZ4.js";
import {
    s as E
} from "./_oschunk-OO36B6PN.js";
import {
    a as g
} from "./_oschunk-6WALBPGV.js";
import {
    a as L,
    g as P,
    i as h
} from "./_oschunk-IL57OEHH.js";
import {
    a as _,
    p as f
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as u
} from "./_oschunk-5KJVGEL7.js";
import {
    c as t,
    h as b
} from "./_oschunk-QHO7QY6K.js";
var o = b(L());
var y = {};
var R = u; {
    let i = class i extends R.Controller.BaseViewController {
        constructor(e, l, n) {
            super(e, l, n, y);
            var w = this.controller;
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
            return f.defaultTimeout
        }
    };
    t(i, "ControllerInner");
    let d = i;
    C = d
}
var C, S = new R.Controller.ControllerFactory(C, g);
var D = h.PlaceholderContent,
    Y = h.IteratorPlaceholderContent,
    r = class r extends P.BaseWebBlock {
        static get displayName() {
            return "Layouts.LayoutWithLoaderBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "LayoutWithLoaderBlock",
                functionKey: "4348c5bf-f1f3-47c8-b25a-f370e027077f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Layouts.LayoutWithLoaderBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [m, v]
        }
        get modelFactory() {
            return H
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                s = this.controller,
                e = this.idService,
                l = s.validationService,
                n = this.widgetsRecordProvider,
                w = s.callContext(),
                O = r.ifWidget,
                W = r.textWidget,
                B = r.asPrimitiveValue,
                F = r.getTranslation,
                a = this;
            return o.createElement("div", this.getRootNodeProperties(), O(!_.getIsAppReady(), !1, this, function() {
                return [o.createElement(m, {
                    getOwnerSpan: t(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: t(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: t(function(c) {
                            s.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: e,
                        uuid: "0",
                        alias: "1"
                    },
                    _widgetRecordProvider: n,
                    _dependencies: []
                })]
            }, function() {
                return [o.createElement(v, {
                    getOwnerSpan: t(function() {
                        return a.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: t(function() {
                        return a.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {},
                    events: {
                        _handleError: t(function(c) {
                            s.handleError(c)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: l
                    },
                    _idProps: {
                        service: e,
                        uuid: "1",
                        alias: "2"
                    },
                    _widgetRecordProvider: n,
                    placeholders: {
                        mainContent: new D(function() {
                            return [o.createElement(E, {
                                align: 0,
                                content: a.props.placeholders.placeholder,
                                style: "ph-layout-placeholder",
                                _idProps: {
                                    service: e,
                                    name: "Placeholder"
                                },
                                _widgetRecordProvider: n
                            })]
                        })
                    }
                })]
            }))
        }
    };
t(r, "View");
var p = r,
    Z = p;
export {
    Z as a
};