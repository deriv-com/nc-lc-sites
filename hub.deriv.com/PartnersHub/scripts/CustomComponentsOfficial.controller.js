define("CustomComponentsOfficial.controller$Action1", ["exports", "@outsystems/runtime-core-js", "CustomComponentsOfficial.model", "CustomComponentsOfficial.controller"], function(exports, OSRuntimeCore, CustomComponentsOfficialModel, CustomComponentsOfficialController) {
    var OS = OSRuntimeCore;
    CustomComponentsOfficialController.default.action1$Action = function(callContext) {
        return OS.Logger.startActiveSpan("Action1", function(span) {
            if (span) {
                span.setAttribute("code.function", "Action1");
                span.setAttribute("outsystems.function.key", "3d93f678-f62e-4363-ac90-dfca65339bf8");
                span.setAttribute("outsystems.function.owner.name", "CustomComponentsOfficial");
                span.setAttribute("outsystems.function.owner.key", "4ba8c4d5-5fe2-407e-a6bd-5a0385565b69");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CustomComponentsOfficialController.default;
    CustomComponentsOfficialController.default.clientActionProxies.action1$Action = function() {
        return controller.executeActionInsideJSNode(CustomComponentsOfficialController.default.action1$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});


define("CustomComponentsOfficial.controller", ["exports", "@outsystems/runtime-core-js", "CustomComponentsOfficial.model"], function(exports, OSRuntimeCore, CustomComponentsOfficialModel) {
    var OS = OSRuntimeCore;
    var CustomComponentsOfficialController = exports;
    class Controller extends
    OS.Controller.BaseModuleController {
        constructor(model, messagesProvider, idService, translationResources) {
            super(model, messagesProvider, idService, translationResources);
        }

        get clientActionProxies() {
            if (!(this.hasOwnProperty("_clientActionProxies"))) {
                this._clientActionProxies = {};
            }

            return this._clientActionProxies;
        }
        set clientActionProxies(value) {
            this._clientActionProxies = value;
        }


        get roles() {
            if (!(this.hasOwnProperty("_roles"))) {
                this._roles = {};
            }

            return this._roles;
        }
        set roles(value) {
            this._roles = value;
        }

        get defaultTimeout() {
            if (!(this.hasOwnProperty("_defaultTimeout"))) {
                this._defaultTimeout = 10;
            }

            return this._defaultTimeout;
        }
        set defaultTimeout(value) {
            this._defaultTimeout = value;
        }

        getDefaultTimeout() {
            return CustomComponentsOfficialController.default.defaultTimeout;
        }

    }

    CustomComponentsOfficialController.default = new Controller();
});