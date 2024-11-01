define("CKEditor5.controller$GenerateImageJson", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure", "CKEditor5.model$RL_6a8174118c450ccaba251515e84ce6ab", "CKEditor5.controller$GenerateImageResizeOptions", "CKEditor5.model$ST_8ea03ea3df3ad962d2d174fbfdab595aStructure"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.generateImageJson$Action = function(imageIn, callContext) {
        return OS.Logger.startActiveSpan("GenerateImageJson", function(span) {
            if (span) {
                span.setAttribute("code.function", "GenerateImageJson");
                span.setAttribute("outsystems.function.key", "d678cda2-4c1f-4a6a-a230-b544beafba60");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GenerateImageJson$vars"))());
                vars.value.imageInLocal = imageIn.clone();
                var generateImageResizeOptionsVar = new OS.DataTypes.VariableHolder();
                var jSONSerializeImageResizeOptionVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
                var jSONDeserializeImageVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GenerateImageJson$outVars"))());
                // IsEmpty?
                if ((!((vars.value.imageInLocal.toolbarAttr === "")))) {
                    // ResizeOption Empty?
                    if ((vars.value.imageInLocal.resizeOptionsAttr.isEmpty)) {
                        // Json = "{image: {" + If + "toolbar: [" + Image.Toolbar + "]" + "}}"
                        vars.value.jsonVar = ((((("{image: {" + (((vars.value.imageInLocal.stylesAttr === "")) ? ("") : ((("styles: [" + vars.value.imageInLocal.stylesAttr) + "],")))) + "toolbar: [") + vars.value.imageInLocal.toolbarAttr) + "]") + "}}");
                    } else {
                        // Execute Action: GenerateImageResizeOptions
                        generateImageResizeOptionsVar.value = CKEditor5Controller.default.generateImageResizeOptions$Action(vars.value.imageInLocal.resizeOptionsAttr, callContext);

                        // JSON Serialize: JSONSerializeImageResizeOption
                        jSONSerializeImageResizeOptionVar.value.jSONOut = OS.JSONUtils.serializeToJSON(generateImageResizeOptionsVar.value.outputOut, true, false);
                        // Json = "{image: {" + If + JSONSerializeImageResizeOption.JSON + "toolbar: [" + Image.Toolbar + "]" + "}}"
                        vars.value.jsonVar = (((((("{image: {" + (((vars.value.imageInLocal.stylesAttr === "")) ? ("") : ((("styles: [" + vars.value.imageInLocal.stylesAttr) + "],")))) + jSONSerializeImageResizeOptionVar.value.jSONOut) + "toolbar: [") + vars.value.imageInLocal.toolbarAttr) + "]") + "}}");
                    }

                    // JSON Deserialize: JSONDeserializeImage
                    jSONDeserializeImageVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.jsonVar, CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure, false);
                    // Output = JSONDeserializeImage.Data
                    outVars.value.outputOut = jSONDeserializeImageVar.value.dataOut;
                }

                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GenerateImageJson$vars", [{
        name: "Image",
        attrName: "imageInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure();
        },
        complexType: CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure
    }, {
        name: "Json",
        attrName: "jsonVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GenerateImageJson$outVars", [{
        name: "Output",
        attrName: "outputOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure();
        },
        complexType: CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure
    }]);
    CKEditor5Controller.default.clientActionProxies.generateImageJson$Action = function(imageIn) {
        imageIn = (imageIn === undefined) ? new CKEditor5Model.ST_8ea03ea3df3ad962d2d174fbfdab595aStructure() : imageIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.generateImageJson$Action.bind(controller, imageIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Output: actionResults.outputOut
            };
        });
    };
});


