var sangarSetupNavigation;

;(function($) {

    sangarSetupNavigation = function(base, opt) {

    	/**
         * Function: setupDirectionalNav
         */
        this.setupDirectionalNav = function()
        {
            if (opt.directionalNav != 'none') 
            {
                if (opt.directionalNav == "false") {
                    return false;
                }
                
                if(opt.animation == "vertical-slide")
                {
                    var arrow_right = 'down';
                    var arrow_left = 'up';                    
                }
                else
                {
                    var arrow_right = 'right';
                    var arrow_left = 'left';                    
                }

                var directionalNavHTML = '<div class="sangar-slider-nav ' + base.captionPosition + '"><span class="sangar-arrow-' + arrow_right + '"></span><span class="sangar-arrow-' + arrow_left + '"></span></div>';
                base.$sangarWrapper.append(directionalNavHTML);
                var leftBtn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span.sangar-arrow-' + arrow_left),
                    rightBtn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span.sangar-arrow-' + arrow_right);
                leftBtn.click(function () {
                    base.stopSliderLock();
                    base.shift("prev", true);
                });
                rightBtn.click(function () {
                    base.stopSliderLock();
                    base.shift("next", true)
                });

                // autohide behaviour
                if(opt.directionalNav == 'autohide')
                {
                    var btn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span');
                    var btnAnimateSpeed = 300;

                    btn.css("opacity", opt.directionalNavHideOpacity);

                    base.$sangarWrapper.mouseenter(function(){
                        btn.animate({
                            "opacity": opt.directionalNavShowOpacity
                        }, btnAnimateSpeed);
                    });
                    base.$sangarWrapper.mouseleave(function(){
                        btn.animate({
                            "opacity": opt.directionalNavHideOpacity
                        }, btnAnimateSpeed);
                    });
                }
            }
        }

        /**
         * Function: showAllSlideNav
         */
        this.showAllSlideNav = function()
        {
            var btn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span');
            var wrapperWidth = base.$sangarWrapper.width();
            var navWidth = (wrapperWidth - base.sangarWidth) / 2;

            btn.css({
                'top': 0,
                'margin-top': 0,
                'background': 'none',
                'width': navWidth + 'px',
                'height': base.sangarHeight + 'px'
            })
        }

        /**
         * Function: setNavPosition
         */
        this.setNavPosition = function()
        {
            var btn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span');

            if(opt.animation == "vertical-slide")
            {
                var downBtn = base.$sangarWrapper.children('div.sangar-slider-nav').children('span.sangar-arrow-down');

                downBtn.css({
                    'top': (base.origHeight - 10 - downBtn.height()) + 'px'
                })

                btn.css({
                    'left': ((base.sangarWidth / 2) - (btn.width() / 2)) + 'px'
                })
            }
            else
            {
                btn.css({
                    'top': ((base.origHeight / 2) - (btn.height() / 2)) + 'px'
                })
            }
        }
    }

})(jQuery);