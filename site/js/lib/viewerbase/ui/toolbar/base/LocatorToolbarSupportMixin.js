//>>built
define("esriviewer/ui/toolbar/base/LocatorToolbarSupportMixin",["dojo/_base/declare","dojo/topic","dojo/_base/lang","dojo/on","dojo/dom-attr","dojo/dom-construct","dojo/dom-style","../../../base/LocationSupport","dijit/TooltipDialog","dijit/form/RadioButton","esri/geometry/Extent","esri/SpatialReference"],function(_1,_2,_3,on,_4,_5,_6,_7,_8,_9,_a,_b){return _1([_7],{pointAddressAttributeLabel:"PointAddress",candidateAttributeLocationWKID:4326,constructor:function(){this.locatorLookup={};},onLocateBlur:function(){var _c=_4.get(this.locateTextBox,"value");if(_c==""){_4.set(this.locateTextBox,"value",this.locateDefaultInput);_6.set(this.locateTextBox,"color","#878787");}},initLocatorListeners:function(){on(this.locateTextBox,"blur",_3.hitch(this,this.onLocateBlur));on(this.locateTextBox,"focus",_3.hitch(this,this.onLocateFocus));on(this.locateTextBox,"keyup",_3.hitch(this,this.onLocateTextKeyUp));on(this.locateButton,"click",_3.hitch(this,this.handleLocationSearchRequest));_2.subscribe(VIEWER_GLOBALS.EVENTS.LOCATOR.LOCATOR_ADDED,_3.hitch(this,this.handleLocatorAdded));_2.subscribe(VIEWER_GLOBALS.EVENTS.LOCATOR.LOCATOR_REMOVED,_3.hitch(this,this.handleLocatorRemoved));},loadCurrentLocators:function(){var _d=null;_2.publish(VIEWER_GLOBALS.EVENTS.LOCATOR.GET_LOCATORS,function(_e){_d=_e;});if(_d!=null&&_3.isArray(_d)&&_d.length>0){for(var i=0;i<_d.length;i++){this._addLocatorToLocatorConfiguration(_d[i].locator,_d[i].label);}}else{VIEWER_UTILS.log("No locators found for search",VIEWER_GLOBALS.LOG_TYPE.WARNING);_6.set(this.locateToolbarContainer,"display","none");}},handleLocatorAdded:function(_f){var _10=_6.get(this.locateToolbarContainer,"display");if(_10.toLowerCase()==="none"){_6.set(this.locateToolbarContainer,"display","inline");}this._addLocatorToLocatorConfiguration(_f.locator,_f.label);},_addLocatorToLocatorConfiguration:function(_11,_12){if(this.configureLocatorTooltip==null){this.createConfigureLocatorTooltip();}var _13=_11.url.toLowerCase();if(this.locatorLookup[_13]!=null){return;}var _14=new _9({name:"locatorConfigureRadioEntry"});var _15=(_12!=null&&_12!="")?_12:REG_EXP_UTILS.getServiceNameFromUrl(_11.url);var _16=_5.create("span",{innerHTML:_15,className:"locatorConfiguratioEntryLabel"});var _17=_5.create("div",{className:"locatorConfiguratioEntry"});_5.place(_14.domNode,_17);_5.place(_16,_17);_5.place(_17,this.configureLocatorContent);_6.set(this.configureLocatorNoLocatorsText,"display","none");this.locatorLookup[_13]={locator:_11,container:_17,radio:_14};var _18=0;for(var key in this.locatorLookup){_18++;}if(_18==1){_14.set("checked","true");}},handleLocatorRemoved:function(_19){if(this.locatorLookup[_19]!=null){_5.destroy(this.locatorLookup[_19].container);delete this.locatorLookup[_19];var _1a=false;for(var key in this.locatorLookup){_1a=true;break;}if(_1a){_6.set(this.configureLocatorNoLocatorsText,"display","none");}else{_6.set(this.configureLocatorNoLocatorsText,"display","block");}}},onLocateFocus:function(){var val=_4.get(this.locateTextBox,"value");if(val==this.locateDefaultInput){_4.set(this.locateTextBox,"value","");_6.set(this.locateTextBox,"color","black");}},onLocateTextKeyUp:function(e){if(VIEWER_UTILS.isEnterKey(e)){this.handleLocationSearchRequest();}},handleLocationSearchRequest:function(){var _1b=_4.get(this.locateTextBox,"value");if(_1b!=null&&_1b!=""&&_1b!=this.locateDefaultInput){var _1c;var _1d;for(var key in this.locatorLookup){_1c=this.locatorLookup[key];if(_1c.radio.get("checked")){_1d=_1c;break;}}if(_1d){this.handleLocate(_1b,_1d.locator);}}},handleLocationResponse:function(_1e){if(_3.isArray(_1e)&&_1e.length>0){var _1f=_1e[0];if(_3.isObject(_1f.attributes)){if(_1f.attributes.North_Lat!=null&&_1f.attributes.South_Lat!=null&&_1f.attributes.West_Lon!=null&&_1f.attributes.East_Lon!=null){try{var _20=parseFloat(_1f.attributes.West_Lon);var _21=parseFloat(_1f.attributes.South_Lat);var _22=parseFloat(_1f.attributes.East_Lon);var _23=parseFloat(_1f.attributes.North_Lat);var _24=new _a(_20,_21,_22,_23,new _b(this.candidateAttributeLocationWKID));_2.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.SET_EXTENT,_24);return;}catch(err){}}if(_1f.attributes.MatchLevel!=null&&_1f.location){var _25=_1f.attributes.MatchLevel;var _26=null;if(_25!=null){if(_25===this.pointAddressAttributeLabel){_26={};_26.deepest=true;}}_2.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.PAN_TO,_1f.location,_26);return;}}if(_1f.location!=null){_2.publish(VIEWER_GLOBALS.EVENTS.MAP.EXTENT.PAN_TO,_1f.location);}}},createConfigureLocatorTooltip:function(){this.configureLocatorContent=_5.create("div");this.configureLocatorNoLocatorsText=_5.create("div",{className:"noLocatorsText",innerHTML:"No Locators Configured"});_5.place(this.configureLocatorNoLocatorsText,this.configureLocatorContent);this.configureLocatorTooltip=new _8({content:this.configureLocatorContent});},toggleConfigureLocatorTooltip:function(){if(!this.configureLocatorTooltipVisible){this.showConfigureLocatorTooltip();this.configureLocatorTooltipVisible=true;}else{this.hideConfigureLocatorTooltip();this.configureLocatorTooltipVisible=false;}},showConfigureLocatorTooltip:function(){if(this.configureLocatorTooltip==null){this.createConfigureLocatorTooltip();}if(this.configureLocatorTooltip){dijit.popup.open({popup:this.configureLocatorTooltip,around:this.configureLocateButton});}},hideConfigureLocatorTooltip:function(){if(this.configureLocatorTooltip){dijit.popup.close(this.configureLocatorTooltip);}}});});