define("CKEditor5.controller$GenerateImageResizeOptions", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.model$ST_4b2bacce020294d8c8880f1d6680cd88Structure", "CKEditor5.model$RL_6a8174118c450ccaba251515e84ce6ab"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.generateImageResizeOptions$Action = function(resizeOptionsIn, callContext) {
        return OS.Logger.startActiveSpan("GenerateImageResizeOptions", function(span) {
            if (span) {
                span.setAttribute("code.function", "GenerateImageResizeOptions");
                span.setAttribute("outsystems.function.key", "217b0106-cb9e-4e21-8ee9-87552f58bacf");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GenerateImageResizeOptions$vars"))());
                vars.value.resizeOptionsInLocal = resizeOptionsIn.clone();
                var jSONDeserializeResizeOptionListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GenerateImageResizeOptions$outVars"))());
                // JsonStart
                // Json = "{resizeOptions: ["
                vars.value.jsonVar = "{resizeOptions: [";
                // Foreach ResizeOptions
                callContext.iterationContext.registerIterationStart(vars.value.resizeOptionsInLocal);
                try {
                    var resizeOptionsIterator = callContext.iterationContext.getIterator(vars.value.resizeOptionsInLocal);
                    var resizeOptionsIndex = 0;
                    while (((resizeOptionsIndex < vars.value.resizeOptionsInLocal.length))) {
                        resizeOptionsIterator.currentRowNumber = resizeOptionsIndex;
                        // Json = Json + "{
                        //  name: '" + ResizeOptions.Current.Name + "',
                        //  label: '" + ResizeOptions.Current.Label + "',
                        //  icon: '" + ResizeOptions.Current.Icon + "'," + If + "},"
                        vars.value.jsonVar = (((((((((vars.value.jsonVar + "{\r\n  name: \'") + vars.value.resizeOptionsInLocal.getItem(resizeOptionsIndex.valueOf()).nameAttr) + "\',\r\n  label: \'") + vars.value.resizeOptionsInLocal.getItem(resizeOptionsIndex.valueOf()).labelAttr) + "\',\r\n  icon: \'") + vars.value.resizeOptionsInLocal.getItem(resizeOptionsIndex.valueOf()).iconAttr) + "\',") + (((vars.value.resizeOptionsInLocal.getItem(resizeOptionsIndex.valueOf()).valueAttr === 0)) ? ("value: null") : ((("value: \'" + (vars.value.resizeOptionsInLocal.getItem(resizeOptionsIndex.valueOf()).valueAttr).toString()) + "\'")))) + "},");
                        resizeOptionsIndex++;
                    }

                } finally {
                    callContext.iterationContext.registerIterationEnd(vars.value.resizeOptionsInLocal);
                }

                // JsonEnd
                // Json = Json + "]}"
                vars.value.jsonVar = (vars.value.jsonVar + "]}");
                // JSON Deserialize: JSONDeserializeResizeOptionList
                jSONDeserializeResizeOptionListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.jsonVar, CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab, false);
                // Output = JSONDeserializeResizeOptionList.Data
                outVars.value.outputOut = jSONDeserializeResizeOptionListVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GenerateImageResizeOptions$vars", [{
        name: "ResizeOptions",
        attrName: "resizeOptionsInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab();
        },
        complexType: CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab
    }, {
        name: "Json",
        attrName: "jsonVar",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GenerateImageResizeOptions$outVars", [{
        name: "Output",
        attrName: "outputOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab();
        },
        complexType: CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab
    }]);
    CKEditor5Controller.default.clientActionProxies.generateImageResizeOptions$Action = function(resizeOptionsIn) {
        resizeOptionsIn = (resizeOptionsIn === undefined) ? new CKEditor5Model.RL_6a8174118c450ccaba251515e84ce6ab() : resizeOptionsIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.generateImageResizeOptions$Action.bind(controller, resizeOptionsIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Output: actionResults.outputOut
            };
        });
    };
});


