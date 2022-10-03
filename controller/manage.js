// var noSleep = null;
// var noSleep = new NoSleep();
// var wakeLockEnabled = false;

// function setNoSleep() {
//     // if (noSleep == null) noSleep = new NoSleep()
//     if(!this.wakeLockEnabled){
//         alert("test enable");
//         noSleep.enable(); // keep the screen on!
//         wakeLockEnabled = true;
//     }else {
//         alert("test disable");
//         noSleep.disable(); // let the screen turn off.
//         wakeLockEnabled = false;
//     }
// }

// window.addEventListener('load', function () {
//     console.log("WINDOW ADD EVENT LISTENER LOAD");
    
//     // alert(navigator.userAgent);
//     // Swipe up only in IOS Safari
//     if(getBrowser.isIOS && 
//         getBrowser.isSafari && 
//         !getBrowser.isChrome &&
//         !getBrowser.isChromeIOS &&
//         !getBrowser.isEdgeIOS &&
//         // !getBrowser.isChromeIOS_12 &&
//         isMobile){
//         // let linkImageSlideUp = "{{ asset('cardgames/Games/v2/Global/res/hand_slide_up.gif')}}";
//         let options = {
//             initialOrientation: window.innerWidth > window.innerHeight ? 'LANDSCAPE' : 'PORTRAIT',
//             addImportantToBodyHeight: true,
//             fixateRootElementsOnInit: true,
//             scrollWindowToTopOnShow: true,
//             useHtml5FullScreenWhenPossible: false,
//             excludedUserAgents: /\WiPad\W/i,
//             // customCSS: '.fixedFlexBox { background-color: rgba(0, 0, 50, 0.7) }',
//             // customCSS: '.fixedFlexBox { background-color: rgba(0, 0, 100, 0.7); }',
//             // customCSSCleanSlate: true,
//             // expandBodyHeightTo: '120vh',
//             updateTimeout: 150,
//             swipeUpContent: '<div><img src="'+linkImageSlideUp+'"></div>',
//             html5FullScreenContent: '',
//             // swipeUpContent: 'Swipe Up to continue <b>custom text</b>',
//             // html5FullScreenContent: 'Touch to continue <b>custom text</b>',
//         }

//         let swipeUp = new SwipeUp(options);
//         // let swipeUp = new SwipeUp();
//         swipeUp.enable();
//     }
    
    
//     if(document.getElementById("iFrameNew") == null){
//         // let linkIFrame = "../../cardgames/Games/v2/DCB/index.html"+window.location.search;
//         // let linkIFrame = "{{ asset('cardgames/Games/v2/DCB/index.html')}}"+window.location.search+"?nocache=1";
//         // let linkIFrame = "{{ asset('cardgames/Games/OMH/index.html')}}"+window.location.search;
//         // let linkIFrame = "{{ asset('cardgames/Games/v2/" + sessionStorage.getItem("gameType") + "/index.html')}}"+window.location.search;
//         // console.log("linkIFrame : "+linkIFrame);
        
//         let iframe = document.createElement('iframe');
//         iframe.setAttribute("src", linkIFrame);
//         iframe.scrolling=0;
//         iframe.setAttribute("id", "iFrameNew");
//         document.getElementById("gamemaster").appendChild(iframe);
        
//         if(!getBrowser.isIOS && !getBrowser.isAppsAndroid && !getBrowser.isWebViewAndroid && isMobile){
            
//             addLayerFullScreen()
//         }
//     }
// });

addLayerFullScreen();

function addLayerFullScreen(){
    console.log("addLayerFullScreen");
    
    document.addEventListener('fullscreenchange', function() {
        console.log("fullscreenchange Event");

        let full_screen_element = document.fullscreenElement;
        console.log("changex : "+full_screen_element)
        console.log($('#fullScr').css('z-index'));
        if($('#fullScr').css('z-index') == "0") {
            $('#fullScr').css('z-index', "102");
            // addLayerFullScreen();
        }
    });

    // $('#fullScr').remove();
    // let linkImageClick = "{{ asset('cardgames/Games/v2/Global/res/hand_click.gif')}}";
    $('html').append('<div id="fullScr"><img src="../imaget/iconFlower.png"></div>');    
    $('#fullScr').css('width', '100%');
    $('#fullScr').css('height', '100%');
    $('#fullScr').css('position', 'absolute');
    $('#fullScr').css('top', '0');
    $('#fullScr').css('left', '0');
    $('#fullScr').css('z-index', '101');
    $('#fullScr').css('background-color', 'rgba(0, 0, 0, 0.5)');
    let designClick = {
        width:400,
        height:300
    }
    let parentClick = {
        width: $('#fullScr').css('width').replace("px",""),
        height: $('#fullScr').css('height').replace("px","")
    }
    let leftOffset = (parentClick.width - designClick.width)/2;
    let topOffset = (parentClick.height - designClick.height)/2;
    $('#fullScr img').css('left', leftOffset);
    $('#fullScr img').css('top', topOffset);
    $('#fullScr img').css('display', 'block');
    $('#fullScr img').css('position', 'absolute');

    let fullscr = document.getElementById('fullScr');
    fullscr.onclick = function() {
        
        
        // let iframe = document.getElementById("iFrameNew");
        // let iWindow = iframe.contentWindow;
        // let iDocument = iWindow.document;
        
        let element = document.querySelector("#GameDiv");

        element.requestFullscreen()
            .then(function() {
                console.log("show fullscreen")
                console.log($('#fullScr').css('z-index'));
                $('#fullScr').css('z-index', '0');
                // $('#fullScr').remove();
            })
            .catch(function(error) {
                console.log(error.message);
            });
    };
}

