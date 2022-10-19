System.register("chunks:///_virtual/ChooseFile.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "03ed0x1xXlHp6rlHx5E29f0", "ChooseFile", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ChooseFile = exports('ChooseFile', (_dec = ccclass('ChooseFile'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ChooseFile, _Component);

        function ChooseFile() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "isDonechange", false);

          return _this;
        }

        var _proto = ChooseFile.prototype;

        _proto.onClickFileFromCocos = function onClickFileFromCocos() {
          this.isDonechange = true;
          var input = document.createElement('input');
          input.type = 'file';
          input.click();
          console.log("input 1 >> ", input);

          input.onchange = function () {
            // if(this.isDonechange) return
            // this.isDonechange = true;
            var file = input.files;
            console.log("is change file : ", file); // alert("is change file : " + file);
          };
        };

        return ChooseFile;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimationGift.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Sprite, tween, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "1195aGycG1D1LAIjOfQKh5O", "AnimationGift", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AnimationGift = exports('AnimationGift', (_dec = ccclass('AnimationGift'), _dec2 = property(Sprite), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnimationGift, _Component);

        function AnimationGift() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "spriteAnimation", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "listSpriteFrame", []);

          _defineProperty(_assertThisInitialized(_this), "tweenAnimation", null);

          _defineProperty(_assertThisInitialized(_this), "currentSpriteFrame", 0);

          _defineProperty(_assertThisInitialized(_this), "spriteFramePerSecond", 0.07);

          _defineProperty(_assertThisInitialized(_this), "isLifeCycle", false);

          _defineProperty(_assertThisInitialized(_this), "lifeCycle", 0);

          _defineProperty(_assertThisInitialized(_this), "lifeCycleLimit", 4);

          _defineProperty(_assertThisInitialized(_this), "callback", null);

          return _this;
        }

        var _proto = AnimationGift.prototype;

        _proto.startAnimateGift = function startAnimateGift(sa, sfName) {
          this.isLifeCycle = false;
          this.listSpriteFrame = [];
          var prefix = sfName;
          var suffix = '-min';

          for (var index = 0; index < 50; index++) {
            var sf = sa.getSpriteFrame(prefix + index + suffix);
            if (sf) this.listSpriteFrame.push(sf);
          }

          this.startAnimate();
        };

        _proto.startAnimate = function startAnimate(callback) {
          var _this2 = this;

          if (callback === void 0) {
            callback = null;
          }

          this.callback = null;
          this.stopAnimate();
          this.callback = callback;
          this.node.active = true;
          this.tweenAnimation = tween(this.spriteAnimation).call(function (sprite) {
            sprite.spriteFrame = _this2.listSpriteFrame[_this2.currentSpriteFrame];
            _this2.currentSpriteFrame++;

            if (_this2.currentSpriteFrame >= _this2.listSpriteFrame.length) {
              _this2.currentSpriteFrame = 0;
              _this2.lifeCycle++;
            }

            if (_this2.isLifeCycle && _this2.lifeCycle >= _this2.lifeCycleLimit) {
              _this2.stopAnimate();
            }
          }).delay(this.spriteFramePerSecond).union().repeatForever().start();
        };

        _proto.stopAnimate = function stopAnimate() {
          if (this.tweenAnimation != null) {
            this.tweenAnimation.stop();
          }

          this.currentSpriteFrame = 0;
          this.lifeCycle = 0;
          if (this.node) this.node.active = false;

          if (this.callback != null) {
            this.callback();
          }

          this.callback = null;
        };

        return AnimationGift;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteAnimation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

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