define("CKEditor5.controller$GetContent", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$GetContent.GetContentJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_GetContent_GetContentJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.getContent$Action = function(editorNameIn, callContext) {
        return OS.Logger.startActiveSpan("GetContent", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetContent");
                span.setAttribute("outsystems.function.key", "9af8b61e-a9c3-457f-9e26-14abb32309e1");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetContent$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                var getContentJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetContent$outVars"))());
                getContentJSResult.value = OS.Logger.startActiveSpan("GetContent", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetContent");
                        span.setAttribute("outsystems.function.key", "aa3eae48-2b8d-456a-8468-314bf57095fc");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_GetContent_GetContentJS, "GetContent", "GetContent", {
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text),
                            Content: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CKEditor5.GetContent$getContentJSResult"))();
                            jsNodeResult.contentOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Content, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Set Content
                // Content = GetContent.Content
                outVars.value.contentOut = getContentJSResult.value.contentOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetContent$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetContent$getContentJSResult", [{
        name: "Content",
        attrName: "contentOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetContent$outVars", [{
        name: "Content",
        attrName: "contentOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.getContent$Action = function(editorNameIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.getContent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Content: OS.DataConversion.JSNodeParamConverter.to(actionResults.contentOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("CKEditor5.controller$GetContent.GetContentJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.Content = window[$parameters.EditorName].getData();
    };
});


define("CKEditor5.controller$GetEditorConfiguration", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$GetEditorConfiguration.GetConfigurationJS", "CKEditor5.model$ST_3e32785ee0bb0e04b1e3245437f73bc1Structure"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_GetEditorConfiguration_GetConfigurationJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.getEditorConfiguration$Action = function(editorNameIn, callContext) {
        return OS.Logger.startActiveSpan("GetEditorConfiguration", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetEditorConfiguration");
                span.setAttribute("outsystems.function.key", "df74ec4b-8992-4e11-afb5-5faaed31e199");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorConfiguration$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                var getConfigurationJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeConfigurationVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorConfiguration$outVars"))());
                getConfigurationJSResult.value = OS.Logger.startActiveSpan("GetConfiguration", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetConfiguration");
                        span.setAttribute("outsystems.function.key", "78ba6880-a944-4d52-91df-eec9fa92300b");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_GetEditorConfiguration_GetConfigurationJS, "GetConfiguration", "GetEditorConfiguration", {
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text),
                            Configuration: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorConfiguration$getConfigurationJSResult"))();
                            jsNodeResult.configurationOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Configuration, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Execute Action: ListSort
                OS.SystemActions.listSort(outVars.value.editorConfigurationOut.pluginsAttr, function(p) {
                    return p;
                }, true, callContext);
                // JSON Deserialize: JSONDeserializeConfiguration
                jSONDeserializeConfigurationVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getConfigurationJSResult.value.configurationOut, CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure, false);
                // EditorConfiguration = JSONDeserializeConfiguration.Data
                outVars.value.editorConfigurationOut = jSONDeserializeConfigurationVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorConfiguration$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorConfiguration$getConfigurationJSResult", [{
        name: "Configuration",
        attrName: "configurationOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorConfiguration$outVars", [{
        name: "EditorConfiguration",
        attrName: "editorConfigurationOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Record,
        defaultValue: function() {
            return new CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure();
        },
        complexType: CKEditor5Model.ST_3e32785ee0bb0e04b1e3245437f73bc1Structure
    }]);
    CKEditor5Controller.default.clientActionProxies.getEditorConfiguration$Action = function(editorNameIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.getEditorConfiguration$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                EditorConfiguration: actionResults.editorConfigurationOut
            };
        });
    };
});

define("CKEditor5.controller$GetEditorConfiguration.GetConfigurationJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // define an array to hold the plugins
        var pluginList = [];
        window[$parameters.EditorName].config._config.plugins.forEach(function(plugin) {
            pluginList.push(plugin.pluginName)
        });

        // create an object to hold all the data
        var config = {
            language: window[$parameters.EditorName].config._config.language,
            toolbar: window[$parameters.EditorName].config._config.toolbar.items.join(),
            plugins: pluginList
        };

        // serialize the object for OutSystems
        $parameters.Configuration = JSON.stringify(config);
    };
});


define("CKEditor5.controller$GetEditorState", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$GetEditorState.GetReadOnlyJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_GetEditorState_GetReadOnlyJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.getEditorState$Action = function(editorNameIn, callContext) {
        return OS.Logger.startActiveSpan("GetEditorState", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetEditorState");
                span.setAttribute("outsystems.function.key", "836c664a-e148-45cc-9222-81f678b91e95");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorState$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                var getReadOnlyJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorState$outVars"))());
                getReadOnlyJSResult.value = OS.Logger.startActiveSpan("GetReadOnly", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetReadOnly");
                        span.setAttribute("outsystems.function.key", "192497a3-1d91-4883-99ec-752c921d6f60");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_GetEditorState_GetReadOnlyJS, "GetReadOnly", "GetEditorState", {
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text),
                            IsReadOnly: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CKEditor5.GetEditorState$getReadOnlyJSResult"))();
                            jsNodeResult.isReadOnlyOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsReadOnly, OS.DataTypes.DataTypes.Boolean);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Set IsReadOnly
                // IsReadOnly = GetReadOnly.IsReadOnly
                outVars.value.isReadOnlyOut = getReadOnlyJSResult.value.isReadOnlyOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorState$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorState$getReadOnlyJSResult", [{
        name: "IsReadOnly",
        attrName: "isReadOnlyOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return false;
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetEditorState$outVars", [{
        name: "IsReadOnly",
        attrName: "isReadOnlyOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.getEditorState$Action = function(editorNameIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.getEditorState$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                IsReadOnly: OS.DataConversion.JSNodeParamConverter.to(actionResults.isReadOnlyOut, OS.DataTypes.DataTypes.Boolean)
            };
        });
    };
});

