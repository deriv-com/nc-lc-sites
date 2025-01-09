import {
    a as m
} from "./_oschunk-EHY3BF6G.js";
import {
    a as u
} from "./_oschunk-CQ7BGSW7.js";
import {
    b as l,
    d
} from "./_oschunk-M2CKCDBB.js";
import "./_oschunk-FX7ZCYVH.js";
import "./_oschunk-NQZZDANH.js";
import {
    a as p,
    g as a,
    i as o
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-P7KMMADX.js";
import "./_oschunk-KZFTAIEG.js";
import "./_oschunk-UATY3RVV.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as r,
    h as v
} from "./_oschunk-QHO7QY6K.js";
var i = v(p());
var D = o.PlaceholderContent,
    I = o.IteratorPlaceholderContent,
    e = class e extends a.BaseWebScreen {
        static get displayName() {
            return "MainFlow.smileid"
        }
        static getAttributes() {
            return {
                codeFunction: "smileid",
                functionKey: "4071e2af-5d3b-466f-9cf0-50471950863a",
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
            return m
        }
        get controllerFactory() {
            return u
        }
        get title() {
            return "smileid"
        }
        internalRender() {
            let S = this.model,
                t = this.controller,
                n = this.idService,
                C = t.validationService,
                c = this.widgetsRecordProvider,
                f = t.callContext(),
                O = e.ifWidget,
                P = e.textWidget,
                w = e.asPrimitiveValue,
                A = e.getTranslation,
                R = this;
            return i.createElement("div", this.getRootNodeProperties(), i.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: n,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, i.createElement(l, {
                enabled: !0,
                isDefault: !1,
                onClick: r(function() {
                    var g = f.clone();
                    t.onClickButton$Action(t.callContext(g))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: n,
                    name: "smileidTriggerButton"
                },
                _widgetRecordProvider: c
            }, "Button")))
        }
    };
r(e, "View");
var s = e,
    M = s;
export {
    M as
    default
};