import {
    a as m
} from "./_oschunk-B2E3PXQZ.js";
import {
    a as u
} from "./_oschunk-PDU455VX.js";
import "./_oschunk-LDM77VCP.js";
import {
    b as l,
    d
} from "./_oschunk-5HXBKFJV.js";
import "./_oschunk-D7X2Q6KG.js";
import "./_oschunk-6WALBPGV.js";
import {
    a as v,
    g as n,
    i as s
} from "./_oschunk-2Q3BG5XZ.js";
import "./_oschunk-FZ6FUHBV.js";
import "./_oschunk-S5DOOZ7G.js";
import "./_oschunk-5FYEKNKX.js";
import "./_oschunk-5KJVGEL7.js";
import {
    c as i,
    h as b
} from "./_oschunk-QHO7QY6K.js";
var r = b(v());
var M = s.PlaceholderContent,
    D = s.IteratorPlaceholderContent,
    e = class e extends n.BaseWebScreen {
        static get displayName() {
            return "OIDCFlow.MainPage"
        }
        static getAttributes() {
            return {
                codeFunction: "MainPage",
                functionKey: "d15c78b9-b78a-4978-a4a0-99d8bd5324a8",
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
            return []
        }
        get modelFactory() {
            return u
        }
        get controllerFactory() {
            return m
        }
        get title() {
            return n.BaseWebScreen.getTranslation("uXhc0Yq3eEmkoJnYvVMkqA#Title", "MainPage")
        }
        internalRender() {
            let f = this.model,
                t = this.controller,
                a = this.idService,
                O = t.validationService,
                c = this.widgetsRecordProvider,
                g = t.callContext(),
                S = e.ifWidget,
                C = e.textWidget,
                p = e.asPrimitiveValue,
                w = e.getTranslation,
                h = this;
            return r.createElement("div", this.getRootNodeProperties(), r.createElement(d, {
                align: 0,
                animate: !1,
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "0"
                },
                _widgetRecordProvider: c
            }, r.createElement(l, {
                enabled: !0,
                isDefault: !1,
                onClick: i(function() {
                    var P = g.clone();
                    t.buttonOnClick$Action(t.callContext(P))
                }, "onClick"),
                style: "btn btn-primary",
                visible: !0,
                _idProps: {
                    service: a,
                    uuid: "1"
                },
                _widgetRecordProvider: c
            }, "Button")))
        }
    };
i(e, "View");
var o = e,
    F = o;
export {
    F as
    default
};