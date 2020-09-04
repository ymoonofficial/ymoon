function sendGaEvent(e, n, i) {
    return window.ga("send", "event", e, n, i)
}
var elem = document.querySelector(".main-carousel"),
    flkty = new Flickity(elem, {
        cellAlign: "left",
        freeScroll: !0,
        pageDots: !1,
        groupCells: "100%",
        contain: !0
    });
$("[data-ga]").click(function() {
    switch ($(this).data("ga")) {
        case "docs-link":
            sendGaEvent("Click-out", "Click on Docs Button", "Docs");
            break;
        case "blog-link":
            sendGaEvent("Click-out", "Click on Blog Button", "Blog");
            break;
        case "typeform-link":
            sendGaEvent("Conversion", "Typeform", "Request a Chainlink Button");
            break;
        case "we-are-hiring-link":
            sendGaEvent("Conversion", "Click on We are Hiring Nav Link", "We are Hiring Link");
            break;
        case "defi-link":
            sendGaEvent("Click-out", "Click on DeFi Nav Button", "DeFi")
    }
});