import {
    a as x
} from "./_oschunk-X2PPULEG.js";
import {
    a as y
} from "./_oschunk-RFHDGBQY.js";
import {
    b as g,
    d as i,
    i as O,
    l as v,
    m,
    r as c
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as W,
    g as R,
    i as u
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-P7KMMADX.js";
import {
    a as o
} from "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import {
    ia as S
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as d,
    h as w
} from "./_oschunk-QHO7QY6K.js";
var t = w(W());
var b = S,
    M = u.PlaceholderContent,
    L = u.IteratorPlaceholderContent,
    n = class n extends R.BaseWebScreen {
        static get displayName() {
            return "MainFlow.EndPoint"
        }
        static getAttributes() {
            return {
                codeFunction: "EndPoint",
                functionKey: "ffce7a3d-e3cb-4197-b1d0-bce179a2c179",
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
            return []
        }
        get modelFactory() {
            return x
        }
        get controllerFactory() {
            return y
        }
        get title() {
            return "EndPoint"
        }
        internalRender() {
            let P = this.model,
                s = this.controller,
                e = this.idService,
                l = s.validationService,
                r = this.widgetsRecordProvider,
                f = s.callContext(),
                C = n.ifWidget,
                h = n.textWidget,
                E = n.asPrimitiveValue,
                A = n.getTranslation,
                _ = this;
            return t.createElement("div", this.getRootNodeProperties(), t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: center;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "0"
                },
                _widgetRecordProvider: r
            }, t.createElement(O, {
                _validationProps: {
                    validationService: l
                },
                gridProperties: {
                    classes: "ThemeGrid_Width6"
                },
                style: "form card",
                _idProps: {
                    service: e,
                    name: "Form1"
                },
                _widgetRecordProvider: r
            }, t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "2"
                },
                _widgetRecordProvider: r
            }, t.createElement(c, {
                style: "full-width",
                text: ["Change API endpoint"],
                _idProps: {
                    service: e,
                    uuid: "3"
                },
                _widgetRecordProvider: r
            })), t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "4"
                },
                _widgetRecordProvider: r
            }, t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "5"
                },
                _widgetRecordProvider: r
            }, t.createElement(m, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !1,
                targetWidget: "Input_Server",
                _idProps: {
                    service: e,
                    uuid: "6"
                },
                _widgetRecordProvider: r
            }, t.createElement(c, {
                style: "full-width",
                text: ["Server"],
                _idProps: {
                    service: e,
                    uuid: "7"
                },
                _widgetRecordProvider: r
            }))), t.createElement(v, {
                _validationProps: {
                    validationService: l,
                    validationParentId: e.getId("Form1")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 50,
                style: "form-control",
                variable: P.createVariable(b.DataTypes.DataTypes.Text, o.getServer(), function(a) {
                    o.setServer(a)
                }),
                _idProps: {
                    service: e,
                    name: "Input_Server"
                },
                _widgetRecordProvider: r
            })), t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "margin-top: 10px;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "9"
                },
                _widgetRecordProvider: r
            }, t.createElement(m, {
                gridProperties: {
                    classes: "OSFillParent"
                },
                mandatory: !1,
                targetWidget: "Input_OAuthAppId",
                _idProps: {
                    service: e,
                    uuid: "10"
                },
                _widgetRecordProvider: r
            }, t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "11"
                },
                _widgetRecordProvider: r
            }, t.createElement(c, {
                style: "full-width",
                text: ["OAuth App ID"],
                _idProps: {
                    service: e,
                    uuid: "12"
                },
                _widgetRecordProvider: r
            }))), t.createElement(v, {
                _validationProps: {
                    validationService: l,
                    validationParentId: e.getId("Form1")
                },
                enabled: !0,
                gridProperties: {
                    classes: "OSFillParent"
                },
                inputType: 0,
                mandatory: !1,
                maxLength: 50,
                style: "form-control",
                variable: P.createVariable(b.DataTypes.DataTypes.Text, o.getAppId(), function(a) {
                    o.setAppId(a)
                }),
                _idProps: {
                    service: e,
                    name: "Input_OAuthAppId"
                },
                _widgetRecordProvider: r
            })), t.createElement(i, {
                align: 0,
                animate: !1,
                extendedProperties: {
                    style: "text-align: left;"
                },
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "14"
                },
                _widgetRecordProvider: r
            }, t.createElement(g, {
                enabled: !0,
                extendedProperties: {
                    style: "border-color: #cc5a18;"
                },
                isDefault: !0,
                onClick: d(function() {
                    _.validateWidget(e.getId("Form1"));
                    var a = f.clone();
                    s.submitOnClick$Action(s.callContext(a))
                }, "onClick"),
                style: "btn btn-primary ",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "15"
                },
                _widgetRecordProvider: r
            }, "Submit"), t.createElement(g, {
                enabled: !0,
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: d(function() {
                    _.validateWidget(e.getId("Form1"));
                    var a = f.clone();
                    s.setOriginalSettingsOnClick$Action(s.callContext(a))
                }, "onClick"),
                style: "btn",
                visible: !0,
                _idProps: {
                    service: e,
                    uuid: "16"
                },
                _widgetRecordProvider: r
            }, "Reset to original settings")))))
        }
    };
d(n, "View");
var p = n,
    $ = p;
export {
    $ as
    default
};