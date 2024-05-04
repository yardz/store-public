var smarthintkey = "SH-231412";
SmartHint = typeof SmartHint != 'undefined' ? SmartHint : {};
SmartHint.Calls = SmartHint.Calls ? SmartHint.Calls : [];
SmartHint.Call = function (action, args) {
    SmartHint.Calls.push({ action: action, args: args });
};
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://service.smarthint.co/Scripts/i/SmartHint.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();