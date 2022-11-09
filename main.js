const gl = document.createElement("canvas").getContext("webgl"),
    ext = gl.getExtension("WEBGL_debug_renderer_info");
document.querySelector('#userAgent').innerHTML = `${window.navigator.userAgent}`;
document.querySelector('#lang').innerHTML = `${window.navigator.language}`;
document.querySelector('#hardware').innerHTML = `${window.navigator.hardwareConcurrency}`;
document.querySelector('#memory').innerHTML = `${window.navigator.deviceMemory}`;
document.querySelector('#appName').innerHTML = `${window.navigator.appName}`;
document.querySelector('#appVersion').innerHTML = `${window.navigator.appVersion}`;
document.querySelector('#appCodeName').innerHTML = `${window.navigator.appCodeName}`;
document.querySelector('#cookie').innerHTML = `${window.navigator.cookieEnabled}`;
document.querySelector('#plugins').innerHTML = `${window.navigator.plugins}`;
document.querySelector('#platform').innerHTML = `${window.navigator.platform}`;
document.querySelector('#doNotTrack').innerHTML = `${window.navigator.doNotTrack}`;
document.querySelector('#webDriver').innerHTML = `${window.navigator.webdriver}`;
document.querySelector('#productSub').innerHTML = `${window.navigator.productSub}`;
document.querySelector('#product').innerHTML = `${window.navigator.product}`;
document.querySelector('#touch').innerHTML = `${window.navigator.maxTouchPoints}`;
document.querySelector('#pdfViewer').innerHTML = `${window.navigator.pdfViewerEnabled}`;
document.querySelector('#gpu').innerHTML = `${gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)}`;
document.querySelector('#images').innerHTML = `${window.FINGERPRINT.fonts}`;
console.log(gl.getSupportedExtensions())
const userData = {}

fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(result => {
        document.querySelector('#ip').innerHTML = `${result.ip}`;
        document.querySelector('#timezone').innerHTML = `${result.timezone}`;
        document.querySelector('#isp').innerHTML = `${result.org}`;
        document.querySelector('#country').innerHTML = `${result.country_name}`;
        document.querySelector('#country').innerHTML = `${result.country_name}`;
        document.querySelector('#latitude').innerHTML = `${result.latitude}`;
        document.querySelector('#longitude').innerHTML = `${result.longitude}`;
    })

fetch('https://api.bigdatacloud.net/data/client-info')
    .then(response => response.json())
    .then(result => {
        userData.ipType = result.ipType;
        userData.isBehindProxy = result.isBehindProxy;
        userData.device = result.device;
        document.querySelector('#typeIP').innerHTML = `${result.ipType}`;
        document.querySelector('#proxy').innerHTML = `${result.isBehindProxy}`;
        document.querySelector('#device').innerHTML = `${result.device}`;
        document.querySelector('#browser').innerHTML = `${result.family}`;
    })

navigator.userAgentData.getHighEntropyValues(
    ["architecture",
        "model",
        "platform",
        "platformVersion",
        "fullVersionList",
        "bitness",
        "wow64",
        "uaFullVersion"])
    .then((result) => {
        document.querySelector('#system').innerHTML = `${result.platform}`;
    });

navigator.getBattery()
    .then((result) => {
        document.querySelector('#charging').innerHTML = `${result.charging}`;
        document.querySelector('#chargeTime').innerHTML = `${result.chargingTime}`;
        document.querySelector('#dischargeTime').innerHTML = `${result.dischargingTime}`;
        document.querySelector('#level').innerHTML = `${result.level}`;

    })
console.log(window.FINGERPRINT);