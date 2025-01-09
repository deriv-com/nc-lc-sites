import {
    b as g
} from "./_oschunk-GPNNXU3M.js";
import {
    d
} from "./_oschunk-M2CKCDBB.js";
import {
    a as b,
    g as m,
    i as l
} from "./_oschunk-WZHUAZJP.js";
import {
    a as p
} from "./_oschunk-BTXBTSZ3.js";
import {
    m as v
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as n,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var i = O(b());
var f = {};
var y = s; {
    let e = class e extends y.Controller.BaseViewController {
        constructor(t, h, a) {
            super(t, h, a, f);
            var I = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
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
            return v.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let o = e;
    _ = o
}
var _, S = new y.Controller.ControllerFactory(_, g);
var E = s,
    q = l.PlaceholderContent,
    J = l.IteratorPlaceholderContent,
    r = class r extends m.BaseWebBlock {
        static get displayName() {
            return "Utilities.Separator"
        }
        static getAttributes() {
            return {
                codeFunction: "Separator",
                functionKey: "39080a9d-eba3-40c0-bcd0-df9437a23bd4",
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
            return p
        }
        get controllerFactory() {
            return S
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                u = this.controller,
                t = this.idService,
                h = u.validationService,
                a = this.widgetsRecordProvider,
                I = u.callContext(),
                H = r.ifWidget,
                P = r.textWidget,
                R = r.asPrimitiveValue,
                C = r.getTranslation,
                F = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(d, {
                align: 0,
                animate: !1,
                style: e.getCachedValue(t.getId("kWhV3I81UUyymP3TLEExTA.Style"), function() {
                    return e.variables.isVerticalIn ? "separator-wrapper full-height padding-right-" + e.variables.spaceIn + " padding-left-" + e.variables.spaceIn : "padding-top-" + e.variables.spaceIn + " padding-bottom-" + e.variables.spaceIn
                }, function() {
                    return e.variables.isVerticalIn
                }, function() {
                    return e.variables.spaceIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "0"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: E.Model.calculateDataFetchStatus(e.variables._isVerticalInDataFetchStatus, e.variables._spaceInDataFetchStatus)
            }, i.createElement(d, {
                align: 0,
                animate: !1,
                style: e.getCachedValue(t.getId("2yAyXVm9l0qeV2aJqaE2cw.Style"), function() {
                    return "separator" + (e.variables.isVerticalIn ? " separator-vertical" : " separator-horizontal") + " background-" + e.variables.colorIn + " " + e.variables.extendedClassIn
                }, function() {
                    return e.variables.isVerticalIn
                }, function() {
                    return e.variables.colorIn
                }, function() {
                    return e.variables.extendedClassIn
                }),
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: a,
                style_dataFetchStatus: E.Model.calculateDataFetchStatus(e.variables._isVerticalInDataFetchStatus, e.variables._colorInDataFetchStatus, e.variables._extendedClassInDataFetchStatus)
            })))
        }
    };
n(r, "View");
var c = r,
    K = c;
export {
    K as a
};