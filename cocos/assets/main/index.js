System.register("chunks:///_virtual/main",["./manage.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/manage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,l,o,n,s,r,a,c,p,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,l=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,s=e._decorator,r=e.Label,a=e.Node,c=e.Sprite,p=e.Color,u=e.screen,h=e.Component}],execute:function(){var b,f,g,S,d,E,N,L,k,w,m;n._RF.push({},"3c585a9f1JOQ45xOIpzEKhl","manage",void 0);var v=s.ccclass,y=s.property;e("manage",(b=v("manage"),f=y(r),g=y(a),S=y(a),d=y(c),b((L=t((N=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return t=e.call.apply(e,[this].concat(n))||this,l(t,"testLabel",L,o(t)),l(t,"nodeBtn",k,o(t)),l(t,"nodeBtnchoosefile",w,o(t)),l(t,"spriteBg",m,o(t)),t.wakeLockEnabled=!1,t.scriptNosleep=null,t.STATUSNOSLEEP=!1,t.scriptNoSleep=window.noSleep,t}i(t,e);var n=t.prototype;return n.start=function(){this.STATUSNOSLEEP="1"==sessionStorage.getItem("statusNoSleep"),this.scriptNoSleep=window.noSleep},n.onclicktest=function(){null==this.scriptNosleep&&(this.scriptNosleep=new NoSleep),this.wakeLockEnabled?(console.log("test disable"),this.scriptNosleep.disable(),this.wakeLockEnabled=!1,this.testLabel.string="isDisable A2",this.spriteBg.color=p.WHITE):(console.log("test enable"),this.scriptNosleep.enable(),this.wakeLockEnabled=!0,this.testLabel.string="isEnable A1",this.spriteBg.color=p.GREEN)},n.onclicktest2=function(){this.testLabel.string="V2",console.log("flagSleep : "+this.wakeLockEnabled);try{if(console.log("noSleep before : ",this.scriptNoSleep),this.wakeLockEnabled)this.scriptNoSleep.disable(),this.wakeLockEnabled=!1,this.testLabel.string="isDisable v2",this.spriteBg.color=p.WHITE;else{if(this.STATUSNOSLEEP){if(this.scriptNoSleep){this.scriptNoSleep.disable();var e=this.scriptNoSleep.noSleepVideo;e.parentNode.removeChild(e),this.testLabel.string="isDisable v2",this.spriteBg.color=p.WHITE}this.scriptNoSleep=new NoSleep}this.scriptNoSleep.enable(),this.wakeLockEnabled=!0,this.testLabel.string="isEnable v2",this.spriteBg.color=p.GREEN}console.log("noSleep after : ",this.scriptNoSleep)}catch(e){console.error("enable no sleep error : ",e)}},n.onChooseFile=function(){var e=document.createElement("input");e.type="file",e.click(),e.onchange=function(){var t=e.files;console.log(">> file : ",t)}},n.onResizeScreen=function(){console.log("resizeScreen / fullscreen"),u.fullScreen()?u.exitFullScreen():u.requestFullScreen()},t}(h)).prototype,"testLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(N.prototype,"nodeBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(N.prototype,"nodeBtnchoosefile",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=t(N.prototype,"spriteBg",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=N))||E));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});