export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (isSafari) {
            const userAgent = navigator.userAgent;
            const safariVersionMatch = userAgent.match(/Version\/(\d+)/);
            if (safariVersionMatch && parseInt(safariVersionMatch[1]) < 13) {
                window.location.href = "/browser";
            }
        }

        const currentDomain = window.location.hostname;
        if (currentDomain === 'uef.zaona.top') {
            window.location.href = "/move";
        }
    }
})