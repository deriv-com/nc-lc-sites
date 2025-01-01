import {
    a as H,
    b as D
} from "./_oschunk-KZ4V3HTS.js";
import {
    a as I
} from "./_oschunk-Y4GLXMFO.js";
import "./_oschunk-KUE727AO.js";
import {
    b as A,
    d as o,
    n as P,
    u as m
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as S,
    g,
    i as c
} from "./_oschunk-WZHUAZJP.js";
import {
    p as w
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import {
    ia as s
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as i,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var b = R(S());
var r = R(S());
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
    T = v
}
var T, k = new W.Controller.ControllerFactory(T, V);
var M = s,
    te = c.PlaceholderContent,
    re = c.IteratorPlaceholderContent,
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
            return H
        }
        get controllerFactory() {
            return k
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
                O = d.ifWidget,
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
            }, O(a.variables.isErrorIn, !1, this, function() {
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
                }, r.createElement(A, {
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
var pe = c.PlaceholderContent,
    me = c.IteratorPlaceholderContent,
    l = class l extends g.BaseWebScreen {
        static get displayName() {
            return "OIDCFlow.callback"
        }
        static getAttributes() {
            return {
                codeFunction: "callback",
                functionKey: "59eed6b8-a472-44ff-9bd5-c8cb769ebde9",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
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
            return g.BaseWebScreen.getTranslation("uNbuWXKk_0Sb1cjLdp696Q#Title", "callback")
        }
        internalRender() {
            let a = this.model,
                n = this.controller,
                e = this.idService,
                h = n.validationService,
                t = this.widgetsRecordProvider,
                p = n.callContext(),
                O = l.ifWidget,
                F = l.textWidget,
                L = l.asPrimitiveValue,
                N = l.getTranslation,
                f = this;
            return b.createElement("div", this.getRootNodeProperties(), b.createElement(E, {
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
                        var u = p.clone();
                        n.callbackLogicTryAgainEvent$Action(n.callContext(u))
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
i(l, "View");
var x = l,
    ve = x;
export {
    ve as
    default
};