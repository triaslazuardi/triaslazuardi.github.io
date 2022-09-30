// var noSleep = null;
// var noSleep = new NoSleep();
var wakeLockEnabled = false;

function setNoSleep() {
    // if (noSleep == null) noSleep = new NoSleep()
    if(!this.wakeLockEnabled){
        alert("test enable");
        noSleep.enable(); // keep the screen on!
        wakeLockEnabled = true;
    }else {
        alert("test disable");
        noSleep.disable(); // let the screen turn off.
        wakeLockEnabled = false;
    }
}

