$(window).on("load", function () {

  // $('#phone').mask('+7 (000) 000 00 00');
  var swiper = new Swiper('.news__swiper', {
    loop: true,
    navigation: {
      nextEl: ".news__swiper-next",
      prevEl: ".news__swiper-prev",
    },
  });
  var swiper2 = new Swiper('.decanatoDetail__swiper-main', {
    loop: true,
    navigation: {
      nextEl: ".decanatoDetail__swiper-next",
      prevEl: ".decanatoDetail__swiper-prev",
    },

  });
  var swiper3 = new Swiper('.decanatoDetail__swiper-additional', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    thumbs: {
      swiper: swiper2
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      },
      576: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  });
  var swiper1 = new Swiper('.photo__slider', {
    spaceBetween: '20',
    slidesPerView: '3.5',
    rewind: true,
    navigation: {
      nextEl: ".photo__slider-next",
      prevEl: ".photo__slider-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: '3.5',
      },
      576: {
        slidesPerView: '2'
      },
      320: {
        slidesPerView: '1.3'
      }
    }
  });
  $(".serviceDetail__gallery a").fancybox({
    'width':300, 
    'autoDimensions': false,
    'autoSize':false,
    'mainClass': "123",
  });
  document.querySelector('.burger').addEventListener('click', function (e) {
    this.classList.toggle('burger--open');
    document.querySelector('body').classList.toggle('noScroll');
    document.querySelector('.header__bottom').classList.toggle('header__bottom--active')
  })
  if (window.innerWidth < 576) {
    document.querySelector('.header__search .icon-Search').addEventListener('click', () => {
      document.querySelector('.header__search').classList.toggle('header__search--active')
    })
  }
  if (document.querySelector('.media__tabs')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.media__list')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('media__list--opacity', 'media__list--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('media__tabs-item--active')
        })
        this.classList.add('media__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('media__list--active')
        setTimeout(() => {
          cat.classList.add('media__list--opacity')
        }, 400)
      })
    })
  }
  if (document.querySelector('.edict__tabs')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.edict__box')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('edict__box--opacity', 'edict__box--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('edict__tabs-item--active')
        })
        this.classList.add('edict__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('edict__box--active')
        setTimeout(() => {
          cat.classList.add('edict__box--opacity')
        }, 400)
      })
    })
  }

  ymaps.ready(function () {
    myCollection = new ymaps.GeoObjectCollection();
    if(document.getElementById("map")){
    // Помещаем карту в элемент DIV с id, равным «map»
    myMap = new ymaps.Map("map", {
        center: [52.039885, 47.784848], // Начальные значения центра карты
        zoom: 11,         // Начальное значение зума карты
        controls: ['zoomControl'],
    });
    if($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('drag');
    }
    // Перебираем в цикле точки, которые надо добавить на карту

        var myPlacemark = new ymaps.Placemark([
            52.039885, 47.784848
        ], {
            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
        },
         {
        	// Необходимо указать данный тип макета.
        	iconLayout: 'default#image',
        	// Своё изображение иконки метки.
        	iconImageHref: './img/picture/Vector.png',
            hideIconOnBalloonOpen:false,
        	iconImageSize: [21, 27],

        	// iconImageOffset: [-120, -140],

        });
        myMap.behaviors.disable('scrollZoom'); 

        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);

    
    // Добавляем точки на карту
    myMap.geoObjects.add( myCollection ); 
    }
})
});

