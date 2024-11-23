import {
    a as y
} from "./_oschunk-6QQ7UHYS.js";
import {
    a as p
} from "./_oschunk-QCCZFQH6.js";
import {
    d as s,
    f as v,
    n as g
} from "./_oschunk-OO36B6PN.js";
import {
    a as E
} from "./_oschunk-6WALBPGV.js";
import {
    a as A,
    g as R,
    i as h
} from "./_oschunk-IL57OEHH.js";
import {
    p as H
} from "./_oschunk-DW3HXDMW.js";
import {
    ia as d
} from "./_oschunk-5KJVGEL7.js";
import {
    c as i,
    h as x
} from "./_oschunk-QHO7QY6K.js";
var n = x(A());
var S = {};
var b = d; {
    let t = class t extends b.Controller.BaseViewController {
        constructor(e, u, r) {
            super(e, u, r, S);
            var P = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get actionHandler$Action() {
            return this.hasOwnProperty("_actionHandler$Action") || (this._actionHandler$Action = function() {
                return Promise.resolve()
            }), this._actionHandler$Action
        }
        set actionHandler$Action(e) {
            this._actionHandler$Action = e
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
            return H.defaultTimeout
        }
    };
    i(t, "ControllerInner");
    let c = t;
    C = c
}
var C, w = new b.Controller.ControllerFactory(C, E);
var l = d,
    Y = h.PlaceholderContent,
    Z = h.IteratorPlaceholderContent,
    a = class a extends R.BaseWebBlock {
        static get displayName() {
            return "Common.AlertBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "AlertBlock",
                functionKey: "7e170be8-7546-4413-887c-d41948a5742c",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
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
            return [p]
        }
        get modelFactory() {
            return y
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                o = this.controller,
                e = this.idService,
                u = o.validationService,
                r = this.widgetsRecordProvider,
                P = o.callContext(),
                O = a.ifWidget,
                F = a.textWidget,
                D = a.asPrimitiveValue,
                I = a.getTranslation,
                f = this;
            return n.createElement("div", this.getRootNodeProperties(), n.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, n.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "align-items: center; display: flex; flex-direction: column;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: r
            }, O(t.variables.typeIn.isWarningAttr, !1, this, function() {
                return [n.createElement(g, {
                    image: l.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.warning.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: r
                })]
            }, function() {
                return [n.createElement(g, {
                    image: l.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.success2.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: r
                })]
            }), n.createElement(v, {
                extendedProperties: {
                    style: "color: #333; font-size: 24px; font-style: normal; font-weight: 700; line-height: normal; margin-top: 24px; text-align: center;"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                value: t.variables.titleIn,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: l.Model.calculateDataFetchStatus(t.variables._titleInDataFetchStatus)
            }), n.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: r
            }, n.createElement(v, {
                extendedProperties: {
                    style: "color: #333; font-size: 14px; font-style: normal; font-weight: 400; line-height: 24px; margin-top: 8px;"
                },
                value: t.variables.descriptionIn,
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: r,
                value_dataFetchStatus: l.Model.calculateDataFetchStatus(t.variables._descriptionInDataFetchStatus)
            })), n.createElement(s, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 24px;"
                },
                gridProperties: {
                    classes: "OSInline",
                    width: "100%"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }, n.createElement(p, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    Width: "100%",
                    visible: !0,
                    title: t.variables.buttonTitleIn,
                    _titleInDataFetchStatus: l.Model.calculateDataFetchStatus(t.variables._buttonTitleInDataFetchStatus),
                    enabled: !0
                },
                events: {
                    _handleError: i(function(m) {
                        o.handleError(m)
                    }, "_handleError"),
                    onClick$Action: i(function() {
                        var m = P.clone();
                        o.actionHandler$Action(o.callContext(m))
                    }, "onClick$Action")
                },
                _validationProps: {
                    validationService: u
                },
                _idProps: {
                    service: e,
                    name: "AlertButton",
                    alias: "1"
                },
                _widgetRecordProvider: r,
                _dependencies: []
            })))))
        }
    };
i(a, "View");
var _ = a,
    ee = _;
export {
    ee as a
};