// check if current page is under /zh-hant/*
// when page reloads
addEventListener('load', () => {


    if (window.location.pathname.startsWith('/zh-hant/')) {
        // set font-family for zh-hant pages
        document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, ubuntu, "pingfang sc", "helvetica neue", "microsoft jhenghei", "STHeiti Light", sans-serif'
        }
    })