import {
    f as w,
    g as x,
    h as f,
    i as p
} from "./_oschunk-O5KC3WOL.js";
import {
    a as B,
    g as m,
    m as P,
    o as H,
    q as C,
    r as O,
    s as L,
    t as R
} from "./_oschunk-NVHFAAS2.js";
import {
    a as I
} from "./_oschunk-AW35UT34.js";
import {
    Ka as F
} from "./_oschunk-WCMQG33O.js";
import {
    J as s,
    X as g,
    c as n,
    f as N,
    w as D
} from "./_oschunk-DFKJJKI4.js";
var r = g,
    y = class y extends r.DataTypes.GenericRecord {
        static attributesToDeclare() {
            return [this.attr("Name", "nameIn", "Name", !0, !1, r.DataTypes.DataTypes.Text, function() {
                return ""
            }, !1), this.attr("_nameInDataFetchStatus", "_nameInDataFetchStatus", "_nameInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("IsSelected", "isSelectedIn", "IsSelected", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", "_isSelectedInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1), this.attr("FromSignupLanguage", "fromSignupLanguageIn", "FromSignupLanguage", !0, !1, r.DataTypes.DataTypes.Boolean, function() {
                return !1
            }, !1), this.attr("_fromSignupLanguageInDataFetchStatus", "_fromSignupLanguageInDataFetchStatus", "_fromSignupLanguageInDataFetchStatus", !0, !1, r.DataTypes.DataTypes.Integer, function() {
                return 1
            }, !1)].concat(r.DataTypes.GenericRecord.attributesToDeclare.call(this))
        }
    };
n(y, "VariablesRecord");
var h = y;
h.init();
var E = class E extends r.Model.BaseWidgetRecordMap {
    static getWidgetsType() {
        return {
            RadioGroup1: r.Model.ValidationWidgetRecord
        }
    }
};
n(E, "WidgetsRecord");
var _ = E,
    b = class b extends r.Model.BaseViewModel {
        static getVariablesRecordConstructor() {
            return h
        }
        static getWidgetsRecordConstructor() {
            return _
        }
        static get hasValidationWidgets() {
            return !0
        }
        setInputs(t) {
            "Name" in t && (this.variables.nameIn = t.Name, "_nameInDataFetchStatus" in t && (this.variables._nameInDataFetchStatus = t._nameInDataFetchStatus)), "IsSelected" in t && (this.variables.isSelectedIn = t.IsSelected, "_isSelectedInDataFetchStatus" in t && (this.variables._isSelectedInDataFetchStatus = t._isSelectedInDataFetchStatus)), "FromSignupLanguage" in t && (this.variables.fromSignupLanguageIn = t.FromSignupLanguage, "_fromSignupLanguageInDataFetchStatus" in t && (this.variables._fromSignupLanguageInDataFetchStatus = t._fromSignupLanguageInDataFetchStatus))
        }
    };
