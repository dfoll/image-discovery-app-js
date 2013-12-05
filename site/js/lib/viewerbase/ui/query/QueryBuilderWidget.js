//>>built
require({cache:{"url:esriviewer/ui/query/template/QueryBuilderTemplate.html":"<div style=\"height: 100%\">\r\n    <div data-bind=\"visible:showTabs\" class=\"defaultTabContainer addCatalogTabContainer\">\r\n        <span data-bind=\"click:showQueryBuilderInput, css: {selectedTab: queryBuilderInputVisible}\">Build Query</span>\r\n        <span data-bind=\"visible:showQueryBuilderResultsTab, click:showQueryBuilderResults, css: {selectedTab: queryBuilderResultsVisible}\">Results</span>\r\n        <span data-bind=\"visible:showQueryBuilderSymbologyTab, click:showQueryBuilderSymbology, css: {selectedTab: queryBuilderSymbologyVisible}\">Symbology</span>\r\n    </div>\r\n\r\n    <div data-bind=\"visible:queryBuilderInputVisible\" data-dojo-attach-point=\"queryBuilderInputContainer\">\r\n        <div data-bind=\"visible:showHowToQueryContent\" class=\"howToQueryContent\">\r\n            <div class=\"howToQueryHeader\">To perform a query:</div>\r\n            <div>right click a layer/service in the table of contents and select \"Query Builder\"</div>\r\n        </div>\r\n\r\n        <div data-bind=\"visible:showQueryLayerName\" class=\"queryLayerNameContainer\">\r\n            <span>Query Layer: </span>\r\n            <span data-dojo-attach-point=\"queryLayerNameLabel\"></span>\r\n        </div>\r\n        <select data-dojo-attach-point=\"queryBuilderFields\"\r\n                data-bind=\"event: {dblclick: queryFieldDoubleClick},options: queryBuilderFields ,value:selectedQueryBuilderField, optionsText: 'label', optionsValue: 'value'\"\r\n                class=\"queryBuilderFields\" size=\"7\">\r\n        </select>\r\n\r\n        <div class=\"queryBuilderButtons\">\r\n            <div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"equalsOperatorButton\"\r\n                     disabled=\"disabled\">=\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"greaterThanOperatorButton\"\r\n                     disabled=\"disabled\">&gt;</div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"lessThanOperatorButton\"\r\n                     disabled=\"disabled\">&lt;</div>\r\n                <div data-dojo-type=\"dijit/form/Button\"\r\n                     data-dojo-attach-point=\"lessThanGreaterThanOperatorButton\" disabled=\"disabled\">&lt;\r\n                    &gt;</div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"greaterThanEqualsOperatorButton\"\r\n                     disabled=\"disabled\">&gt;=\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"lessThanEqualsOperatorButton\"\r\n                     disabled=\"disabled\">&lt;=\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"likeAppenderButton\"\r\n                     disabled=\"disabled\">LIKE\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"notAppenderButton\"\r\n                     disabled=\"disabled\">NOT\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"isAppenderButton\"\r\n                     disabled=\"disabled\">IS\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"andAppenderButton\"\r\n                     disabled=\"disabled\">AND\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"orAppenderButton\"\r\n                     disabled=\"disabled\">OR\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"queryBuilderUniqueValuesToggleContainer\">\r\n            <div class=\"togglerContainer\" data-dojo-attach-event=\"onclick: toggleUniqueValuesContainer\">\r\n                <div data-dojo-attach-point=\"queryBuilderToggleUniqueValuesImg\"\r\n                     class=\"commonIcons16 up toggleQueryUniqueValuesButton\"\r\n                     title=\"Toggle Unique Values\"></div>\r\n                <span class=\"queryBuilderUniqueValuesToggleLabel\">Unique Values</span>\r\n            </div>\r\n                    <span data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"loadUniqueValuesButton\"\r\n                          style=\"float:right;margin-right: 15px;display:none\"\r\n                          data-dojo-attach-event=\"onClick: handleGetUniqueValues\">Populate</span>\r\n\r\n        </div>\r\n        <div class=\"queryBuilderUniqueValuesContainer\"\r\n             data-dojo-attach-point=\"queryBuilderUniqueValuesContainer\" style=\"display:none;text-align:right\">\r\n            <select data-dojo-attach-point=\"queryBuilderUniqueValuesSelect\" class=\"queryBuilderUniqueValues\"\r\n                    data-dojo-attach-event=\"ondblclick: addUniqueValueToQueryString\"\r\n                    size=\"7\"></select>\r\n        </div>\r\n        <div class=\"queryBuilderSqlContainer\" data-dojo-attach-point=\"queryBuilderSqlContainer\">\r\n            <div data-dojo-type=\"dijit/form/Textarea\" data-dojo-attach-point=\"queryBuilderSql\"\r\n                 disabled=\"disabled\"></div>\r\n        </div>\r\n        <div class=\"queryActionButtons\">\r\n            <div class=\"queryActionButtonsLeft\">\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"backButton\" disabled=\"disabled\"\r\n                     data-dojo-attach-event=\"onClick:stepQueryBack\"\r\n                        >\r\n                    Back\r\n                </div>\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"clearButton\"\r\n                     data-dojo-attach-event=\"onClick:clearQuery\"\r\n                        >\r\n                    Clear\r\n                </div>\r\n            </div>\r\n            <div class=\"queryActionButtonsRight\">\r\n                <div data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"submitButton\"\r\n                     data-dojo-attach-event=\"onClick:submitQuery\"\r\n                        >\r\n                    Submit\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"queryBuilderResultsContainer\" style=\"min-height:300px\"\r\n         data-dojo-attach-point=\"queryBuilderResultsContainer\"\r\n         data-bind=\"visible:queryBuilderResultsVisible\">\r\n    </div>\r\n\r\n    <div class=\"queryBuilderSymbologyContainer\" style=\"min-height:300px\"\r\n         data-dojo-attach-point=\"queryBuilderSymbologyContainer\"\r\n         data-bind=\"visible:queryBuilderSymbologyVisible\">\r\n    </div>\r\n\r\n</div>\r\n","url:esriviewer/ui/query/theme/queryBuilderTheme.css":".queryBuilderFields, .queryBuilderSqlContainer, .queryBuilderUniqueValues{width:95%;margin-left:2.5%;margin-bottom:8px;margin-top:9px;}.queryBuilderUniqueValues, .queryBuilderFields{height:75px;}.queryBuilderUniqueValues{width:95%;margin-right:2.5%;margin-bottom:8px;}.queryBuilderUniqueValues{font-size:8pt;}.queryBuilderUniqueValuesToggleLabel{font-size:9pt;}.queryBuilderUniqueValuesToggleContainer{margin-left:5px;margin-top:10px;cursor:pointer;}.queryBuilderButtons{margin:auto;text-align:center;}.queryActionButtonsLeft{float:left;margin-bottom:10px;}.queryActionButtonsRight{float:right;margin-bottom:10px;}.queryActionButtons{margin-bottom:10px;}.queryBuilderButtons .dijitButton{padding:0;margin:5px 1px;}.queryLayerNameContainer{margin-left:10px;margin-top:5px;}.toggleQueryUniqueValuesButton{float:left;}.queryBuilderWindowContent{padding-top:0 !important;}.howToQueryHeader{margin-bottom:5px;font-size:12pt;}.howToQueryContent{color:green;}"}});define("esriviewer/ui/query/QueryBuilderWidget",["dojo/_base/declare","xstyle/css!./theme/queryBuilderTheme.css","dojo/text!./template/QueryBuilderTemplate.html","dojo/has","dojo/on","dojo/topic","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/date/locale","dojo/dom-construct","../base/UITemplatedWidget","./QueryBuilderData","./model/QueryBuilderViewModel","./QueryBuilderResultsWidget","dijit/form/Textarea","dijit/form/Button","esri/tasks/query","esri/tasks/QueryTask","../draw/configure/ConfigureDrawWidget","../../map/base/DistinctValuesQueryParameters"],function(_1,_2,_3,_4,on,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15){return _1([_c],{useCustomResultGraphics:false,bindingsApplied:false,defaultUniqueValuesFieldType:"esriFieldTypeString",fieldTypeWrappers:{esriFieldTypeString:{prefix:"'",suffix:"'"},esriFieldTypeDate:{prefix:"date '",suffix:"'"},esriFieldTypeGUID:{prefix:"'",suffix:"'"}},__defaultDisplayFormats:{date:"dd-MM-yyyy"},displayFormats:{date:"dd-MM-yyyy"},_distinctLayerVersionSupported:10.1,maxResults:300,uniqueValuesDirty:false,returnGeometry:true,basicMode:true,sortUniqueValues:true,templateString:_3,queryEndpointUrl:null,constructor:function(_16){this.uniqueFieldValuesLookup={};this.queryFields=null;_9.mixin(this,_16||{});this.queryData=new _d();},initListeners:function(){this.inherited(arguments);this.connects.push(on(this.equalsOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"=")));this.connects.push(on(this.greaterThanOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,">")));this.connects.push(on(this.lessThanOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"<")));this.connects.push(on(this.lessThanGreaterThanOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"<>")));this.connects.push(on(this.greaterThanEqualsOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,">=")));this.connects.push(on(this.lessThanEqualsOperatorButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"<=")));this.connects.push(on(this.likeAppenderButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"LIKE")));this.connects.push(on(this.notAppenderButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"NOT")));this.connects.push(on(this.isAppenderButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.OPERATOR,"IS")));this.connects.push(on(this.andAppenderButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.APPENDER,"AND")));this.connects.push(on(this.orAppenderButton,"click",_9.hitch(this,this.updateQueryString,this.queryData.APPENDER,"OR")));},applyBindings:function(){if(!this.bindingsApplied){ko.applyBindings(this.viewModel,this.domNode);this.bindingsApplied=true;}},_createViewModel:function(){var _17=new _e();_17.queryBuilderSymbologyVisible.subscribe(_9.hitch(this,this.handleSymbologyVisibilityChanged));_17.queryBuilderResultsVisible.subscribe(_9.hitch(this,this.handleQueryBuilderResultsVisibilityChanged));_17.queryBuilderInputVisible.subscribe(_9.hitch(this,this.handleQueryBuilderVisibilityChanged));_17.showQueryBuilderSymbologyTab(this.useCustomResultGraphics);_17.on(_17.QUERY_FIELD_DOUBLE_CLICK,_9.hitch(this,this.addColumnToQuery,this.queryData.COLUMN));_17.selectedQueryBuilderField.subscribe(_9.hitch(this,this.handleQueryBuilderFieldChanged));return _17;},postCreate:function(){this.inherited(arguments);this.viewModel=this._createViewModel();this.applyBindings();this.queryResponseCallback=_9.hitch(this,this.handleQueryResponse);this.queryResponseErrback=_9.hitch(this,this.handleQueryError);this.operatorButtons=[this.equalsOperatorButton,this.greaterThanOperatorButton,this.lessThanOperatorButton,this.lessThanGreaterThanOperatorButton,this.greaterThanEqualsOperatorButton,this.lessThanEqualsOperatorButton,this.likeAppenderButton,this.notAppenderButton,this.isAppenderButton];this.appenderButtons=[this.andAppenderButton,this.orAppenderButton];this._initializeMode();this.createQueryBuilderResultsWidget();if(!this.queryData.isBasicMode()){this._enableAllInputs();}if(this.useCustomResultGraphics){this.createSymbologyWidget();}this.tweakUI();},_initializeMode:function(){if(this.basicMode){this.queryData.setBasicMode();this.loadBasicView();}else{this.queryData.setAdvancedMode();}},handleSymbologyVisibilityChanged:function(_18){this._handleContentAnimation(_18,this.queryBuilderSymbologyContainer);},handleQueryBuilderVisibilityChanged:function(_19){this._handleContentAnimation(_19,this.queryBuilderInputContainer);},handleQueryBuilderResultsVisibilityChanged:function(_1a){this._handleContentAnimation(_1a,this.queryBuilderResultsContainer);},createSymbologyWidget:function(){this.queryBuilderSymbologyWidget=new _14({showTextIcon:false,showEnvelopeIcon:false});this.queryBuilderSymbologyWidget.on("pointSymbolChanged",_9.hitch(this,this._handlePointSymbolChanged));this.queryBuilderSymbologyWidget.on("lineSymbolChanged",_9.hitch(this,this._handleLineSymbolChanged));this.queryBuilderSymbologyWidget.on("polygonSymbolChanged",_9.hitch(this,this._handlePolygonSymbolChanged));this.queryBuilderSymbologyWidget.placeAt(this.queryBuilderSymbologyContainer);},_handlePointSymbolChanged:function(_1b){this.queryBuilderResultsWidget.handlePointSymbolChanged(_1b);},_handleLineSymbolChanged:function(_1c){this.queryBuilderResultsWidget.handleLineSymbolChanged(_1c);},_handlePolygonSymbolChanged:function(_1d){this.queryBuilderResultsWidget.handlePolygonSymbolChanged(_1d);},_destroyResults:function(){this.queryBuilderResultsWidget.destroyResultsGrid();},_setLayerGraphicInfo:function(_1e){this.queryBuilderResultsWidget.setLayerGraphicInfo(_1e);},setMapServiceLayer:function(_1f,_20){if(_1f==null||_20==null||_1f.url==null){return;}this.viewModel.showQueryBuilderInput();this.clearQuery();this._clearQueryTasks();this._destroyResults();this.uniqueFieldValuesLookup={};this.queryEndpointVersion=_1f.version;this.queryEndpointUrl=VIEWER_UTILS.joinUrl(_1f.url,_20.id);this.viewModel.selectedQueryBuilderField("");this.viewModel.queryBuilderFields.removeAll();VIEWER_UTILS.getLayerInfoFromService(_1f.url,_20.id,_9.hitch(this,this.handleLayerInfoLoaded));this.viewModel.showHowToQueryContent(false);},setFeatureServiceLayer:function(_21){this._setQueryLayer(_21);},setImageServiceLayer:function(_22){this._setQueryLayer(_22);},_setQueryLayer:function(_23){if(_23==null||_23.fields==null||_23.url==null){return;}this.viewModel.showQueryBuilderInput();this._destroyResults();this.clearQuery();this._clearQueryTasks();this.uniqueFieldValuesLookup={};this.queryEndpointVersion=_23.version;this.queryEndpointUrl=VIEWER_UTILS.joinUrl(_23.url,"query");this.viewModel.selectedQueryBuilderField("");this.viewModel.queryBuilderFields.removeAll();this.populateLayerFields(_23);this.viewModel.showHowToQueryContent(false);},_clearQueryTasks:function(){this.uniqueValuesQueryTask=null;this.queryTask=null;},loadViewerConfigurationData:function(){var _24=null;_5.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"queryBuilder",function(_25){_24=_25;});if(_24&&_24.configuration!=null&&_9.isObject(_24.configuration)){_9.mixin(this,_24.configuration);this.returnGeometry=true;}},tweakUI:function(){if(_4("ie")<8){_8.set(this.queryBuilderSqlContainer,"marginLeft","0");}},toggleUniqueValuesContainer:function(){if(_6.contains(this.queryBuilderToggleUniqueValuesImg,"up")){var _26=null;if((this.queryBuilderFields.selectedIndex>-1)&&(this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex]!=null)){_26=this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex];}if(_26==null){this.hideUniqueValuesContent();}else{this.showUniqueValuesContent();}}else{this.hideUniqueValuesContent();}},handleLayerInfoLoaded:function(_27){if(_27&&_9.isObject(_27)){if(this.queryFields==null||(_9.isArray(this.queryFields)&&this.queryFields.length==0)){this.populateLayerFields(_27);}this._setLayerGraphicInfo(_27);}},populateLayerFields:function(_28){if(_28&&_28.fields){_7.set(this.queryLayerNameLabel,"innerHTML",_28.name);var _29=[];var i;for(i=0;i<_28.fields.length;i++){this.viewModel.queryBuilderFields.push({value:_28.fields[i].name,label:_28.fields[i].name});}this.viewModel.sortFieldNames();}},showUniqueValuesContent:function(){_6.remove(this.queryBuilderToggleUniqueValuesImg,"up");_6.add(this.queryBuilderToggleUniqueValuesImg,"down");_8.set(this.queryBuilderUniqueValuesContainer,"display","block");var _2a=null;if((this.queryBuilderFields.selectedIndex>-1)&&(this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex]!=null)){_2a=this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex];}if(this.uniqueFieldValuesLookup[_2a.value]==null){_8.set(this.loadUniqueValuesButton.domNode,"display","block");}if(this.uniqueValuesDirty){this.handleQueryBuilderFieldChanged();}},hideUniqueValuesContent:function(){_6.add(this.queryBuilderToggleUniqueValuesImg,"up");_6.remove(this.queryBuilderToggleUniqueValuesImg,"down");_8.set(this.queryBuilderUniqueValuesContainer,"display","none");_8.set(this.loadUniqueValuesButton.domNode,"display","none");},handleGetUniqueValues:function(){if(this.queryBuilderFields.selectedIndex<0||this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex]===null){return;}var _2b=this.queryBuilderFields.options[this.queryBuilderFields.selectedIndex].value;if(_2b!=null&&_2b!=""){this.getUniqueValuesForField(_2b,_9.hitch(this,this._setUniqueQueryValues));}},reset:function(){this.queryData.currentMode=this.BASIC_MODE;this.queryData.queryCacheArray=[];this.queryData.clearQueryCache();this.queryData.setQueryMode(this.queryData.COLUMN);this.loadBasicView();},getUniqueValuesForField:function(_2c,_2d){if(_2d==null||!_9.isFunction(_2d)){return;}if(this.uniqueFieldValuesLookup[_2c]!=null){_2d(this.uniqueFieldValuesLookup[_2c]);}else{if(_2c!=null){if(this.queryEndpointUrl!=null){var _2e=_9.hitch(this,this._handleUniqueValuesResponse,_2d,_2c);if(this.queryEndpointVersion<this._distinctLayerVersionSupported){if(this.uniqueValuesQueryTask==null){this._createUniqueValuesQueryTask();}}if(this.uniqueValuesQueryTask!=null){var _2f=new _12();_2f.where="1=1";_2f.outFields=[_2c];this.uniqueValuesQueryTask.execute(_2f,_2e);}else{var _30=new _15({});_5.publish(VIEWER_GLOBALS.EVENTS.MAP.LAYERS.GET_DISTINCT_FIELD_VALUES,{callback:_2e,layer:{url:this.queryEndpointUrl},distinctField:_2c,processResponse:false});}}}}},stepQueryBack:function(){var _31=this.queryData.popLastQuery();if(_31==null){return;}if(this.queryData.isBasicMode()){var _32=this.queryData.getQueryMode();if(this.queryData.isBasicMode()){this.disableQueryInput();this.disableUniqueValueSelect();this.disableOperatorButtons();this.disableAppenderButtons();this.disableColumnSelector();}if(_31==""){this.noCacheQueryStringRevert(_31,this.queryData.RESET_BASIC);}else{if(_32==this.queryData.OPERATOR){this.enableOperatorButtons();this.queryData.setQueryMode(this.queryData.COLUMN);}else{if(_32==this.queryData.APPENDER){if(this.queryData.isBasicMode()){this.enableAppenderButtons();this.enableQueryInput();this.enableUniqueValueSelect();}this.queryData.setQueryMode(this.queryData.USER_INPUT);}else{if(_32==this.queryData.COLUMN){if(this.queryData.isBasicMode()){this.enableColumnSelector();}this.queryData.setQueryMode(this.queryData.APPENDER);}else{if(_32==this.queryData.USER_INPUT){if(this.queryData.isBasicMode()){this.enableQueryInput();this.enableUniqueValueSelect();this.enableAppenderButtons();}this.queryData.setQueryMode(this.queryData.OPERATOR);}}}}}}else{this.setQueryString(_31);}if(!this.queryData.hasMoreCachedQueries()){this.backButton.attr("disabled",true);}else{if(this.queryData.hasMoreCachedQueries()){this.backButton.attr("disabled",false);}}this.setQueryString(_31);},_enableAllInputs:function(){this.enableAppenderButtons();this.enableOperatorButtons();this.enableQueryInput();this.enableUniqueValueSelect();this.enableColumnSelector();},addOptions:function(_33){for(var i=0;i<_33.length;i++){var _34=_33[i];this.addOption(_34);}},addOption:function(_35){if(_35!=null&&_9.isString(_35)){_35={label:_35,value:_35};}if(_35.value!=null&&_35.label!=null){this.viewModel.queryBuilderFields.push(_35);}},handleQueryBuilderFieldChanged:function(){if(this.uniqueValuesContainerVisible()){if(this.queryBuilderFields==null||this.queryBuilderFields.selectedIndex==null||this.queryBuilderFields[this.queryBuilderFields.selectedIndex]==null){this._clearUniqueQueryValues();this.uniqueValuesDirty=false;return;}var _36=this.queryBuilderFields[this.queryBuilderFields.selectedIndex].value;if(this.uniqueFieldValuesLookup[_36]!=null){this._setUniqueQueryValues(this.uniqueFieldValuesLookup[_36]);}else{this._clearUniqueQueryValues();}this.uniqueValuesDirty=false;}else{this.uniqueValuesDirty=true;this._clearUniqueQueryValues();}},addUniqueValueToQueryString:function(){var _37=_7.get(this.queryBuilderUniqueValuesSelect,"value");this.updateQueryString(this.queryData.USER_INPUT,_37);},addColumnToQuery:function(_38){var _39=this.viewModel.selectedQueryBuilderField();if(_39==null){return;}this.updateQueryString(_38,_39);},updateQueryString:function(_3a,_3b){var _3c=this.queryBuilderSql.value?this.queryBuilderSql.value:"";this.queryData.cacheQuery(_3c);this.backButton.attr("disabled",false);var _3d="";if(_3c){_3d=_3c;if(!(/ $/.test(_3d))){_3d+=" ";}}this.queryBuilderSql.attr("value",_3d+=_3b);if(this.queryData.isBasicMode()){this.setViewMode(_3a);}},setViewMode:function(_3e){this.queryData.setQueryMode(_3e);if(_3e==this.queryData.OPERATOR){if(this.queryData.isBasicMode()){this.disableOperatorButtons();this.enableQueryInput();this.enableUniqueValueSelect();this.enableAppenderButtons();this.enableSqlTextArea();}var _3f=this.queryBuilderSql.attr("value");this.queryBuilderSql.attr("value",_3f+" ");}else{if(_3e==this.queryData.APPENDER){if(this.queryData.isBasicMode()){this.disableQueryInput();this.disableUniqueValueSelect();this.disableAppenderButtons();this.enableColumnSelector();}}else{if(_3e==this.queryData.COLUMN){if(this.queryData.isBasicMode()){this.disableColumnSelector();this.enableOperatorButtons();}}else{if(_3e==this.queryData.RESET_BASIC){this.loadBasicView();}}}}},enableQueryInput:function(){this.queryBuilderSql.attr("disabled",false);},disableQueryInput:function(){this.queryBuilderSql.attr("disabled",true);},enableUniqueValueSelect:function(){this.queryBuilderUniqueValuesSelect.disabled=false;},disableUniqueValueSelect:function(){this.queryBuilderUniqueValuesSelect.disabled=true;},disableAppenderButtons:function(){for(var i=0;i<this.appenderButtons.length;i++){this.appenderButtons[i].attr("disabled",true);}},enableAppenderButtons:function(){for(var i=0;i<this.appenderButtons.length;i++){this.appenderButtons[i].attr("disabled",false);}},disableOperatorButtons:function(){for(var i=0;i<this.operatorButtons.length;i++){this.operatorButtons[i].attr("disabled",true);}},enableOperatorButtons:function(){for(var i=0;i<this.operatorButtons.length;i++){this.operatorButtons[i].attr("disabled",false);}},disableColumnSelector:function(){this.queryBuilderFields.disabled=true;},enableColumnSelector:function(){this.queryBuilderFields.disabled=false;},clearQuery:function(){this.queryData.clearQueryCache();this.queryData.setQueryMode(this.queryData.COLUMN);if(this.queryData.isBasicMode()){this.loadBasicView();}else{this.queryBuilderSql.attr("value","");}this.queryBuilderResultsWidget.clearResults();},loadBasicView:function(){this.queryBuilderSql.attr("value","");if(this.queryData.isBasicMode()){this.enableColumnSelector();this.disableAppenderButtons();this.disableOperatorButtons();this.disableQueryInput();this.disableUniqueValueSelect();}},noCacheQueryStringRevert:function(_40,_41){this.setViewMode(_41);this.setQueryString(_40);},setQueryString:function(_42){this.queryBuilderSql.attr("value",_42);},enableSqlTextArea:function(){this.queryBuilderSql.focus();},_clearUniqueQueryValues:function(){_b.empty(this.queryBuilderUniqueValuesSelect);if(this.uniqueValuesContainerVisible()){_8.set(this.loadUniqueValuesButton.domNode,"display","block");}},_setUniqueQueryValues:function(_43){if(!this.sortUniqueValues){this._setUniqueQueryValuesUnsorted(_43);}else{this._setUniqueQueryValuesSorted(_43);}_8.set(this.loadUniqueValuesButton.domNode,"display","none");},_setUniqueQueryValuesSorted:function(_44){this._clearUniqueQueryValues();var _45=[];for(var key in _44){var _46=document.createElement("option");_46.text=key;_46.value=_44[key];_45.push({option:_46,name:key});}if(this.sortUniqueValues){_45.sort(function(a,b){return a.name>b.name;});for(var i=0;i<_45.length;i++){try{this.queryBuilderUniqueValuesSelect.add(_45[i].option,this.queryBuilderUniqueValuesSelect.options[null]);}catch(e){this.queryBuilderUniqueValuesSelect.add(_45[i].option,null);}}}_8.set(this.loadUniqueValuesButton.domNode,"display","none");},_setUniqueQueryValuesUnsorted:function(_47){this._clearUniqueQueryValues();for(var key in _47){if(!this.sortUniqueValues){var _48=_b.create("option",{"value":_47[key],"innerHTML":key});_b.place(_48,this.queryBuilderUniqueValuesSelect);}}},_handleUniqueValuesResponse:function(_49,_4a,_4b){if(_4b&&_4b.features){var i;if(_4a==null){_4a=(_4b&&_4b.fields!=null&&_9.isArray(_4b.fields)&&_4b.fields.length>0)?_4b.fields[0].name:"UNKNOWN";}var _4c=null;for(i=0;i<_4b.fields.length;i++){if(_4b.fields[i].name===_4a){_4c=_4b.fields[i].type;break;}}if(_4c==null){_5.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"There was an error retrieving unique fields.");return;}var _4d={};for(i=0;i<_4b.features.length;i++){var _4e=_4b.features[i];if(_4e.attributes[_4a]!=null){var _4f=_4e.attributes[_4a];var _50=_4f;if(_4c==VIEWER_GLOBALS.ESRI_FIELD_TYPES.DATE){_50=this._formatDate(_4f);_4f=_50;}else{_4f=_4f.toString().replace(/'/g,"\\/");}if(_4f!=null){var _51=(this.fieldTypeWrappers[_4c]!=null)?this.fieldTypeWrappers[_4c].prefix:"";var _52=(this.fieldTypeWrappers[_4c]!=null)?this.fieldTypeWrappers[_4c].suffix:"";if(_4d[_50]==null){_4d[_50]=_51+_4f+_52;}}}}this.uniqueFieldValuesLookup[_4a]=_4d;}if(_49!=null&&_9.isFunction(_49)){_49(_4d);}},_formatDate:function(_53){var _54=new Date(_53);var _55=this.displayFormats.date!=null?this.displayFormats.date:this.__defaultDisplayFormats.date;return _a.format(_54,{selector:"date",datePattern:_55});},_createUniqueValuesQueryTask:function(){this.uniqueValuesQueryTask=new _13(this.queryEndpointUrl);},submitQuery:function(){var _56=this.queryBuilderSql.attr("value");if(_56==""){return;}if(this.queryTask==null){this.queryTask=new _13(this.queryEndpointUrl);}var _57=new _12();_57.outFields=["*"];_57.where=_56;var _58;_5.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.GET_EXTENT,function(ext){_58=ext;});if(_58!=null&&_58.spatialReference!=null){_57.outSpatialReference={wkid:_58.spatialReference.wkid};}_57.returnGeometry=this.returnGeometry;if(this.queryTask){VIEWER_UTILS.log("Performing SQL query:",VIEWER_GLOBALS.LOG_TYPE.INFO);VIEWER_UTILS.log(_56,VIEWER_GLOBALS.LOG_TYPE.INFO);this.queryTask.execute(_57,this.queryResponseCallback,this.queryResponseErrback);}},handleQueryResponse:function(_59){this.viewModel.showQueryBuilderResults();this.queryBuilderResultsWidget.handleQueryResponse(_59);},handleQueryError:function(){VIEWER_UTILS.log("There was an error performing query. Check your SQL",VIEWER_GLOBALS.LOG_TYPE.ERROR);_5.publish(VIEWER_GLOBALS.EVENTS.MESSAGING.SHOW,"There was an error performing query. Check your SQL");},uniqueValuesContainerVisible:function(){var _5a=_8.get(this.queryBuilderUniqueValuesContainer,"display");return _5a.toLowerCase()==="block";},createQueryBuilderResultsWidget:function(){if(this.queryBuilderResultsWidget==null){this.queryBuilderResultsWidget=new _f({maxResults:this.maxResults});this.queryBuilderResultsWidget.placeAt(this.queryBuilderResultsContainer);}},clearGraphics:function(){if(this.queryBuilderResultsWidget&&_9.isFunction(this.queryBuilderResultsWidget.clearGraphics)){this.queryBuilderResultsWidget.clearGraphics();}}});});