//>>built
define("esriviewer/ui/print/PrintWidget",["dojo/_base/declare","dojo/topic","dojo/dom-construct","dojo/_base/lang","esri/dijit/Print","../base/UIWidget"],function(_1,_2,_3,_4,_5,_6){return _1([_6],{printTaskUrl:"",postCreate:function(){this.inherited(arguments);var _7=_3.create("div",{className:"defaultFontSize defaultFont printWarning",innerHTML:"Note: Print Only preserves point/line/polygon graphics."});_3.place(_7,this.domNode);var _8=_3.create("div");_3.place(_8,this.domNode);var _9;_2.publish(VIEWER_GLOBALS.EVENTS.MAP.GET,function(mR){_9=mR;});this.printer=new _5({map:_9,url:this.printTaskUrl},_8);this.printer.startup();},loadViewerConfigurationData:function(){this.inherited(arguments);var _a=null;_2.publish(VIEWER_GLOBALS.EVENTS.CONFIGURATION.GET_ENTRY,"printWidget",function(_b){_a=_b;});if(_a&&_4.isObject(_a)&&_a.printTaskUrl){this.printTaskUrl=_a.printTaskUrl;}}});});