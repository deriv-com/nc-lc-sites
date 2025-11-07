import {
    a as G
} from "./_oschunk-24WIHVSN.js";
import {
    h as X,
    i as Y,
    q
} from "./_oschunk-O5KC3WOL.js";
import {
    a as $,
    g as v,
    m as y,
    o as I,
    q as C,
    r as T,
    s as g,
    t as b
} from "./_oschunk-NVHFAAS2.js";
import {
    a as Z
} from "./_oschunk-AW35UT34.js";
import {
    Ga as j,
    Ka as p,
    la as R
} from "./_oschunk-WCMQG33O.js";
import {
    J as m,
    X as d,
    c as s,
    f as N,
    n as k,
    o as W,
    w as M,
    x as i
} from "./_oschunk-DFKJJKI4.js";
var o = d,
    A = class A extends o.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Name", "nameIn", "Name", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return "Jonh Doe"
            }, !1), this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Image", "imageIn", "Image", !0, !1, o.DataTypes.DataTypes.BinaryData, function() {
                return o.DataTypes.BinaryData.defaultValue
            }, !1), this.attr("_imageInDataFetchStatus", "_imageInDataFetchStatus", "_imageInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Color", "colorIn", "Color", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return R.color.primary
            }, !1), this.attr("_colorInDataFetchStatus", "_colorInDataFetchStatus", "_colorInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Size", "sizeIn", "Size", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_sizeInDataFetchStatus", "_sizeInDataFetchStatus", "_sizeInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("Shape", "shapeIn", "Shape", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return R.shape.rounded
            }, !1), this.attr("_shapeInDataFetchStatus", "_shapeInDataFetchStatus", "_shapeInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsLight", "isLightIn", "IsLight", !0, !1, o.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isLightInDataFetchStatus", "_isLightInDataFetchStatus", "_isLightInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", !0, !1, o.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", !0, !1, o.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(o.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(A, "VariablesRecord");
var E = A;
E.init();
var z = class z extends o.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(z, "WidgetsRecord");
var H = z,
    P = class P extends o.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return E
        }
        static getWidgetsRecordConstructor() {
            return H
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {
            "Name" in e && (this.variables.nameIn = e.Name, "_nameInDataFetchStatus" in e && (this.variables._nameInDataFetchStatus = e._nameInDataFetchStatus)), "Image" in e && (this.variables.imageIn = e.Image, "_imageInDataFetchStatus" in e && (this.variables._imageInDataFetchStatus = e._imageInDataFetchStatus)), "Color" in e && (this.variables.colorIn = e.Color, "_colorInDataFetchStatus" in e && (this.variables._colorInDataFetchStatus = e._colorInDataFetchStatus)), "Size" in e && (this.variables.sizeIn = e.Size, "_sizeInDataFetchStatus" in e && (this.variables._sizeInDataFetchStatus = e._sizeInDataFetchStatus)), "Shape" in e && (this.variables.shapeIn = e.Shape, "_shapeInDataFetchStatus" in e && (this.variables._shapeInDataFetchStatus = e._shapeInDataFetchStatus)), "IsLight" in e && (this.variables.isLightIn = e.IsLight, "_isLightInDataFetchStatus" in e && (this.variables._isLightInDataFetchStatus = e._isLightInDataFetchStatus)), "ExtendedClass" in e && (this.variables.extendedClassIn = e.ExtendedClass, "_extendedClassInDataFetchStatus" in e && (this.variables._extendedClassInDataFetchStatus = e._extendedClassInDataFetchStatus))
        }
    };
s(P, "Model");
var O = P;
O._hasValidationWidgetsValue = void 0;
var K = new o.Model.ModelFactory(O);
var f = N($());
var dt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u0627\u0644\u0623\u062D\u0631\u0641 \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u060C"
    },
    ht = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Benutzerinitialen, "
    },
    vt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Benutzerinitialen, "
    },
    mt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "user initials, "
    },
    ft = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciales del usuario, "
    },
    _t = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l'utilisateur, "
    },
    St = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l'utilisateur, "
    },
    yt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "initiales de l'utilisateur, "
    },
    It = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u0906\u0926\u094D\u092F\u093E\u0915\u094D\u0937\u0930, "
    },
    Ct = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "Iniziali dell'utente,"
    },
    Tt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u30E6\u30FC\u30B6\u30FC\u306E\u30A4\u30CB\u30B7\u30E3\u30EB\u3001"
    },
    gt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\uC0AC\uC6A9\uC790 \uC774\uB2C8\uC15C,"
    },
    bt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "gebruiker initialen,"
    },
    Et = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
    },
    Ot = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "iniciais do utilizador, "
    },
    Ft = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u7528\u6237\u7F29\u5199\uFF0C"
    },
    Dt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u7528\u6237\u7F29\u5199\uFF0C"
    },
    wt = {
        "ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1": "\u7528\u6236\u7E2E\u5BEB\uFF0C"
    },
    J = {
        ar: {
            translations: dt,
            isRTL: !0
        },
        de: {
            translations: ht,
            isRTL: !1
        },
        "de-DE": {
            translations: vt,
            isRTL: !1
        },
        en: {
            translations: mt,
            isRTL: !1
        },
        es: {
            translations: ft,
            isRTL: !1
        },
        fr: {
            translations: _t,
            isRTL: !1
        },
        "fr-CA": {
            translations: St,
            isRTL: !1
        },
        "fr-FR": {
            translations: yt,
            isRTL: !1
        },
        "hi-IN": {
            translations: It,
            isRTL: !1
        },
        "it-IT": {
            translations: Ct,
            isRTL: !1
        },
        "ja-JP": {
            translations: Tt,
            isRTL: !1
        },
        "ko-KR": {
            translations: gt,
            isRTL: !1
        },
        nl: {
            translations: bt,
            isRTL: !1
        },
        pt: {
            translations: Et,
            isRTL: !1
        },
        "pt-BR": {
            translations: Ot,
            isRTL: !1
        },
        "zh-CN": {
            translations: Ft,
            isRTL: !1
        },
        "zh-Hans": {
            translations: Dt,
            isRTL: !1
        },
        "zh-Hant": {
            translations: wt,
            isRTL: !1
        }
    };
