'use strict'
$(document).ready(function () {

    var html = $('html');
    var body = $('body');

    /* create cookie */
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";  path=/; SameSite=None; Secure";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    /* sidebar right color scheme */
    if (getCookie("onefoodlayoutmode") === 'dark-mode') {
        $('#btn-layout-modes-light').prop('checked', false);
        $('#btn-layout-modes-dark').prop('checked', true);
        $('#darkmodeswitch').prop('checked', true);
        html.addClass('dark-mode');
    } else {
        $('#btn-layout-modes-light').prop('checked', true);
        $('#btn-layout-modes-dark').prop('checked', false);
        html.removeClass('dark-mode');
    }

    $('#btn-layout-modes-light').on('click', function () {
        if ($(this).is(':checked')) {
            setCookie('onefoodlayoutmode', 'light-mode', 1);
            html.attr('class', getCookie("onefoodlayoutmode"));
        } else { }
    });

    $('#btn-layout-modes-dark').on('click', function () {
        if ($(this).is(':checked')) {
            setCookie('onefoodlayoutmode', 'dark-mode', 1);
            html.attr('class', getCookie("onefoodlayoutmode"));
        } else { }
    });


    $('#darkmodeswitch').on('click', function () {
        if ($(this).is(':checked')) {
            setCookie('onefoodlayoutmode', 'dark-mode', 1)
            html.attr('class', getCookie("onefoodlayoutmode"));
        } else {
            setCookie('onefoodlayoutmode', 'light-mode', 1)
            html.attr('class', getCookie("onefoodlayoutmode"));
        }
    });

    /* Right to left to right directions  */
    if (getCookie('onefooddirectionmode') === 'rtl') {
        $('#btn-ltr').prop('checked', false);
        $('#btn-rtl').prop('checked', true);
        body.addClass('rtl');

        $('.bi-chevron-right').addClass('bi-chevron-left').removeClass('bi-chevron-right')
        $('.bi-arrow-right').addClass('bi-arrow-left').removeClass('bi-arrow-right')
        $('.bi-arrow-left').addClass('bi-arrow-right').removeClass('bi-arrow-left')

    } else {
        $('#btn-ltr').prop('checked', true);
        $('#btn-rtl').prop('checked', false);
        body.removeClass('rtl');
    }

    $('#btn-ltr').on('click', function () {
        if ($(this).is(':checked')) {
            setCookie('onefooddirectionmode', 'ltr', 1);
            body.addClass('ltr');
            body.removeClass('rtl');
        } else { }
    });

    $('#btn-rtl').on('click', function () {
        if ($(this).is(':checked')) {
            setCookie('onefooddirectionmode', 'rtl', 1);
            body.addClass('rtl');
            body.removeClass('ltr');
        } else { }
    });



    /* color style  */
    var curentstyle;
    var defaultStyle = "theme-yellow";
    if ($.type(getCookie("onefoodsetstylesheet")) != 'undefined' && getCookie("onefoodsetstylesheet") != '') {
        body.removeClass(defaultStyle);

        curentstyle = getCookie("onefoodsetstylesheet");
        body.addClass(getCookie("onefoodsetstylesheet"));
        $('input[name="color-scheme"]').each(function () {
            if ($(this).attr('data-title') === getCookie("onefoodsetstylesheet")) {
                $(this).prop("checked", true);
            }
        });
    } else {
    }

    $('input[name="color-scheme"]').on('click', function () {
        body.removeClass(defaultStyle);
        var setstyle = $(this).attr('data-title');

        if ($(this).is(':checked') && setstyle != '') {
            body.removeClass(curentstyle);
            setCookie('onefoodsetstylesheet', setstyle, 1);
            body.addClass(getCookie("onefoodsetstylesheet"));
            curentstyle = getCookie("onefoodsetstylesheet");

        } else {
            body.removeClass(curentstyle);
            setCookie('onefoodsetstylesheet', '', 1);
        }

    });


    /* background images */
    if ($.type(getCookie("onefoodsetimagepath")) != 'undefined' && getCookie("onefoodsetimagepath") != '') {
        $('main').addClass(getCookie("onefoodsetimagepath"));
        $('input[name="background-select"]').each(function () {
            if ($(this).attr('data-src') === getCookie("onefoodsetimagepath")) {
                $(this).prop("checked", true);
            }
        });
    }
    $('input[name="background-select"]').on('click', function () {
        $('main').removeClass(getCookie("onefoodsetimagepath"));
        var setimage = $(this).attr('data-src');
        if ($(this).is(':checked')) {
            setCookie('onefoodsetimagepath', setimage, 1);
            $('main').addClass(setimage);
        }
    });

    /* sidebar type */
    if ($.type(getCookie("onefoodsetmenu")) != 'undefined' && getCookie("onefoodsetmenu") != '') {
        $('.sidebar-wrap').attr('class', 'sidebar-wrap');
        $('.sidebar-wrap').addClass('sidebar-' + getCookie("onefoodsetmenu"));

        $('input[name="menu-select"]').each(function () {
            if ($(this).attr('data-title') === getCookie("onefoodsetmenu")) {
                $(this).prop("checked", true);
            }
        });
    }
    $('input[name="menu-select"]').on('click', function () {
        var onefoodsetmenustyle = $(this).attr('data-title');
        if ($(this).is(':checked')) {
            setCookie('onefoodsetmenu', onefoodsetmenustyle, 1);
            $('.sidebar-wrap').attr('class', 'sidebar-wrap');
            $('.sidebar-wrap').addClass('sidebar-' + getCookie("onefoodsetmenu"));
        }
    });


});