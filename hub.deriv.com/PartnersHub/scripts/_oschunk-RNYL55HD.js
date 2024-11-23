import {
    a as v
} from "./_oschunk-UOGDTLIS.js";
import {
    a as H
} from "./_oschunk-I7KZQPH5.js";
import {
    d as l,
    f as E
} from "./_oschunk-OO36B6PN.js";
import {
    a as C
} from "./_oschunk-6WALBPGV.js";
import {
    a as y,
    g as P,
    i as _
} from "./_oschunk-IL57OEHH.js";
import {
    p
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as h
} from "./_oschunk-5KJVGEL7.js";
import {
    c as n,
    h as b
} from "./_oschunk-QHO7QY6K.js";
var i = b(y());
var S = {};
var w = h; {
    let e = class e extends w.Controller.BaseViewController {
        constructor(t, d, r) {
            super(t, d, r, S);
            var g = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get leftButtonAction$Action() {
            return this.hasOwnProperty("_leftButtonAction$Action") || (this._leftButtonAction$Action = function() {
                return Promise.resolve()
            }), this._leftButtonAction$Action
        }
        set leftButtonAction$Action(t) {
            this._leftButtonAction$Action = t
        }
        get rightButtonAction$Action() {
            return this.hasOwnProperty("_rightButtonAction$Action") || (this._rightButtonAction$Action = function() {
                return Promise.resolve()
            }), this._rightButtonAction$Action
        }
        set rightButtonAction$Action(t) {
            this._rightButtonAction$Action = t
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
            return p.defaultTimeout
        }
    };
    n(e, "ControllerInner");
    let m = e;
    R = m
}
var R, A = new w.Controller.ControllerFactory(R, C);
var c = h,
    Q = _.PlaceholderContent,
    X = _.IteratorPlaceholderContent,
    s = class s extends P.BaseWebBlock {
        static get displayName() {
            return "Common.TitleBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "TitleBlock",
                functionKey: "74ea9030-1992-4562-872b-8ca2e4a9e63c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.Common.TitleBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [v]
        }
        get modelFactory() {
            return H
        }
        get controllerFactory() {
            return A
        }
        get title() {
            return ""
        }
        internalRender() {
            let e = this.model,
                o = this.controller,
                t = this.idService,
                d = o.validationService,
                r = this.widgetsRecordProvider,
                g = o.callContext(),
                B = s.ifWidget,
                O = s.textWidget,
                x = s.asPrimitiveValue,
                F = s.getTranslation,
                u = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(l, {
                align: 0,
                animate: !1,
                style: "custom-title-container",
                visible: !0,
                _idProps: {
                    service: t,
                    name: "Container"
                },
                _widgetRecordProvider: r
            }, i.createElement(l, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: n(function() {
                        var a = g.clone();
                        o.leftButtonAction$Action(o.callContext(a))
                    }, "onClick")
                },
                visible: e.variables.showLeftButtonIn,
                _idProps: {
                    service: t,
                    uuid: "1"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._showLeftButtonInDataFetchStatus)
            }, i.createElement(v, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M0.125 6.65625L5.625 1.15625C5.8125 0.96875 6.15625 0.96875 6.34375 1.15625C6.53125 1.34375 6.53125 1.6875 6.34375 1.875L1.6875 6.5H13.5C13.75 6.5 14 6.75 14 7C14 7.28125 13.75 7.5 13.5 7.5H1.6875L6.34375 12.1562C6.53125 12.3438 6.53125 12.6875 6.34375 12.875C6.15625 13.0625 5.8125 13.0625 5.625 12.875L0.125 7.375C-0.0625 7.1875 -0.0625 6.84375 0.125 6.65625Z" fill="#101213"/>\r
</svg>`,
                    ExtendedClass: "custom-svg"
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: t,
                    uuid: "2",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            })), i.createElement(l, {
                align: 0,
                animate: !1,
                style: "title",
                visible: !0,
                _idProps: {
                    service: t,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            }, i.createElement(E, {
                value: e.variables.titleIn,
                _idProps: {
                    service: t,
                    uuid: "4"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._titleInDataFetchStatus)
            })), i.createElement(l, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: n(function() {
                        var a = g.clone();
                        o.rightButtonAction$Action(o.callContext(a))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "cursor: pointer;"
                },
                visible: e.variables.showRightButtonIn,
                _idProps: {
                    service: t,
                    uuid: "5"
                },
                _widgetRecordProvider: r,
                visible_dataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._showRightButtonInDataFetchStatus)
            }, i.createElement(v, {
                getOwnerSpan: n(function() {
                    return u.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: n(function() {
                    return u.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: e.getCachedValue(t.getId("nrjRP77vN0iTdukCDHG8WA.SVGCode"), function() {
                        return e.variables.customRightIconIn !== c.BuiltinFunctions.nullTextIdentifier() ? e.variables.customRightIconIn : `<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.1562 12.5938L7 7.39844L1.80469 12.5938C1.57031 12.8281 1.17969 12.8281 0.90625 12.5938C0.671875 12.3203 0.671875 11.9297 0.90625 11.6953L6.10156 6.5L0.945312 1.34375C0.671875 1.10938 0.671875 0.71875 0.945312 0.445312C1.17969 0.210938 1.57031 0.210938 1.80469 0.445312L7 5.64062L12.1562 0.445312C12.3906 0.210938 12.7812 0.210938 13.0547 0.445312C13.2891 0.71875 13.2891 1.10938 13.0547 1.34375L7.85938 6.5L13.0547 11.6953C13.2891 11.9297 13.2891 12.3203 13.0547 12.5938C12.7812 12.8281 12.3906 12.8281 12.1562 12.5938Z" fill="#101213"/>\r
</svg>\r
`
                    }, function() {
                        return e.variables.customRightIconIn
                    }),
                    _sVGCodeInDataFetchStatus: c.Model.calculateDataFetchStatus(e.variables._customRightIconInDataFetchStatus),
                    ExtendedClass: "custom-svg"
                },
                events: {
                    _handleError: n(function(a) {
                        o.handleError(a)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: d
                },
                _idProps: {
                    service: t,
                    uuid: "6",
                    alias: "2"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            }))))
        }
    };
n(s, "View");
var f = s,
    Y = f;
export {
    Y as a
};