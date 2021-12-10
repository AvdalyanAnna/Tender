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


    var options = {
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

    $('.select').styler();

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


    $('.new-select-title ').on('click',function (){
        $('.new-select').removeClass('new-select-active')
        $(this).parent('.new-select').toggleClass('new-select-active')
    })
    $('.new-select-bg').on('click',function (){
        $(this).parent('.new-select').removeClass('new-select-active')
    })
    $('.new-select-item').on('click',function (){
        $(this).toggleClass('active')
       if($(this).hasClass('active')){
           let html = `<div class="price__item-check">${$(this).html()}</div>`
           $(this).parents('.price__inner').children('.price__item-checks').append(html)
       }else{
           let priceItem = $(this).parents('.price__inner').children('.price__item-checks').children()
           for (let i = 0;i<priceItem.length;i++){
               if($(this).html() === priceItem.eq(i).text()){
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