import {
    a as I
} from "./_oschunk-WASWRO27.js";
import "./_oschunk-ZFOWOGVH.js";
import {
    b as H,
    h as o,
    r as P,
    y as m
} from "./_oschunk-42NACYKQ.js";
import "./_oschunk-2M7PXTSQ.js";
import {
    a as S,
    g,
    i as l
} from "./_oschunk-RKYF3TWC.js";
import {
    a as A,
    b as D
} from "./_oschunk-UWPXB3TB.js";
import {
    a as w
} from "./_oschunk-RHGXY5L5.js";
import "./_oschunk-K7AFM7ZW.js";
import "./_oschunk-DOFMR6EA.js";
import "./_oschunk-2ZI4JQLD.js";
import "./_oschunk-IKZJT3AP.js";
import "./_oschunk-X4K3PA43.js";
import "./_oschunk-MSUVGI3L.js";
import {
    ia as s
} from "./_oschunk-2JKANR6M.js";
import {
    c as i,
    g as b
} from "./_oschunk-DVBKI63I.js";
var x = b(S());
var r = b(S());
var $ = s,
    _ = class _ extends $.LanguageResources.BaseMessagesProvider {
        constructor(a) {
            super(a), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
i(_, "MessagesProvider");
var y = _,
    V = new y;
var W = s; {
    let a = class a extends W.Controller.BaseViewController {
        constructor(e, h, t) {
            super(e, h, t);
            var p = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get tryAgainEvent$Action() {
            return this.hasOwnProperty("_tryAgainEvent$Action") || (this._tryAgainEvent$Action = function() {
                return Promise.resolve()
            }), this._tryAgainEvent$Action
        }
        set tryAgainEvent$Action(e) {
            this._tryAgainEvent$Action = e
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
            return w.defaultTimeout
        }
    };
    i(a, "ControllerInner");
    let v = a;
    k = v
}
var k, T = new W.Controller.ControllerFactory(k, V);
var M = s,
    te = l.PlaceholderContent,
    re = l.IteratorPlaceholderContent,
    d = class d extends g.BaseWebBlock {
        static get displayName() {
            return "CallbackPage.CallbackLogic"
        }
        static getAttributes() {
            return {
                codeFunction: "CallbackLogic",
                functionKey: "e436dd2e-b456-4f9f-8c55-38a0f20a1a62",
                functionOwnerName: "OIDCAuthentication",
                functionOwnerKey: "0b60f851-41c4-4dce-ac7e-b1079241a5a3",
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
            return T
        }
        get title() {
            return ""
        }
        internalRender() {
            let a = this.model,
                n = this.controller,
                e = this.idService,
                h = n.validationService,
                t = this.widgetsRecordProvider,
                p = n.callContext(),
                R = d.ifWidget,
                F = d.textWidget,
                L = d.asPrimitiveValue,
                N = d.getTranslation,
                f = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(o, {
                align: 0,
                animate: !1,
                style: "full-width full-height justify-content-center align-items-center display-flex flex-direction-column",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: t
            }, R(a.variables.isErrorIn, !1, this, function() {
                return [r.createElement(o, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "gap: 22px;"
                    },
                    style: "display-flex flex-direction-column justify-content-center align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "1"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "2"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(P, {
                    gridProperties: {
                        marginLeft: "0"
                    },
                    image: M.Navigation.VersionedURL.getVersionedUrl("img/OIDCAuthentication.deriv_logo.svg"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "3"
                    },
                    _widgetRecordProvider: t
                })), r.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "4"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(m, {
                    extendedProperties: {
                        style: "font-size: 24px; font-weight: bold;"
                    },
                    text: ["Unexpected error occured"],
                    _idProps: {
                        service: e,
                        uuid: "5"
                    },
                    _widgetRecordProvider: t
                })), r.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "6"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(H, {
                    enabled: !0,
                    extendedProperties: {
                        style: "align-items: center; background: none; border: 1px solid #000; border-radius: 16px; cursor: pointer; display: flex; gap: 8px; height: 48px; justify-content: center; max-height: 48px; min-height: 48px; min-width: 96px; padding: 0px 16px;"
                    },
                    gridProperties: {
                        marginLeft: "0"
                    },
                    isDefault: !1,
                    onClick: i(function() {
                        var u = p.clone();
                        n.tryAgainEvent$Action(n.callContext(u))
                    }, "onClick"),
                    style: "",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "7"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(m, {
                    extendedProperties: {
                        style: "font-size: 16px; font-weight: bold;"
                    },
                    text: ["Try again"],
                    _idProps: {
                        service: e,
                        uuid: "8"
                    },
                    _widgetRecordProvider: t
                }))))]
            }, function() {
                return [r.createElement(o, {
                    align: 0,
                    animate: !1,
                    style: "display-flex flex-direction-column justify-content-center align-items-center",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "9"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "10"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(P, {
                    gridProperties: {
                        width: "250px",
                        marginLeft: "0"
                    },
                    image: M.Navigation.VersionedURL.getVersionedUrl("img/OIDCAuthentication.callback_loader.gif"),
                    type: 0,
                    _idProps: {
                        service: e,
                        uuid: "11"
                    },
                    _widgetRecordProvider: t
                })), r.createElement(o, {
                    align: 0,
                    animate: !1,
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "12"
                    },
                    _widgetRecordProvider: t
                }, r.createElement(m, {
                    extendedProperties: {
                        style: "font-size: 28px; font-weight: bold;"
                    },
                    text: ["Logging into your account"],
                    _idProps: {
                        service: e,
                        uuid: "13"
                    },
                    _widgetRecordProvider: t
                })))]
            })))
        }
    };
i(d, "View");
var C = d,
    E = C;
var pe = l.PlaceholderContent,
    me = l.IteratorPlaceholderContent,
    c = class c extends g.BaseWebScreen {
        static get displayName() {
            return "OIDCFlow.callback"
        }
        static getAttributes() {
            return {
                codeFunction: "callback",
                functionKey: "63caaf10-c33a-4066-833e-0f61850038a8",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [E]
        }
        get modelFactory() {
            return D
        }
        get controllerFactory() {
            return I
        }
        get title() {
            return g.BaseWebScreen.getTranslation("EK_KYzrDZkCDPg9hhQA4qA#Title", "callback")
        }
        internalRender() {
            let a = this.model,
                n = this.controller,
                e = this.idService,
                h = n.validationService,
                t = this.widgetsRecordProvider,
                p = n.callContext(),
                R = c.ifWidget,
                F = c.textWidget,
                L = c.asPrimitiveValue,
                N = c.getTranslation,
                f = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(E, {
                getOwnerSpan: i(function() {
                    return f.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: i(function() {
                    return f.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    isError: a.variables.isErrorVar
                },
                events: {
                    _handleError: i(function(u) {
                        n.handleError(u)
                    }, "_handleError"),
                    tryAgainEvent$Action: i(function() {
                        return Promise.resolve().then(function() {
                            var u = p.clone();
                            return n.callbackLogicTryAgainEvent$Action(n.callContext(u))
                        })
                    }, "tryAgainEvent$Action")
                },
                _validationProps: {
                    validationService: h
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }))
        }
    };
i(c, "View");
var O = c,
    ve = O;
export {
    ve as
    default
};