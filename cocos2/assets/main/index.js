System.register("chunks:///_virtual/globaltype.d.ts.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "44348CnUGhPF6BsFZhpNEH2", "globaltype.d.ts", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/manager.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Component, _inheritsLoose, _defineProperty, _assertThisInitialized;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "89580Pb+YdEJ4sFpOS4PZHT", "manager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Manager = exports('Manager', (_dec = ccclass('Manager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Manager, _Component);

        function Manager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "wakeLockEnabled", false);

          _defineProperty(_assertThisInitialized(_this), "noSleep", new NoSleep());

          return _this;
        }

        var _proto = Manager.prototype;

        _proto.update = function update() {
          var toggleEl = document.querySelector("#toggle");
          toggleEl.addEventListener('click', function () {
            if (!this.wakeLockEnabled) {
              this.noSleep.enable(); // keep the screen on!

              this.wakeLockEnabled = true;
              document.body.style.backgroundColor = "green";
            } else {
              this.noSleep.disable(); // let the screen turn off.

              this.wakeLockEnabled = false;
              document.body.style.backgroundColor = "";
            }
          }, false);
        } // public scriptNoSleep : any = null!;
        // public enableNoSleep(flagSleep : boolean) {
        //     console.log("flagSleep : " + flagSleep);
        //         try{
        //             if(this.scriptNoSleep === null ) {
        //                 console.log("SCRIPT NO SLEEP IS NULL");
        //                 this.scriptNoSleep = new NoSleep();
        //             }
        //             console.log("noSleep : ", this.scriptNoSleep);
        //             if(flagSleep){
        //                 this.scriptNoSleep.enable();
        //             }
        //             else{
        //                 this.scriptNoSleep.disable();
        //             }
        //         }catch(err) {
        //             console.error("enable no sleep error : ", err);
        //         }
        //     }
        // }
        ;

        return Manager;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/manager2.ts", ['cc', './_rollupPluginModLoBabelHelpers.js'], function (exports) {
  'use strict';

  var cclegacy, _decorator, Label, UITransform, math, Component, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UITransform = module.UITransform;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "f576a3Y42lDgK1RkZxvXm51", "manager2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Manager2 = exports('Manager2', (_dec = ccclass('Manager2'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(UITransform), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Manager2, _Component);

        function Manager2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "lblWidh", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblHeight", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblGAMEWIDTH", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblGAMEHEIGHT", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "transformBg", _descriptor5, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "bgSize", void 0);

          _defineProperty(_assertThisInitialized(_this), "DESIGNWIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "DESIGNHEIGHT", 0);

          _defineProperty(_assertThisInitialized(_this), "GAMEWIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "GAMEHEIGHT", 0);

          _defineProperty(_assertThisInitialized(_this), "WIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "HEIGHT", 0);

          return _this;
        }

        var _proto = Manager2.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.WIDTH = window.innerWidth;
          this.HEIGHT = window.innerHeight;
          this.GAMEWIDTH = $("#GameCanvas").width();
          this.GAMEHEIGHT = $("#GameCanvas").height();
          this.lblWidh.string = "WIDTH : " + this.WIDTH;
          this.lblHeight.string = "HEIGHT : " + this.HEIGHT;
          this.lblGAMEWIDTH.string = "GAMEWIDTH : " + this.GAMEWIDTH;
          this.lblGAMEHEIGHT.string = "GAMEHEIGHT : " + this.GAMEHEIGHT;
          window.addEventListener('resize', function () {
            console.warn("RESIZE");
            _this2.WIDTH = window.innerWidth;
            _this2.HEIGHT = window.innerHeight;
            _this2.GAMEWIDTH = $("#GameCanvas").width();
            _this2.GAMEHEIGHT = $("#GameCanvas").height();
            _this2.lblWidh.string = "WIDTH : " + _this2.WIDTH;
            _this2.lblHeight.string = "HEIGHT : " + _this2.HEIGHT;
            _this2.lblGAMEWIDTH.string = "GAMEWIDTH : " + _this2.GAMEWIDTH;
            _this2.lblGAMEHEIGHT.string = "GAMEHEIGHT : " + _this2.GAMEHEIGHT; // if (this.resizeBackgroundFunction != null)
            //     this.resizeBackgroundFunction();

            _this2.methodeResizeCallback();
          });
          console.log("testttW >> " + $("#GameCanvas").width());
          console.log("testttH >> " + $("#GameCanvas").height());
        };

        _proto.start = function start() {
          this.DESIGNWIDTH = 736;
          this.DESIGNHEIGHT = 414;
          this.uiStartResize();
        };

        _proto.uiStartResize = function uiStartResize() {
          if (this.transformBg == null) return;
          this.bgSize = new math.Size(this.transformBg.contentSize.x, this.transformBg.contentSize.y);
          this.methodeResizeCallback();
        };

        _proto.methodeResizeCallback = function methodeResizeCallback() {
          console.log("[TKGGameManager]=>resizeCallback : ", this.transformBg);
          if (this.transformBg == null) return;
          if (this.bgSize) this.resizeBackground(this.bgSize, this.transformBg);
        };

        _proto.resizeBackground = function resizeBackground(orginalSize, target) {
          var designHeightWidth = this.DESIGNHEIGHT / this.DESIGNWIDTH;
          var canvasHeightWidth = this.GAMEHEIGHT / this.GAMEWIDTH;
          console.log("orginalSize : ", orginalSize.x + "x" + orginalSize.y);
          console.log("designHeightWidth : ", designHeightWidth);
          console.log("canvasHeightWidth : ", canvasHeightWidth);
          var mathSize = null;

          if (designHeightWidth < canvasHeightWidth) {
            // FIT WIDTH
            console.log("Fit Width");
            var widthScale = orginalSize.x / this.GAMEWIDTH;
            var heightScaled = widthScale * this.GAMEHEIGHT;
            console.log("widthScale : ", widthScale);
            console.log("heightScaled : ", heightScaled);
            mathSize = new math.Size(orginalSize.x, heightScaled);
          } else {
            // FIT HEIGHT
            console.log("Fit Height");
            var heightScale = this.DESIGNHEIGHT / this.GAMEHEIGHT;
            var widthScaled = heightScale * this.GAMEWIDTH;
            console.log("heightScale : ", heightScale);
            console.log("widthScaled : ", widthScaled);
            mathSize = new math.Size(widthScaled, orginalSize.y);
          }

          console.log("math.Size : ", mathSize);
          target.setContentSize(mathSize);
        };

        return Manager2;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblWidh", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblHeight", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblGAMEWIDTH", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblGAMEHEIGHT", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "transformBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./globaltype.d.ts.ts', './manager.ts', './manager2.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

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