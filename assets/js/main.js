$(function () {
    $('.news-slider').slick({
        slidesToShow: 2,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    })

    $('.about-us__slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.about-us-parent__slider',
    })

    $('.about-us-parent__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.about-us__slider'
    })

    $('.menu__icons').on('click', function () {
        $(this).toggleClass('menu__icons-active')
        $('.nav').toggleClass('active')
    })


    $('.select').styler();

    if ($('div').is('#chart')) {
        let options = {
            // animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 270,
                legendText: "{label}",
                indexLabelFontSize: 20,
                indexLabelColor: "#00A775",
                indexLabel: "{label}",
                dataPoints: [
                    {y: 67, label: "Արխիվ (317)", color: "#014732"},
                    {y: 33, label: "Ակտիվ (102)", color: "#00A775"},

                ]
            }]
        };
        $("#chart").CanvasJSChart(options);
    }
    if ($('div').is('#chartContainer')) {
        let options = {
            data: [
                {
                    type: "column",
                    dataPoints: [
                        {y: 175, color: "#4390E3"},
                        {y: 375, color: "#5DD7B6"},
                        {y: 240, color: "#4390E3"},
                        {y: 200, color: "#5DD7B6"},
                        {y: 740, color: "#4390E3"},
                        {y: 560, color: "#5DD7B6"},
                        {y: 770, color: "#4390E3"},
                        {y: 950, color: "#5DD7B6"},
                        {y: 330, color: "#4390E3"},
                        {y: 530, color: "#5DD7B6"},
                        {y: 185, color: "#4390E3"},
                        {y: 920, color: "#5DD7B6"},
                        {y: 720, color: "#4390E3"},
                        {y: 300, color: "#5DD7B6"},
                        {y: 540, color: "#4390E3"},
                        {y: 70, color: "#5DD7B6"},
                        {y: 930, color: "#4390E3"},
                        {y: 340, color: "#5DD7B6"},
                        {y: 50, color: "#4390E3"},
                        {y: 940, color: "#5DD7B6"},
                    ]
                }
            ]
        };

        $("#chartContainer").CanvasJSChart(options);
    }
    if ($('div').is('#calendar')) {
        // $("#calendar").asDatepicker();
        $("#calendar").asDatepicker({mode: 'range'});
    }
    if ($('div').is('#map')) {
        ymaps.ready(init_map_center);
    }

    function init_map_center() {
        myMap = new ymaps.Map("map", {
            center: [40.184829, 44.520182],
            zoom: 16,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([40.184829, 44.520182], {});
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom')
        myMap.events.add('click', function () {
            myMap.behaviors.enable('scrollZoom');
        })
    }


    $('.new-select-title ').on('click', function () {
        $('.new-select').removeClass('new-select-active')
        $(this).parent('.new-select').toggleClass('new-select-active')
    })
    $('.new-select-bg').on('click', function () {
        $(this).parent('.new-select').removeClass('new-select-active')
    })
    $('.new-select-item').on('click', function () {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            let html = `<div class="price__item-check">${$(this).html()}</div>`
            $(this).parents('.price__inner').children('.price__item-checks').append(html)
        } else {
            let priceItem = $(this).parents('.price__inner').children('.price__item-checks').children()
            for (let i = 0; i < priceItem.length; i++) {
                if ($(this).html() === priceItem.eq(i).text()) {
                    priceItem.eq(i).remove()
                }
            }
        }
    })

    $(".modal .modal__container").on("click", function (e) {
        e.stopPropagation();
    });
    $(".modal .close, .modal ").on("click", function (e) {
        e.preventDefault();
        $(".modal").fadeOut(function () {
            $("body").css("overflow", "auto");
            $('header').css('visibility', 'unset')

        });
    });
    $(".open__modal").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var modal = $this.attr('data-modal');
        $("body").css("overflow", "hidden");
        $(`${modal}`).fadeIn();
    });
})