var Q = d; {
    let e = class e extends Q.Controller.BaseViewController {
        constructor(t, r, n) {
            super(t, r, n, J);
            var h = this.controller;
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
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
            return j.defaultTimeout
        }
    };
    s(e, "ControllerInner");
    let c = e;
    tt = c
}
var tt, et = new Q.Controller.ControllerFactory(tt, G);
var Yt = v.PlaceholderContent,
    qt = v.IteratorPlaceholderContent,
    pt = s(function() {
        var c = I(function(e) {
            var a = e.model,
                t = e.controller,
                r = e.controller.idService,
                n = t.validationService,
                h = t.callContext(),
                l = g,
                ot = b,
                lt = {
                    props: e,
                    validateWidget: s(function(w) {
                        e.validateWidget(e, w)
                    }, "validateWidget")
                },
                S = a,
                B = T,
                ct = C,
                ut = y();
            return f.createElement("div", e.rootNodeProperties, B(M.areBinaryNulls(a.variables.imageIn, i.nullBinary()), !1, this, function() {
                return [f.createElement(X, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        "aria-label": a.getCachedValue(r.getId("7f6YjdTQxkC4Pxv1mZ0Zag.aria-label"), function() {
                            return k.resolve(W.TranslationsService).getMessage("ZjdCYX5OCUuwF54zTTqTTw#Value.-549939496.1", "user initials, ") + i.substr(i.trim(a.variables.nameIn), 0, 1) + (i.index(i.trim(a.variables.nameIn), " ", 0, !1, !1) > -1 ? i.substr(i.trim(a.variables.nameIn), i.index(i.trim(a.variables.nameIn), " ", 0, !1, !1) + 1, 1) : "")
                        }, function() {
                            return a.variables.nameIn
                        }),
                        role: "img"
                    },
                    style: a.getCachedValue(r.getId("7f6YjdTQxkC4Pxv1mZ0Zag.Style"), function() {
                        return "avatar " + (a.variables.sizeIn !== i.nullTextIdentifier() ? " avatar-" + a.variables.sizeIn : "") + " border-radius-" + a.variables.shapeIn + (a.variables.isLightIn ? " background-" + a.variables.colorIn + "-lightest text-" + a.variables.colorIn + "-darker" : " background-" + a.variables.colorIn) + " " + a.variables.extendedClassIn
                    }, function() {
                        return a.variables.sizeIn
                    }, function() {
                        return a.variables.shapeIn
                    }, function() {
                        return a.variables.isLightIn
                    }, function() {
                        return a.variables.colorIn
                    }, function() {
                        return a.variables.extendedClassIn
                    }),
                    visible: !0,
                    _idProps: {
                        service: r,
                        uuid: "0"
                    },
                    _widgetRecordProvider: S,
                    style_dataFetchStatus: m.calculateDataFetchStatus(a.variables._sizeInDataFetchStatus, a.variables._shapeInDataFetchStatus, a.variables._isLightInDataFetchStatus, a.variables._colorInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
                }, f.createElement(Y, {
                    gridProperties: {
                        classes: "OSFillParent"
                    },
                    value: a.getCachedValue(r.getId("+D_RQ3IXnEqBKRHWtTlI+Q.Value"), function() {
                        return i.substr(i.trim(a.variables.nameIn), 0, 1) + (i.index(i.trim(a.variables.nameIn), " ", 0, !1, !1) > -1 ? i.substr(i.trim(a.variables.nameIn), i.index(i.trim(a.variables.nameIn), " ", 0, !1, !1) + 1, 1) : "")
                    }, function() {
                        return a.variables.nameIn
                    }),
                    _idProps: {
                        service: r,
                        uuid: "1"
                    },
                    _widgetRecordProvider: S,
                    value_dataFetchStatus: m.calculateDataFetchStatus(a.variables._nameInDataFetchStatus)
                }))]
            }, function() {
                return [f.createElement(q, {
                    extendedProperties: {
                        title: a.variables.nameIn
                    },
                    imageContent: a.variables.imageIn,
                    style: a.getCachedValue(r.getId("e9VXyGkMykejiuHggtOyPw.Style"), function() {
                        return "avatar" + (a.variables.sizeIn !== i.nullTextIdentifier() ? " avatar-" + a.variables.sizeIn : "") + " border-radius-" + a.variables.shapeIn + " " + a.variables.extendedClassIn
                    }, function() {
                        return a.variables.sizeIn
                    }, function() {
                        return a.variables.shapeIn
                    }, function() {
                        return a.variables.extendedClassIn
                    }),
                    type: 2,
                    _idProps: {
                        service: r,
                        uuid: "2"
                    },
                    _widgetRecordProvider: S,
                    imageContent_dataFetchStatus: m.calculateDataFetchStatus(a.variables._imageInDataFetchStatus),
                    style_dataFetchStatus: m.calculateDataFetchStatus(a.variables._sizeInDataFetchStatus, a.variables._shapeInDataFetchStatus, a.variables._extendedClassInDataFetchStatus)
                })]
            }))
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "UserAvatar",
                    functionKey: "8fc25ace-aad9-4e38-805d-8882d7d9165a",
                    functionOwnerName: "OutSystemsUI",
                    functionOwnerKey: "8be17f2a-431c-4958-b894-c77b988a7271",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Content.UserAvatar",
            modelFactory: K,
            controllerFactory: et
        });
        return c.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"]
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return []
        }, c
    }, "componentFactory"),
    Gt = pt();
