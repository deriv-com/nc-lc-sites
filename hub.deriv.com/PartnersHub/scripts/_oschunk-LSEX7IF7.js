import {
    b as v
} from "./_oschunk-ZL2HTVZN.js";
import {
    a as P
} from "./_oschunk-MP57J6UO.js";
import {
    d as p
} from "./_oschunk-LWMGEL7F.js";
import {
    a as H
} from "./_oschunk-4GXKK3IG.js";
import {
    a as b,
    g as C,
    i as m
} from "./_oschunk-WZHUAZJP.js";
import {
    q as f
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as S
} from "./_oschunk-QHO7QY6K.js";
var c = S(b());
var E = {};
var R = s; {
    let e = class e extends R.Controller.BaseViewController {
        constructor(t, u, i) {
            super(t, u, i, E);
            var h = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get onClickLeftButton$Action() {
            return this.hasOwnProperty("_onClickLeftButton$Action") || (this._onClickLeftButton$Action = function() {
                return Promise.resolve()
            }), this._onClickLeftButton$Action
        }
        set onClickLeftButton$Action(t) {
            this._onClickLeftButton$Action = t
        }
        get onClickRightButton$Action() {
            return this.hasOwnProperty("_onClickRightButton$Action") || (this._onClickRightButton$Action = function() {
                return Promise.resolve()
            }), this._onClickRightButton$Action
        }
        set onClickRightButton$Action(t) {
            this._onClickRightButton$Action = t
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
            return f.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let d = e;
    w = d
}
var w, B = new R.Controller.ControllerFactory(w, H);
var l = s,
    U = m.PlaceholderContent,
    X = m.IteratorPlaceholderContent,
    o = class o extends C.BaseWebBlock {
        static get displayName() {
            return "Common.NewHeaderTitleBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "NewHeaderTitleBlock",
                functionKey: "bae5d7e4-a65c-483b-8ecd-35cf70dbb6c0",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.NewHeaderTitleBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [v]
        }
        get modelFactory() {
            return P
        }
        get controllerFactory() {
            return B
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                r = this.controller,
                t = this.idService,
                u = r.validationService,
                i = this.widgetsRecordProvider,
                h = r.callContext(),
                y = o.ifWidget,
                A = o.textWidget,
                k = o.asPrimitiveValue,
                D = o.getTranslation,
                _ = this;
            return c.createElement("div", this.getRootNodeProperties(), c.createElement(p, {
                align: 0,
                animate: !1,
                style: "ph-new-title-block-container",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: i
            }, c.createElement(v, {
                getOwnerSpan: n(function() {
                    return _.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return _.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Title: e.variables.titleIn,
                    _titleInDataFetchStatus: l.Model.calculateDataFetchStatus(e.variables._titleInDataFetchStatus),
                    ShowRightButton: e.variables.showRightButtonIn,
                    _showRightButtonInDataFetchStatus: l.Model.calculateDataFetchStatus(e.variables._showRightButtonInDataFetchStatus),
                    ShowLeftButton: e.variables.showLeftButtonIn,
                    _showLeftButtonInDataFetchStatus: l.Model.calculateDataFetchStatus(e.variables._showLeftButtonInDataFetchStatus),
                    CustomRightIcon: e.variables.customRightIconIn,
                    _customRightIconInDataFetchStatus: l.Model.calculateDataFetchStatus(e.variables._customRightIconInDataFetchStatus)
                },
                events: {
                    _handleError: n(function(a) {
                        r.handleError(a)
                    }, "_handleError"),
                    leftButtonAction$Action: n(function() {
                        var a = h.clone();
                        r.onClickLeftButton$Action(r.callContext(a))
                    }, "leftButtonAction$Action"),
                    rightButtonAction$Action: n(function() {
                        var a = h.clone();
                        r.onClickRightButton$Action(r.callContext(a))
                    }, "rightButtonAction$Action")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: t,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: i,
                _dependencies: []
            })))
        }
    };
n(o, "View");
var g = o,
    Y = g;
export {
    Y as a
};