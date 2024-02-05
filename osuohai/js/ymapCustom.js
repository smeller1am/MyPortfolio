ymaps.ready(function () {
    myCollection = new ymaps.GeoObjectCollection();
    if(document.getElementById("map")){
    // Помещаем карту в элемент DIV с id, равным «map»
    myMap = new ymaps.Map("map", {
        center: [62.328130, 129.939824], // Начальные значения центра карты
        zoom: 11,         // Начальное значение зума карты
        controls: ['zoomControl'],
    });
    if($(window).width() < 1024) {
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('drag');
    }
    // Перебираем в цикле точки, которые надо добавить на карту

        var myPlacemark = new ymaps.Placemark([
            62.328130, 129.939824
        ], {
            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
        },
         {
        	// Необходимо указать данный тип макета.
        	iconLayout: 'default#image',
        	// Своё изображение иконки метки.
        	iconImageHref: './images/basil_location-solid.png',
            hideIconOnBalloonOpen:false,
        	iconImageSize: [26, 26],

        	// iconImageOffset: [-120, -140],

        });
        myMap.behaviors.disable('scrollZoom'); 

        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark);

    
    // Добавляем точки на карту
    myMap.geoObjects.add( myCollection ); 
    }
})