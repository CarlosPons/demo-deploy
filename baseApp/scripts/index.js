var app = {
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {

    window.cordova.openwith.setVerbosity(window.cordova.openwith.DEBUG);

    function initSuccess() {
    }

    function initError(err) {
      alert(`init failed: ${err}`);
    }

    // Initialize the plugin
    window.cordova.openwith.init(initSuccess, initError);

    function myHandler(intent) {
      alert('intent received');
      alert(`  action: ${intent.action}\n` +
        `  exit: ${intent.exit}`);

      // For simplicity, only handle sharing a single file.
      if (intent.items.length > 0) {
        window.cordova.openwith.load(intent.items[0], (data, item) => {
          alert(`item loaded, it weights ${data.length} bytes`);
          alert(`type: ${item.type}\n` +
            `uri: ${item.uri}\n` +
            `text: ${item.text}\n` +
            `name: ${item.name}\n` +
            `path: ${item.path}\n`);
          window.cordova.openwith.exit();
        });
      } else {
        window.cordova.openwith.exit();
      }
    }

    // Define your file ha er
    window.cordova.openwith.addHandler(myHandler);

    // Here, we redirect to the web site.
    var targetUrl = "https://poc-recovery.herokuapp.com/";
    var bkpLink = document.getElementById("bkpLink");
    bkpLink.setAttribute("href", targetUrl);
    bkpLink.text = targetUrl;
    window.location.replace(targetUrl);
  }
};

app.initialize();
