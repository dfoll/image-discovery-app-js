//>>built
define("esriviewer/ui/zoomto/ZoomToWidgetWindow",["dojo/_base/declare","dojo/topic","dojo/_base/lang","dojo/dom-style","../window/WindowWidget"],function(_1,_2,_3,_4,_5,_6){return _1([_5],{defaultPositioning:{x:10,y:240},windowWidth:"275px",windowHeaderText:"Zoom To",windowIconAltText:"Zoom To",windowIconClass:"commonIcons16 magnifyingGlass",positioningParamName:"zoomTo",initListeners:function(){this.inherited(arguments);this.subscribes.push(_2.subscribe(VIEWER_GLOBALS.EVENTS.WINDOW.ZOOM_TO.SHOW,_3.hitch(this,this.show)));this.subscribes.push(_2.subscribe(VIEWER_GLOBALS.EVENTS.WINDOW.ZOOM_TO.HIDE,_3.hitch(this,this.hide)));this.subscribes.push(_2.subscribe(VIEWER_GLOBALS.EVENTS.WINDOW.ZOOM_TO.TOGGLE,_3.hitch(this,this.toggle)));this.firstShowListener=this.on("firstWindowShow",_3.hitch(this.handleFirstWindowShow));},handleFirstWindowShow:function(){this.firstShowListener.remove();require(["esriviewer/ui/zoomto/ZoomToWidget"],_3.hitch(this,function(_7){this.zoomToWidget=new _7();this.setContent(this.zoomToWidget.domNode);}));}});});