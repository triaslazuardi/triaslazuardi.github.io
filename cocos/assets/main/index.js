System.register("chunks:///_virtual/main",["./manage.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/manage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,o,l,s,n,r,a,c,p,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,o=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){s=e.cclegacy,n=e._decorator,r=e.Label,a=e.Node,c=e.Sprite,p=e.Color,h=e.Component}],execute:function(){var u,b,g,f,S,d,E,N,L,k,w;s._RF.push({},"3c585a9f1JOQ45xOIpzEKhl","manage",void 0);var m=n.ccclass,v=n.property;e("manage",(u=m("manage"),b=v(r),g=v(a),f=v(a),S=v(c),u((N=t((E=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return t=e.call.apply(e,[this].concat(s))||this,o(t,"testLabel",N,l(t)),o(t,"nodeBtn",L,l(t)),o(t,"nodeBtnchoosefile",k,l(t)),o(t,"spriteBg",w,l(t)),t.wakeLockEnabled=!1,t.scriptNosleep=null,t.STATUSNOSLEEP=!1,t.scriptNoSleep=window.noSleep,t}i(t,e);var s=t.prototype;return s.start=function(){this.STATUSNOSLEEP="1"==sessionStorage.getItem("statusNoSleep"),this.scriptNoSleep=window.noSleep},s.onclicktest=function(){null==this.scriptNosleep&&(this.scriptNosleep=new NoSleep),this.wakeLockEnabled?(console.log("test disable"),this.scriptNosleep.disable(),this.wakeLockEnabled=!1,this.testLabel.string="isDisable A2",this.spriteBg.color=p.WHITE):(console.log("test enable"),this.scriptNosleep.enable(),this.wakeLockEnabled=!0,this.testLabel.string="isEnable A1",this.spriteBg.color=p.GREEN)},s.onclicktest2=function(){this.testLabel.string="V2",console.log("flagSleep : "+this.wakeLockEnabled);try{if(console.log("noSleep before : ",this.scriptNoSleep),this.wakeLockEnabled)this.scriptNoSleep.disable(),this.wakeLockEnabled=!1,this.testLabel.string="isDisable v2",this.spriteBg.color=p.WHITE;else{if(this.STATUSNOSLEEP){if(this.scriptNoSleep){this.scriptNoSleep.disable();var e=this.scriptNoSleep.noSleepVideo;e.parentNode.removeChild(e),this.testLabel.string="isDisable v2",this.spriteBg.color=p.WHITE}this.scriptNoSleep=new NoSleep}this.scriptNoSleep.enable(),this.wakeLockEnabled=!0,this.testLabel.string="isEnable v2",this.spriteBg.color=p.GREEN}console.log("noSleep after : ",this.scriptNoSleep)}catch(e){console.error("enable no sleep error : ",e)}},s.onChooseFile=function(){var e=document.createElement("input");e.type="file",e.click(),e.onchange=function(){var t=e.files;console.log(">> file : ",t)}},t}(h)).prototype,"testLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(E.prototype,"nodeBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(E.prototype,"nodeBtnchoosefile",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(E.prototype,"spriteBg",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=E))||d));s._RF.pop()}}}));

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