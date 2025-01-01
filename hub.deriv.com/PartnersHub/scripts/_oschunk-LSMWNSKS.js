import {
    a as G
} from "./_oschunk-XNSKYLKO.js";
import {
    a as ue,
    b as de,
    c as me
} from "./_oschunk-2J32G2OO.js";
import {
    a as fe
} from "./_oschunk-NYQMBYVL.js";
import "./_oschunk-QTRZEJSW.js";
import "./_oschunk-Q5BYWPWW.js";
import "./_oschunk-WGHHTA53.js";
import "./_oschunk-B5ZMBNKS.js";
import {
    a as V
} from "./_oschunk-KURWLJI2.js";
import "./_oschunk-ROAU47YI.js";
import "./_oschunk-2MST7FR4.js";
import {
    a as x
} from "./_oschunk-ZL2HTVZN.js";
import "./_oschunk-CLRE6NFZ.js";
import "./_oschunk-P2MIYWR2.js";
import "./_oschunk-N6CDNE7S.js";
import "./_oschunk-MKEU6QPR.js";
import "./_oschunk-JNIYO5MF.js";
import "./_oschunk-I6UUKQBK.js";
import "./_oschunk-C75U7DRJ.js";
import "./_oschunk-JHXZLUP2.js";
import "./_oschunk-VDU6C3OQ.js";
import "./_oschunk-TWAMG3Q4.js";
import "./_oschunk-LDY7XNSJ.js";
import {
    a as g,
    b as M,
    d as p,
    n as le,
    u as S
} from "./_oschunk-LWMGEL7F.js";
import "./_oschunk-KWCHY67Z.js";
import {
    a as ce
} from "./_oschunk-4GXKK3IG.js";
import {
    a as $,
    g as E,
    i as _
} from "./_oschunk-WZHUAZJP.js";
import "./_oschunk-5VU7DWFQ.js";
import "./_oschunk-RILYVCVH.js";
import {
    a as N,
    o as D,
    q as se
} from "./_oschunk-BDI2RWOA.js";
import "./_oschunk-P3RPGEI5.js";
import {
    Ue as oe,
    Ve as H,
    a as re,
    yf as ae
} from "./_oschunk-7WCOCYFU.js";
import {
    ia as C
} from "./_oschunk-3RH6DZJJ.js";
import {
    c as s,
    h as R
} from "./_oschunk-QHO7QY6K.js";
var O = R($());
var h = R($());
var ye = {};

function L(m, r, l, e) {}
s(L, "default");

function F(m, r, l) {
    let a = class a {
        constructor(o, d) {
            this.totalSeconds = o * 60, this.element = d, this.interval = null, this.isExpired = !1
        }
        start() {
            this.updateDisplay(), this.interval = setInterval(() => {
                if (this.totalSeconds <= 0 && !this.isExpired) {
                    this.handleExpiration();
                    return
                }
                this.isExpired || (this.totalSeconds--, this.updateDisplay())
            }, 1e3)
        }
        updateDisplay() {
            let o = Math.floor(this.totalSeconds / 60),
                d = this.totalSeconds % 60,
                v = `${String(o).padStart(2,"0")}:${String(d).padStart(2,"0")}`;
            this.element.textContent = v
        }
        handleExpiration() {
            this.isExpired = !0, this.element.classList.add("timer-expired"), this.playExpirationSound()
        }
        playExpirationSound() {
            console.log("expired")
        }
    };
    s(a, "CountdownTimer");
    let e = a,
        i = document.querySelector(".verify-email-timer");
    new e(10, i).start()
}
s(F, "default");

