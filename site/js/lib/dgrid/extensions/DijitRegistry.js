//>>built
define("dgrid/extensions/DijitRegistry",["dojo/_base/declare","dijit/registry"],function(_1,_2){return _1(null,{buildRendering:function(){_2.add(this);this.inherited(arguments);this.domNode.setAttribute("widgetId",this.id);},startup:function(){if(this._started){return;}this.inherited(arguments);var _3=_2.getEnclosingWidget(this.domNode.parentNode);if(_3&&_3.isLayoutContainer){this._resizeHandle.remove();}},destroyRecursive:function(){this.destroy();},destroy:function(){this.inherited(arguments);_2.remove(this.id);},getChildren:function(){return [];}});});