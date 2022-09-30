System.register("chunks:///_virtual/main",["./manage.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/manage.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,o,l,r,a,s,c,u,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){l=e.cclegacy,r=e._decorator,a=e.Label,s=e.Node,c=e.Sprite,u=e.Color,p=e.Component}],execute:function(){var b,f,h,g,d,y,m,k,L,w,E;l._RF.push({},"3c585a9f1JOQ45xOIpzEKhl","manage",void 0);var v=r.ccclass,B=r.property;e("manage",(b=v("manage"),f=B(a),h=B(s),g=B(s),d=B(c),b((k=t((m=function(e){function t(){for(var t,n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=e.call.apply(e,[this].concat(l))||this,i(t,"testLabel",k,o(t)),i(t,"nodeBtn",L,o(t)),i(t,"nodeBtnchoosefile",w,o(t)),i(t,"spriteBg",E,o(t)),t.wakeLockEnabled=!1,t.scriptNosleep=null,t}n(t,e);var l=t.prototype;return l.start=function(){},l.onclicktest=function(){null==this.scriptNosleep&&(this.scriptNosleep=new NoSleep),this.wakeLockEnabled?(console.log("test disable"),this.scriptNosleep.disable(),this.wakeLockEnabled=!1,this.testLabel.string="isDisable A2",this.spriteBg.color=u.WHITE):(console.log("test enable"),this.scriptNosleep.enable(),this.wakeLockEnabled=!0,this.testLabel.string="isEnable A1",this.spriteBg.color=u.GREEN)},l.onChooseFile=function(){var e=document.createElement("input");e.type="file",e.click(),e.onchange=function(){var t=e.files;console.log(">> file : ",t)}},t}(p)).prototype,"testLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(m.prototype,"nodeBtn",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(m.prototype,"nodeBtnchoosefile",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(m.prototype,"spriteBg",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=m))||y));l._RF.pop()}}}));

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