System.register("chunks:///_virtual/manager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
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

System.register("chunks:///_virtual/giftManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AnimationGift.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteAtlas, Component, AnimationGift;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }, function (module) {
      AnimationGift = module.AnimationGift;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "9ac37YLdwVLzpAtp3c2TgwK", "giftManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GiftManager = exports('GiftManager', (_dec = ccclass('GiftManager'), _dec2 = property(AnimationGift), _dec3 = property(SpriteAtlas), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GiftManager, _Component);

        function GiftManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "animationGift", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spriteAtlasT", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "nameGift", ["beer", "cigarettes", "wine", "burger", "pizza", "cigar", "tea", "icecream"]);

          return _this;
        }

        var _proto = GiftManager.prototype;

        _proto.startGiftAnimation = function startGiftAnimation() {
          for (var i in this.animationGift) {
            console.log("tesst : " + i);
            this.animationGift[i].startAnimateGift(this.spriteAtlasT[i], this.nameGift[i].toString());
          } // this.animationGift.startAnimateGift(this.spriteAtlasT[0], "beer");
          // this.animationGift1.startAnimateGift(this.spriteAtlasT[1], "cigarettes");
          // this.animationGift2.startAnimateGift(this.spriteAtlasT[2], "wine");
          // this.animationGift3.startAnimateGift(this.spriteAtlasT[3], "burger");
          // this.animationGift4.startAnimateGift(this.spriteAtlasT[4], "pizza");
          // this.animationGift5.startAnimateGift(this.spriteAtlasT[5], "cigar");
          // this.animationGift6.startAnimateGift(this.spriteAtlasT[6], "tea");
          // this.animationGift7.startAnimateGift(this.spriteAtlasT[7], "icecream");

        };

        return GiftManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animationGift", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteAtlasT", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/manager2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './giftManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _defineProperty, _assertThisInitialized, _initializerDefineProperty, cclegacy, _decorator, Label, UITransform, Sprite, Color, color, Button, math, Component, GiftManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Color = module.Color;
      color = module.color;
      Button = module.Button;
      math = module.math;
      Component = module.Component;
    }, function (module) {
      GiftManager = module.GiftManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

      cclegacy._RF.push({}, "f576a3Y42lDgK1RkZxvXm51", "manager2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Manager2 = exports('Manager2', (_dec = ccclass('Manager2'), _dec2 = property(GiftManager), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(UITransform), _dec8 = property(Sprite), _dec9 = property(Color), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Manager2, _Component);

        function Manager2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scriptGiftManager", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblWidh", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblHeight", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblGAMEWIDTH", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "lblGAMEHEIGHT", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "transformBg", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "bgSize", void 0);

          _defineProperty(_assertThisInitialized(_this), "DESIGNWIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "DESIGNHEIGHT", 0);

          _defineProperty(_assertThisInitialized(_this), "GAMEWIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "GAMEHEIGHT", 0);

          _defineProperty(_assertThisInitialized(_this), "WIDTH", 0);

          _defineProperty(_assertThisInitialized(_this), "HEIGHT", 0);

          _initializerDefineProperty(_assertThisInitialized(_this), "imageTest", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "colorRand", _descriptor8, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "nameGift", ["beer", "cigarettes", "wine", "burger", "pizza", "cigar", "tea", "icecream"]);

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
          var _this3 = this;

          this.DESIGNWIDTH = 736;
          this.DESIGNHEIGHT = 414;
          this.uiStartResize(); //test animation 

          setInterval(function () {
            _this3.changeColor();
          }, 1000);
          setTimeout(function () {
            if (_this3.scriptGiftManager != null) _this3.scriptGiftManager.startGiftAnimation();
          }, 1000);
        };

        _proto.changeColor = function changeColor() {
          this.imageTest.color = this.colorRand[Math.floor(Math.random() * this.colorRand.length)];
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

        _proto.onClickFilefromHtml = function onClickFilefromHtml() {
          // let input = document.createElement('input');
          // input.type = 'file';
          // input.click();
          // input.onchange = () => {
          //     let file = input.files;
          //     console.log("input >> ", file![0]);
          //     // if (file!.length > 0) {
          //     //     this.labelAvatarChoose.string = file![0].name;
          //     //     this.fileUpload = file![0];
          //     // } 
          // } 
          creatFileDoc();
        };

        _proto.onClickFileFromCocos = function onClickFileFromCocos() {
          //    let input = document.createElement('input');
          //     input.type = 'file';
          // input.click();
          // console.log("input 1 >> ", input);
          // input.onchange = () => {
          //     let file = input.files;
          //     console.log("input >> ", file![0]);
          // } 
          var input2 = new ElementDoc('input', 'file').docInput; // input.docInput.click();

          console.log("input 2 >> ", input2);
        };

        return Manager2;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scriptGiftManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblWidh", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblHeight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lblGAMEWIDTH", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lblGAMEHEIGHT", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "transformBg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "imageTest", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "colorRand", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [color(255, 255, 50, 255), color(255, 0, 0, 255), color(0, 102, 0, 255), color(0, 255, 255, 255), color(255, 102, 0, 255), color(255, 0, 255, 255), color(101, 101, 255, 255), color(102, 51, 0, 255), color(255, 128, 0, 255), color(107, 188, 255, 255), color(255, 255, 50, 255)];
        }
      })), _class2)) || _class));
      var ElementDoc = exports('ElementDoc', /*#__PURE__*/function (_Button) {
        _inheritsLoose(ElementDoc, _Button);

        function ElementDoc(_tagName, _typeFile) {
          var _this4;

          _this4 = _Button.call(this) || this;

          _defineProperty(_assertThisInitialized(_this4), "docInput", void 0);

          _this4.docInput = document.createElement(_tagName);
          _this4.docInput.type = _typeFile;

          _this4.docInput.click();

          return _this4;
        }

        return ElementDoc;
      }(Button));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./ChooseFile.ts', './AnimationGift.ts', './globaltype.d.ts.ts', './manager.ts', './giftManager.ts', './manager2.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null],
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