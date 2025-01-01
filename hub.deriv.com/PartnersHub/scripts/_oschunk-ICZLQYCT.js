import {
    a as n
} from "./_oschunk-DM27KROA.js";
import {
    a as c
} from "./_oschunk-YTHBAS5H.js";
import "./_oschunk-NYBAVNIE.js";
import "./_oschunk-KWCHY67Z.js";
import "./_oschunk-4GXKK3IG.js";
import {
    a as d,
    g as t,
    i as r
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import "./_oschunk-7WCOCYFU.js";
import "./_oschunk-3RH6DZJJ.js";
import {
    c as i,
    h as l
} from "./_oschunk-QHO7QY6K.js";
var a = l(d());
var T = r.PlaceholderContent,
    W = r.IteratorPlaceholderContent,
    e = class e extends t.BaseWebScreen {
        static get displayName() {
            return "Developer.redirect"
        }
        static getAttributes() {
            return {
                codeFunction: "redirect",
                functionKey: "9469bb6c-84c9-41e2-8780-7cb9ea8a128b",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return n
        }
        get controllerFactory() {
            return c
        }
        get title() {
            return t.BaseWebScreen.getTranslation("bLtplMmE4kGHgHy56ooSiw#Title", "redirect")
        }
        internalRender() {
            let m = this.model,
                s = this.controller,
                u = this.idService,
                b = s.validationService,
                g = this.widgetsRecordProvider,
                v = s.callContext(),
                P = e.ifWidget,
                p = e.textWidget,
                S = e.asPrimitiveValue,
                f = e.getTranslation,
                H = this;
            return a.createElement("div", this.getRootNodeProperties())
        }
    };
i(e, "View");
var o = e,
    B = o;
export {
    B as
    default
};