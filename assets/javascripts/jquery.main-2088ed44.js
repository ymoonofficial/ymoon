function initMobileNav() {
    jQuery("body").mobileNav({
        menuActiveClass: "nav-active",
        menuOpener: ".nav-opener",
        hideOnClickOutside: !0,
        menuDrop: ".main-nav"
    })
}
jQuery(function() {
        initMobileNav()
    }),
    function(t) {
        function i(i) {
            this.options = t.extend({
                container: null,
                hideOnClickOutside: !1,
                menuActiveClass: "nav-active",
                menuOpener: ".nav-opener",
                menuDrop: ".nav-drop",
                toggleEvent: "click",
                outsideClickEvent: "click touchstart pointerdown MSPointerDown"
            }, i), this.initStructure(), this.attachEvents()
        }
        i.prototype = {
            initStructure: function() {
                this.page = t("html"), this.container = t(this.options.container), this.opener = this.container.find(this.options.menuOpener), this.drop = this.container.find(this.options.menuDrop)
            },
            attachEvents: function() {
                var i = this;
                e && (e(), e = null), this.outsideClickHandler = function(e) {
                    if (i.isOpened()) {
                        var n = t(e.target);
                        n.closest(i.opener).length || n.closest(i.drop).length || i.hide()
                    }
                }, this.openerClickHandler = function(t) {
                    t.preventDefault(), i.toggle()
                }, this.opener.on(this.options.toggleEvent, this.openerClickHandler)
            },
            isOpened: function() {
                return this.container.hasClass(this.options.menuActiveClass)
            },
            show: function() {
                this.container.addClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.on(this.options.outsideClickEvent, this.outsideClickHandler)
            },
            hide: function() {
                this.container.removeClass(this.options.menuActiveClass), this.options.hideOnClickOutside && this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
            },
            toggle: function() {
                this.isOpened() ? this.hide() : this.show()
            },
            destroy: function() {
                this.container.removeClass(this.options.menuActiveClass), this.opener.off(this.options.toggleEvent, this.clickHandler), this.page.off(this.options.outsideClickEvent, this.outsideClickHandler)
            }
        };
        var e = function() {
            var i, e, n = t(window),
                o = t("html"),
                s = "resize-active",
                a = function() {
                    i = !1, o.removeClass(s)
                },
                c = function() {
                    i || (i = !0, o.addClass(s)), clearTimeout(e), e = setTimeout(a, 500)
                };
            n.on("resize orientationchange", c)
        };
        t.fn.mobileNav = function(e) {
            var n = Array.prototype.slice.call(arguments),
                o = n[0];
            return this.each(function() {
                var s = jQuery(this),
                    a = s.data("MobileNav");
                "object" == typeof e || void 0 === e ? s.data("MobileNav", new i(t.extend({
                    container: this
                }, e))) : "string" == typeof o && a && "function" == typeof a[o] && (n.shift(), a[o].apply(a, n))
            })
        }
    }(jQuery);