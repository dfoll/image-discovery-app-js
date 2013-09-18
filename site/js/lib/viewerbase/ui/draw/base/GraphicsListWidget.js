//>>built
require({cache:{"url:esriviewer/ui/draw/base/theme/graphicsListTheme.css":".addedGraphicsListContainer{height:200px;overflow:hidden;overflow-y:auto;}.graphicsListEntryLabel{margin-left:10px;font-size:9pt;}.graphicsListLeftIcon{float:left;margin-right:5px;}.graphicsListRightIcon{float:right;margin-right:25px;}.addGraphicsActionsContainer{height:16px;margin-top:8px;}.saveGraphicsInputContainer{margin-top:3px;}","url:esriviewer/ui/draw/base/template/GrahicsListingTemplate.html":"<div>\r\n    <div class=\"addGraphicsActionsContainer\" data-dojo-attach-point=\"addGraphicsActionsContainer\">\r\n        <div class=\"graphicsListRightIcon commonIcons16 disk\" title=\"Save Graphics\"\r\n             data-bind=\"click:toggleSaveGraphics, visible:saveGraphicsIconVisible\"></div>\r\n        <div class=\"graphicsListLeftIcon commonIcons16 layerHide\" title=\"Toggle Graphics\"\r\n             data-bind=\"click:toggleAllGraphics, css:{layerShow: allGraphicsVisible}\"></div>\r\n        <div class=\"graphicsListLeftIcon commonIcons16 trash\" title=\"Remove All Graphics\"\r\n             data-dojo-attach-event=\"onclick:showConfirmRemoveAllTooltip\"\r\n             data-dojo-attach-point=\"removeAllGraphicsIcon\"\r\n                ></div>\r\n    </div>\r\n    <div class=\"saveGraphicsInputContainer\" data-bind=\"visible: saveGraphicsInputVisible\">\r\n        <input data-dojo-type=\"dijit/form/TextBox\" data-dojo-attach-event=\"onKeyUp: handleSaveGraphicsKeyUp\" data-dojo-attach-point=\"userSaveGraphicsNameInput\" placeholder=\"Enter A Label...\"/>\r\n        <span data-dojo-type=\"dijit/form/Button\" data-dojo-attach-event=\"onClick:handleSaveGraphics\">Save</span>\r\n    </div>\r\n\r\n    <div class=\"addedGraphicsListContainer\" data-dojo-attach-point=\"addedGraphicsListContainer\">\r\n        <ul data-dojo-attach-point=\"addedGraphicsList\" class=\"viewerList\" data-bind=\"foreach: addedGraphics\">\r\n            <li class=\"graphicsListEntry\">\r\n                <div title=\"Pan And Flash Graphic\"\r\n                     class=\"viewerListGenericIcon commonIcons16 magnifyingGlass\"\r\n                     data-bind=\"click:$parent.zoomToGraphic\"></div>\r\n                <div title=\"Remove Graphic\" class=\"viewerListEntryRemoveIcon commonIcons16 remove\"\r\n                     data-bind=\"click:$parent.removeGraphic\"></div>\r\n                <span class=\"graphicsListEntryLabel\" data-bind=\"text: $data.label\"></span>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"}});define("esriviewer/ui/draw/base/GraphicsListWidget",["dojo/_base/declare","xstyle/css!./theme/graphicsListTheme.css","dojo/text!./template/GrahicsListingTemplate.html","dojo/topic","../../base/UITemplatedWidget","dojo/_base/lang","dojo/on","../../tooltip/ConfirmTooltip","./model/GraphicsListViewModel","dijit/form/TextBox","dijit/form/Button"],function(_1,_2,_3,_4,_5,_6,on,_7,_8,_9,_a){return _1([_5],{templateString:_3,graphicsCount:0,saveSupported:false,allGraphicsOff:false,constructor:function(_b){_6.mixin(this,_b||{});this.typeLabelLookup={};this.typeLabelLookup[VIEWER_GLOBALS.EVENTS.MAP.TOOLS.DRAW_POINT]="Point";this.typeLabelLookup[VIEWER_GLOBALS.EVENTS.MAP.TOOLS.DRAW_POLYLINE]="Line";this.typeLabelLookup[VIEWER_GLOBALS.EVENTS.MAP.TOOLS.DRAW_POLYGON]="Polygon";this.typeLabelLookup[VIEWER_GLOBALS.EVENTS.MAP.TOOLS.DRAW_RECTANGLE]="Rectangle";this.typeLabelLookup[VIEWER_GLOBALS.EVENTS.MAP.TOOLS.DRAW_TEXT]="Text Label";},postCreate:function(){this.inherited(arguments);this.viewModel=new _8();this.viewModel.saveGraphicsIconVisible(this.saveSupported);this.viewModel.on(this.viewModel.REMOVE_ALL_GRAPHICS,_6.hitch(this,this.handleRemoveAllGraphics));this.viewModel.on(this.viewModel.REMOVE_GRAPHIC,_6.hitch(this,this.handleRemoveGraphic));ko.applyBindings(this.viewModel,this.domNode);},handleRemoveAllGraphics:function(){this.onRemoveAllGraphics();},onRemoveAllGraphics:function(){},handleRemoveGraphic:function(_c){this.onRemoveGraphic(_c);},onRemoveGraphic:function(_d){},addGraphic:function(_e){this.viewModel.addedGraphics.push({label:_e.label?_e.label:(this.typeLabelLookup[_e.type]+" "+VIEWER_UTILS.getTimeStamp()),graphic:_e.graphic});},showConfirmRemoveAllTooltip:function(){if(this.confirmDeleteAllTooltip==null){this.createConfirmDeleteBookmarkTooltip();}if(this.confirmDeleteAllTooltip){this.confirmDeleteAllTooltip.show();}},createConfirmDeleteBookmarkTooltip:function(){this.confirmDeleteAllTooltip=new _7({confirmCallback:_6.hitch(this.viewModel,this.viewModel.removeAllGraphics),aroundNode:this.removeAllGraphicsIcon,displayText:"Delete Graphics? "});this.confirmDeleteAllTooltip.on("hide",_6.hitch(this,function(){this.deleteBookmarkConfirmedCallback=null;}));},hidePopups:function(){if(this.confirmDeleteAllTooltip){this.confirmDeleteAllTooltip.hide();}},handleSaveGraphicsKeyUp:function(e){if(VIEWER_UTILS.isEnterKey(e)){this.handleSaveGraphics();}},handleSaveGraphics:function(){var _f=this.userSaveGraphicsNameInput.get("value");if(_f!=null&&_f!=""){this.onSaveGraphics(_f,this.viewModel.addedGraphics());this.viewModel.saveGraphicsInputVisible(false);this.userSaveGraphicsNameInput.set("value","");}},getGraphics:function(){var _10=this.viewModel.addedGraphics();var _11=[];for(var i=0;i<_10.length;i++){_11.push(_10[i].graphic);}return _11;},onSaveGraphics:function(_12,_13){}});});