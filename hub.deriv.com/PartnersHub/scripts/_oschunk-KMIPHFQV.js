import {
    a as C
} from "./_oschunk-4GL2OV66.js";
import {
    a as m
} from "./_oschunk-ZL2HTVZN.js";
import {
    d as u,
    f as H
} from "./_oschunk-LWMGEL7F.js";
import {
    a as P
} from "./_oschunk-4GXKK3IG.js";
import {
    a as w,
    g as E,
    i as h
} from "./_oschunk-WZHUAZJP.js";
import {
    q as p
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as I
} from "./_oschunk-QHO7QY6K.js";
var o = I(w());
var S = {};
var R = s; {
    let t = class t extends R.Controller.BaseViewController {
        constructor(e, c, i) {
            super(e, c, i, S);
            var _ = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get onClickRightIcon$Action() {
            return this.hasOwnProperty("_onClickRightIcon$Action") || (this._onClickRightIcon$Action = function() {
                return Promise.resolve()
            }), this._onClickRightIcon$Action
        }
        set onClickRightIcon$Action(e) {
            this._onClickRightIcon$Action = e
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
            return p.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let l = t;
    y = l
}
var y, b = new R.Controller.ControllerFactory(y, P);
var v = s,
    X = h.PlaceholderContent,
    Y = h.IteratorPlaceholderContent,
    r = class r extends E.BaseWebBlock {
        static get displayName() {
            return "Common.SectionTitle"
        }
        static getAttributes() {
            return {
                codeFunction: "SectionTitle",
                functionKey: "081ef8da-59d1-4fd4-8a18-7c054000a51f",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.SectionTitle.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [m]
        }
        get modelFactory() {
            return C
        }
        get controllerFactory() {
            return b
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                a = this.controller,
                e = this.idService,
                c = a.validationService,
                i = this.widgetsRecordProvider,
                _ = a.callContext(),
                O = r.ifWidget,
                F = r.textWidget,
                D = r.asPrimitiveValue,
                x = r.getTranslation,
                f = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(u, {
                align: 0,
                animate: !1,
                style: "ph-custom-section-title-container",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, o.createElement(H, {
                style: "ph-section-title",
                value: t.variables.labelIn,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: i,
                value_dataFetchStatus: v.Model.calculateDataFetchStatus(t.variables._labelInDataFetchStatus)
            }), O(t.variables.rightIconIn !== v.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                return [o.createElement(u, {
                    align: 0,
                    animate: !1,
                    extendedEvents: {
                        onClick: n(function() {
                            var d = _.clone();
                            a.onClickRightIcon$Action(a.callContext(d))
                        }, "onClick")
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: i
                }, o.createElement(m, {
                    getOwnerSpan: n(function() {
                        return f.getChildSpan("render")
                    }, "getOwnerSpan"),
                    getOwnerDisposeSpan: n(function() {
                        return f.getChildSpan("destroy")
                    }, "getOwnerDisposeSpan"),
                    inputs: {
                        SVGCode: t.variables.rightIconIn,
                        _sVGCodeInDataFetchStatus: v.Model.calculateDataFetchStatus(t.variables._rightIconInDataFetchStatus)
                    },
                    events: {
                        _handleError: n(function(d) {
                            a.handleError(d)
                        }, "_handleError")
                    },
                    _validationProps: {
                        validationService: c
                    },
                    _idProps: {
                        service: e,
                        uuid: "3",
                        alias: "1"
                    },
                    _widgetRecordProvider: i,
                    _dependencies: []
                }))]
            }, function() {
                return []
            })))
        }
    };
n(r, "View");
var g = r,
    Z = g;
export {
    Z as a
};