window.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.gallery__video-video img')?.addEventListener('click', function() {
    document.querySelector('.gallery__video-video video').play()
    this.classList.add('hidden')
  })
  document.querySelector('.gallery__video-video video')?.addEventListener('click', function() {
    document.querySelector('.gallery__video-video video').pause()
    document.querySelector('.gallery__video-video img').classList.remove('hidden')
  })

  document.querySelectorAll('.news__item').forEach((el) => {
    el.querySelector('.news__content').style.bottom = '-' + (String(el.querySelector('.news__item-text').offsetHeight) + 'px')
  })
  let elem = document.querySelector('.promo .container')
  if (window.innerWidth > 1650) {
    window.addEventListener('resize', () => {
      document.querySelector('.menu').style.width = elem?.getBoundingClientRect().left + 15 + 'px'
      document.querySelector('.menu').style.height = elem?.offsetHeight + 'px' 
    })
    document.querySelector('.menu').style.width = elem?.getBoundingClientRect().left + 15 + 'px'
    document.querySelector('.menu').style.height = elem?.offsetHeight + 'px'
  }
  if(document.querySelector('.promo__green')){
    document.querySelector('.promo__green').style.width = elem?.getBoundingClientRect().left - 15 + 'px'
  }
  window.addEventListener('resize', () => {
    document.querySelector('.menu').style.height = elem?.offsetHeight + 'px'
    document.querySelector('.promo__green').style.width = elem?.getBoundingClientRect().left - 15 + 'px'
  })
  document.querySelector('.header__menu').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(!elem);
    if (window.innerWidth < 992) {
      console.log(1);
      if (!elem) {
        document.querySelector('body').classList.add('no-scroll')
      }
    }
    document.querySelector('.menu').classList.toggle('menu--block')
    setTimeout(() => {
      document.querySelector('.menu').classList.toggle('menu--active')
    }, 10)

  })
  document.querySelector('.menu__close').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.menu').classList.toggle('menu--active')
    setTimeout(() => {
      document.querySelector('.menu').classList.toggle('menu--block')
    }, 300)
    if (window.innerWidth <= 992) {

      if (!elem) {
        document.querySelector('body').classList.remove('no-scroll')
      }
    }

  })

  if (document.querySelector('.detail__gallery')) {
    var targetMaps = document.querySelectorAll('[data-target]'),
      maps = document.querySelectorAll('.detail__gallery-img')
    console.log(targetMaps);
    targetMaps?.forEach((elem) => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()
        var target = this.getAttribute('data-target')
        maps.forEach((elem) => {
          elem.classList.remove('detail__gallery-img--opacity', 'detail__gallery-img--active')
        })
        targetMaps.forEach((elem) => {
          elem.classList.remove('result__tabs-item--active')
        })
        this.classList.add('result__tabs-item--active')
        var cat = document.querySelector('[data-info="' + target + '"]')
        cat.classList.add('detail__gallery-img--active')
        setTimeout(() => {
          cat.classList.add('detail__gallery-img--opacity')
        }, 400)
      })
    })
  }
  $('.promo__green').on('click', function() {
    console.log(123);
    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

if (document.querySelector('.data__accordeon')) {
  $('.data__accordeon-text').on('click', function () {
    $('.data__accordeon-text').toggleClass('active')
    $('.data__accordeon-content').slideToggle()
  })
}

const swiper1 = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.gallery__swiper-next',
    prevEl: '.gallery__swiper-prev',
  },
});
const swiper2 = new Swiper('.detail__content-swiper', {
  slidesPerView: 1,
  spaceBetween: 35,
  pagination: {
    el: '.swiper-pagination',
  },
});

if (document.querySelector('.phone')) {
  $('.phone').mask('+7(999) 999-9999', {
    placeholder: '_',
    autoclear: false,
  })
}
// document.addEventListener('DOMContentLoaded', () => {})
