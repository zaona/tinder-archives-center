const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    const userAgent = navigator.userAgent;
    const safariVersion = parseInt(userAgent.match(/Version\/(\d+)/)[1]);

    if (safariVersion < 13) {
        window.location.href = "/src/page/broswer.html";
    }
}