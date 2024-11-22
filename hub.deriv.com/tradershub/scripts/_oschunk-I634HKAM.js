import {
    a as T
} from "./_oschunk-XGQAZLYY.js";
import {
    a as ee,
    b as te,
    c as re
} from "./_oschunk-AAECPUW5.js";
import "./_oschunk-GDCJSJP3.js";
import {
    a as ie
} from "./_oschunk-55GZVT5Q.js";
import "./_oschunk-EFUSIMB4.js";
import {
    a as $,
    b as Q,
    c as K
} from "./_oschunk-AVFVZVQC.js";
import {
    a as j
} from "./_oschunk-CJZXGA6I.js";
import {
    a as z
} from "./_oschunk-RRERX77H.js";
import "./_oschunk-PP376XGC.js";
import "./_oschunk-MDH7HMYN.js";
import "./_oschunk-HBEXL7KK.js";
import "./_oschunk-NJYKWZYU.js";
import "./_oschunk-SW7FWAXZ.js";
import "./_oschunk-BHZNFATE.js";
import {
    b as F,
    h as a,
    j as b,
    k as B,
    l as N,
    r as g,
    u as R,
    v as G,
    y as p
} from "./_oschunk-HUOHOHZB.js";
import {
    a as I
} from "./_oschunk-Y45M2O2K.js";
import {
    a as M,
    g as C,
    i as S
} from "./_oschunk-6LASTRK7.js";
import "./_oschunk-TIJZDWYD.js";
import {
    a as h,
    d as D
} from "./_oschunk-27GDEXUT.js";
import "./_oschunk-D2MH3QEK.js";
import "./_oschunk-WJ75ZXAT.js";
import "./_oschunk-3WNR72F6.js";
import "./_oschunk-X4K3PA43.js";
import {
    a as Z
} from "./_oschunk-HQOLQB4T.js";
import {
    ia as w
} from "./_oschunk-NTQBNJ73.js";
import {
    c as s,
    g as U
} from "./_oschunk-DVBKI63I.js";
var r = U(M());
var x = U(M());
var fe = {
        "iBkJJPDPgUaFKPQa9keU0w#Value": ".",
        "CS5o2R6MYEaWS7qxgIXaVQ#Value": "chat en direct"
    },
    ne = {
        "fr-FR": {
            translations: fe,
            isRTL: !1
        }
    };
var ae = w; {
    let i = class i extends ae.Controller.BaseViewController {
        constructor(e, P, t) {
            super(e, P, t, ne);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
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
            return D.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let O = i;
    oe = O
}
var oe, se = new ae.Controller.ControllerFactory(oe, I);
var de = w,
    Te = S.PlaceholderContent,
    Le = S.IteratorPlaceholderContent,
    A = class A extends C.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.InlineMessage"
        }
        static getAttributes() {
            return {
                codeFunction: "InlineMessage",
                functionKey: "fb5aeeb8-cdc0-45d8-acf9-8f45ae245799",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.InlineMessage.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return se
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                P = d.validationService,
                t = this.widgetsRecordProvider,
                f = d.callContext(),
                _ = A.ifWidget,
                c = A.textWidget,
                l = A.asPrimitiveValue,
                u = A.getTranslation,
                v = this;
            return x.createElement("div", this.getRootNodeProperties(), x.createElement(a, {
                align: 0,
                animate: !1,
                style: "container",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Container"
                },
                _widgetRecordProvider: t
            }, x.createElement(a, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-right: 8px;"
                },
                style: "display-flex align-items-center justify-content-center",
                visible: !0,
                _idProps: {
                    service: e,
                    name: "Icon"
                },
                _widgetRecordProvider: t
            }, x.createElement(g, {
                image: de.Navigation.VersionedURL.getVersionedUrl("img/tradershub.TriangleExclamation.svg"),
                type: 0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: t
            })), x.createElement(a, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: t
            }, x.createElement(b, {
                style: "message",
                value: "Your " + i.variables.currencyIn + " Options trading account is disabled. For more information, contact us via ",
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: t,
                value_dataFetchStatus: de.Model.calculateDataFetchStatus(i.variables._currencyInDataFetchStatus)
            }), x.createElement(p, {
                extendedProperties: {
                    style: "font-weight: bold; text-decoration: underline;"
                },
                style: "message",
                text: [c(u("CS5o2R6MYEaWS7qxgIXaVQ#Value", "live chat"))],
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: t
            }), x.createElement(p, {
                style: "message",
                text: [c(u("iBkJJPDPgUaFKPQa9keU0w#Value", "."))],
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: t
            }))))
        }
    };
s(A, "View");
var J = A,
    q = J;
