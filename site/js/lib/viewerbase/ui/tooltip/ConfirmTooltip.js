//>>built
define("esriviewer/ui/tooltip/ConfirmTooltip",["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/dom-construct","dijit/TooltipDialog","../base/UIWidget"],function(_1,_2,on,_3,_4,_5){return _1([_5],{optionClassName:"confirmTooltipOptionText",contentHeaderLabelClassName:"confirmTooltipContentLbl",defaultYesLabel:"Yes",defaultNoLabel:"No",defaultDisplayText:"Confirm:",visible:false,constructor:function(_6){this.confirmCallback=null;_2.mixin(this,_6||{});this._createTooltip();},getYesLabel:function(){return this.yesLabel==null?this.defaultYesLabel:this.yesLabel;},getNoLabel:function(){return this.noLabel==null?this.defaultNoLabel:this.noLabel;},getDisplayText:function(){return this.displayText==null?this.defaultDisplayText:this.displayText;},getConfirmCallback:function(){return this.confirmCallback;},hasConfirmCallback:function(){return this.confirmCallback!=null&&_2.isFunction(this.confirmCallback);},onTooltipCreated:function(_7){},setAtMouseEvent:function(_8){this.aroundNode=null;this.mouseEvent=_8;},setAroundNode:function(_9){this.aroundNode=_9;this.mouseEvent=null;},hasAroundNode:function(){return this.aroundNode!=null;},hasMouseEvent:function(){return this.mouseEvent!=null;},_createTooltip:function(){if(!this.hasConfirmCallback()){this.onError("must provide a confirm callback");return;}var _a=_3.create("div");var _b=_3.create("span",{innerHTML:this.getDisplayText(),className:this.contentHeaderLabelClassName});var _c=_3.create("span",{innerHTML:this.getYesLabel(),className:this.optionClassName});var _d=_3.create("span",{innerHTML:this.getNoLabel(),className:this.optionClassName});_3.place(_b,_a);_3.place(_c,_a);_3.place(_d,_a);this.tooltip=new _4({content:_a});var _e=this.getConfirmCallback();var _f=_2.hitch(this,function(){this.confirmCallback();this.hide();});on(_c,"click",_f);on(_d,"click",_2.hitch(this,this.hide));this.onTooltipCreated(this.tooltip);},show:function(){if(!this.hasAroundNode()&&!this.hasMouseEvent()){this.onError("No Position passed for popup");return;}var _10={popup:this.tooltip};if(this.aroundNode){_10.around=this.aroundNode;}if(this.mouseEvent){_10.x=(this.mouseEvent.pageX!=null?this.mouseEvent.pageX:this.mouseEvent.clientX)+5;_10.y=(this.mouseEvent.pageY!=null?this.mouseEvent.pageY:this.mouseEvent.clientY)+5;}if(this.tooltip){dijit.popup.open(_10);this.visible=true;}},hide:function(){if(this.tooltip){dijit.popup.close(this.tooltip);this.onHide();this.visible=false;}},onHide:function(){},onError:function(_11){}});});