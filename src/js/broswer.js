// 首先检测是否为Safari浏览器且版本低于13
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (isSafari) {
    const userAgent = navigator.userAgent;
    const safariVersionMatch = userAgent.match(/Version\/(\d+)/);
    if (safariVersionMatch && parseInt(safariVersionMatch[1]) < 13) {
        window.location.href = "/src/page/broswer.html";
    }
}

// 接下来检测当前域名是否为uef.zaona.top
const currentDomain = window.location.hostname;
if (currentDomain === 'uef.zaona.top') {
    window.location.href = "/src/page/move.html";
}