var y = U(M());
var ue = {};
var ge = w; {
    let i = class i extends ge.Controller.BaseViewController {
        constructor(e, P, t) {
            super(e, P, t, ue);
            var f = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get redirectionLink$Action() {
            return this.hasOwnProperty("_redirectionLink$Action") || (this._redirectionLink$Action = function() {
                return Promise.resolve()
            }), this._redirectionLink$Action
        }
        set redirectionLink$Action(e) {
            this._redirectionLink$Action = e
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
            return D.defaultTimeout
        }
    };
    s(i, "ControllerInner");
    let O = i;
    ve = O
}
var ve, pe = new ge.Controller.ControllerFactory(ve, I);
var L = w,
    qe = S.PlaceholderContent,
    Xe = S.IteratorPlaceholderContent,
    V = class V extends C.BaseWebBlock {
        static get displayName() {
            return "MainFlowBlocks.OptionsProductCard"
        }
        static getAttributes() {
            return {
                codeFunction: "OptionsProductCard",
                functionKey: "fb176809-3da9-47c2-9e15-176de7a20ab9",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/tradershub.MainFlowBlocks.OptionsProductCard.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return pe
        }
        get title() {
            return ""
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                P = d.validationService,
                t = this.widgetsRecordProvider,
                f = d.callContext(),
                _ = V.ifWidget,
                c = V.textWidget,
                l = V.asPrimitiveValue,
                u = V.getTranslation,
                v = this;
            return y.createElement("div", this.getRootNodeProperties(), _(i.variables.isLoadingIn, !1, this, function() {
                return [y.createElement(a, {
                    align: 0,
                    animate: !1,
                    style: "skeleton loader",
                    visible: !0,
                    _idProps: {
                        service: e,
                        uuid: "0"
                    },
                    _widgetRecordProvider: t
                })]
            }, function() {
                return [_(i.variables.shouldShowProductIn, !0, this, function() {
                    return [y.createElement(R, {
                        enabled: !0,
                        onClick: s(function() {
                            var n = f.clone();
                            d.redirectionLink$Action(d.callContext(n))
                        }, "onClick"),
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "1"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(a, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "color: #222;"
                        },
                        gridProperties: {
                            classes: "ThemeGrid_Width4"
                        },
                        style: i.getCachedValue(e.getId("ProductContainer.Style"), function() {
                            return i.variables.isDisabledIn ? "product-card product-card-disabled" : "product-card"
                        }, function() {
                            return i.variables.isDisabledIn
                        }),
                        visible: !0,
                        _idProps: {
                            service: e,
                            name: "ProductContainer"
                        },
                        _widgetRecordProvider: t,
                        style_dataFetchStatus: L.Model.calculateDataFetchStatus(i.variables._isDisabledInDataFetchStatus)
                    }, y.createElement(g, {
                        type: 1,
                        url: i.variables.iconIn,
                        _idProps: {
                            service: e,
                            name: "ProductIcon"
                        },
                        _widgetRecordProvider: t,
                        url_dataFetchStatus: L.Model.calculateDataFetchStatus(i.variables._iconInDataFetchStatus)
                    }), y.createElement(a, {
                        align: 0,
                        animate: !1,
                        extendedProperties: {
                            style: "margin-top: 8px;"
                        },
                        style: "display-flex justify-content-space-between align-items-center",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "4"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(a, {
                        align: 0,
                        animate: !1,
                        style: "display-flex flex-direction-column",
                        visible: !0,
                        _idProps: {
                            service: e,
                            uuid: "5"
                        },
                        _widgetRecordProvider: t
                    }, y.createElement(b, {
                        extendedProperties: {
                            style: "color: #101213; font-weight: bold;"
                        },
                        value: i.variables.titleIn,
                        _idProps: {
                            service: e,
                            name: "TitleExpression"
                        },
                        _widgetRecordProvider: t,
                        value_dataFetchStatus: L.Model.calculateDataFetchStatus(i.variables._titleInDataFetchStatus)
                    }), y.createElement(b, {
                        extendedProperties: {
                            style: "color: #101213; font-size: 12px; margin-top: 4px;"
                        },
                        value: i.variables.descriptionIn,
                        _idProps: {
                            service: e,
                            name: "DescriptionExpression"
                        },
                        _widgetRecordProvider: t,
                        value_dataFetchStatus: L.Model.calculateDataFetchStatus(i.variables._descriptionInDataFetchStatus)
                    })), y.createElement(g, {
                        extendedProperties: {
                            style: "height: 32px; margin-bottom: 0px; padding: 0px;"
                        },
                        gridProperties: {
                            width: "32px"
                        },
                        image: L.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                        type: 0,
                        _idProps: {
                            service: e,
                            uuid: "8"
                        },
                        _widgetRecordProvider: t
                    }))))]
                }, function() {
                    return []
                })]
            }))
        }
    };
s(V, "View");
var X = V,
    k = X;
var o = w,
    E = S.PlaceholderContent,
    me = S.IteratorPlaceholderContent,
    W = class W extends C.BaseWebScreen {
        static get displayName() {
            return "MainFlow.Options"
        }
        static getAttributes() {
            return {
                codeFunction: "Options",
                functionKey: "4605474b-132d-4331-8d2c-b367d0f37e9f",
                functionOwnerName: "tradershub",
                functionOwnerKey: "2ad446d5-32d7-4fbf-959d-82d8325bcfbc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/tradershub.AccountCreation.css", "css/tradershub.MainFlow.Options.css", "css/tradershub.AccountCreation.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [z, $, j, Q, T, q, k, K]
        }
        get modelFactory() {
            return re
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return C.BaseWebScreen.getTranslation("S0cFRi0TMUONLLNn0PN+nw#Title", "Options")
        }
        internalRender() {
            let i = this.model,
                d = this.controller,
                e = this.idService,
                P = d.validationService,
                t = this.widgetsRecordProvider,
                f = d.callContext(),
                _ = W.ifWidget,
                c = W.textWidget,
                l = W.asPrimitiveValue,
                u = W.getTranslation,
                v = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(z, {
                getOwnerSpan: s(function() {
                    return v.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return v.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: s(function(n) {
                        d.handleError(n)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: P
                },
                _idProps: {
                    service: e,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    content: new E(function() {
                        return [r.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, _(h.getAccountType() === "demo" && h.getAuthToken() !== o.BuiltinFunctions.nullTextIdentifier() && !i.variables.hasRealAccountVar && !i.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(R, {
                                enabled: !0,
                                extendedProperties: {
                                    style: "text-decoration: none;"
                                },
                                transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                url: o.Navigation.generateScreenURL("tradershub", "currency-selection", {}),
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "2"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "demo-blue-container",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "BlueContainer"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(p, {
                                extendedProperties: {
                                    style: "color: #101213; font-weight: 400;"
                                },
                                text: [c(u("fQyJTO5UMUWyDTxHyiY_eA#Value", "Fill in your account details to make your first deposit."))],
                                _idProps: {
                                    service: e,
                                    uuid: "4"
                                },
                                _widgetRecordProvider: t
                            }), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 0 11px;"
                                },
                                gridProperties: {
                                    marginLeft: "4px"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "ChevronIcon"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_sm.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "6"
                                },
                                _widgetRecordProvider: t
                            }))))]
                        }, function() {
                            return []
                        }), r.createElement($, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "7",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "options-header",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "OptionsHeader"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "options-header__left",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "LeftContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "display-flex align-items-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "10"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(p, {
                            style: "main-title",
                            text: [c(u("EfSaScn+JkC6q6ZXjwuaGA#Value", "Options trading"))],
                            _idProps: {
                                service: e,
                                uuid: "11"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(j, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Trigger: Z.trigger.onClick
                            },
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "12",
                                alias: "3"
                            },
                            _widgetRecordProvider: t,
                            placeholders: {
                                content: new E(function() {
                                    return [r.createElement(g, {
                                        extendedProperties: {
                                            style: "margin-top: 10px;"
                                        },
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.info.svg"),
                                        style: "display-flex align-center",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "13"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }),
                                tooltip: new E(function() {
                                    return [c(u("87UEjCWKgEyDAveDBC6OOw#Value", "Predict the market; profit if you\u2019re right; risk only what you put in."))]
                                })
                            },
                            _dependencies: []
                        })), r.createElement(Q, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError"),
                                realClickEvent$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = f.clone();
                                        return d.setRealValue$Action(d.callContext(n))
                                    })
                                }, "realClickEvent$Action"),
                                demoClickEvent$Action: s(function() {
                                    return Promise.resolve().then(function() {
                                        var n = f.clone();
                                        return d.setDemoValue$Action(d.callContext(n))
                                    })
                                }, "demoClickEvent$Action")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "14",
                                alias: "4"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), _(h.getAuthToken() !== o.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                            return [_(h.getAccountType() === "real", !0, this, function() {
                                return [r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    gridProperties: {
                                        classes: "OSInline"
                                    },
                                    style: "real-account-dropdown-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "15"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "account-switcher",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "RealContainer"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: s(function() {
                                            var n = f.clone();
                                            d.mobileAccountSwitcherOnClick$Action(d.callContext(n))
                                        }, "onClick")
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-desktop flex-direction-column",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "MobileAccountSwitcher"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: [c(u("Q2gQOo4Ojke_T+XVGnIdUg#Value", "Balance:"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "18"
                                    },
                                    _widgetRecordProvider: t
                                }), _(i.variables.isBalanceLoadingVar, !1, this, function() {
                                    return [r.createElement(T, {
                                        getOwnerSpan: s(function() {
                                            return v.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return v.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: s(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: P
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "19",
                                            alias: "5"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(b, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: i.variables.selectedAccountBalanceVar + " " + i.variables.selectedAccountCurrencyVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "21"
                                        },
                                        _widgetRecordProvider: t
                                    }), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "22"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(g, {
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: t
                                    })))]
                                })), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedEvents: {
                                        onClick: s(function() {
                                            var n = f.clone();
                                            d.openAccountSwitcherOnClick$Action(d.callContext(n))
                                        }, "onClick")
                                    },
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    style: "hide-mobile",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "DesktopAccountSwitcher"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: [c(u("G5zUJP31nEWIo2MFWeEVcg#Value", "Balance:"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "25"
                                    },
                                    _widgetRecordProvider: t
                                }), _(i.variables.isBalanceLoadingVar, !1, this, function() {
                                    return [r.createElement(T, {
                                        getOwnerSpan: s(function() {
                                            return v.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return v.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: s(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: P
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "26",
                                            alias: "6"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "27"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(b, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: i.variables.selectedAccountBalanceVar + " " + i.variables.selectedAccountCurrencyVar,
                                        _idProps: {
                                            service: e,
                                            uuid: "28"
                                        },
                                        _widgetRecordProvider: t
                                    }), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            marginLeft: "8px"
                                        },
                                        style: "display-flex align-items-center justify-content-center",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "29"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(g, {
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevrondownsm.svg"),
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "30"
                                        },
                                        _widgetRecordProvider: t
                                    })))]
                                })), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "min-width: 79.5px;"
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "31"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(F, {
                                    enabled: i.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    isDefault: !1,
                                    onClick: s(function() {
                                        try {
                                            o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                        } catch (n) {
                                            if (n.name !== "RedirectOccurredException") throw n
                                        }
                                    }, "onClick"),
                                    style: i.getCachedValue(e.getId("XEUvLFudNUyYj2v1WJRpqA.Style"), function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr ? "transactions-button" : "disabled transactions-button"
                                    }, function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "32"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "33"
                                    },
                                    _widgetRecordProvider: t
                                }), r.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: [c(u("pkbvuSgiW0iS0ssRLDRjzg#Value", "Transfer"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "34"
                                    },
                                    _widgetRecordProvider: t
                                })), r.createElement(R, {
                                    enabled: i.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: i.getCachedValue(e.getId("qKzVFp3FLkWeytdtYrIW3A.Style"), function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr ? "remove-hover" : "disabled remove-hover"
                                    }, function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr
                                    }),
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("tradershub", "wallets", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "35"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: [c(u("9ow+XnQp9EeyxEVPpTo5ng#Value", "Transfer"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "36"
                                    },
                                    _widgetRecordProvider: t
                                })))), _(i.variables.isAccountSwitcherOpenVar, !0, this, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        style: "account-switcher__dropdown hide-mobile",
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "Dropdown"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 1px 0px; padding: 10px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "TitleContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(p, {
                                        extendedProperties: {
                                            style: "color: #101213; font-weight: 700;"
                                        },
                                        text: [c(u("jG6VFun4h0Wswi+EwOVi7A#Value", "Select account"))],
                                        _idProps: {
                                            service: e,
                                            uuid: "39"
                                        },
                                        _widgetRecordProvider: t
                                    })), r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "padding: 10px 10px 0px 10px;"
                                        },
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            name: "AccountListContainer"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(B, {
                                        animateItems: !0,
                                        gridProperties: {
                                            classes: "OSFillParent"
                                        },
                                        mode: 0,
                                        source: i.variables.filteredAccountListVar,
                                        style: "list list-group account-list-container",
                                        tag: "div",
                                        _idProps: {
                                            service: e,
                                            name: "AccountList"
                                        },
                                        _widgetRecordProvider: t,
                                        placeholders: {
                                            content: new me(function(n, m) {
                                                return [r.createElement(N, {
                                                    onClick: s(function() {
                                                        return Promise.resolve().then(function() {
                                                            var H = m.clone();
                                                            return d.accountListItemOnClick$Action(d.callContext(H))
                                                        })
                                                    }, "onClick"),
                                                    style: "list-item",
                                                    triggerActionOnFullSwipeLeft: !0,
                                                    triggerActionOnFullSwipeRight: !0,
                                                    _idProps: {
                                                        service: n,
                                                        name: "ListItem"
                                                    },
                                                    _widgetRecordProvider: t,
                                                    placeholders: {
                                                        leftActions: E.Empty,
                                                        content: new E(function() {
                                                            return [r.createElement(a, {
                                                                align: 0,
                                                                animate: !1,
                                                                style: i.getCachedValue(n.getId("PwOMKu_PA0mpuv3GmZ0fqw.Style"), function() {
                                                                    return h.getActiveLoginId() === i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr ? "account-list-item active-account" : "account-list-item"
                                                                }, function() {
                                                                    return h.getActiveLoginId()
                                                                }, function() {
                                                                    return i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr
                                                                }),
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: n,
                                                                    uuid: "43"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, r.createElement(a, {
                                                                align: 0,
                                                                animate: !1,
                                                                extendedProperties: {
                                                                    style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                                },
                                                                gridProperties: {
                                                                    classes: "OSInline",
                                                                    width: "24px"
                                                                },
                                                                style: "display-flex align-items-center justify-content-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: n,
                                                                    name: "Icon"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, r.createElement(g, {
                                                                type: 1,
                                                                url: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).iconAttr,
                                                                _idProps: {
                                                                    service: n,
                                                                    uuid: "45"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })), r.createElement(a, {
                                                                align: 0,
                                                                animate: !1,
                                                                gridProperties: {
                                                                    marginLeft: "8px"
                                                                },
                                                                style: "display-flex align-items-center",
                                                                visible: !0,
                                                                _idProps: {
                                                                    service: n,
                                                                    name: "text"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }, r.createElement(b, {
                                                                style: "account-list-item__text",
                                                                value: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).balanceAttr,
                                                                _idProps: {
                                                                    service: n,
                                                                    name: "AccountBalance"
                                                                },
                                                                _widgetRecordProvider: t
                                                            }), r.createElement(b, {
                                                                gridProperties: {
                                                                    marginLeft: "5px"
                                                                },
                                                                style: "account-list-item__text",
                                                                value: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).currencyAttr,
                                                                _idProps: {
                                                                    service: n,
                                                                    name: "AccountCurrency"
                                                                },
                                                                _widgetRecordProvider: t
                                                            })))]
                                                        }),
                                                        rightActions: E.Empty
                                                    },
                                                    _dependencies: [l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).currencyAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).balanceAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).iconAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr), l(h.getActiveLoginId())]
                                                })]
                                            }, f, e, "1")
                                        },
                                        _dependencies: [l(h.getActiveLoginId())]
                                    })), _(i.variables.showAddMoreAccountVar, !1, this, function() {
                                        return [r.createElement(R, {
                                            enabled: !0,
                                            style: "remove-hover",
                                            transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                            url: o.Navigation.generateScreenURL("tradershub", "add-account", {}),
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "49"
                                            },
                                            _widgetRecordProvider: t
                                        }, r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            extendedProperties: {
                                                style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                            },
                                            style: "display-flex align-items-center justify-content-space-between",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                name: "AddMoreAccountContainer"
                                            },
                                            _widgetRecordProvider: t
                                        }, r.createElement(p, {
                                            extendedProperties: {
                                                style: "color: #272B30; font-weight: 700;"
                                            },
                                            text: [c(u("daVfdbga4USTPBVggSsdgw#Value", "Add more accounts"))],
                                            _idProps: {
                                                service: e,
                                                uuid: "51"
                                            },
                                            _widgetRecordProvider: t
                                        }), r.createElement(a, {
                                            align: 0,
                                            animate: !1,
                                            style: "display-flex align-items-center justify-content-center",
                                            visible: !0,
                                            _idProps: {
                                                service: e,
                                                uuid: "52"
                                            },
                                            _widgetRecordProvider: t
                                        }, r.createElement(g, {
                                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                            type: 0,
                                            _idProps: {
                                                service: e,
                                                uuid: "53"
                                            },
                                            _widgetRecordProvider: t
                                        }))))]
                                    }, function() {
                                        return []
                                    }))]
                                }, function() {
                                    return []
                                }))]
                            }, function() {
                                return [r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "demo-account-container",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "DemoContainer"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-right: 16px;"
                                    },
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "55"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #101213; min-width: 135px;"
                                    },
                                    text: [c(u("W31RGGIUvkWN5r9647mLfg#Value", "Balance:"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "56"
                                    },
                                    _widgetRecordProvider: t
                                }), _(i.variables.isBalanceLoadingVar, !1, this, function() {
                                    return [r.createElement(T, {
                                        getOwnerSpan: s(function() {
                                            return v.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: s(function() {
                                            return v.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: s(function(n) {
                                                d.handleError(n)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: P
                                        },
                                        _idProps: {
                                            service: e,
                                            uuid: "57",
                                            alias: "7"
                                        },
                                        _widgetRecordProvider: t,
                                        _dependencies: []
                                    })]
                                }, function() {
                                    return [r.createElement(a, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: e,
                                            uuid: "58"
                                        },
                                        _widgetRecordProvider: t
                                    }, r.createElement(b, {
                                        extendedProperties: {
                                            style: "color: #101213; font-size: 16px; font-weight: 700;"
                                        },
                                        value: i.variables.selectedAccountBalanceVar + " " + i.variables.selectedAccountCurrencyVar,
                                        _idProps: {
                                            service: e,
                                            name: "DemoBalance"
                                        },
                                        _widgetRecordProvider: t
                                    }))]
                                })), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "min-width: 79.5px;"
                                    },
                                    style: "display-flex align-items-center justify-content-center flex-direction-column cursor-pointer",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "60"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(F, {
                                    enabled: i.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    isDefault: !1,
                                    onClick: s(function() {
                                        try {
                                            o.Navigation.navigateTo(o.Navigation.generateScreenURL("tradershub", "wallets", {}), o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default), null, !0)
                                        } catch (n) {
                                            if (n.name !== "RedirectOccurredException") throw n
                                        }
                                    }, "onClick"),
                                    style: i.getCachedValue(e.getId("yrB_28txQUyFT5CuIXP1KQ.Style"), function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr ? "transactions-button" : "disabled transactions-button"
                                    }, function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "61"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.transfer.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "62"
                                    },
                                    _widgetRecordProvider: t
                                }), r.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 14px; margin-left: 8px;"
                                    },
                                    style: "hide-mobile",
                                    text: [c(u("DB7Uc9hKmESFIqDzmlZT5g#Value", "Transfer"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "63"
                                    },
                                    _widgetRecordProvider: t
                                })), r.createElement(R, {
                                    enabled: i.variables.backOfficeLocksVar.isTransferAllowedAttr,
                                    gridProperties: {
                                        classes: "ThemeGrid_MarginGutter"
                                    },
                                    style: i.getCachedValue(e.getId("TM4bJQqIg0enzmtsZPz1Iw.Style"), function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr ? "remove-hover" : "disabled remove-hover"
                                    }, function() {
                                        return i.variables.backOfficeLocksVar.isTransferAllowedAttr
                                    }),
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("tradershub", "wallets", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "64"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #FF444F; font-size: 12px; font-weight: 700; margin-top: 4px;"
                                    },
                                    style: "hide-desktop",
                                    text: [c(u("tYBywluJ6kmvLSoG3Awuqw#Value", "Transfer"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "65"
                                    },
                                    _widgetRecordProvider: t
                                }))))]
                            })]
                        }, function() {
                            return []
                        })), _(i.variables.backOfficeLocksVar.isTradingDisabledAttr || !i.variables.backOfficeLocksVar.isTransferAllowedAttr, !1, this, function() {
                            return [r.createElement(q, {
                                getOwnerSpan: s(function() {
                                    return v.getChildSpan("render")
                                }, "getOwnerSpan"),
                                getOwnerDisposeSpan: s(function() {
                                    return v.getChildSpan("destroy")
                                }, "getOwnerDisposeSpan"),
                                inputs: {
                                    Currency: i.variables.selectedAccountCurrencyVar
                                },
                                events: {
                                    _handleError: s(function(n) {
                                        d.handleError(n)
                                    }, "_handleError")
                                },
                                _validationProps: {
                                    validationService: P
                                },
                                _idProps: {
                                    service: e,
                                    uuid: "66",
                                    alias: "8"
                                },
                                _widgetRecordProvider: t,
                                _dependencies: []
                            })]
                        }, function() {
                            return []
                        }), _(i.variables.isLoadingVar, !1, this, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                style: "skeleton dtrader-loader",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "67"
                                },
                                _widgetRecordProvider: t
                            })]
                        }, function() {
                            return [_(i.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr, !1, this, function() {
                                return [r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: i.getCachedValue(e.getId("DTraderContainer.Style"), function() {
                                        return i.variables.backOfficeLocksVar.isTradingDisabledAttr ? "dtrader-container disabled" : "dtrader-container"
                                    }, function() {
                                        return i.variables.backOfficeLocksVar.isTradingDisabledAttr
                                    }),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "DTraderContainer"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(R, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    onClick: s(function() {
                                        var n = f.clone();
                                        d.dTraderRedirection$Action(d.callContext(n))
                                    }, "onClick"),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "69"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #222;"
                                    },
                                    style: "display-flex align-items-center justify-content-space-between",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "DTrader"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex align-items-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "71"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    extendedProperties: {
                                        style: "height: 32px;"
                                    },
                                    gridProperties: {
                                        width: "32px"
                                    },
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dtrader.svg"),
                                    style: "",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "72"
                                    },
                                    _widgetRecordProvider: t
                                }), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    gridProperties: {
                                        marginLeft: "16"
                                    },
                                    style: "display-flex flex-direction-column",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "73"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "font-weight: bold;"
                                    },
                                    text: [c(u("Wql9gnhE6EOluO0PGRlRRA#Value", "Deriv Trader"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "74"
                                    },
                                    _widgetRecordProvider: t
                                }), r.createElement(p, {
                                    extendedProperties: {
                                        style: "font-size: 12px; margin-top: 4px;"
                                    },
                                    text: [c(u("bnRuapxJ7kWBxK7gVOOlTg#Value", "Diverse trading options, low-entry costs."))],
                                    _idProps: {
                                        service: e,
                                        uuid: "75"
                                    },
                                    _widgetRecordProvider: t
                                }))), _(h.getAuthToken() !== o.BuiltinFunctions.nullTextIdentifier(), !1, this, function() {
                                    return []
                                }, function() {
                                    return [r.createElement(g, {
                                        image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                        style: "cursor-pointer",
                                        type: 0,
                                        _idProps: {
                                            service: e,
                                            uuid: "76"
                                        },
                                        _widgetRecordProvider: t
                                    })]
                                }))), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "trade-types-header",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "TraderTypesHeader"
                                    },
                                    _widgetRecordProvider: t
                                }, c(u("+sT2nYtfGkmU4Q8tbnfa4Q#Value", "Trade types:"))), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "trade-types-body",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "TradeTypesBody"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(R, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=accumulator", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "79"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #222;"
                                    },
                                    style: "trade-type-item",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "80"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-bottom: 4px;"
                                    },
                                    style: "display-flex align-items-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "81"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.accumulators.svg"),
                                    style: "display-block",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "82"
                                    },
                                    _widgetRecordProvider: t
                                })), c(u("K+kpK2OSDEK0gOrMsWOSMA#Value", "Accumulators")))), r.createElement(R, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=turboslong", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "83"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #222;"
                                    },
                                    style: "trade-type-item",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "84"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-bottom: 4px;"
                                    },
                                    style: "display-flex align-items-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "85"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.turbos.svg"),
                                    style: "display-block",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "86"
                                    },
                                    _widgetRecordProvider: t
                                })), c(u("SBTSUnEXHUu9K6Q+gHiVyQ#Value", "Turbos")))), r.createElement(R, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=vanillalongcall", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "87"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #222;"
                                    },
                                    style: "trade-type-item",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "88"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-bottom: 4px;"
                                    },
                                    style: "display-flex align-items-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "89"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.vanilla_options.svg"),
                                    style: "display-block",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "90"
                                    },
                                    _widgetRecordProvider: t
                                })), c(u("zCSyKfNfN0ySBwkI7fzobQ#Value", "Vanilla options")))), r.createElement(R, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Default),
                                    url: o.Navigation.generateScreenURL("https://app.deriv.com/dtrader?symbol=1HZ100V&trade_type=multiplier", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "91"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "color: #222;"
                                    },
                                    style: "trade-type-item",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "92"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "margin-bottom: 4px;"
                                    },
                                    style: "display-flex align-items-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "93"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.multipliers.svg"),
                                    style: "display-block",
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "94"
                                    },
                                    _widgetRecordProvider: t
                                })), c(u("nVSJowR5Kkir1L0PrqiNiQ#Value", "Multipliers"))))), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "hide-desktop",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "95"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(F, {
                                    enabled: !i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                    extendedProperties: {
                                        style: "height: 40px; margin-top: 16px; padding: 16px 0;"
                                    },
                                    gridProperties: {
                                        classes: "OSFillParent"
                                    },
                                    isDefault: !1,
                                    onClick: s(function() {
                                        var n = f.clone();
                                        d.dTraderRedirection$Action(d.callContext(n))
                                    }, "onClick"),
                                    style: "btn btn-primary",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "ResponsiveTradeButton2"
                                    },
                                    _widgetRecordProvider: t
                                }, c(u("GgRGDuCYjUW1MzilRbh91w#Value", "Trade")))))]
                            }, function() {
                                return []
                            })]
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "rest-of-platforms",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "RestOfPlatforms"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(k, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShouldShowProduct: i.variables.tradingPlatformProductListingResponseVar.shouldShowDBotAttr,
                                Description: "Automated trading with custom bots.",
                                Icon: "/tradershub/img/tradershub.dbot.svg",
                                IsLoading: i.variables.isLoadingVar,
                                Title: "Deriv Bot",
                                IsDisabled: i.variables.backOfficeLocksVar.isTradingDisabledAttr
                            },
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError"),
                                redirectionLink$Action: s(function() {
                                    var n = f.clone();
                                    d.botRedirection$Action(d.callContext(n))
                                }, "redirectionLink$Action")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "98",
                                alias: "9"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), r.createElement(k, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsDisabled: i.variables.backOfficeLocksVar.isTradingDisabledAttr,
                                IsLoading: i.variables.isLoadingVar,
                                Icon: "/tradershub/img/tradershub.smart_trader.svg",
                                ShouldShowProduct: i.variables.tradingPlatformProductListingResponseVar.shouldShowSmartTraderAttr,
                                Description: "Simple interface for traders of all levels.",
                                Title: "SmartTrader"
                            },
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError"),
                                redirectionLink$Action: s(function() {
                                    var n = f.clone();
                                    d.smarttraderRedirection$Action(d.callContext(n))
                                }, "redirectionLink$Action")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "99",
                                alias: "10"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        })), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            style: "deriv-go-section",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DerivGoHeader"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(p, {
                            extendedProperties: {
                                style: "font-size: 16px; font-weight: bold; margin-top: 20px;"
                            },
                            text: [c(u("b02H41d_uUCdlwJgsUp1XA#Value", "Download our mobile app:"))],
                            _idProps: {
                                service: e,
                                uuid: "101"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(k, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShouldShowProduct: i.variables.tradingPlatformProductListingResponseVar.shouldShowDerivGoAttr,
                                Icon: "/tradershub/img/tradershub.dgo.svg",
                                Title: "Deriv GO",
                                IsLoading: i.variables.isLoadingVar,
                                Description: "Mobile trading on-the-go."
                            },
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError"),
                                redirectionLink$Action: s(function() {
                                    var n = f.clone();
                                    d.toggleDerivGoModal$Action(d.callContext(n))
                                }, "redirectionLink$Action")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "102",
                                alias: "11"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), r.createElement(G, {
                            showPopup: i.variables.isDerivGoModalVisibleVar,
                            style: "popup-dialog full-height-popup",
                            _idProps: {
                                service: e,
                                name: "DerivGoTradeModal"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #DEE2E6; border-style: none none solid none; border-width: 0px 0px 2px 0px; padding: 11px 16px;"
                            },
                            style: "display-flex align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Header"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(p, {
                            extendedProperties: {
                                style: "color: #272B30; font-size: 20px; font-weight: bold;"
                            },
                            text: [c(u("BzyRc_7WbESj95bM9dHedA#Value", "Trade with Deriv GO"))],
                            _idProps: {
                                service: e,
                                uuid: "105"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedEvents: {
                                onClick: s(function() {
                                    var n = f.clone();
                                    d.closeDerivGoModal$Action(d.callContext(n))
                                }, "onClick")
                            },
                            gridProperties: {
                                marginLeft: "8px"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "CloseBtn"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            extendedEvents: {
                                onClick: s(function() {
                                    var n = f.clone();
                                    d.toggleDerivGoModal$Action(d.callContext(n))
                                }, "onClick")
                            },
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standaloneSMClose.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "107"
                            },
                            _widgetRecordProvider: t
                        }))), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "MainContentOfModal"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "padding: 16px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DerivGOLogo"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-right: 8px;"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Logo"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgo.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "111"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-size: 16px; font-weight: bold;"
                            },
                            text: [c(u("GZdd9NxHHEm3_2N4R_F7qw#Value", "Deriv GO"))],
                            _idProps: {
                                service: e,
                                uuid: "112"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "Baner"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.dgobanner.jpg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "114"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin: 40px 55px;"
                            },
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "ContentContainer"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(p, {
                            extendedProperties: {
                                style: "color: #101213; font-weight: 400; line-height: 22px;"
                            },
                            text: [c(u("HQNXzJrDnUW_Y_u7n_JGYw#Value", "Download Deriv GO and dive into trading on your mobile."))],
                            _idProps: {
                                service: e,
                                uuid: "116"
                            },
                            _widgetRecordProvider: t
                        }), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-top: 8px; text-align: center;"
                            },
                            style: "display-flex",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DownloadCenter"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "border-color: #E6E9E9; border-radius: 4px; border-style: solid; border-width: 1px; margin-right: 16px; padding: 8px;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "50%"
                            },
                            style: "",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "QRCode"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(a, {
                            align: 0,
                            animate: !1,
                            extendedProperties: {
                                style: "margin-bottom: 8px; margin-right: auto;"
                            },
                            gridProperties: {
                                classes: "OSInline",
                                width: "80px",
                                marginLeft: "auto"
                            },
                            style: "display-flex align-items-center justify-content-center",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "119"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.DerivGoQRCode.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                uuid: "120"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(p, {
                            extendedProperties: {
                                style: "color: #333333; font-size: 12px;"
                            },
                            text: [c(u("uKyrCzscnka86elWTeXYXg#Value", "Scan the QR code to download Deriv GO"))],
                            _idProps: {
                                service: e,
                                uuid: "121"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(a, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline",
                                width: "50%"
                            },
                            style: "display-flex flex-direction-column align-items-center justify-content-space-between",
                            visible: !0,
                            _idProps: {
                                service: e,
                                name: "DownloadLinks"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(R, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Fade),
                            url: o.Navigation.generateScreenURL("https://play.google.com/store/apps/details?id=com.deriv.app&pli=1", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "123"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.GooglePlayBadge.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "GooglePlay"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(R, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Fade),
                            url: o.Navigation.generateScreenURL("https://apps.apple.com/my/app/deriv-go-online-trading-app/id1550561298", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "125"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AppstoreBadge.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "AppStore"
                            },
                            _widgetRecordProvider: t
                        })), r.createElement(R, {
                            enabled: !0,
                            extendedProperties: {
                                target: "_blank"
                            },
                            gridProperties: {
                                classes: "ThemeGrid_MarginGutter"
                            },
                            transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Fade),
                            url: o.Navigation.generateScreenURL("https://appgallery.huawei.com/app/C103801913", {}),
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "127"
                            },
                            _widgetRecordProvider: t
                        }, r.createElement(g, {
                            image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.AppGalleryBadge.svg"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "AppGallery"
                            },
                            _widgetRecordProvider: t
                        }))))))), r.createElement(K, {
                            getOwnerSpan: s(function() {
                                return v.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return v.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                IsVisible: i.variables.shouldShowWarningPopupVar
                            },
                            events: {
                                _handleError: s(function(n) {
                                    d.handleError(n)
                                }, "_handleError"),
                                onCloseClick$Action: s(function() {
                                    var n = f.clone();
                                    d.confirmedNotResidentOnClick$Action(d.callContext(n))
                                }, "onCloseClick$Action")
                            },
                            _validationProps: {
                                validationService: P
                            },
                            _idProps: {
                                service: e,
                                uuid: "129",
                                alias: "12"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }), r.createElement(G, {
                            showPopup: i.variables.openAccountSwitcherModalVar,
                            style: "popup-dialog popup-dialog__mobile",
                            _idProps: {
                                service: e,
                                name: "AccountSwitcherModal"
                            },
                            _widgetRecordProvider: t
                        }, _(i.variables.openAccountSwitcherModalVar, !0, this, function() {
                            return [r.createElement(a, {
                                align: 0,
                                animate: !1,
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "container"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedEvents: {
                                    onClick: s(function() {
                                        var n = f.clone();
                                        d.titleContainerMobileOnClick$Action(d.callContext(n))
                                    }, "onClick")
                                },
                                extendedProperties: {
                                    style: "border-color: #E9ECEF; border-style: none none solid none; border-width: 0px 0px 2px 0px; height: 52px; padding: 0 16px;"
                                },
                                style: "display-flex align-items-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "TitleContainerMobile"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "margin-right: 16px;"
                                },
                                style: "display-flex align-items-center justify-content-center",
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    uuid: "133"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(g, {
                                image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.arrowleft.svg"),
                                type: 0,
                                _idProps: {
                                    service: e,
                                    uuid: "134"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(p, {
                                extendedProperties: {
                                    style: "color: #272B30; font-size: 18px; font-weight: 700;"
                                },
                                text: [c(u("NONZJt0gW0+sZ4IXAPIq4Q#Value", "Select account"))],
                                _idProps: {
                                    service: e,
                                    uuid: "135"
                                },
                                _widgetRecordProvider: t
                            })), r.createElement(a, {
                                align: 0,
                                animate: !1,
                                extendedProperties: {
                                    style: "padding: 16px;"
                                },
                                visible: !0,
                                _idProps: {
                                    service: e,
                                    name: "AccountListContainerMobile"
                                },
                                _widgetRecordProvider: t
                            }, r.createElement(B, {
                                animateItems: !0,
                                gridProperties: {
                                    classes: "OSFillParent"
                                },
                                mode: 0,
                                source: i.variables.filteredAccountListVar,
                                style: "list list-group",
                                tag: "div",
                                _idProps: {
                                    service: e,
                                    name: "AccountList2"
                                },
                                _widgetRecordProvider: t,
                                placeholders: {
                                    content: new me(function(n, m) {
                                        return [r.createElement(N, {
                                            onClick: s(function() {
                                                return Promise.resolve().then(function() {
                                                    var H = m.clone();
                                                    return d.accountListItemOnClick$Action(d.callContext(H))
                                                })
                                            }, "onClick"),
                                            style: "list-item",
                                            triggerActionOnFullSwipeLeft: !0,
                                            triggerActionOnFullSwipeRight: !0,
                                            _idProps: {
                                                service: n,
                                                name: "ListItem2"
                                            },
                                            _widgetRecordProvider: t,
                                            placeholders: {
                                                leftActions: E.Empty,
                                                content: new E(function() {
                                                    return [r.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        style: i.getCachedValue(n.getId("6lHPxqZkekWMIx7jR8mQ4g.Style"), function() {
                                                            return h.getActiveLoginId() === i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr ? "account-list-item active-account" : "account-list-item"
                                                        }, function() {
                                                            return h.getActiveLoginId()
                                                        }, function() {
                                                            return i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr
                                                        }),
                                                        visible: !0,
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "139"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, r.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        extendedProperties: {
                                                            style: "border-radius: 100%; height: 24px; overflow: hidden;"
                                                        },
                                                        gridProperties: {
                                                            classes: "OSInline",
                                                            width: "24px"
                                                        },
                                                        style: "display-flex align-items-center justify-content-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: n,
                                                            name: "Icon2"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, r.createElement(g, {
                                                        type: 1,
                                                        url: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).iconAttr,
                                                        _idProps: {
                                                            service: n,
                                                            uuid: "141"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })), r.createElement(a, {
                                                        align: 0,
                                                        animate: !1,
                                                        gridProperties: {
                                                            marginLeft: "8px"
                                                        },
                                                        style: "display-flex align-items-center",
                                                        visible: !0,
                                                        _idProps: {
                                                            service: n,
                                                            name: "text2"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }, r.createElement(b, {
                                                        style: "account-list-item__text",
                                                        value: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).balanceAttr,
                                                        _idProps: {
                                                            service: n,
                                                            name: "AccountBalance2"
                                                        },
                                                        _widgetRecordProvider: t
                                                    }), r.createElement(b, {
                                                        gridProperties: {
                                                            marginLeft: "5px"
                                                        },
                                                        style: "account-list-item__text",
                                                        value: i.variables.filteredAccountListVar.getCurrent(m.iterationContext).currencyAttr,
                                                        _idProps: {
                                                            service: n,
                                                            name: "AccountCurrency2"
                                                        },
                                                        _widgetRecordProvider: t
                                                    })))]
                                                }),
                                                rightActions: E.Empty
                                            },
                                            _dependencies: [l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).currencyAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).balanceAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).iconAttr), l(i.variables.filteredAccountListVar.getCurrent(m.iterationContext).loginidAttr), l(h.getActiveLoginId())]
                                        })]
                                    }, f, e, "2")
                                },
                                _dependencies: [l(h.getActiveLoginId())]
                            }), _(i.variables.showAddMoreAccountVar, !1, this, function() {
                                return [r.createElement(R, {
                                    enabled: !0,
                                    style: "remove-hover",
                                    transition: o.Transitions.createTransition(o.Transitions.TransitionAnimation.Fade),
                                    url: o.Navigation.generateScreenURL("tradershub", "add-account", {}),
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "145"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    extendedProperties: {
                                        style: "border-color: #DEE2E6; border-style: solid; border-width: 1px 0px 0px 0px; padding: 8px;"
                                    },
                                    style: "display-flex align-items-center justify-content-space-between",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        name: "AddMoreAccountContainer2"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(p, {
                                    extendedProperties: {
                                        style: "color: #272B30; font-weight: 700;"
                                    },
                                    text: [c(u("7v6bg5YzEEaO0ja23TEysA#Value", "Add more accounts"))],
                                    _idProps: {
                                        service: e,
                                        uuid: "147"
                                    },
                                    _widgetRecordProvider: t
                                }), r.createElement(a, {
                                    align: 0,
                                    animate: !1,
                                    style: "display-flex align-items-center justify-content-center",
                                    visible: !0,
                                    _idProps: {
                                        service: e,
                                        uuid: "148"
                                    },
                                    _widgetRecordProvider: t
                                }, r.createElement(g, {
                                    image: o.Navigation.VersionedURL.getVersionedUrl("img/tradershub.standalone_chevron_right_md.svg"),
                                    type: 0,
                                    _idProps: {
                                        service: e,
                                        uuid: "149"
                                    },
                                    _widgetRecordProvider: t
                                }))))]
                            }, function() {
                                return []
                            })))]
                        }, function() {
                            return []
                        })))]
                    })
                },
                _dependencies: [l(i.variables.openAccountSwitcherModalVar), l(i.variables.shouldShowWarningPopupVar), l(i.variables.isDerivGoModalVisibleVar), l(i.variables.tradingPlatformProductListingResponseVar.shouldShowDerivGoAttr), l(i.variables.tradingPlatformProductListingResponseVar.shouldShowSmartTraderAttr), l(i.variables.tradingPlatformProductListingResponseVar.shouldShowDBotAttr), l(i.variables.tradingPlatformProductListingResponseVar.shouldShowDTraderAttr), l(i.variables.showAddMoreAccountVar), l(h.getActiveLoginId()), l(i.variables.filteredAccountListVar), l(i.variables.isAccountSwitcherOpenVar), l(i.variables.backOfficeLocksVar.isTradingDisabledAttr), l(i.variables.backOfficeLocksVar.isTransferAllowedAttr), l(i.variables.selectedAccountCurrencyVar), l(i.variables.selectedAccountBalanceVar), l(i.variables.isBalanceLoadingVar), l(i.variables.isLoadingVar), l(i.variables.hasRealAccountVar), l(h.getAuthToken()), l(h.getAccountType())]
            }))
        }
    };
s(W, "View");
var Y = W,
    mt = Y;
export {
    mt as
    default
};