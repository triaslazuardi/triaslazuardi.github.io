System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var createApplication, canvas, $p, bcr;

  function loadJsListFile(url) {
    alert("loadJsListFile 1")
    return new Promise(function (resolve, reject) {
      var err;
      alert("loadJsListFile 2")
      function windowErrorListener(evt) {
        if (evt.filename === url) {
          err = evt.error;
        }
      }
      alert("loadJsListFile 3")
      window.addEventListener('error', windowErrorListener);
      var script = document.createElement('script');
      script.charset = 'utf-8';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.addEventListener('error', function () {
        window.removeEventListener('error', windowErrorListener);
        alert("loadJsListFile 3.1 " + url)
        reject(Error('Error loading ' + url));
      });
      script.addEventListener('load', function () {
        window.removeEventListener('error', windowErrorListener);
        document.head.removeChild(script); // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.
        alert("loadJsListFile load 1")
        if (err) {
          alert("loadJsListFile load 1.1 err " + err)
          reject(err);
        } else {
          alert("loadJsListFile load 1.2")
          resolve();
        }
        alert("loadJsListFile load done")
      });
      alert("loadJsListFile 5")
      alert("loadJsListFile 5.1"+url)
      script.src = url;
      document.head.appendChild(script);
      alert("loadJsListFile done"+ script)
    });
  }

  function fetchWasm(url) {
    alert("fetchWasm start")
    alert("fetchWasm url >"+ url)
    return fetch(url).then(function (response) {
      return response.arrayBuffer();
    });
  }

  function findCanvas() {
    // Use canvas in outer context
    alert("findCanvas 1")
    if (!canvas || canvas.tagName !== 'CANVAS') {
      console.error("unknown canvas id:", el);
    }
    alert("findCanvas 2")
    var width = canvas.width;
    var height = canvas.height;
    var container = document.createElement('div');
    alert("findCanvas 3")
    if (canvas && canvas.parentNode) {
      canvas.parentNode.insertBefore(container, canvas);
    }
    alert("findCanvas 4")
    container.setAttribute('id', 'Cocos3dGameContainer');
    container.appendChild(canvas);
    var frame = container.parentNode === document.body ? document.documentElement : container.parentNode;
    addClass(canvas, 'gameCanvas');
    canvas.setAttribute('width', width || '480');
    canvas.setAttribute('height', height || '320');
    canvas.setAttribute('tabindex', '99');
    alert("findCanvas done")
    return {
      frame: frame,
      canvas: canvas,
      container: container
    };
  }

  function addClass(element, name) {
    var hasClass = (' ' + element.className + ' ').indexOf(' ' + name + ' ') > -1;

    if (!hasClass) {
      if (element.className) {
        element.className += ' ';
      }

      element.className += name;
    }
  }

  return {
    setters: [function (_applicationJs) {
      createApplication = _applicationJs.createApplication;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      createApplication({
        loadJsListFile: loadJsListFile,
        fetchWasm: fetchWasm
      }).then(function (application) {
        return application.start({
          findCanvas: findCanvas
        });
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});