define("CKEditor5.controller$GetEditorState.GetReadOnlyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        $parameters.IsReadOnly = window[$parameters.EditorName].isReadOnly;

    };
});


define("CKEditor5.controller$GetToolbarOptions", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$GetToolbarOptions.GetToolbarOptionsJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_GetToolbarOptions_GetToolbarOptionsJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.getToolbarOptions$Action = function(editorNameIn, callContext) {
        return OS.Logger.startActiveSpan("GetToolbarOptions", function(span) {
            if (span) {
                span.setAttribute("code.function", "GetToolbarOptions");
                span.setAttribute("outsystems.function.key", "64960604-34f6-4a11-8523-f2c69820b5df");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetToolbarOptions$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                var getToolbarOptionsJSResult = new OS.DataTypes.VariableHolder();
                var jSONDeserializeTextListVar = new OS.DataTypes.VariableHolder(new(OS.Controller.BaseController.getJSONDeserializeOutputType(OS.DataTypes.TextList))());
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.GetToolbarOptions$outVars"))());
                getToolbarOptionsJSResult.value = OS.Logger.startActiveSpan("GetToolbarOptions", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "GetToolbarOptions");
                        span.setAttribute("outsystems.function.key", "edafbbb4-d16f-4a11-9ed5-31fe4debe94b");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_GetToolbarOptions_GetToolbarOptionsJS, "GetToolbarOptions", "GetToolbarOptions", {
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text),
                            ToolbarOptions: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CKEditor5.GetToolbarOptions$getToolbarOptionsJSResult"))();
                            jsNodeResult.toolbarOptionsOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ToolbarOptions, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // JSON Deserialize: JSONDeserializeTextList
                jSONDeserializeTextListVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getToolbarOptionsJSResult.value.toolbarOptionsOut, OS.DataTypes.TextList, false);
                // Set ToolbarOptions
                // ToolbarOptions = JSONDeserializeTextList.Data
                outVars.value.toolbarOptionsOut = jSONDeserializeTextListVar.value.dataOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetToolbarOptions$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetToolbarOptions$getToolbarOptionsJSResult", [{
        name: "ToolbarOptions",
        attrName: "toolbarOptionsOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.GetToolbarOptions$outVars", [{
        name: "ToolbarOptions",
        attrName: "toolbarOptionsOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.RecordList,
        defaultValue: function() {
            return new OS.DataTypes.TextList();
        },
        complexType: OS.DataTypes.TextList
    }]);
    CKEditor5Controller.default.clientActionProxies.getToolbarOptions$Action = function(editorNameIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.getToolbarOptions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                ToolbarOptions: actionResults.toolbarOptionsOut
            };
        });
    };
});

define("CKEditor5.controller$GetToolbarOptions.GetToolbarOptionsJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        var toolbarOptions = Array.from(window[$parameters.EditorName].ui.componentFactory.names());

        $parameters.ToolbarOptions = JSON.stringify(toolbarOptions);
    };
});


