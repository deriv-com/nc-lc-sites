import {
    a as P
} from "./_oschunk-I6UUKQBK.js";
import {
    d as g,
    s as H
} from "./_oschunk-LWMGEL7F.js";
import {
    a as m
} from "./_oschunk-4GXKK3IG.js";
import {
    a as O,
    g as v,
    i as l
} from "./_oschunk-WZHUAZJP.js";
import {
    q as u
} from "./_oschunk-BDI2RWOA.js";
import {
    ia as o
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var s = R(O());
var _ = {};
var f = o; {
    let t = class t extends f.Controller.BaseViewController {
        constructor(e, h, n) {
            super(e, h, n, _);
            var y = this.controller;
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
            return u.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let i = t;
    E = i
}
var E, p = new f.Controller.ControllerFactory(E, m);
var b = o,
    q = l.PlaceholderContent,
    Q = l.IteratorPlaceholderContent,
    r = class r extends v.BaseWebBlock {
        static get displayName() {
            return "Common.SkeletonLoader"
        }
        static getAttributes() {
            return {
                codeFunction: "SkeletonLoader",
                functionKey: "1345ab0f-a5bb-4c16-9a34-766f79274b9e",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.SkeletonLoader.css"]
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
            return p
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                c = this.controller,
                e = this.idService,
                h = c.validationService,
                n = this.widgetsRecordProvider,
                y = c.callContext(),
                S = r.ifWidget,
                w = r.textWidget,
                F = r.asPrimitiveValue,
                D = r.getTranslation,
                C = this;
            return s.createElement("div", this.getRootNodeProperties(), S(t.variables.isLoadingIn, !1, this, function() {
                return [s.createElement(g, {
                    align: 0,
                    animate: !0,
                    extendedProperties: {
                        style: "height: " + t.variables.skeletonHeightIn
                    },
                    style: "skeleton-loader",
                    visible: t.variables.isLoadingIn,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: n,
                    visible_dataFetchStatus: b.Model.calculateDataFetchStatus(t.variables._isLoadingInDataFetchStatus)
                })]
            }, function() {
                return [s.createElement(H, {
                    align: 0,
                    content: C.props.placeholders.content,
                    style: t.variables.classNameIn,
                    _idProps: {
                        service: e,
                        name: "Content"
                    },
                    _widgetRecordProvider: n,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(t.variables._classNameInDataFetchStatus)
                })]
            }))
        }
    };
a(r, "View");
var d = r,
    U = d;
export {
    U as a
};