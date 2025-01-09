import {
    a as ee,
    b as te
} from "./_oschunk-XLVCKUZM.js";
import {
    a as ie
} from "./_oschunk-MMCUE3ZS.js";
import {
    a as V
} from "./_oschunk-QLNDJKPS.js";
import "./_oschunk-XH5MAFIM.js";
import {
    a as z
} from "./_oschunk-FSPIWF67.js";
import "./_oschunk-VZCHS3W5.js";
import "./_oschunk-ENDX3VJY.js";
import "./_oschunk-FTYAL2B7.js";
import {
    a as N
} from "./_oschunk-GPNNXU3M.js";
import {
    d as o,
    f as u,
    g as w,
    j as E,
    k as m,
    r as O
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import {
    a as X
} from "./_oschunk-NQZZDANH.js";
import {
    a as Y,
    g as H,
    i as M
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-TGM73NNA.js";
import "./_oschunk-4PNSWRUJ.js";
import "./_oschunk-BTXBTSZ3.js";
import "./_oschunk-5MMGFCSA.js";
import "./_oschunk-ZHFHVHFO.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as Q,
    o as $
} from "./_oschunk-KZFTAIEG.js";
import {
    bd as A
} from "./_oschunk-UATY3RVV.js";
import {
    ia as k
} from "./_oschunk-3RH6DZJJ.js";
import {
    c,
    h as q
} from "./_oschunk-QHO7QY6K.js";
var C = q(Y());
var r = q(Y());

function J(L, t, f, n) {
    var W;
    let g = (W = JSON.parse(L.LoginHistoryData)) != null ? W : [];
    console.log("in js blcok data:", g);
    let e = c(_ => {
            let p = _ * 1e3;
            return dayjs(p).toISOString().replace("T", " ").replace(/\..+/, "") + " GMT"
        }, "formatDateTime"),
        P = c(_ => _ == 1 ? "Successful" : "Failed", "calstatus"),
        l = c(_ => {
            let p = _.match(/IP=([0-9a-fA-F:.]+)/);
            return p && p[1] ? p[1] : "Unknown IP"
        }, "extractIP"),
        x = c(_ => {
            let p = "Unknown Model.",
                R = ["iPhone", "iPad", "Macintosh", "Android", "Windows NT", "Linux", "Mobile", "Tablet", "BlackBerry", "Nokia", "Samsung", "Pixel", "Huawei", "Xiaomi", "LG"];
            for (let h of R)
                if (_.includes(h)) {
                    p = h;
                    break
                } return p
        }, "extractDeviceModel"),
        d = c(_ => {
            var h, I;
            let p = _.match(new RegExp("(?<date>[0-9a-zA-Z-]+\\s[0-9:]+GMT)[\\s](IP=)(?<ip>[\\w:.]+)\\sIP_COUNTRY=(?<country>([a-zA-Z]{2}))\\s(User_AGENT=)(\\w.*)(?<name>iPhone|Android)([\\W\\w]+)\\s(?<app>Deriv P2P|Deriv GO)(?<version>[\\w\\W]+)\\s(LANG=)([\\w]{2})")),
                R = p ? p.groups : (h = bowser.getParser(_)) == null ? void 0 : h.getBrowser();
            return R ? `${R.name} ${(I=R.app)!=null?I:""} v${R.version}` : "Unknown"
        }, "extractBrowserVersion"),
        D = {
            loginDataToday: [],
            loginDataLast7Days: [],
            loginDataLast90Days: []
        },
        y = dayjs().startOf("day").unix(),
        i = dayjs().subtract(7, "day").unix(),
        a = dayjs().subtract(90, "day").unix(),
        b = D;
    g.login_history.length && (b = g.login_history.reduce((_, p) => {
        let R = p.environment,
            h = R.substring(R.indexOf("User_AGENT"), R.indexOf("LANG")),
            I = {
                action: p.action,
                ip: l(R),
                browser: d(h),
                status: P(p.status),
                dateTime: e(p.time),
                deviceModel: x(h)
            };
        return p.time >= y ? _.loginDataToday.push(I) : p.time < y && p.time >= i ? _.loginDataLast7Days.push(I) : _.loginDataLast90Days.push(I), _
    }, D)), console.log("today", D), L.LoginDataToday = JSON.stringify(b.loginDataToday), console.log("today data", L.LoginDataToday), L.LoginDataLast7Days = JSON.stringify(b.loginDataLast7Days), L.LoginDataLast90Days = JSON.stringify(b.loginDataLast90Days)
}
c(J, "default");
var s = k; {
    let t = class t extends s.Controller.BaseViewController {
        constructor(n, g, e) {
            super(n, g, e);
            var P = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(n) {
            this._dataFetchActionNames = n
        }
        get _onClickBackButton$Action() {
            return this.hasOwnProperty("__onClickBackButton$Action") || (this.__onClickBackButton$Action = function(n) {
                var g = this.model,
                    e = this.controller,
                    P = this.idService;
                return s.Logger.startActiveSpan("OnClickBackButton", function(l) {
                    l && (l.setAttribute("code.function", "OnClickBackButton"), l.setAttribute("outsystems.function.key", "3864c8d5-b68a-427f-8b4b-2ca0ada64b61"), l.setAttribute("outsystems.function.owner.name", "Accounts"), l.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        return e.ensureControllerAlive("OnClickBackButton"), n = e.callContext(n), s.Navigation.navigateTo(s.Navigation.generateScreenURL("Accounts", "Security", {}), s.Transitions.createTransition(s.Transitions.TransitionAnimation.Default), n, !0)
                    } finally {
                        l && l.end()
                    }
                }, 1)
            }), this.__onClickBackButton$Action
        }
        set _onClickBackButton$Action(n) {
            this.__onClickBackButton$Action = n
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(n) {
                var g = this.model,
                    e = this.controller,
                    P = this.idService;
                return s.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "8116b129-2b34-416e-b214-212bed727d8d"), l.setAttribute("outsystems.function.owner.name", "Accounts"), l.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        return e.ensureControllerAlive("OnReady"), n = e.callContext(n), s.Flow.executeAsyncFlow(function() {
                            return g.variables.limitTextVar.limitAttr = 50, e._formattingLoginData$Action(n)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(n) {
            this.__onReady$Action = n
        }
        get _formattingLoginData$Action() {
            return this.hasOwnProperty("__formattingLoginData$Action") || (this.__formattingLoginData$Action = function(n) {
                var g = this.model,
                    e = this.controller,
                    P = this.idService;
                return s.Logger.startActiveSpan("FormattingLoginData", function(l) {
                    return l && (l.setAttribute("code.function", "FormattingLoginData"), l.setAttribute("outsystems.function.key", "c22f4fd6-d519-43d6-ba1b-ec61c1d177b2"), l.setAttribute("outsystems.function.owner.name", "Accounts"), l.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                        e.ensureControllerAlive("FormattingLoginData"), n = e.callContext(n);
                        var x = new s.DataTypes.VariableHolder,
                            d = new s.DataTypes.VariableHolder,
                            D = new s.DataTypes.VariableHolder(new s.DataTypes.JSONSerializeOutputType),
                            y = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(A))),
                            i = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(A))),
                            a = new s.DataTypes.VariableHolder(new(s.Controller.BaseController.getJSONDeserializeOutputType(A)));
                        return s.Flow.executeAsyncFlow(function() {
                            return g.flush(), $.loginHistory$Action(g.variables.limitTextVar, n).then(function(b) {
                                x.value = b
                            }).then(function() {
                                D.value.jSONOut = s.JSONUtils.serializeToJSON(x.value.loginDataOut, !1, !1), d.value = s.Logger.startActiveSpan("GenerateLoginData", function(b) {
                                    b && (b.setAttribute("code.function", "GenerateLoginData"), b.setAttribute("outsystems.function.key", "bb718e4b-ef75-41f5-afa9-1787cb8f4595"), b.setAttribute("outsystems.function.owner.name", "Accounts"), b.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), b.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                                    try {
                                        return e.safeExecuteJSNode(J, "GenerateLoginData", "FormattingLoginData", {
                                            LoginHistoryData: s.DataConversion.JSNodeParamConverter.to(D.value.jSONOut, s.DataTypes.DataTypes.Text),
                                            LoginDataToday: s.DataConversion.JSNodeParamConverter.to("", s.DataTypes.DataTypes.Text),
                                            LoginDataLast7Days: s.DataConversion.JSNodeParamConverter.to("", s.DataTypes.DataTypes.Text),
                                            LoginDataLast90Days: s.DataConversion.JSNodeParamConverter.to("", s.DataTypes.DataTypes.Text)
                                        }, function(W) {
                                            var _ = new(e.constructor.getVariableGroupType("Accounts.Security.LoginHistoryBlock.FormattingLoginData$generateLoginDataJSResult"));
                                            return _.loginDataTodayOut = s.DataConversion.JSNodeParamConverter.from(W.LoginDataToday, s.DataTypes.DataTypes.Text), _.loginDataLast7DaysOut = s.DataConversion.JSNodeParamConverter.from(W.LoginDataLast7Days, s.DataTypes.DataTypes.Text), _.loginDataLast90DaysOut = s.DataConversion.JSNodeParamConverter.from(W.LoginDataLast90Days, s.DataTypes.DataTypes.Text), _
                                        }, {}, {})
                                    } finally {
                                        b && b.end()
                                    }
                                }, 1), i.value.dataOut = s.JSONUtils.deserializeFromJSON(d.value.loginDataTodayOut, A, !1), y.value.dataOut = s.JSONUtils.deserializeFromJSON(d.value.loginDataLast7DaysOut, A, !1), a.value.dataOut = s.JSONUtils.deserializeFromJSON(d.value.loginDataLast90DaysOut, A, !1), g.variables.loginDataTodayVar = i.value.dataOut, g.variables.loginDataLast7Var = y.value.dataOut, g.variables.loginDataLast90Var = a.value.dataOut
                            })
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__formattingLoginData$Action
        }
        set _formattingLoginData$Action(n) {
            this.__formattingLoginData$Action = n
        }
        onClickBackButton$Action(n) {
            var g = this.controller;
            return s.Logger.startActiveSpan("OnClickBackButton__proxy", function(e) {
                e && (e.setAttribute("code.function", "OnClickBackButton"), e.setAttribute("outsystems.function.key", "3864c8d5-b68a-427f-8b4b-2ca0ada64b61"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return g.safeExecuteClientAction(g._onClickBackButton$Action, n)
                } finally {
                    e && e.end()
                }
            }, 0)
        }
        onReady$Action(n) {
            var g = this.controller;
            return s.Logger.startActiveSpan("OnReady__proxy", function(e) {
                return e && (e.setAttribute("code.function", "OnReady"), e.setAttribute("outsystems.function.key", "8116b129-2b34-416e-b214-212bed727d8d"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return g.safeExecuteClientAction(g._onReady$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        formattingLoginData$Action(n) {
            var g = this.controller;
            return s.Logger.startActiveSpan("FormattingLoginData__proxy", function(e) {
                return e && (e.setAttribute("code.function", "FormattingLoginData"), e.setAttribute("outsystems.function.key", "c22f4fd6-d519-43d6-ba1b-ec61c1d177b2"), e.setAttribute("outsystems.function.owner.name", "Accounts"), e.setAttribute("outsystems.function.owner.key", "8a32fa32-34f5-4338-b6db-4f1ce8fdd638"), e.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), s.Flow.tryFinally(function() {
                    return g.safeExecuteClientAction(g._formattingLoginData$Action, n)
                }, function() {
                    e && e.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(n) {
            this._onInitializeEventHandler = n
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(n) {
                var g = this.controller,
                    e = this.model,
                    P = this.idService;
                return g.onReady$Action(n)
            }), this._onReadyEventHandler
        }
        set onReadyEventHandler(n) {
            this._onReadyEventHandler = n
        }
        get onRenderEventHandler() {
            return this.hasOwnProperty("_onRenderEventHandler") || (this._onRenderEventHandler = null), this._onRenderEventHandler
        }
        set onRenderEventHandler(n) {
            this._onRenderEventHandler = n
        }
        get onDestroyEventHandler() {
            return this.hasOwnProperty("_onDestroyEventHandler") || (this._onDestroyEventHandler = null), this._onDestroyEventHandler
        }
        set onDestroyEventHandler(n) {
            this._onDestroyEventHandler = n
        }
        get onParametersChangedEventHandler() {
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = null), this._onParametersChangedEventHandler
        }
        set onParametersChangedEventHandler(n) {
            this._onParametersChangedEventHandler = n
        }
        get handleError() {
            return this.hasOwnProperty("_handleError") || (this._handleError = function(n) {
                return controller.handleError(n)
            }), this._handleError
        }
        set handleError(n) {
            this._handleError = n
        }
        static checkPermissions() {}
        getDefaultTimeout() {
            return $.defaultTimeout
        }
    };
    c(t, "ControllerInner");
    let L = t;
    j = L, j.registerVariableGroupType("Accounts.Security.LoginHistoryBlock.FormattingLoginData$generateLoginDataJSResult", [{
        name: "LoginDataToday",
        attrName: "loginDataTodayOut",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginDataLast7Days",
        attrName: "loginDataLast7DaysOut",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "LoginDataLast90Days",
        attrName: "loginDataLast90DaysOut",
        mandatory: !0,
        dataType: s.DataTypes.DataTypes.Text,
        defaultValue: c(function() {
            return ""
        }, "defaultValue")
    }])
}
var j, re = new s.Controller.ControllerFactory(j, X);
var v = k,
    U = M.PlaceholderContent,
    B = M.IteratorPlaceholderContent,
    S = class S extends H.BaseWebBlock {
        static get displayName() {
            return "Security.LoginHistoryBlock"
        }
        static getAttributes() {
            return {
                codeFunction: "LoginHistoryBlock",
                functionKey: "85f3a7a1-43e6-4964-807e-696d28488d1a",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/Accounts.Security.LoginHistoryBlock.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [N, V]
        }
        get modelFactory() {
            return ee
        }
        get controllerFactory() {
            return re
        }
        get title() {
            return ""
        }
        internalRender() {
            let t = this.model,
                f = this.controller,
                n = this.idService,
                g = f.validationService,
                e = this.widgetsRecordProvider,
                P = f.callContext(),
                l = S.ifWidget,
                x = S.textWidget,
                d = S.asPrimitiveValue,
                D = S.getTranslation,
                y = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(o, {
                align: 0,
                animate: !1,
                style: "login-history__container",
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: e
            }, r.createElement(N, {
                getOwnerSpan: c(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    IsDesktop: Q.getDevice() === "desktop"
                },
                events: {
                    _handleError: c(function(i) {
                        f.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: n,
                    uuid: "1",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    desktopLayout: new U(function() {
                        return [r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "display-flex flex-direction-column gap-m",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "DesktopContainer"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-history__header",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "LoginHeader"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(V, {
                            getOwnerSpan: c(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                ShouldDisplayCloseButton: !1,
                                ShouldDisplayBackButton: !0,
                                Title: "Login activity"
                            },
                            events: {
                                _handleError: c(function(i) {
                                    f.handleError(i)
                                }, "_handleError"),
                                onClickBackButton$Action: c(function() {
                                    var i = P.clone();
                                    f.onClickBackButton$Action(f.callContext(i))
                                }, "onClickBackButton$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: n,
                                uuid: "4",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                additionalcontent: U.Empty
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-history-details-list",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "LoginListDetails"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(o, {
                            align: 0,
                            animate: !0,
                            style: "login-history__list-layout",
                            visible: t.variables.loginDataLast7Var.isEmpty,
                            _idProps: {
                                service: n,
                                name: "TodayLoginListDetails"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            style: "login-history__list-title",
                            text: ["Today"],
                            _idProps: {
                                service: n,
                                name: "TodayTitle"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataTodayVar,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "8"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "TodayBody"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "ListContainer"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "LoginDeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "12"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "13"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "14"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "15"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataTodayVar.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "ModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "LoginDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "DateIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container ",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "DateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "20"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "DateField"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "IP"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "23"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "IpField"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            classes: "ThemeGrid_Width2"
                                        },
                                        style: "display-flex full-width flex-direction-row column-gap-s align-content-baseline",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "ActionStatus"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("ApLlOnE4GUCK8zuWnI0naQ.Style"), function() {
                                            return "icon" + (t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "26"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: "display-flex align-items-baseline flex-direction-column full-width",
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Actionfield"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("StatusField.Style"), function() {
                                            return "display-flex align-items-baseline flex-direction-column full-width " + (t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red")
                                        }, function() {
                                            return t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "StatusField"
                                        },
                                        _widgetRecordProvider: e
                                    })))))]
                                }, P, n, "1")
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !0,
                            style: "login-history__list-layout",
                            visible: !t.variables.loginDataLast7Var.isEmpty,
                            _idProps: {
                                service: n,
                                name: "Last7LoginListDetails"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            style: "login-history__list-title",
                            text: ["Last 7 Days"],
                            _idProps: {
                                service: n,
                                name: "Last7DaysTitle"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataLast7Var,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "31"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7Body"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7ListContainer"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7LoginDeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "35"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "36"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "37"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "38"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataLast7Var.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7ModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7LoginDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7DateIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7DateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "43"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7DateField"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7IP"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "46"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7IpFiled"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            classes: "ThemeGrid_Width2"
                                        },
                                        style: "display-flex full-width flex-direction-row column-gap-s align-content-baseline",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7ActionStatus"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("V+neOwBWhk2g4bXlWxE5uA.Style"), function() {
                                            return "icon" + (t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "49"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: "display-flex align-items-baseline flex-direction-column full-width",
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7ActionField"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("Last7StatusField.Style"), function() {
                                            return "display-flex align-items-baseline flex-direction-column full-width " + (t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red")
                                        }, function() {
                                            return t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7StatusField"
                                        },
                                        _widgetRecordProvider: e
                                    })))))]
                                }, P, n, "2")
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !0,
                            style: "login-history__list-layout",
                            visible: !t.variables.loginDataLast90Var.isEmpty,
                            _idProps: {
                                service: n,
                                name: "Last90LoginListDetails2"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            style: "login-history__list-title",
                            text: ["Last 90 Days"],
                            _idProps: {
                                service: n,
                                name: "Last90DaysTitle"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataLast90Var,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "54"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90Body2"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex flex-direction-column gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90ListContainer"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90LoginDeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "58"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "59"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "60"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "61"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataLast90Var.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90ModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90LoginDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history-details-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90DateIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90DateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "66"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90DateField"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90IP"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "69"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90IpFiled"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        gridProperties: {
                                            classes: "ThemeGrid_Width2"
                                        },
                                        style: "display-flex full-width flex-direction-row column-gap-s align-content-baseline",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90ActionStatus"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("I3VZMQZ9TUqiDHmA2DwUzA.Style"), function() {
                                            return "icon" + (t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "72"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: "display-flex align-items-baseline flex-direction-column full-width",
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90ActionField"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("Last90StatusField.Style"), function() {
                                            return "display-flex align-items-baseline flex-direction-column full-width " + (t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red")
                                        }, function() {
                                            return t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90StatusField"
                                        },
                                        _widgetRecordProvider: e
                                    })))))]
                                }, P, n, "3")
                            },
                            _dependencies: []
                        }))))]
                    }),
                    tabletLayout: U.Empty,
                    defaultLayout: new U(function() {
                        return [r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-history__header",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "MobileLoginHeader"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(V, {
                            getOwnerSpan: c(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                Title: "Login activity",
                                ShouldDisplayBackButton: !0,
                                ShouldDisplayCloseButton: !1
                            },
                            events: {
                                _handleError: c(function(i) {
                                    f.handleError(i)
                                }, "_handleError"),
                                onClickBackButton$Action: c(function() {
                                    var i = P.clone();
                                    f.onClickBackButton$Action(f.callContext(i))
                                }, "onClickBackButton$Action")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: n,
                                uuid: "76",
                                alias: "3"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                additionalcontent: U.Empty
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-history-details-list",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "MobileContainer"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(o, {
                            align: 0,
                            animate: !1,
                            style: "login-history__list-layout",
                            visible: !0,
                            _idProps: {
                                service: n,
                                name: "MobileLoginListToday"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            extendedProperties: {
                                style: "font-weight: bold;"
                            },
                            style: "login-history__list-title",
                            text: ["Today"],
                            _idProps: {
                                service: n,
                                name: "Today"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataTodayVar,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "80"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "LoginListBody"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: right;"
                                        },
                                        style: "display-flex align-items-center padding-s gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileTodayStatus"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("hu73HldZsEeVZOsThNxY6g.Style"), function() {
                                            return "icon align-items-center" + (t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "83"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "TodayAction"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("TodayStatus.Style"), function() {
                                            return t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red"
                                        }, function() {
                                            return t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "TodayStatus"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileTodayDeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "87"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "88"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "89"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "90"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataTodayVar.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "TodayModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileTodayDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "TodayLoginDateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "94"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "MobileDateField"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "TodayLoginIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "97"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataTodayVar.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "IpFiled"
                                        },
                                        _widgetRecordProvider: e
                                    }))))]
                                }, P, n, "4")
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !0,
                            style: "login-history__list-layout",
                            visible: !t.variables.loginDataLast7Var.isEmpty,
                            _idProps: {
                                service: n,
                                name: "MobileLoginListLast7"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            style: "login-history__list-title",
                            text: ["Last 7 Days"],
                            _idProps: {
                                service: n,
                                name: "Last7Days"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataLast7Var,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "101"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7LoginBody"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: right;"
                                        },
                                        style: "display-flex column-gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast7Status"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("bquPXjnyMkKq_K3zCUfoZQ.Style"), function() {
                                            return "icon" + (t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "104"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7Action"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("Last7Status.Style"), function() {
                                            return "display-flex align-items-baseline flex-direction-column full-width " + (t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red")
                                        }, function() {
                                            return t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last7Status"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast7DeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "108"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "109"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "110"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "111"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataLast7Var.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast7ModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "full-width",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast7LoginDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7LoginDateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "115"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "MobileDateField2"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last7LoginIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "118"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataLast7Var.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "IpFiled1"
                                        },
                                        _widgetRecordProvider: e
                                    }))))]
                                }, P, n, "5")
                            },
                            _dependencies: []
                        })), r.createElement(o, {
                            align: 0,
                            animate: !0,
                            style: "login-history__list-layout",
                            visible: !t.variables.loginDataLast90Var.isEmpty,
                            _idProps: {
                                service: n,
                                name: "MobileLast90Days2"
                            },
                            _widgetRecordProvider: e
                        }, r.createElement(O, {
                            style: "login-history__list-title",
                            text: ["Last 90 Days"],
                            _idProps: {
                                service: n,
                                name: "Last90Days"
                            },
                            _widgetRecordProvider: e
                        }), r.createElement(w, {
                            animateItems: !0,
                            gridProperties: {
                                classes: "OSFillParent"
                            },
                            mode: 0,
                            source: t.variables.loginDataLast90Var,
                            style: "list list-group  login-history__list-format",
                            tag: "div",
                            _idProps: {
                                service: n,
                                uuid: "122"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new B(function(i, a) {
                                    return [r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__list-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90LoginBody"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: [d(t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).ipAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).dateAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).browserAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr), d(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr)]
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: right;"
                                        },
                                        style: "display-flex column-gap-s",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast90Status"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(E, {
                                        icon: "circle",
                                        iconSize: 0,
                                        style: t.getCachedValue(i.getId("rl_gntuTgkq4Gxlv6kSVvg.Style"), function() {
                                            return "icon" + (t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr === "login" ? " login-history-blue" : " login-history-grey")
                                        }, function() {
                                            return t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr
                                        }),
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "125"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).actionAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90Action"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            classes: "ThemeGrid_MarginGutter"
                                        },
                                        style: t.getCachedValue(i.getId("Last90Status.Style"), function() {
                                            return "display-flex align-items-baseline flex-direction-column full-width " + (t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr === "Successful" ? "login-history-status-green" : "login-history-status-red")
                                        }, function() {
                                            return t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr
                                        }),
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).statusAttr,
                                        _idProps: {
                                            service: i,
                                            name: "Last90Status"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        extendedProperties: {
                                            style: "text-align: center;"
                                        },
                                        style: "login-history__browser-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast90DeviceBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }, l(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr === "Macintosh" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Windows NT" || t.variables.loginDataLast7Var.getCurrent(a.iterationContext).deviceModelAttr === "Linux", !1, this, function() {
                                        return [r.createElement(m, {
                                            extendedProperties: {
                                                style: "font-size: 8px;"
                                            },
                                            image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.laptopsm.png"),
                                            style: "",
                                            type: 0,
                                            _idProps: {
                                                service: i,
                                                uuid: "129"
                                            },
                                            _widgetRecordProvider: e
                                        })]
                                    }, function() {
                                        return [l(t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr !== "Ipad" || t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr !== "Tablet", !1, this, function() {
                                            return [r.createElement(m, {
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.mobileicon.png"),
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "130"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        }, function() {
                                            return [r.createElement(m, {
                                                extendedProperties: {
                                                    style: "height: 20px;"
                                                },
                                                image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.StandaloneTabletBoldIcon_2_.svg"),
                                                style: "",
                                                type: 0,
                                                _idProps: {
                                                    service: i,
                                                    uuid: "131"
                                                },
                                                _widgetRecordProvider: e
                                            })]
                                        })]
                                    }), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "display-flex align-items-center",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            uuid: "132"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(u, {
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).deviceModelAttr + "  \u2022  " + t.variables.loginDataLast90Var.getCurrent(a.iterationContext).browserAttr,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast90ModelBrowser"
                                        },
                                        _widgetRecordProvider: e
                                    }))), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "MobileLast90LoginDetails"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90LoginDateTime"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.clockicon.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "136"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).dateAttr,
                                        _idProps: {
                                            service: i,
                                            name: "MobileDateField3"
                                        },
                                        _widgetRecordProvider: e
                                    })), r.createElement(o, {
                                        align: 0,
                                        animate: !1,
                                        style: "login-history__timedate-container",
                                        visible: !0,
                                        _idProps: {
                                            service: i,
                                            name: "Last90LoginIp"
                                        },
                                        _widgetRecordProvider: e
                                    }, r.createElement(m, {
                                        image: v.Navigation.VersionedURL.getVersionedUrl("img/Accounts.globesm.png"),
                                        type: 0,
                                        _idProps: {
                                            service: i,
                                            uuid: "139"
                                        },
                                        _widgetRecordProvider: e
                                    }), r.createElement(u, {
                                        gridProperties: {
                                            marginLeft: "0"
                                        },
                                        value: t.variables.loginDataLast90Var.getCurrent(a.iterationContext).ipAttr,
                                        _idProps: {
                                            service: i,
                                            name: "IpFiled2"
                                        },
                                        _widgetRecordProvider: e
                                    }))))]
                                }, P, n, "6")
                            },
                            _dependencies: [d(t.variables.loginDataLast7Var.getCurrent(P.iterationContext).deviceModelAttr)]
                        })))]
                    })
                },
                _dependencies: [d(t.variables.loginDataLast90Var), d(t.variables.loginDataTodayVar), d(t.variables.loginDataLast7Var)]
            })))
        }
    };