define("CKEditor5.controller$LoadHTMLIntoContainer", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$LoadHTMLIntoContainer.SetInnerHTMLJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_LoadHTMLIntoContainer_SetInnerHTMLJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.loadHTMLIntoContainer$Action = function(idIn, contentIn, callContext) {
        return OS.Logger.startActiveSpan("LoadHTMLIntoContainer", function(span) {
            if (span) {
                span.setAttribute("code.function", "LoadHTMLIntoContainer");
                span.setAttribute("outsystems.function.key", "2a270f44-dd0e-4a89-b449-03ba4cd9a3d5");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.LoadHTMLIntoContainer$vars"))());
                vars.value.idInLocal = idIn;
                vars.value.contentInLocal = contentIn;
                OS.Logger.startActiveSpan("SetInnerHTML", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetInnerHTML");
                        span.setAttribute("outsystems.function.key", "e4f57338-f399-4da9-82cb-062b27777c31");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_LoadHTMLIntoContainer_SetInnerHTMLJS, "SetInnerHTML", "LoadHTMLIntoContainer", {
                            Content: OS.DataConversion.JSNodeParamConverter.to(vars.value.contentInLocal, OS.DataTypes.DataTypes.Text),
                            Id: OS.DataConversion.JSNodeParamConverter.to(vars.value.idInLocal, OS.DataTypes.DataTypes.Text)
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
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.LoadHTMLIntoContainer$vars", [{
        name: "Id",
        attrName: "idInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Content",
        attrName: "contentInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.loadHTMLIntoContainer$Action = function(idIn, contentIn) {
        idIn = (idIn === undefined) ? "" : idIn;
        contentIn = (contentIn === undefined) ? "" : contentIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.loadHTMLIntoContainer$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(idIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(contentIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("CKEditor5.controller$LoadHTMLIntoContainer.SetInnerHTMLJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        document.getElementById($parameters.Id).innerHTML = $parameters.Content;
    };
});


define("CKEditor5.controller$MakeId", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$MakeId.MakeIdJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_MakeId_MakeIdJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.makeId$Action = function(lengthIn, callContext) {
        return OS.Logger.startActiveSpan("MakeId", function(span) {
            if (span) {
                span.setAttribute("code.function", "MakeId");
                span.setAttribute("outsystems.function.key", "a118d14b-54e7-4be8-a56f-8617efe601ac");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.MakeId$vars"))());
                vars.value.lengthInLocal = lengthIn;
                var makeIdJSResult = new OS.DataTypes.VariableHolder();
                var outVars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.MakeId$outVars"))());
                makeIdJSResult.value = OS.Logger.startActiveSpan("MakeId", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "MakeId");
                        span.setAttribute("outsystems.function.key", "c35255ac-3814-427f-8de1-4ca4ecd09f4a");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_MakeId_MakeIdJS, "MakeId", "MakeId", {
                            Length: OS.DataConversion.JSNodeParamConverter.to(vars.value.lengthInLocal, OS.DataTypes.DataTypes.Integer),
                            Result: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
                        }, function($parameters) {
                            var jsNodeResult = new(controller.constructor.getVariableGroupType("CKEditor5.MakeId$makeIdJSResult"))();
                            jsNodeResult.resultOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Result, OS.DataTypes.DataTypes.Text);
                            return jsNodeResult;
                        }, {}, {});
                    } finally {
                        if (span) {
                            span.end();
                        }

                    }

                }, 1);
                // Set Result
                // Result = MakeId.Result
                outVars.value.resultOut = makeIdJSResult.value.resultOut;
                return outVars.value;
            } finally {
                if (span) {
                    span.end();
                }

            }

        }, 1);
    };
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.MakeId$vars", [{
        name: "Length",
        attrName: "lengthInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Integer,
        defaultValue: function() {
            return 0;
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.MakeId$makeIdJSResult", [{
        name: "Result",
        attrName: "resultOut",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.MakeId$outVars", [{
        name: "Result",
        attrName: "resultOut",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.makeId$Action = function(lengthIn) {
        lengthIn = (lengthIn === undefined) ? 0 : lengthIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.makeId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(lengthIn, OS.DataTypes.DataTypes.Integer)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {
                Result: OS.DataConversion.JSNodeParamConverter.to(actionResults.resultOut, OS.DataTypes.DataTypes.Text)
            };
        });
    };
});

define("CKEditor5.controller$MakeId.MakeIdJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        // Creates a random string
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < $parameters.Length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        $parameters.Result = result;
    };
});


