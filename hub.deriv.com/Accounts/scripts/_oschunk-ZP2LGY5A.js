import {
    a as p
} from "./_oschunk-5LFNVMPX.js";
import {
    b
} from "./_oschunk-VZCHS3W5.js";
import {
    d as m,
    p as g
} from "./_oschunk-M2CKCDBB.js";
import {
    a as I
} from "./_oschunk-NQZZDANH.js";
import {
    a as P,
    g as A,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import {
    o as E
} from "./_oschunk-KZFTAIEG.js";
import {
    ia as u
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as a,
    h as O
} from "./_oschunk-QHO7QY6K.js";
var o = O(P());
var s = u; {
    let t = class t extends s.Controller.BaseViewController {
        constructor(e, i, n) {
            super(e, i, n);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _itemOnClick$Action() {
            return this.hasOwnProperty("__itemOnClick$Action") || (this.__itemOnClick$Action = function(e) {
                var i = this.model,
                    n = this.controller,
                    f = this.idService;
                return s.Logger.startActiveSpan("ItemOnClick", function(r) {
                    return r && (r.setAttribute("code.function", "ItemOnClick"), r.setAttribute("outsystems.function.key", "fd031ce7-9567-41ae-bcee-89be31fbcb26"), r.setAttribute("outsystems.function.owner.name", "Accounts"), r.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), r.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("ItemOnClick"), e = n.callContext(e), s.Flow.executeAsyncFlow(function() {
                            return s.Flow.executeSequence(function() {
                                if (!i.variables.isDisabledIn) return n.selectedItem$Action(i.variables.refIn, e)
                            })
                        })
                    }, function() {
                        r && r.end()
                    })
                }, 1)
            }), this.__itemOnClick$Action
        }
        set _itemOnClick$Action(e) {
            this.__itemOnClick$Action = e
        }
        itemOnClick$Action(e) {
            var i = this.controller;
            return s.Logger.startActiveSpan("ItemOnClick__proxy", function(n) {
                return n && (n.setAttribute("code.function", "ItemOnClick"), n.setAttribute("outsystems.function.key", "fd031ce7-9567-41ae-bcee-89be31fbcb26"), n.setAttribute("outsystems.function.owner.name", "Accounts"), n.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._itemOnClick$Action, e)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get selectedItem$Action() {
            return this.hasOwnProperty("_selectedItem$Action") || (this._selectedItem$Action = function() {
                return Promise.resolve()
            }), this._selectedItem$Action
        }
        set selectedItem$Action(e) {
            this._selectedItem$Action = e
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
            return E.defaultTimeout
        }
    };
    a(t, "ControllerInner");
    let h = t;
    S = h
}
var S, w = new s.Controller.ControllerFactory(S, I);
var y = u,
    j = _.PlaceholderContent,
    q = _.IteratorPlaceholderContent,
    c = class c extends A.BaseWebBlock {
        static get displayName() {
            return "Common.VerificationListItem"
        }
        static getAttributes() {
            return {
                codeFunction: "VerificationListItem",
                functionKey: "e39baab7-e200-4e52-b18f-66bd0067e585",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Common.VerificationListItem.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [b]
        }
        get modelFactory() {
            return p
        }
        get controllerFactory() {
            return w
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                n = this.widgetsRecordProvider,
                f = l.callContext(),
                r = c.ifWidget,
                R = c.textWidget,
                H = c.asPrimitiveValue,
                D = c.getTranslation,
                d = this;
            return o.createElement("div", this.getRootNodeProperties(), o.createElement(m, {
                align: 0,
                animate: !1,
                extendedEvents: {
                    onClick: a(function() {
                        return Promise.resolve().then(function() {
                            var v = f.clone();
                            return l.itemOnClick$Action(l.callContext(v))
                        })
                    }, "onClick")
                },
                style: t.getCachedValue(e.getId("_H_77UEMoUahDRCwpR5XIw.Style"), function() {
                    return "verificationListItem-layout display-flex justify-content-space-between align-items-center " + (t.variables.isDisabledIn || t.variables.statusIn === "verified" ? "verificationListItem-layout--disable" : "")
                }, function() {
                    return t.variables.isDisabledIn
                }, function() {
                    return t.variables.statusIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: n,
                style_dataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._isDisabledInDataFetchStatus, t.variables._statusInDataFetchStatus)
            }, o.createElement(m, {
                align: 0,
                animate: !1,
                style: t.getCachedValue(e.getId("U3nMsZloNEymIHWZFV7hsg.Style"), function() {
                    return "font-regular verificationListItem-text " + (t.variables.isDisabledIn ? "verificationListItem-text--disable" : "")
                }, function() {
                    return t.variables.isDisabledIn
                }),
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "1"
                },
                _widgetRecordProvider: n,
                style_dataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._isDisabledInDataFetchStatus)
            }, o.createElement(g, {
                align: 0,
                content: d.props.placeholders.text,
                _idProps: {
                    service: e,
                    name: "Text"
                },
                _widgetRecordProvider: n
            })), o.createElement(m, {
                align: 0,
                animate: !1,
                style: "display-flex column-gap-s align-items-center",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: n
            }, o.createElement(g, {
                align: 0,
                content: d.props.placeholders.badge,
                _idProps: {
                    service: e,
                    name: "Badge"
                },
                _widgetRecordProvider: n
            }), o.createElement(b, {
                getOwnerSpan: a(function() {
                    return d.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: a(function() {
                    return d.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img" id="selected_downloadable_icon_id"><path d="M21.43 16.07a.66.66 0 0 1 0 .899l-7.5 7.5a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.07-7.07-7.07-7.031a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0z"></path></svg>',
                    ExtendedClass: t.getCachedValue(e.getId("K1pe3tL8YUauCHu88dPdbw.ExtendedClass"), function() {
                        return "verificationListItem-action " + (t.variables.statusIn === "verified" || t.variables.isDisabledIn ? "verificationListItem-action--disable" : "")
                    }, function() {
                        return t.variables.statusIn
                    }, function() {
                        return t.variables.isDisabledIn
                    }),
                    _extendedClassInDataFetchStatus: y.Model.calculateDataFetchStatus(t.variables._statusInDataFetchStatus, t.variables._isDisabledInDataFetchStatus)
                },
                events: {
                    _handleError: a(function(v) {
                        l.handleError(v)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "5",
                    alias: "1"
                },
                _widgetRecordProvider: n,
                _dependencies: []
            }))))
        }
    };
a(c, "View");
var C = c,
    J = C;
export {
    J as a
};