c(S, "View");
var K = S,
    G = K;
var F = M.PlaceholderContent,
    Be = M.IteratorPlaceholderContent,
    T = class T extends H.BaseWebScreen {
        static get displayName() {
            return "MainFlow.LoginHistory"
        }
        static getAttributes() {
            return {
                codeFunction: "LoginHistory",
                functionKey: "8d3ad18a-b6fa-426c-a89c-bcac9320a217",
                functionOwnerName: "Accounts",
                functionOwnerKey: "8a32fa32-34f5-4338-b6db-4f1ce8fdd638",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/Accounts.DerivAccounts.css", "css/Accounts.DerivAccounts.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [N, z, G, V]
        }
        get modelFactory() {
            return te
        }
        get controllerFactory() {
            return ie
        }
        get title() {
            return "LoginHistory"
        }
        internalRender() {
            let t = this.model,
                f = this.controller,
                n = this.idService,
                g = f.validationService,
                e = this.widgetsRecordProvider,
                P = f.callContext(),
                l = T.ifWidget,
                x = T.textWidget,
                d = T.asPrimitiveValue,
                D = T.getTranslation,
                y = this;
            return C.createElement("div", this.getRootNodeProperties(), C.createElement(N, {
                getOwnerSpan: c(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: c(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {},
                events: {
                    _handleError: c(function(i) {
                        f.handleError(i)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: g
                },
                _idProps: {
                    service: n,
                    uuid: "0",
                    alias: "1"
                },
                _widgetRecordProvider: e,
                placeholders: {
                    desktopLayout: new F(function() {
                        return [C.createElement(z, {
                            getOwnerSpan: c(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {
                                SelectedSection: "security"
                            },
                            events: {
                                _handleError: c(function(i) {
                                    f.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: n,
                                uuid: "1",
                                alias: "2"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                content: new F(function() {
                                    return [C.createElement(G, {
                                        getOwnerSpan: c(function() {
                                            return y.getChildSpan("render")
                                        }, "getOwnerSpan"),
                                        getOwnerDisposeSpan: c(function() {
                                            return y.getChildSpan("destroy")
                                        }, "getOwnerDisposeSpan"),
                                        inputs: {},
                                        events: {
                                            _handleError: c(function(i) {
                                                f.handleError(i)
                                            }, "_handleError")
                                        },
                                        _validationProps: {
                                            validationService: g
                                        },
                                        _idProps: {
                                            service: n,
                                            uuid: "2",
                                            alias: "3"
                                        },
                                        _widgetRecordProvider: e,
                                        _dependencies: []
                                    })]
                                })
                            },
                            _dependencies: []
                        })]
                    }),
                    tabletLayout: F.Empty,
                    defaultLayout: new F(function() {
                        return [C.createElement(o, {
                            align: 0,
                            animate: !1,
                            visible: !0,
                            _idProps: {
                                service: n,
                                uuid: "3"
                            },
                            _widgetRecordProvider: e
                        }, C.createElement(V, {
                            getOwnerSpan: c(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: c(function(i) {
                                    f.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: n,
                                uuid: "4",
                                alias: "4"
                            },
                            _widgetRecordProvider: e,
                            placeholders: {
                                additionalcontent: F.Empty
                            },
                            _dependencies: []
                        }), C.createElement(G, {
                            getOwnerSpan: c(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: c(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: c(function(i) {
                                    f.handleError(i)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: g
                            },
                            _idProps: {
                                service: n,
                                uuid: "5",
                                alias: "5"
                            },
                            _widgetRecordProvider: e,
                            _dependencies: []
                        }))]
                    })
                },
                _dependencies: []
            }))
        }
    };
c(T, "View");
var Z = T,
    ke = Z;
export {
    ke as
    default
};