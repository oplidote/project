$(document).ready(function () {
    let $header = $('.header');
    // 전체화면 슬라이드
    let stat_once = 0;
    let mbti_once = 0;
    let menu = ['home', 'about', 'portfolio', 'skill', 'MBTI', 'contact']

    let wrap_swiper = undefined;
    let $all_menu_bt = $('.all-menu-bt');
    let $all_menu = $('.all-menu');
    $all_menu_bt.click(function () {
        $(this).toggleClass('all-menu-bt-active');
        $all_menu.toggleClass('all-menu-active');
    })

    function wrap() {
        if (window.innerWidth > 1024) {
            // 다바이스 크기가 480이상일때 /* 스크립트내용*/ 
            if (typeof (wrap_swiper) == 'object') {
                wrap_swiper.destroy();
            }
            wrap_swiper = new Swiper(".wrap-swiper", {
                direction: 'vertical',
                effect: 'fade',
                slidesPerView: 1,
                mousewheel: true,
                touchRatio: 0,
                speed: 500,
                pagination: {
                    el: ".page-box",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },
                on: {
                    slideChange: function () {
                        console.log(this.realIndex);
                        $('.wrap-slide').removeClass('wrap-active');
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');
                        if (this.realIndex == 3 && stat_once == 0) {
                            stat();
                            stat_once = 1;
                            return stat_once;
                        } else if (this.realIndex == 4 && mbti_once == 0) {
                            mbti();
                            mbti_once = 1;
                            return mbti_once;
                        } else if (this.realIndex == 5) {
                            $header.fadeOut(300);
                        } else if (this.realIndex != 5) {
                            $header.fadeIn(300);
                        }
                    }
                }
            });
        } else if (window.innerWidth <= 1024) {
            /* 스크립트내용*/
            if (typeof (wrap_swiper) == 'object') {
                wrap_swiper.destroy();
            }
            wrap_swiper = new Swiper(".wrap-swiper", {
                direction: 'vertical',
                slidesPerView: 1,
                mousewheel: true,
                touchRatio: 0,
                freeMode: true,
                pagination: {
                    el: ".page-box",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },
                on: {
                    slideChange: function () {
                        console.log(this.realIndex);
                        $('.wrap-slide').eq(this.realIndex).addClass('wrap-active');
                        if (this.realIndex == 3 && stat_once == 0) {
                            stat();
                            stat_once = 1;
                            return stat_once;
                        } else if (this.realIndex == 4 && mbti_once == 0) {
                            mbti();
                            mbti_once = 1;
                            return mbti_once;
                        } else if (this.realIndex == 5 && window.innerWidth > 480) {
                            $header.fadeOut(300);
                        } else if (this.realIndex != 5 &&window.innerWidth > 480) {
                            $header.fadeIn(300);
                        }
                    }
                }
            });
        }
    }
    // 포트폴리오 슬라이드
    var portfolio_swiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 1,
        loopAdditionalSlides: 3,
        loop: true,
        speed: 300,
        centeredSlides: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".sw-portfolio-next",
            prevEl: ".sw-portfolio-prev",
        },
        pagination: {
            el: ".port-pg",
            type: "fraction",
        }
    });

    let $port_next = $('.sw-portfolio-next');
    let $port_prev = $('.sw-portfolio-prev');
    let $gear_img = $('.gear img');
    let angle = 0; // 현재의 각도를 변수로 저장
    $port_prev.click(function () {
        angle += +90;
        $gear_img.rotate(angle);
    });

    $port_next.click(function () {
        angle += -90;
        $gear_img.rotate(angle);
    });

    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    function stat() {
        let htmlbar = new ProgressBar.Line(htmlstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1200,
            color: '#FF651E',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            // from: {
            //     color: '#FFEA82'
            // },
            // to: {
            //     color: '#ED6A5A'
            // },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let cssbar = new ProgressBar.Line(cssstat, {
            easing: 'easeInOut',
            duration: 1300,
            delay: 1300,
            color: '#379ad6',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jsbar = new ProgressBar.Line(jsstat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1400,
            color: '#FFE100',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let jquerybar = new ProgressBar.Line(jquerystat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1500,
            color: '#ed4646',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let vuebar = new ProgressBar.Line(vuestat, {
            easing: 'easeInOut',
            duration: 1400,
            delay: 1600,
            color: '#00c180',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    right: '-40px',
                    top: '-2px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        htmlbar.animate(0.97); // Number from 0.0 to 1.0
        cssbar.animate(0.97); // Number from 0.0 to 1.0
        jsbar.animate(0.9); // Number from 0.0 to 1.0
        jquerybar.animate(0.95); // Number from 0.0 to 1.0
        vuebar.animate(0.70); // Number from 0.0 to 1.0
    };

    function mbti() {
        let e_bar = new ProgressBar.Line(e, {
            delay: 1000,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FF651E',
            trailColor: '#eee',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        let s_bar = new ProgressBar.Line(s, {
            delay: 1200,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#f0be25',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let f_bar = new ProgressBar.Line(f, {
            delay: 1400,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#00c180',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let p_bar = new ProgressBar.Line(p, {
            delay: 1600,
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#7d50f9',
            trailWidth: 4,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        let t_bar = new ProgressBar.Line(t, {
            delay: 1600,
            strokeWidth: 2,
            easing: 'easeInOut',
            duration: 1400,
            color: '#eee',
            trailColor: '#303033',
            trailWidth: 2,
            svgStyle: {
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            },
            text: {
                style: {
                    // Text color.
                    // Default: same as stroke color (options.color)
                    color: '#999',
                    position: 'absolute',
                    left: '50%',
                    top: '-15px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: (state, bar) => {
                bar.setText(100 - (Math.round(bar.value() * 100)) + ' %');
            }
        });
        e_bar.animate(0.75);
        s_bar.set(1);
        s_bar.animate(0.46);
        f_bar.set(1);
        f_bar.animate(0.31);
        p_bar.set(1);
        p_bar.animate(0.25);
        t_bar.set(1);
        t_bar.animate(0.49);
    }
    $(window).resize(function () {
        wrap();
        $('.wrap-slide').eq(0).addClass('wrap-active');
    }).resize();
    wrap();
})