function k(m, r, l) {
    let e = document.querySelector(".verify-email-timer");
    console.log("===>", e)
}
s(k, "default");
var f = C; {
    let r = class r extends f.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t, ye);
            var a = this.controller;
            this.clientActionProxies = {}, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !0
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onToggleEmailChangeModal$Action() {
            return this.hasOwnProperty("__onToggleEmailChangeModal$Action") || (this.__onToggleEmailChangeModal$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("OnToggleEmailChangeModal", function(n) {
                    n && (n.setAttribute("code.function", "OnToggleEmailChangeModal"), n.setAttribute("outsystems.function.key", "1b3f41a0-dfd5-47ae-bb77-6668b71b9820"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnToggleEmailChangeModal"), e = t.callContext(e), i.variables.emailChangeModalVar.isModalOpenAttr = !i.variables.emailChangeModalVar.isModalOpenAttr
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onToggleEmailChangeModal$Action
        }
        set _onToggleEmailChangeModal$Action(e) {
            this.__onToggleEmailChangeModal$Action = e
        }
        get _buttonOnClick2$Action() {
            return this.hasOwnProperty("__buttonOnClick2$Action") || (this.__buttonOnClick2$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("ButtonOnClick2", function(n) {
                    n && (n.setAttribute("code.function", "ButtonOnClick2"), n.setAttribute("outsystems.function.key", "35f075b3-53ec-48fc-b97f-673d42c55c96"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ButtonOnClick2"), e = t.callContext(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__buttonOnClick2$Action
        }
        set _buttonOnClick2$Action(e) {
            this.__buttonOnClick2$Action = e
        }
        get _verifyEmailCountdown$Action() {
            return this.hasOwnProperty("__verifyEmailCountdown$Action") || (this.__verifyEmailCountdown$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("VerifyEmailCountdown", function(n) {
                    n && (n.setAttribute("code.function", "VerifyEmailCountdown"), n.setAttribute("outsystems.function.key", "89724b25-e06e-4eb2-8ec5-3c7fa595fea4"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("VerifyEmailCountdown"), e = t.callContext(e), f.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "1a0506ec-1c52-4767-8d80-35b6e0704804"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(L, "JavaScript1", "VerifyEmailCountdown", {
                                    CanStartTimer: f.DataConversion.JSNodeParamConverter.to(i.variables.currentStepVar === 1, f.DataTypes.DataTypes.Boolean)
                                }, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__verifyEmailCountdown$Action
        }
        set _verifyEmailCountdown$Action(e) {
            this.__verifyEmailCountdown$Action = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "afae3e56-fcd5-4ecd-86fb-546e82166cfb"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), f.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "b67cc9db-0aed-472a-a0d7-362e8bb40fc1"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(F, "JavaScript1", "OnReady", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _continueEmailChange$Action() {
            return this.hasOwnProperty("__continueEmailChange$Action") || (this.__continueEmailChange$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return f.Logger.startActiveSpan("ContinueEmailChange", function(n) {
                    n && (n.setAttribute("code.function", "ContinueEmailChange"), n.setAttribute("outsystems.function.key", "c4da5f1a-dc2c-4860-95d7-dd4c85c6c3ea"), n.setAttribute("outsystems.function.owner.name", "PartnersHub"), n.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("ContinueEmailChange"), e = t.callContext(e), i.variables.currentStepVar = 1, f.Logger.startActiveSpan("JavaScript1", function(o) {
                            o && (o.setAttribute("code.function", "JavaScript1"), o.setAttribute("outsystems.function.key", "17c4d6e4-6b34-43a2-9ca8-7da8a0f27e4a"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(k, "JavaScript1", "ContinueEmailChange", null, function(d) {}, {}, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__continueEmailChange$Action
        }
        set _continueEmailChange$Action(e) {
            this.__continueEmailChange$Action = e
        }
        get _setEmailChangeModalId$Action() {
            return this.hasOwnProperty("__setEmailChangeModalId$Action") || (this.__setEmailChangeModalId$Action = function(e, i) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("SetEmailChangeModalId", function(o) {
                    o && (o.setAttribute("code.function", "SetEmailChangeModalId"), o.setAttribute("outsystems.function.key", "d4d43e03-5171-4738-af40-2f9a2f6674cf"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("SetEmailChangeModalId"), i = a.callContext(i);
                        var d = new f.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.PhNavigation.SecurityOptions.SetEmailChangeModalId$vars")));
                        d.value.modalIdInLocal = e, t.variables.emailChangeModalVar.modalIdAttr = d.value.modalIdInLocal
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__setEmailChangeModalId$Action
        }
        set _setEmailChangeModalId$Action(e) {
            this.__setEmailChangeModalId$Action = e
        }
        get _toggleModal$Action() {
            return this.hasOwnProperty("__toggleModal$Action") || (this.__toggleModal$Action = function(e, i) {
                var t = this.model,
                    a = this.controller,
                    n = this.idService;
                return f.Logger.startActiveSpan("ToggleModal", function(o) {
                    o && (o.setAttribute("code.function", "ToggleModal"), o.setAttribute("outsystems.function.key", "ffc0602a-6e50-4da9-a1ab-077a78458da6"), o.setAttribute("outsystems.function.owner.name", "PartnersHub"), o.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), o.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        a.ensureControllerAlive("ToggleModal"), i = a.callContext(i);
                        var d = new f.DataTypes.VariableHolder(new(a.constructor.getVariableGroupType("PartnersHub.PhNavigation.SecurityOptions.ToggleModal$vars")));
                        d.value.modalInLocal = e.clone();
                        var v = new f.DataTypes.VariableHolder,
                            y = new f.DataTypes.VariableHolder;
                        d.value.modalInLocal.isModalOpenAttr ? v.value = D.sidebarClose$Action(d.value.modalInLocal.modalIdAttr, i) : y.value = D.sidebarOpen$Action(d.value.modalInLocal.modalIdAttr, i)
                    } finally {
                        o && o.end()
                    }
                }, 1)
            }), this.__toggleModal$Action
        }
        set _toggleModal$Action(e) {
            this.__toggleModal$Action = e
        }
        onToggleEmailChangeModal$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnToggleEmailChangeModal__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnToggleEmailChangeModal"), t.setAttribute("outsystems.function.key", "1b3f41a0-dfd5-47ae-bb77-6668b71b9820"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onToggleEmailChangeModal$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        buttonOnClick2$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("ButtonOnClick2__proxy", function(t) {
                t && (t.setAttribute("code.function", "ButtonOnClick2"), t.setAttribute("outsystems.function.key", "35f075b3-53ec-48fc-b97f-673d42c55c96"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._buttonOnClick2$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        verifyEmailCountdown$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("VerifyEmailCountdown__proxy", function(t) {
                t && (t.setAttribute("code.function", "VerifyEmailCountdown"), t.setAttribute("outsystems.function.key", "89724b25-e06e-4eb2-8ec5-3c7fa595fea4"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._verifyEmailCountdown$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onReady$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "afae3e56-fcd5-4ecd-86fb-546e82166cfb"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        continueEmailChange$Action(e) {
            var i = this.controller;
            return f.Logger.startActiveSpan("ContinueEmailChange__proxy", function(t) {
                t && (t.setAttribute("code.function", "ContinueEmailChange"), t.setAttribute("outsystems.function.key", "c4da5f1a-dc2c-4860-95d7-dd4c85c6c3ea"), t.setAttribute("outsystems.function.owner.name", "PartnersHub"), t.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._continueEmailChange$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        setEmailChangeModalId$Action(e, i) {
            var t = this.controller;
            return f.Logger.startActiveSpan("SetEmailChangeModalId__proxy", function(a) {
                a && (a.setAttribute("code.function", "SetEmailChangeModalId"), a.setAttribute("outsystems.function.key", "d4d43e03-5171-4738-af40-2f9a2f6674cf"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._setEmailChangeModalId$Action, i, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        toggleModal$Action(e, i) {
            var t = this.controller;
            return f.Logger.startActiveSpan("ToggleModal__proxy", function(a) {
                a && (a.setAttribute("code.function", "ToggleModal"), a.setAttribute("outsystems.function.key", "ffc0602a-6e50-4da9-a1ab-077a78458da6"), a.setAttribute("outsystems.function.owner.name", "PartnersHub"), a.setAttribute("outsystems.function.owner.key", "9587f849-ee05-428a-81d2-3be0a1b1dccc"), a.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return t.safeExecuteClientAction(t._toggleModal$Action, i, e)
                } finally {
                    a && a.end()
                }
            }, 0)
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = null), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return se.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let m = r;
    I = m, I.registerVariableGroupType("PartnersHub.PhNavigation.SecurityOptions.SetEmailChangeModalId$vars", [{
        name: "ModalId",
        attrName: "modalIdInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }]), I.registerVariableGroupType("PartnersHub.PhNavigation.SecurityOptions.ToggleModal$vars", [{
        name: "Modal",
        attrName: "modalInLocal",
        mandatory: !0,
        dataType: f.DataTypes.DataTypes.Record,
        defaultValue: s(function() {
            return new H
        }, "defaultValue"),
        complexType: H
    }])
}
var I, ve = new f.Controller.ControllerFactory(I, ce);
var Se = C,
    J = class J extends Se.Controller.BaseModuleController {
        constructor(r, l, e, i) {
            super(r, l, e, i)
        }
        get clientActionProxies() {
            return this.hasOwnProperty("_clientActionProxies") || (this._clientActionProxies = {}), this._clientActionProxies
        }
        set clientActionProxies(r) {
            this._clientActionProxies = r
        }
        get roles() {
            return this.hasOwnProperty("_roles") || (this._roles = {}), this._roles
        }
        set roles(r) {
            this._roles = r
        }
        get defaultTimeout() {
            return this.hasOwnProperty("_defaultTimeout") || (this._defaultTimeout = 10), this._defaultTimeout
        }
        set defaultTimeout(r) {
            this._defaultTimeout = r
        }
        getDefaultTimeout() {
            return this.defaultTimeout
        }
    };
s(J, "Controller");
var B = J,
    Ee = new B;
var Ce = Ee;
var A = R($());
var Te = C,
    z = class z extends Te.LanguageResources.BaseMessagesProvider {
        constructor(r) {
            super(r), this.setMessage("Validation.Mandatory", "Required field!"), this.setMessage("Validation.Integer", "Integer expected!"), this.setMessage("Validation.LongInteger", "Integer expected!"), this.setMessage("Validation.Decimal", "Decimal expected!"), this.setMessage("Validation.Currency", "Currency expected!"), this.setMessage("Validation.Date", "Date expected!"), this.setMessage("Validation.Time", "Time expected!"), this.setMessage("Validation.DateTime", "DateTime expected!"), this.setMessage("Validation.Text", "Text expected!"), this.setMessage("Validation.PhoneNumber", "Phone Number expected!"), this.setMessage("Validation.Email", "Email expected!"), this.setMessage("UpgradeComplete", "Your application has been updated to the latest version."), this.setMessage("AppInitError.Generic", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.Resources", "An error occurred while trying to update the app. If you want to retry the update, restart the app."), this.setMessage("AppInitError.DataModel", "An error occurred while trying to update the app. If you want to retry the update, restart the app. If the problem persists you can reinstall, but all local data will be lost."), this.setMessage("UpgradeRequired", "Your application needs to be updated. Tap here to update."), this.setMessage("UpgradeRequiredDataLoss", "Your application needs to be updated. Unsaved data will be lost. Tap here to update.")
        }
    };
s(z, "MessagesProvider");
var W = z,
    ge = new W;

function U(m, r, l, e) {
    var i = m.ExpirationDateTime,
        t = setInterval(function() {
            var a = new Date().getTime(),
                n = i - a,
                o = Math.floor(n / (1e3 * 60 * 60 * 24)),
                d = Math.floor(n % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
                v = Math.floor(n % (1e3 * 60 * 60) / (1e3 * 60)),
                y = Math.floor(n % (1e3 * 60) / 1e3);
            document.getElementById(document.getElementsByClassName(m.DayGuid)[0].id).innerHTML = "D:" + o, document.getElementById(document.getElementsByClassName(m.HourGuid)[0].id).innerHTML = " H:" + d, document.getElementById(document.getElementsByClassName(m.MinuteGuid)[0].id).innerHTML = " M:" + v, document.getElementById(document.getElementsByClassName(m.SecondGuid)[0].id).innerHTML = " S:" + y, n <= 0 && (document.getElementById(document.getElementsByClassName(m.DayGuid)[0].id).innerHTML = "", document.getElementById(document.getElementsByClassName(m.HourGuid)[0].id).innerHTML = "", document.getElementById(document.getElementsByClassName(m.MinuteGuid)[0].id).innerHTML = "", document.getElementById(document.getElementsByClassName(m.SecondGuid)[0].id).innerHTML = "", document.getElementById(document.getElementsByClassName(m.ExpiredGuid)[0].id).innerHTML = "EXPIRED", r.RaiseCountdownFinished(), clearInterval(t))
        }, 1e3)
}
s(U, "default");

function q(m, r, l, e) {
    function i() {
        function t(a) {
            var n = (Math.random().toString(16) + "000000000").substr(2, 8);
            return a ? "-" + n.substr(0, 4) + "-" + n.substr(4, 4) : n
        }
        return s(t, "_p8"), t() + t(!0) + t(!0) + t()
    }
    s(i, "createGuid"), m.DayClassGuid = i(), m.HoursClassGuid = i(), m.MinutesClassGuid = i(), m.SecondsClassGuid = i(), m.ExpiredClassGuid = i()
}
s(q, "default");
var c = C; {
    let r = class r extends c.Controller.BaseViewController {
        constructor(e, i, t) {
            super(e, i, t);
            var a = this.controller;
            this.clientActionProxies = {
                raiseCountdownFinished$Action: s(function() {
                    return a.executeActionInsideJSNode(a._raiseCountdownFinished$Action.bind(a), a.callContext(), function(n) {
                        return {}
                    }, function() {}, "RaiseCountdownFinished")
                }, "raiseCountdownFinished$Action")
            }, this.dataFetchDependenciesOriginal = {}, this.dataFetchDependentsGraph = {}, this.shouldSendClientVarsToDataSources = !1
        }
        get dataFetchActionNames() {
            return this.hasOwnProperty("_dataFetchActionNames") || (this._dataFetchActionNames = []), this._dataFetchActionNames
        }
        set dataFetchActionNames(e) {
            this._dataFetchActionNames = e
        }
        get _onReady$Action() {
            return this.hasOwnProperty("__onReady$Action") || (this.__onReady$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("OnReady", function(n) {
                    n && (n.setAttribute("code.function", "OnReady"), n.setAttribute("outsystems.function.key", "0cb87786-ad38-433f-a0ad-c5bc693d4bd3"), n.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), n.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnReady"), e = t.callContext(e), i.variables.expirationDateTimeIn.equals(c.BuiltinFunctions.nullDate()) || c.Logger.startActiveSpan("CountDownJS", function(o) {
                            o && (o.setAttribute("code.function", "CountDownJS"), o.setAttribute("outsystems.function.key", "0dde00c4-0dee-4236-96fc-3d99974f85c6"), o.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), o.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), o.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(U, "CountDownJS", "OnReady", {
                                    SecondGuid: c.DataConversion.JSNodeParamConverter.to(i.variables.secondsClassGuidVar, c.DataTypes.DataTypes.Text),
                                    HourGuid: c.DataConversion.JSNodeParamConverter.to(i.variables.hoursClassGuidVar, c.DataTypes.DataTypes.Text),
                                    DayGuid: c.DataConversion.JSNodeParamConverter.to(i.variables.dayClassGuidVar, c.DataTypes.DataTypes.Text),
                                    ExpiredGuid: c.DataConversion.JSNodeParamConverter.to(i.variables.expiredClassGuidVar, c.DataTypes.DataTypes.Text),
                                    MinuteGuid: c.DataConversion.JSNodeParamConverter.to(i.variables.minutesClassGuidVar, c.DataTypes.DataTypes.Text),
                                    ExpirationDateTime: c.DataConversion.JSNodeParamConverter.to(i.variables.expirationDateTimeIn, c.DataTypes.DataTypes.DateTime)
                                }, function(d) {}, {
                                    RaiseCountdownFinished: t.clientActionProxies.raiseCountdownFinished$Action
                                }, {})
                            } finally {
                                o && o.end()
                            }
                        }, 1)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onReady$Action
        }
        set _onReady$Action(e) {
            this.__onReady$Action = e
        }
        get _onParametersChanged$Action() {
            return this.hasOwnProperty("__onParametersChanged$Action") || (this.__onParametersChanged$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("OnParametersChanged", function(n) {
                    n && (n.setAttribute("code.function", "OnParametersChanged"), n.setAttribute("outsystems.function.key", "86b3855b-e804-4a96-8e33-15889c00cfc0"), n.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), n.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnParametersChanged"), e = t.callContext(e), t._onInitialize$Action(e), t._onReady$Action(e)
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onParametersChanged$Action
        }
        set _onParametersChanged$Action(e) {
            this.__onParametersChanged$Action = e
        }
        get _raiseCountdownFinished$Action() {
            return this.hasOwnProperty("__raiseCountdownFinished$Action") || (this.__raiseCountdownFinished$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("RaiseCountdownFinished", function(n) {
                    return n && (n.setAttribute("code.function", "RaiseCountdownFinished"), n.setAttribute("outsystems.function.key", "97172fe7-4860-4cb4-b2ee-46cdc580b2c5"), n.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), n.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                        return t.ensureControllerAlive("RaiseCountdownFinished"), e = t.callContext(e), c.Flow.executeAsyncFlow(function() {
                            return t.countdownFinished$Action(e)
                        })
                    }, function() {
                        n && n.end()
                    })
                }, 1)
            }), this.__raiseCountdownFinished$Action
        }
        set _raiseCountdownFinished$Action(e) {
            this.__raiseCountdownFinished$Action = e
        }
        get _onInitialize$Action() {
            return this.hasOwnProperty("__onInitialize$Action") || (this.__onInitialize$Action = function(e) {
                var i = this.model,
                    t = this.controller,
                    a = this.idService;
                return c.Logger.startActiveSpan("OnInitialize", function(n) {
                    n && (n.setAttribute("code.function", "OnInitialize"), n.setAttribute("outsystems.function.key", "e2e37ee9-fca7-48aa-a28b-07c792d09ca1"), n.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), n.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), n.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                    try {
                        t.ensureControllerAlive("OnInitialize"), e = t.callContext(e);
                        var o = new c.DataTypes.VariableHolder;
                        o.value = c.Logger.startActiveSpan("GenerateHtmlGuids", function(d) {
                            d && (d.setAttribute("code.function", "GenerateHtmlGuids"), d.setAttribute("outsystems.function.key", "f939b4b4-9a8b-4062-8f2e-1c7be47274ef"), d.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), d.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), d.setAttribute("outsystems.function.type", "JAVASCRIPT"));
                            try {
                                return t.safeExecuteJSNode(q, "GenerateHtmlGuids", "OnInitialize", {
                                    DayClassGuid: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text),
                                    HoursClassGuid: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text),
                                    MinutesClassGuid: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text),
                                    SecondsClassGuid: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text),
                                    ExpiredClassGuid: c.DataConversion.JSNodeParamConverter.to("", c.DataTypes.DataTypes.Text)
                                }, function(v) {
                                    var y = new(t.constructor.getVariableGroupType("SimpleCountdownTimer.SimpleCountdownTimer.SimpleCountdownTimer.OnInitialize$generateHtmlGuidsJSResult"));
                                    return y.dayClassGuidOut = c.DataConversion.JSNodeParamConverter.from(v.DayClassGuid, c.DataTypes.DataTypes.Text), y.hoursClassGuidOut = c.DataConversion.JSNodeParamConverter.from(v.HoursClassGuid, c.DataTypes.DataTypes.Text), y.minutesClassGuidOut = c.DataConversion.JSNodeParamConverter.from(v.MinutesClassGuid, c.DataTypes.DataTypes.Text), y.secondsClassGuidOut = c.DataConversion.JSNodeParamConverter.from(v.SecondsClassGuid, c.DataTypes.DataTypes.Text), y.expiredClassGuidOut = c.DataConversion.JSNodeParamConverter.from(v.ExpiredClassGuid, c.DataTypes.DataTypes.Text), y
                                }, {}, {})
                            } finally {
                                d && d.end()
                            }
                        }, 1), i.variables.dayClassGuidVar = o.value.dayClassGuidOut, i.variables.hoursClassGuidVar = o.value.hoursClassGuidOut, i.variables.minutesClassGuidVar = o.value.minutesClassGuidOut, i.variables.secondsClassGuidVar = o.value.secondsClassGuidOut, i.variables.expiredClassGuidVar = o.value.expiredClassGuidOut
                    } finally {
                        n && n.end()
                    }
                }, 1)
            }), this.__onInitialize$Action
        }
        set _onInitialize$Action(e) {
            this.__onInitialize$Action = e
        }
        onReady$Action(e) {
            var i = this.controller;
            return c.Logger.startActiveSpan("OnReady__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnReady"), t.setAttribute("outsystems.function.key", "0cb87786-ad38-433f-a0ad-c5bc693d4bd3"), t.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), t.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onReady$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        onParametersChanged$Action(e) {
            var i = this.controller;
            return c.Logger.startActiveSpan("OnParametersChanged__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnParametersChanged"), t.setAttribute("outsystems.function.key", "86b3855b-e804-4a96-8e33-15889c00cfc0"), t.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), t.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onParametersChanged$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        raiseCountdownFinished$Action(e) {
            var i = this.controller;
            return c.Logger.startActiveSpan("RaiseCountdownFinished__proxy", function(t) {
                return t && (t.setAttribute("code.function", "RaiseCountdownFinished"), t.setAttribute("outsystems.function.key", "97172fe7-4860-4cb4-b2ee-46cdc580b2c5"), t.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), t.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION")), c.Flow.tryFinally(function() {
                    return i.safeExecuteClientAction(i._raiseCountdownFinished$Action, e)
                }, function() {
                    t && t.end()
                })
            }, 0)
        }
        onInitialize$Action(e) {
            var i = this.controller;
            return c.Logger.startActiveSpan("OnInitialize__proxy", function(t) {
                t && (t.setAttribute("code.function", "OnInitialize"), t.setAttribute("outsystems.function.key", "e2e37ee9-fca7-48aa-a28b-07c792d09ca1"), t.setAttribute("outsystems.function.owner.name", "SimpleCountdownTimer"), t.setAttribute("outsystems.function.owner.key", "7c686586-be98-4be4-b619-24e0e0505e97"), t.setAttribute("outsystems.function.type", "CLIENT_SCREEN_ACTION"));
                try {
                    return i.safeExecuteClientAction(i._onInitialize$Action, e)
                } finally {
                    t && t.end()
                }
            }, 0)
        }
        get countdownFinished$Action() {
            return this.hasOwnProperty("_countdownFinished$Action") || (this._countdownFinished$Action = function() {
                return Promise.resolve()
            }), this._countdownFinished$Action
        }
        set countdownFinished$Action(e) {
            this._countdownFinished$Action = e
        }
        get onInitializeEventHandler() {
            return this.hasOwnProperty("_onInitializeEventHandler") || (this._onInitializeEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onInitialize$Action(e)
            }), this._onInitializeEventHandler
        }
        set onInitializeEventHandler(e) {
            this._onInitializeEventHandler = e
        }
        get onReadyEventHandler() {
            return this.hasOwnProperty("_onReadyEventHandler") || (this._onReadyEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onReady$Action(e)
            }), this._onReadyEventHandler
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
            return this.hasOwnProperty("_onParametersChangedEventHandler") || (this._onParametersChangedEventHandler = function(e) {
                var i = this.controller,
                    t = this.model,
                    a = this.idService;
                return i.onParametersChanged$Action(e)
            }), this._onParametersChangedEventHandler
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
            return Ce.defaultTimeout
        }
    };
    s(r, "ControllerInner");
    let m = r;
    K = m, K.registerVariableGroupType("SimpleCountdownTimer.SimpleCountdownTimer.SimpleCountdownTimer.OnInitialize$generateHtmlGuidsJSResult", [{
        name: "DayClassGuid",
        attrName: "dayClassGuidOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "HoursClassGuid",
        attrName: "hoursClassGuidOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "MinutesClassGuid",
        attrName: "minutesClassGuidOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "SecondsClassGuid",
        attrName: "secondsClassGuidOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }, {
        name: "ExpiredClassGuid",
        attrName: "expiredClassGuidOut",
        mandatory: !0,
        dataType: c.DataTypes.DataTypes.Text,
        defaultValue: s(function() {
            return ""
        }, "defaultValue")
    }])
}
var K, be = new c.Controller.ControllerFactory(K, ge);
var b = C,
    dt = _.PlaceholderContent,
    mt = _.IteratorPlaceholderContent,
    w = class w extends E.BaseWebBlock {
        static get displayName() {
            return "SimpleCountdownTimer.SimpleCountdownTimer"
        }
        static getAttributes() {
            return {
                codeFunction: "SimpleCountdownTimer",
                functionKey: "973696c1-7946-4b54-9205-f37386293331",
                functionOwnerName: "SimpleCountdownTimer",
                functionOwnerKey: "7c686586-be98-4be4-b619-24e0e0505e97",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/SimpleCountdownTimer.SimpleCountdownTimer.SimpleCountdownTimer.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return []
        }
        get modelFactory() {
            return ue
        }
        get controllerFactory() {
            return be
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                n = w.ifWidget,
                o = w.textWidget,
                d = w.asPrimitiveValue,
                v = w.getTranslation,
                y = this;
            return A.createElement("div", this.getRootNodeProperties(), n(!1, !1, this, function() {
                return []
            }, function() {
                return [A.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "TimerCont"
                    },
                    _widgetRecordProvider: t
                }, A.createElement(S, {
                    extendedProperties: {
                        style: "display: none;"
                    },
                    style: r.getCachedValue(e.getId("DaysText.Style"), function() {
                        return r.variables.dayClassGuidVar + (r.variables.daysCustomClassIn === b.BuiltinFunctions.nullTextIdentifier() ? " daysClass" : " " + r.variables.daysCustomClassIn)
                    }, function() {
                        return r.variables.dayClassGuidVar
                    }, function() {
                        return r.variables.daysCustomClassIn
                    }),
                    text: [],
                    _idProps: {
                        service: e,
                        name: "DaysText"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables._daysCustomClassInDataFetchStatus)
                }), A.createElement(S, {
                    style: r.getCachedValue(e.getId("HoursText.Style"), function() {
                        return r.variables.hoursClassGuidVar + (r.variables.hoursCustomClassIn === b.BuiltinFunctions.nullTextIdentifier() ? " hoursClass" : " " + r.variables.hoursCustomClassIn)
                    }, function() {
                        return r.variables.hoursClassGuidVar
                    }, function() {
                        return r.variables.hoursCustomClassIn
                    }),
                    text: [],
                    _idProps: {
                        service: e,
                        name: "HoursText"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables._hoursCustomClassInDataFetchStatus)
                }), A.createElement(S, {
                    style: r.getCachedValue(e.getId("MinutesText.Style"), function() {
                        return r.variables.minutesClassGuidVar + (r.variables.minutesCustomClassIn === b.BuiltinFunctions.nullTextIdentifier() ? " minutesClass" : " " + r.variables.minutesCustomClassIn)
                    }, function() {
                        return r.variables.minutesClassGuidVar
                    }, function() {
                        return r.variables.minutesCustomClassIn
                    }),
                    text: [],
                    _idProps: {
                        service: e,
                        name: "MinutesText"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables._minutesCustomClassInDataFetchStatus)
                }), A.createElement(S, {
                    style: r.getCachedValue(e.getId("SecondsText.Style"), function() {
                        return r.variables.secondsClassGuidVar + (r.variables.secondsCustomClassIn === b.BuiltinFunctions.nullTextIdentifier() ? " secondsClass" : " " + r.variables.secondsCustomClassIn)
                    }, function() {
                        return r.variables.secondsClassGuidVar
                    }, function() {
                        return r.variables.secondsCustomClassIn
                    }),
                    text: [],
                    _idProps: {
                        service: e,
                        name: "SecondsText"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables._secondsCustomClassInDataFetchStatus)
                })), A.createElement(p, {
                    align: 0,
                    animate: !1,
                    extendedProperties: {
                        style: "text-align: center;"
                    },
                    visible: !0,
                    _idProps: {
                        service: e,
                        name: "ExpiredCont"
                    },
                    _widgetRecordProvider: t
                }, A.createElement(S, {
                    style: r.getCachedValue(e.getId("ExpiredText.Style"), function() {
                        return r.variables.expiredClassGuidVar + (r.variables.expiredCustomClassIn === b.BuiltinFunctions.nullTextIdentifier() ? " expiredClass" : " " + r.variables.expiredCustomClassIn)
                    }, function() {
                        return r.variables.expiredClassGuidVar
                    }, function() {
                        return r.variables.expiredCustomClassIn
                    }),
                    text: [],
                    _idProps: {
                        service: e,
                        name: "ExpiredText"
                    },
                    _widgetRecordProvider: t,
                    style_dataFetchStatus: b.Model.calculateDataFetchStatus(r.variables._expiredCustomClassInDataFetchStatus)
                }))]
            }))
        }
    };
s(w, "View");
var Y = w,
    j = Y;
var X = C,
    Z = _.PlaceholderContent,
    Et = _.IteratorPlaceholderContent,
    T = class T extends E.BaseWebBlock {
        static get displayName() {
            return "PhNavigation.SecurityOptions"
        }
        static getAttributes() {
            return {
                codeFunction: "SecurityOptions",
                functionKey: "7ee8d127-ca93-48e1-884e-0add62c7ba1d",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/PartnersHub.PhNavigation.SecurityOptions.css"]
        }
        static getJsDependencies() {
            return []
        }
        static getBlocks() {
            return [V, x, j]
        }
        get modelFactory() {
            return de
        }
        get controllerFactory() {
            return ve
        }
        get title() {
            return ""
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                n = T.ifWidget,
                o = T.textWidget,
                d = T.asPrimitiveValue,
                v = T.getTranslation,
                y = this;
            return h.createElement("div", this.getRootNodeProperties(), h.createElement(V, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    HeaderInfo: r.getCachedValue(e.getId("EmailChangeSidebar.HeaderInfo"), function() {
                        return function() {
                            var u = new ae;
                            return u.showLeftButtonAttr = !N.getIsDesktop(), u.showRightButtonAttr = !0, u.titleAttr = "Change email", u
                        }()
                    }, function() {
                        return N.getIsDesktop()
                    }),
                    FooterInfo: r.getCachedValue(e.getId("EmailChangeSidebar.FooterInfo"), function() {
                        return function() {
                            var u = new oe;
                            return u.primaryButtonLabelAttr = "Continue", u.secondaryButtonLabelAttr = "Cancel", u
                        }()
                    }),
                    IsSidebarOpen: r.variables.emailChangeModalVar.isModalOpenAttr
                },
                events: {
                    _handleError: s(function(u) {
                        l.handleError(u)
                    }, "_handleError"),
                    toggleSidebar$Action: s(function(u, ie) {
                        var pe = a.clone();
                        l.onToggleEmailChangeModal$Action(l.callContext(pe))
                    }, "toggleSidebar$Action"),
                    headerRightButtonAction$Action: s(function() {
                        var u = a.clone();
                        l.toggleModal$Action(r.variables.emailChangeModalVar, l.callContext(u))
                    }, "headerRightButtonAction$Action"),
                    primaryButtonAction$Action: s(function() {
                        var u = a.clone();
                        l.continueEmailChange$Action(l.callContext(u))
                    }, "primaryButtonAction$Action"),
                    secondaryButtonAction$Action: s(function() {
                        var u = a.clone();
                        l.toggleModal$Action(r.variables.emailChangeModalVar, l.callContext(u))
                    }, "secondaryButtonAction$Action"),
                    setModalId$Action: s(function(u) {
                        var ie = a.clone();
                        l.setEmailChangeModalId$Action(u, l.callContext(ie))
                    }, "setModalId$Action"),
                    headerLeftButtonAction$Action: s(function() {
                        var u = a.clone();
                        l.toggleModal$Action(r.variables.emailChangeModalVar, l.callContext(u))
                    }, "headerLeftButtonAction$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    name: "EmailChangeSidebar",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    customHeader: Z.Empty,
                    bodyContent: new Z(function() {
                        return [h.createElement(p, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                className: "security-options-initial-screen-container"
                            },
                            visible: r.variables.currentStepVar === 0,
                            _idProps: {
                                service: e,
                                name: "InitialScreen"
                            },
                            _widgetRecordProvider: t
                        }, h.createElement(le, {
                            extendedProperties: {
                                className: "security-options-initial-screen-img"
                            },
                            image: X.Navigation.VersionedURL.getVersionedUrl("img/PartnersHub.alert.png"),
                            type: 0,
                            _idProps: {
                                service: e,
                                name: "Icon"
                            },
                            _widgetRecordProvider: t
                        }), h.createElement(g, {
                            extendedProperties: {
                                className: "security-options-heading"
                            },
                            tag: "h3",
                            _idProps: {
                                service: e,
                                name: "Heading"
                            },
                            _widgetRecordProvider: t
                        }, "A few things to keep in mind"), h.createElement(g, {
                            extendedProperties: {
                                className: "security-options-initial-screen-list"
                            },
                            tag: "ul",
                            _idProps: {
                                service: e,
                                name: "List"
                            },
                            _widgetRecordProvider: t
                        }, h.createElement(g, {
                            extendedProperties: {
                                className: "security-options-initial-screen-list-item"
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                name: "ListItem"
                            },
                            _widgetRecordProvider: t
                        }, "You must log in again after changing your email."), h.createElement(g, {
                            extendedProperties: {
                                className: "security-options-initial-screen-list-item"
                            },
                            tag: "li",
                            _idProps: {
                                service: e,
                                name: "ListItem2"
                            },
                            _widgetRecordProvider: t
                        }, h.createElement(S, {
                            extendedProperties: {
                                className: "security-options-initial-screen-list-item"
                            },
                            text: ["Your old email cannot be re-used for this account for the next 30 days."],
                            _idProps: {
                                service: e,
                                uuid: "7"
                            },
                            _widgetRecordProvider: t
                        })))), h.createElement(p, {
                            align: 0,
                            animate: !0,
                            extendedProperties: {
                                className: "security-options-step1-container"
                            },
                            visible: r.variables.currentStepVar === 1,
                            _idProps: {
                                service: e,
                                name: "Step1"
                            },
                            _widgetRecordProvider: t
                        }, h.createElement(g, {
                            extendedProperties: {
                                className: "security-options-heading"
                            },
                            tag: "h3",
                            _idProps: {
                                service: e,
                                uuid: "9"
                            },
                            _widgetRecordProvider: t
                        }, "Step 1 of 3:  Verify your email"))]
                    }),
                    customButton: Z.Empty
                },
                _dependencies: [d(r.variables.currentStepVar)]
            }), h.createElement(g, {
                extendedProperties: {
                    className: "security-options"
                },
                tag: "div",
                _idProps: {
                    service: e,
                    name: "SecurityOptions"
                },
                _widgetRecordProvider: t
            }, h.createElement(M, {
                enabled: !0,
                extendedProperties: {
                    className: "security-options-button"
                },
                isDefault: !1,
                onClick: s(function() {
                    var u = a.clone();
                    l.toggleModal$Action(r.variables.emailChangeModalVar, l.callContext(u))
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: e,
                    name: "EmailChange"
                },
                _widgetRecordProvider: t
            }, "Change email", h.createElement(x, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#ADB5BD"/>\r
</svg>`
                },
                events: {
                    _handleError: s(function(u) {
                        l.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "12",
                    alias: "2"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), h.createElement(M, {
                enabled: !0,
                extendedProperties: {
                    className: "security-options-button"
                },
                gridProperties: {
                    classes: "ThemeGrid_MarginGutter"
                },
                isDefault: !1,
                onClick: s(function() {
                    var u = a.clone();
                    l.buttonOnClick2$Action(l.callContext(u))
                }, "onClick"),
                style: '"btn"',
                visible: !0,
                _idProps: {
                    service: e,
                    name: "PasswordChange"
                },
                _widgetRecordProvider: t
            }, "Change password", h.createElement(x, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    SVGCode: `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.34375 6.65625C7.53125 6.84375 7.53125 7.1875 7.34375 7.375L1.34375 13.375C1.15625 13.5625 0.8125 13.5625 0.625 13.375C0.4375 13.1875 0.4375 12.8438 0.625 12.6562L6.28125 7L0.625 1.375C0.4375 1.1875 0.4375 0.84375 0.625 0.65625C0.8125 0.46875 1.15625 0.46875 1.34375 0.65625L7.34375 6.65625Z" fill="#ADB5BD"/>\r
</svg>`
                },
                events: {
                    _handleError: s(function(u) {
                        l.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "14",
                    alias: "3"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            })), h.createElement(j, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    ExpirationDateTime: r.getCachedValue(e.getId("Vh0n9qddbk687hF+Qpd+cw.ExpirationDateTime"), function() {
                        return X.BuiltinFunctions.addMinutes(X.BuiltinFunctions.currDateTime(), 10)
                    })
                },
                events: {
                    _handleError: s(function(u) {
                        l.handleError(u)
                    }, "_handleError"),
                    countdownFinished$Action: s(function() {
                        var u = a.clone();
                        l.toggleModal$Action(r.variables.emailChangeModalVar, l.callContext(u))
                    }, "countdownFinished$Action")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    uuid: "15",
                    alias: "4"
                },
                _widgetRecordProvider: t,
                _dependencies: []
            }), h.createElement(g, {
                extendedProperties: {
                    className: "verify-email-timer"
                },
                tag: "span",
                _idProps: {
                    service: e,
                    name: "Timer2"
                },
                _widgetRecordProvider: t
            }, "10:00")))
        }
    };
s(T, "View");
var Q = T,
    ee = Q;
var te = _.PlaceholderContent,
    Dt = _.IteratorPlaceholderContent,
    P = class P extends E.BaseWebScreen {
        static get displayName() {
            return "PhNavigation.Security"
        }
        static getAttributes() {
            return {
                codeFunction: "Security",
                functionKey: "68e0a8ff-e203-4f71-9707-9cbb47093f12",
                functionOwnerName: "PartnersHub",
                functionOwnerKey: "9587f849-ee05-428a-81d2-3be0a1b1dccc",
                screen: ""
            }
        }
        static getCssDependencies() {
            return ["css/OutSystemsReactWidgets.css", "css/OutSystemsUI.OutSystemsUI.css", "css/PartnersHub.PHubTest.css", "css/PartnersHub.PhNavigation.Security.css", "css/PartnersHub.PHubTest.extra.css"]
        }
        static getJsDependencies() {
            return ["scripts/PartnersHub.UserScripts.DerivAnalytics.js"]
        }
        static getBlocks() {
            return [G, ee]
        }
        get modelFactory() {
            return me
        }
        get controllerFactory() {
            return fe
        }
        get title() {
            return E.BaseWebScreen.getTranslation("_6jgaAPicU+XB5y7Rwk_Eg#Title", "Security")
        }
        internalRender() {
            let r = this.model,
                l = this.controller,
                e = this.idService,
                i = l.validationService,
                t = this.widgetsRecordProvider,
                a = l.callContext(),
                n = P.ifWidget,
                o = P.textWidget,
                d = P.asPrimitiveValue,
                v = P.getTranslation,
                y = this;
            return O.createElement("div", this.getRootNodeProperties(), O.createElement(G, {
                getOwnerSpan: s(function() {
                    return y.getChildSpan("render")
                }, "getOwnerSpan"),
                getOwnerDisposeSpan: s(function() {
                    return y.getChildSpan("destroy")
                }, "getOwnerDisposeSpan"),
                inputs: {
                    CurrentScreen: re.navigation.hub
                },
                events: {
                    _handleError: s(function(u) {
                        l.handleError(u)
                    }, "_handleError")
                },
                _validationProps: {
                    validationService: i
                },
                _idProps: {
                    service: e,
                    name: "Navigation",
                    alias: "1"
                },
                _widgetRecordProvider: t,
                placeholders: {
                    customMobileHeader: te.Empty,
                    placeholder: new te(function() {
                        return [O.createElement(p, {
                            align: 0,
                            animate: !1,
                            gridProperties: {
                                classes: "OSInline"
                            },
                            style: "partners-hub-dashboard",
                            visible: !0,
                            _idProps: {
                                service: e,
                                uuid: "1"
                            },
                            _widgetRecordProvider: t
                        }, O.createElement(g, {
                            extendedProperties: {
                                className: "ph-main-title"
                            },
                            tag: "h1",
                            _idProps: {
                                service: e,
                                uuid: "2"
                            },
                            _widgetRecordProvider: t
                        }, "Security"), O.createElement(ee, {
                            getOwnerSpan: s(function() {
                                return y.getChildSpan("render")
                            }, "getOwnerSpan"),
                            getOwnerDisposeSpan: s(function() {
                                return y.getChildSpan("destroy")
                            }, "getOwnerDisposeSpan"),
                            inputs: {},
                            events: {
                                _handleError: s(function(u) {
                                    l.handleError(u)
                                }, "_handleError")
                            },
                            _validationProps: {
                                validationService: i
                            },
                            _idProps: {
                                service: e,
                                name: "SecurityOptions",
                                alias: "2"
                            },
                            _widgetRecordProvider: t,
                            _dependencies: []
                        }))]
                    }),
                    customMobileFooter: te.Empty
                },
                _dependencies: []
            }))
        }
    };
s(P, "View");
var ne = P,
    $t = ne;
export {
    $t as
    default
};