define("CKEditor5.controller$SetContent", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$SetContent.SetContentJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_SetContent_SetContentJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.setContent$Action = function(editorNameIn, contentIn, callContext) {
        return OS.Logger.startActiveSpan("SetContent", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetContent");
                span.setAttribute("outsystems.function.key", "f3250157-b658-488b-a626-b0330cc06249");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.SetContent$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                vars.value.contentInLocal = contentIn;
                OS.Logger.startActiveSpan("SetContent", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetContent");
                        span.setAttribute("outsystems.function.key", "68e84e7e-86c1-4a22-8ddb-e4476369356f");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_SetContent_SetContentJS, "SetContent", "SetContent", {
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text),
                            Content: OS.DataConversion.JSNodeParamConverter.to(vars.value.contentInLocal, OS.DataTypes.DataTypes.Text)
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
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.SetContent$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "Content",
        attrName: "contentInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.setContent$Action = function(editorNameIn, contentIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        contentIn = (contentIn === undefined) ? "" : contentIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.setContent$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(contentIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("CKEditor5.controller$SetContent.SetContentJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window[$parameters.EditorName].setData($parameters.Content);
    };
});


define("CKEditor5.controller$SetEditorState", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model", "CKEditor5.controller", "CKEditor5.controller$SetEditorState.SetReadOnlyJS"], function(exports, OSRuntimeCore, CKEditor5Model, CKEditor5Controller, CKEditor5_controller_SetEditorState_SetReadOnlyJS) {
    var OS = OSRuntimeCore;
    CKEditor5Controller.default.setEditorState$Action = function(editorNameIn, isReadOnlyIn, callContext) {
        return OS.Logger.startActiveSpan("SetEditorState", function(span) {
            if (span) {
                span.setAttribute("code.function", "SetEditorState");
                span.setAttribute("outsystems.function.key", "c8514b47-76e8-4f58-90fe-6dd9b63be9b8");
                span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                span.setAttribute("outsystems.function.type", "CLIENT_ACTION");
            }

            try {
                callContext = controller.callContext(callContext);
                var vars = new OS.DataTypes.VariableHolder(new(controller.constructor.getVariableGroupType("CKEditor5.SetEditorState$vars"))());
                vars.value.editorNameInLocal = editorNameIn;
                vars.value.isReadOnlyInLocal = isReadOnlyIn;
                OS.Logger.startActiveSpan("SetReadOnly", function(span) {
                    if (span) {
                        span.setAttribute("code.function", "SetReadOnly");
                        span.setAttribute("outsystems.function.key", "efd090ef-760b-4bd4-83f4-59b2507a6eec");
                        span.setAttribute("outsystems.function.owner.name", "CKEditor5");
                        span.setAttribute("outsystems.function.owner.key", "7420e1a7-3bd0-4404-a272-0fa858992a2b");
                        span.setAttribute("outsystems.function.type", "JAVASCRIPT");
                    }

                    try {
                        return controller.safeExecuteJSNode(CKEditor5_controller_SetEditorState_SetReadOnlyJS, "SetReadOnly", "SetEditorState", {
                            IsReadOnly: OS.DataConversion.JSNodeParamConverter.to(vars.value.isReadOnlyInLocal, OS.DataTypes.DataTypes.Boolean),
                            EditorName: OS.DataConversion.JSNodeParamConverter.to(vars.value.editorNameInLocal, OS.DataTypes.DataTypes.Text)
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
    var controller = CKEditor5Controller.default;
    CKEditor5Controller.default.constructor.registerVariableGroupType("CKEditor5.SetEditorState$vars", [{
        name: "EditorName",
        attrName: "editorNameInLocal",
        mandatory: true,
        dataType: OS.DataTypes.DataTypes.Text,
        defaultValue: function() {
            return "";
        }
    }, {
        name: "IsReadOnly",
        attrName: "isReadOnlyInLocal",
        mandatory: false,
        dataType: OS.DataTypes.DataTypes.Boolean,
        defaultValue: function() {
            return true;
        }
    }]);
    CKEditor5Controller.default.clientActionProxies.setEditorState$Action = function(editorNameIn, isReadOnlyIn) {
        editorNameIn = (editorNameIn === undefined) ? "" : editorNameIn;
        isReadOnlyIn = (isReadOnlyIn === undefined) ? true : isReadOnlyIn;
        return controller.executeActionInsideJSNode(CKEditor5Controller.default.setEditorState$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(editorNameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isReadOnlyIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function(actionResults) {
            return {};
        });
    };
});

define("CKEditor5.controller$SetEditorState.SetReadOnlyJS", [], function() {
    return function($parameters, $actions, $roles, $public) {
        window[$parameters.EditorName].isReadOnly = $parameters.IsReadOnly;
    };
});


define("CKEditor5.controller", ["exports", "@outsystems/runtime-core-js", "CKEditor5.model"], function(exports, OSRuntimeCore, CKEditor5Model) {
    var OS = OSRuntimeCore;
    var CKEditor5Controller = exports;
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
            return CKEditor5Controller.default.defaultTimeout;
        }

    }

    CKEditor5Controller.default = new Controller();
});