var _ = d,
    x = class x extends _.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [].concat(_.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
s(x, "VariablesRecord");
var F = x;
F.init();
var V = class V extends _.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {}
    }
};
s(V, "WidgetsRecord");
var U = V,
    L = class L extends _.Model.VariablelessViewModel {
        static getVariablesRecordConstructor() {
            return F
        }
        static getWidgetsRecordConstructor() {
            return U
        }
        static get hasValidationWidgets() {
            return !1
        }
        setInputs(e) {}
    };
s(L, "Model");
var D = L;
D._hasValidationWidgetsValue = void 0;
var at = new _.Model.ModelFactory(D);
var it = N($());
var nt = {};
var u = d; {
    let e = class e extends u.Controller.BaseViewController {
        constructor(t, r, n) {
            super(t, r, n, nt);
            var h = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(t) {
            this._dataFetchActionNames = t
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(t) {
                var r = this.model,
                    n = this.controller,
                    h = this.idService;
                return u.Logger.startActiveSpan("OnReady", function(l) {
                    return l && (l.setAttribute("code.function", "OnReady"), l.setAttribute("outsystems.function.key", "88c925e4-6545-4e97-926b-a8734bd4079a"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("OnReady"), t = n.callContext(t), u.Flow.executeAsyncFlow(function() {
                            return n._intercomChatInitialize$Action(t)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(t) {
            this.__onReady$Action = t
        }
        get _intercomChatInitialize$Action() {
            return this.hasOwnProperty("__intercomChatInitialize$Action") || (this.__intercomChatInitialize$Action = function(t) {
                var r = this.model,
                    n = this.controller,
                    h = this.idService;
                return u.Logger.startActiveSpan("IntercomChatInitialize", function(l) {
                    return l && (l.setAttribute("code.function", "IntercomChatInitialize"), l.setAttribute("outsystems.function.key", "e55555ba-198f-4f76-b6e0-6eabafddf182"), l.setAttribute("outsystems.function.owner.name", "dashboard"), l.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), l.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                        return n.ensureControllerAlive("IntercomChatInitialize"), t = n.callContext(t), u.Flow.executeAsyncFlow(function() {
                            return r.flush(), p.initalizeIntercom$Action(t)
                        })
                    }, function() {
                        l && l.end()
                    })
                }, 1)
            }), this.__intercomChatInitialize$Action
        }
        set _intercomChatInitialize$Action(t) {
            this.__intercomChatInitialize$Action = t
        }
        onReady$Action(t) {
            var r = this.controller;
            return u.Logger.startActiveSpan("OnReady__proxy", function(n) {
                return n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "88c925e4-6545-4e97-926b-a8734bd4079a"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._onReady$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        intercomChatInitialize$Action(t) {
            var r = this.controller;
            return u.Logger.startActiveSpan("IntercomChatInitialize__proxy", function(n) {
                return n && (n.setAttribute("code.function", "IntercomChatInitialize"), n.setAttribute("outsystems.function.key", "e55555ba-198f-4f76-b6e0-6eabafddf182"), n.setAttribute("outsystems.function.owner.name", "dashboard"), n.setAttribute("outsystems.function.owner.key", "bbed91b8-a741-4694-b61f-b0ef761ba4e2"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), u.Flow.tryFinally(function() {
                    return r.safeExecuteClientAction(r._intercomChatInitialize$Action, t)
                }, function() {
                    n && n.end()
                })
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(t) {
            this._onInitializeEventHandler = t
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(t) {
                var r = this.controller,
                    n = this.model,
                    h = this.idService;
                return r.onReady$Action(t)
            }), this._onReadyEventHandler
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(t) {
            this._onSyncStartEventHandler = t
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(t) {
            this._onSyncCompleteEventHandler = t
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(t) {
            this._onSyncErrorEventHandler = t
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
    s(e, "ControllerInner");
    let c = e;
    rt = c
}
var rt, st = new u.Controller.ControllerFactory(rt, Z);
var Te = v.PlaceholderContent,
    ge = v.IteratorPlaceholderContent,
    Ht = s(function() {
        var c = I(function(e) {
            var a = e.model,
                t = e.controller,
                r = e.controller.idService,
                n = t.validationService,
                h = t.callContext(),
                l = g,
                ot = b,
                lt = {
                    props: e,
                    validateWidget: s(function(w) {
                        e.validateWidget(e, w)
                    }, "validateWidget")
                },
                S = a,
                B = T,
                ct = C,
                ut = y();
            return it.createElement("div", e.rootNodeProperties)
        }, {
            topLevelComponent: !1,
            getAttributes: s(function() {
                return {
                    codeFunction: "CommonBlock",
                    functionKey: "b8480f25-d757-4699-9ccb-25218a4a9283",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "Common.CommonBlock",
            modelFactory: at,
            controllerFactory: st
        });
        return c.getCssDependencies = function() {
            return []
        }, c.getJsDependencies = function() {
            return []
        }, c.getBlocks = function() {
            return []
        }, c
    }, "componentFactory"),
    be = Ht();
export {
    Gt as a, be as b
};