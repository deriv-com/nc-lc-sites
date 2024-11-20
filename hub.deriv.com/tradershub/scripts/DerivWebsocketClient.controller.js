define("DerivWebsocketClient.controller$DerivApiClientSendMessage", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model", "DerivWebsocketClient.controller", "DerivWebsocketClient.controller$DerivApiClientSendMessage.SendAPIRequestJS", "DerivWebsocketClient.model$ST_0d9a0becf267d208d00fb57c93984547Structure"], function(exports, OSRuntimeCore, DerivWebsocketClientModel, DerivWebsocketClientController, DerivWebsocketClient_controller_DerivApiClientSendMessage_SendAPIRequestJS) {
    var OS = OSRuntimeCore;
    DerivWebsocketClientController.default.derivApiClientSendMessage$Action = function(endpointIn, payloadIn, isAuthRequiredIn, tokenIn, callContext) {
        return OS.Logger.startActiveSpan("DerivApiClientSendMessage", function(span) {
            if (span) {
                span.setAttribute("code.function", "DerivApiClientSendMessage");
                span.setAttribute("outsystems.function.key", "f9f6aef1-2d76-4b42-8f2b-d617b5e8baa3");
                span.setAttribute("outsystems.function.owner.name", "DerivWebsocketClient");
                span.setAttribute("outsystems.function.owner.key", "ccff153e-36bc-40c3-8607-ee97fafdba62");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            return OS.Flow.tryFinally(function() {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$vars"))());
                vars.value.endpointInLocal = endpointIn;
                vars.value.payloadInLocal = payloadIn;
                vars.value.isAuthRequiredInLocal = isAuthRequiredIn;
                vars.value.tokenInLocal = tokenIn;
                var sendAPIRequestJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeerrorVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$outVars"))());
                return OS.Flow.executeAsyncFlow(function() {
                    return OS.Logger.startActiveSpan("SendAPIRequest", function(span) {
                        if (span) {
                            span.setAttribute("code.function", "SendAPIRequest");
                            span.setAttribute("outsystems.function.key", "f1ce5e86-589b-4352-8b0f-0a51eaea8cb2");
                            span.setAttribute("outsystems.function.owner.name", "DerivWebsocketClient");
                            span.setAttribute("outsystems.function.owner.key", "ccff153e-36bc-40c3-8607-ee97fafdba62");
                            span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                        }

                        try {
                            return controller.safeExecuteAsyncJSNode(DerivWebsocketClient_controller_DerivApiClientSendMessage_SendAPIRequestJS, "SendAPIRequest", "DerivApiClientSendMessage", {
                                Payload: OS.DataConversion.JSNodeParamConverter.to(vars.value.payloadInLocal, OS.DataTypes.DataTypes.Text),
                                Name: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
                                Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
                                IsError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                            }, function($parameters) {
                                var jsNodeResult = new(controller.constructor.getVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$sendAPIRequestJSResult"))();
                                jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
                                jsNodeResult.isErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsError, OS.DataTypes.DataTypes.Boolean);
                                return jsNodeResult;
                            }, {}, {});
                        } finally {
                            if (span) {
                                span.end();
                            }

                        }

                    }, 1).then(function(results) {
                        sendAPIRequestJSResult.value = results;
                    }).then(function() {
                        if ((sendAPIRequestJSResult.value.isErrorOut)) {
                            // JSON Deserialize: JSONDeserializeerror
                            jSONDeserializeerrorVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(sendAPIRequestJSResult.value.responseOut, DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure, false);
                            // Error = JSONDeserializeerror.Data
                            outVars.value.errorOut = jSONDeserializeerrorVar.value.dataOut;
                            // IsError = True
                            outVars.value.isErrorOut = true;
                        } else {
                            // RawResponse = SendAPIRequest.Response
                            outVars.value.rawResponseOut = sendAPIRequestJSResult.value.responseOut;
                            // IsError = False
                            outVars.value.isErrorOut = false;
                        }

                    });
                }).then(function() {
                    return outVars.value;
                });
            }, function() {
                if (span) {
                    span.end();
                }

            });
        }, 1);
    };
    var controller = DerivWebsocketClientController.default;
    DerivWebsocketClientController.default.constructor.registerVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$vars", [{
        name: "Endpoint",
        attrName: "endpointInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Payload",
        attrName: "payloadInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsAuthRequired",
        attrName: "isAuthRequiredInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }, {
        name: "Token",
        attrName: "tokenInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    DerivWebsocketClientController.default.constructor.registerVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$sendAPIRequestJSResult", [{
        name: "Response",
        attrName: "responseOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    DerivWebsocketClientController.default.constructor.registerVariableGroupType("DerivWebsocketClient.DerivApiClientSendMessage$outVars", [{
        name: "RawResponse",
        attrName: "rawResponseOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Error",
        attrName: "errorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure();
        },
        complexType: DerivWebsocketClientModel.ST_0d9a0becf267d208d00fb57c93984547Structure
    }, {
        name: "IsError",
        attrName: "isErrorOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    DerivWebsocketClientController.default.clientActionProxies.derivApiClientSendMessage$Action = function(endpointIn, payloadIn, isAuthRequiredIn, tokenIn) {
        endpointIn = (endpointIn === undefined) ? "" : endpointIn;
        payloadIn = (payloadIn === undefined) ? "" : payloadIn;
        isAuthRequiredIn = (isAuthRequiredIn === undefined) ? false : isAuthRequiredIn;
        tokenIn = (tokenIn === undefined) ? "" : tokenIn;
        return controller.executeActionInsideJSNode(DerivWebsocketClientController.default.derivApiClientSendMessage$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(payloadIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isAuthRequiredIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                RawResponse: OS.DataConversion.JSNodeParamConverter.to(actionResults.rawResponseOut, OS.DataTypes.DataTypes.Text),
                Error: actionResults.errorOut,
                IsError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isErrorOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("DerivWebsocketClient.controller$DerivApiClientSendMessage.SendAPIRequestJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        return new Promise(function($resolve, $reject) {
            function getRequest(name, payload) {
                if (name.length && payload.length) {
                    return {
                        name,
                        payload: JSON.parse(payload)
                    }
                }
                return {
                    name
                }
            }

            const fetchData = async () => {

                if (window.DerivAPIClient) {
                    const request = getRequest($parameters.Name, $parameters.Payload)
                    try {
                        const res = await window.DerivAPIClient.send(request);
                        $parameters.Response = JSON.stringify(res);
                        $parameters.IsError = false
                    } catch (err) {
                        console.log('error', err);
                        $parameters.Response = JSON.stringify(err)
                        $parameters.IsError = true
                    }
                    $resolve()
                }
            }

            fetchData()
        });
    };
});


define("DerivWebsocketClient.controller$MountDerivAPIClient", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model", "DerivWebsocketClient.controller", "DerivWebsocketClient.controller$MountDerivAPIClient.JavaScript1JS"], function(exports, OSRuntimeCore, DerivWebsocketClientModel, DerivWebsocketClientController, DerivWebsocketClient_controller_MountDerivAPIClient_JavaScript1JS) {
    var OS = OSRuntimeCore;
    DerivWebsocketClientController.default.mountDerivAPIClient$Action = function(websocketURLIn, callContext) {
        return OS.Logger.startActiveSpan("MountDerivAPIClient", function(span) {
            if (span) {
                span.setAttribute("code.function", "MountDerivAPIClient");
                span.setAttribute("outsystems.function.key", "175285db-d589-4933-b5b8-d7c076f7cf4e");
                span.setAttribute("outsystems.function.owner.name", "DerivWebsocketClient");
                span.setAttribute("outsystems.function.owner.key", "ccff153e-36bc-40c3-8607-ee97fafdba62");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("DerivWebsocketClient.MountDerivAPIClient$vars"))());
                vars.value.websocketURLInLocal = websocketURLIn;
                OS.Logger.startActiveSpan("JavaScript1", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "JavaScript1");
                        span.setAttribute("outsystems.function.key", "16ab7ddd-fb67-4fa6-bac0-dfda835f3178");
                        span.setAttribute("outsystems.function.owner.name", "DerivWebsocketClient");
                        span.setAttribute("outsystems.function.owner.key", "ccff153e-36bc-40c3-8607-ee97fafdba62");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(DerivWebsocketClient_controller_MountDerivAPIClient_JavaScript1JS, "JavaScript1", "MountDerivAPIClient", {
                            WebsocketURL: OS.DataConversion.JSNodeParamConverter.to(vars.value.websocketURLInLocal, OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {}, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                return;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = DerivWebsocketClientController.default;
    DerivWebsocketClientController.default.constructor.registerVariableGroupType("DerivWebsocketClient.MountDerivAPIClient$vars", [{
        name: "WebsocketURL",
        attrName: "websocketURLInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    DerivWebsocketClientController.default.clientActionProxies.mountDerivAPIClient$Action = function(websocketURLIn) {
        websocketURLIn = (websocketURLIn === undefined) ? "" : websocketURLIn;
        return controller.executeActionInsideJSNode(DerivWebsocketClientController.default.mountDerivAPIClient$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(websocketURLIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("DerivWebsocketClient.controller$MountDerivAPIClient.JavaScript1JS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var __defProp = Object.defineProperty;
        var __defNormalProp = (obj, key, value) =>
            key in obj ?
            __defProp(obj, key, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
            }) :
            (obj[key] = value);
        var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
        const h = 'deriv.com',
            N = 'deriv.me',
            C = 'deriv.be',
            U = [h, C, N],
            A = typeof window < 'u' && window.location.hostname.split('app.')[1];
        U.includes(A) ? A : h;
        const K = e =>
            Object.keys(e)
            .sort()
            .reduce((t, n) => ((t[n] = e[n]), t), {}),
            be = async e => {
                    const t = new TextEncoder().encode(JSON.stringify(K(e))),
                        n = await crypto.subtle.digest('SHA-256', t);
                    return Array.from(new Uint8Array(n))
                        .map(c => ('00' + c.toString(16)).slice(-2))
                        .join('');
                },
                Ye = /* @__PURE__ */ Object.freeze(
                    /* @__PURE__ */
                    Object.defineProperty({
                            __proto__: null,
                            hashObject: be,
                            sortObjectByKeys: K,
                        },
                        Symbol.toStringTag, {
                            value: 'Module'
                        }
                    )
                );

        function Pe() {
            let e, t;
            return {
                promise: new Promise((r, o) => {
                    (e = r), (t = o);
                }),
                resolve: e,
                reject: t,
            };
        }
        const xe = /* @__PURE__ */ Object.freeze(
            /* @__PURE__ */
            Object.defineProperty({
                    __proto__: null,
                    createPromise: Pe,
                },
                Symbol.toStringTag, {
                    value: 'Module'
                }
            )
        );
        class DerivAPIClient {
            constructor(endpoint, options) {
                __publicField(this, 'websocket');
                __publicField(this, 'requestHandler');
                __publicField(this, 'subscribeHandler');
                __publicField(this, 'req_id');
                __publicField(this, 'waitForWebSocketOpen');
                __publicField(this, 'keepAliveIntervalId', null);
                this.websocket = new WebSocket(endpoint);
                this.req_id = 0;
                this.requestHandler = /* @__PURE__ */ new Map();
                this.subscribeHandler = /* @__PURE__ */ new Map();
                this.waitForWebSocketOpen = xe.createPromise();
                this.websocket.addEventListener('open', e => {
                    if (typeof(options == null ? void 0 : options.onOpen) === 'function') options.onOpen(e);
                    const {
                        resolve
                    } = this.waitForWebSocketOpen;
                    resolve({});
                });
                this.websocket.addEventListener('close', e => {
                    if (typeof(options == null ? void 0 : options.onClose) === 'function') options.onClose(e);
                });
                this.websocket.addEventListener('message', async response => {
                    var _a, _b, _c, _d;
                    const parsedData = JSON.parse(response.data);
                    if (parsedData.subscription || ((_a = parsedData.echo_req) == null ? void 0 : _a.subscribe)) {
                        const {
                            req_id,
                            ...payload
                        } = parsedData.echo_req;
                        const subscribeHash = await Ye.hashObject({
                            ...payload
                        });
                        const matchingHandler = this.subscribeHandler.get(subscribeHash);
                        if (!matchingHandler) return;
                        if (parsedData.error && typeof matchingHandler.onError === 'function') {
                            this.subscribeHandler.delete(subscribeHash);
                            matchingHandler.onError(parsedData.error);
                            return;
                        }
                        matchingHandler.data = parsedData;
                        if ((_b = matchingHandler.subscriptions) == null ? void 0 : _b.size) {
                            matchingHandler.subscriptions.forEach(onData => onData(parsedData));
                        }
                        matchingHandler.subscription_id =
                            ((_c = parsedData == null ? void 0 : parsedData.subscription) == null ? void 0 : _c.id) ?? '';
                    } else if (parsedData) {
                        const id = (_d = parsedData.req_id) == null ? void 0 : _d.toString();
                        const matchingHandler = this.requestHandler.get(id);
                        if (!matchingHandler) return;
                        if (parsedData.error) {
                            matchingHandler.onError(parsedData.error);
                        } else {
                            matchingHandler.onData(parsedData);
                        }
                        this.requestHandler.delete(id);
                    }
                });
                this.keepAlive();
            }
            async send({
                name,
                payload
            }) {
                var _a;
                this.req_id = this.req_id + 1;
                const requestPayload = {
                    [name]: 1,
                    ...(payload ?? {}),
                    req_id: this.req_id
                };
                const matchingRequest = this.requestHandler.get(this.req_id.toString());
                if (matchingRequest) return matchingRequest.promise;
                const {
                    promise,
                    resolve,
                    reject
                } = xe.createPromise();
                const newRequestHandler = {
                    name,
                    onData: data => resolve(data),
                    onError: error => reject(error),
                    promise,
                };
                this.requestHandler.set(this.req_id.toString(), newRequestHandler);
                await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                try {
                    this.websocket.send(JSON.stringify(requestPayload));
                } catch (error) {
                    if (this.isSocketClosingOrClosed()) {
                        initializeDerivAPIClient(); // Reinitialize WebSocket
                    } else {
                        throw error;
                    }
                }
                return promise;
            }
            async subscribe({
                name,
                value,
                payload,
                onData,
                onError
            }) {
                var _a;
                const subscriptionPayload = {
                    [name]: value ?? 1,
                    ...(payload ?? {}),
                    subscribe: 1
                };
                const subscriptionHash = await Ye.hashObject(subscriptionPayload);
                const matchingSubscription = this.subscribeHandler.get(subscriptionHash);
                if (!matchingSubscription) {
                    this.req_id = this.req_id + 1;
                    const newSubscriptionHandler = {
                        name,
                        status: 'idle',
                        onError,
                        subscriptions: /* @__PURE__ */ new Map(),
                        subscription_id: '',
                        counter: 1,
                    };
                    newSubscriptionHandler.subscriptions.set(newSubscriptionHandler.counter, onData);
                    this.subscribeHandler.set(subscriptionHash, newSubscriptionHandler);
                    await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                    try {
                        this.websocket.send(JSON.stringify({
                            ...subscriptionPayload,
                            req_id: this.req_id
                        }));
                    } catch (error) {
                        if (this.isSocketClosingOrClosed()) {
                            initializeDerivAPIClient(); // Reinitialize WebSocket
                        } else {
                            throw error;
                        }
                    }
                    return {
                        id: newSubscriptionHandler.counter,
                        hash: subscriptionHash
                    };
                } else {
                    const currentCounter = matchingSubscription.counter + 1;
                    matchingSubscription.subscriptions.set(currentCounter, onData);
                    matchingSubscription.counter = currentCounter;
                    const matchingHandler = matchingSubscription.subscriptions.get(currentCounter);
                    if (typeof matchingHandler === 'function' && matchingSubscription.data) {
                        matchingHandler(matchingSubscription.data);
                    }
                    return {
                        id: matchingSubscription.counter,
                        hash: subscriptionHash
                    };
                }
            }
            async unsubscribe({
                hash,
                id
            }) {
                var _a;
                const matchingSubscription = this.subscribeHandler.get(hash);
                if (!matchingSubscription) return;
                matchingSubscription.subscriptions.delete(id);
                if (matchingSubscription.subscriptions.size > 0) return;
                const {
                    subscription_id
                } = matchingSubscription;
                await ((_a = this.waitForWebSocketOpen) == null ? void 0 : _a.promise);
                const response = await this.send({
                    name: 'forget',
                    payload: {
                        forget: subscription_id
                    }
                });
                if (response && !response.error) {
                    matchingSubscription.subscriptions.clear();
                    this.subscribeHandler.delete(hash);
                }
            }
            switchConnection() {}
            isSocketClosingOrClosed() {
                return [2, 3].includes(this.websocket.readyState);
            }
            disconnect() {
                if (!this.isSocketClosingOrClosed()) {
                    this.websocket.close();
                }
            }
            cleanup() {
                this.requestHandler.clear();
                this.subscribeHandler.clear();
                this.disconnect();
            }
            keepAlive(interval = 30000) {
                if (this.keepAliveIntervalId) {
                    clearInterval(this.keepAliveIntervalId);
                }
                this.keepAliveIntervalId = setInterval(async () => {
                    await this.send({
                        name: 'ping'
                    });
                }, interval);
            }
        }

        (function initializeDerivAPIClient() {
            if (!window.DerivAPIClient) {
                window.DerivAPIClient = new DerivAPIClient($parameters.WebsocketURL);
            }
        })();

        // Trigger point to reload the page if WebSocket is closed
        function triggerWebSocketInitialization() {
            if (window.DerivAPIClient.isSocketClosingOrClosed()) {
                window.location.reload();
            }
        }

        // Setting a periodic check every 10 seconds
        setInterval(triggerWebSocketInitialization, 10000);

    };
});


define("DerivWebsocketClient.controller", ["exports", "@outsystems/runtime-core-js", "DerivWebsocketClient.model"], function(exports, OSRuntimeCore, DerivWebsocketClientModel) {
    var OS = OSRuntimeCore;
    var DerivWebsocketClientController = exports;
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
            return DerivWebsocketClientController.default.defaultTimeout;
        }

    }

    DerivWebsocketClientController.default = new Controller();
});