n(b, "Model");
var S = b;
S._hasValidationWidgetsValue = void 0;
var T = new r.Model.ModelFactory(S);
var l = N(B());
var V = {};
var W = g; {
    let t = class t extends W.Controller.BaseViewController {
        constructor(e, i, v) {
            super(e, i, v, V);
            var d = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get setLanguage$Action() {
            return this.hasOwnProperty("_setLanguage$Action") || (this._setLanguage$Action = function() {
                return Promise.resolve()
            }), this._setLanguage$Action
        }
        set setLanguage$Action(e) {
            this._setLanguage$Action = e
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
        get onSyncStartEventHandler() {
            return this.hasOwnProperty("_onSyncStartEventHandler") || (this._onSyncStartEventHandler = null), this._onSyncStartEventHandler
        }
        set onSyncStartEventHandler(e) {
            this._onSyncStartEventHandler = e
        }
        get onSyncCompleteEventHandler() {
            return this.hasOwnProperty("_onSyncCompleteEventHandler") || (this._onSyncCompleteEventHandler = null), this._onSyncCompleteEventHandler
        }
        set onSyncCompleteEventHandler(e) {
            this._onSyncCompleteEventHandler = e
        }
        get onSyncErrorEventHandler() {
            return this.hasOwnProperty("_onSyncErrorEventHandler") || (this._onSyncErrorEventHandler = null), this._onSyncErrorEventHandler
        }
        set onSyncErrorEventHandler(e) {
            this._onSyncErrorEventHandler = e
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
            return F.defaultTimeout
        }
    };
    n(t, "ControllerInner");
    let o = t;
    M = o
}
var M, A = new W.Controller.ControllerFactory(M, I);
var ve = m.PlaceholderContent,
    me = m.IteratorPlaceholderContent,
    $ = n(function() {
        var o = H(function(t) {
            var a = t.model,
                e = t.controller,
                i = t.controller.idService,
                v = e.validationService,
                d = e.callContext(),
                z = L,
                k = R,
                G = {
                    props: t,
                    validateWidget: n(function(c) {
                        t.validateWidget(t, c)
                    }, "validateWidget")
                },
                u = a,
                U = O,
                K = C,
                j = P();
            return l.createElement("div", t.rootNodeProperties, l.createElement(f, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: n(function() {
                        var c = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                        e.setLanguage$Action(e.callContext(c))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "align-items: center; background: var(--semantic-color-monochrome-surface-normal-lowest, rgba(0, 0, 0, 0.04)); border-radius: 8px; display: flex; justify-content: space-between; padding: 16px;"
                },
                style: a.getCachedValue(i.getId("LanguageListItemContainer.Style"), function() {
                    return a.variables.isSelectedIn ? "language-item-selected language-item" : "language-item cursor-pointer"
                }, function() {
                    return a.variables.isSelectedIn
                }),
                visible: !a.variables.fromSignupLanguageIn,
                _idProps: {
                    service: i,
                    name: "LanguageListItemContainer"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: s.calculateDataFetchStatus(a.variables._isSelectedInDataFetchStatus),
                visible_dataFetchStatus: s.calculateDataFetchStatus(a.variables._fromSignupLanguageInDataFetchStatus)
            }, l.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: a.variables.nameIn,
                _idProps: {
                    service: i,
                    uuid: "1"
                },
                _widgetRecordProvider: u,
                value_dataFetchStatus: s.calculateDataFetchStatus(a.variables._nameInDataFetchStatus)
            }), l.createElement(w, {
                _validationProps: {
                    validationService: v
                },
                enabled: !0,
                gridProperties: {
                    width: "auto"
                },
                mandatory: !1,
                style: "radio-group",
                variable: a.createVariable(D.DataTypes.Boolean, a.variables.isSelectedIn, function(c) {
                    a.variables.isSelectedIn = c
                }),
                _idProps: {
                    service: i,
                    name: "RadioGroup1"
                },
                _widgetRecordProvider: u,
                variable_dataFetchStatus: s.calculateDataFetchStatus(a.variables._isSelectedInDataFetchStatus)
            }, l.createElement(x, {
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                style: "radio-button",
                value: a.variables.isSelectedIn,
                visible: !0,
                _idProps: {
                    service: i,
                    name: "RadioButton1"
                },
                _widgetRecordProvider: u,
                value_dataFetchStatus: s.calculateDataFetchStatus(a.variables._isSelectedInDataFetchStatus)
            }))), l.createElement(f, {
                align: 0,
                animate: !0,
                extendedEvents: {
                    onClick: n(function() {
                        var c = typeof d != "undefined" && d !== null ? d.clone() : e.callContext().clone();
                        e.setLanguage$Action(e.callContext(c))
                    }, "onClick")
                },
                extendedProperties: {
                    style: "align-items: flex-start; align-self: stretch; display: flex; flex-direction: column; padding: 16px;"
                },
                style: a.getCachedValue(i.getId("SignupLanguageListItemContainer.Style"), function() {
                    return a.variables.isSelectedIn ? "signup-language-enabled" : "cursor-pointer"
                }, function() {
                    return a.variables.isSelectedIn
                }),
                visible: a.variables.fromSignupLanguageIn,
                _idProps: {
                    service: i,
                    name: "SignupLanguageListItemContainer"
                },
                _widgetRecordProvider: u,
                style_dataFetchStatus: s.calculateDataFetchStatus(a.variables._isSelectedInDataFetchStatus),
                visible_dataFetchStatus: s.calculateDataFetchStatus(a.variables._fromSignupLanguageInDataFetchStatus)
            }, l.createElement(p, {
                extendedProperties: {
                    style: "font-size: 16px;"
                },
                value: a.variables.nameIn,
                _idProps: {
                    service: i,
                    uuid: "5"
                },
                _widgetRecordProvider: u,
                value_dataFetchStatus: s.calculateDataFetchStatus(a.variables._nameInDataFetchStatus)
            })))
        }, {
            topLevelComponent: !1,
            getAttributes: n(function() {
                return {
                    codeFunction: "LanguageList",
                    functionKey: "88a11605-b7c9-4f81-a3e7-0637c4f025d8",
                    functionOwnerName: "dashboard",
                    functionOwnerKey: "bbed91b8-a741-4694-b61f-b0ef761ba4e2",
                    screen: ""
                }
            }, "getAttributes"),
            displayName: "UserProfile.LanguageList",
            modelFactory: T,
            controllerFactory: A
        });
        return o.getCssDependencies = function() {
            return ["css/dashboard.UserProfile.LanguageList.css", "css/OutSystemsReactWidgets.css"]
        }, o.getJsDependencies = function() {
            return []
        }, o.getBlocks = function() {
            return []
        }, o
    }, "componentFactory"),
    fe = $();
export {
    fe as a
};