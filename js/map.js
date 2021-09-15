function initAutocomplete() {
    (function (A) {

        if (!Array.prototype.forEach)
            A.forEach = A.forEach || function (action, that) {
                for (var i = 0, l = this.length; i < l; i++)
                    if (i in this)
                        action.call(that, this[i], i, this);
            };

    })(Array.prototype);

    var
        mapObject,
        markers = [],
        markersData = {
            'Marker': [
                {
                    name: 'Jahez',
                    location_latitude: 24.731421,
                    location_longitude: 46.670918,
                    map_image_url: 'images/store/1.png',
                    state: 'close',
                    sIcon:'valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'clothes',
                    rating:'70'
                },
                {
                    name: 'shop1',
                    location_latitude: 24.721421,
                    location_longitude: 46.660918,
                    map_image_url: 'images/store/2.png',
                    state: 'open',
                    sIcon:'not-valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'clothes',
                    rating:'90'
                },
                {
                    name: 'shop2',
                    location_latitude: 24.711421,
                    location_longitude: 46.650918,
                    map_image_url: 'images/store/3.png',
                    state: 'close',
                    sIcon:'not-valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'market',
                    rating:'80'

                },
                {
                    name: 'shop3',
                    location_latitude: 24.761421,
                    location_longitude: 46.680918,
                    map_image_url: 'images/store/4.png',
                    state: 'close',
                    sIcon:'valid',
                    vIcon:'not-valid',
                    url_point: 'company-profile.html',
                    category: 'market',
                    rating:'40'
                },
                {
                    name: 'shop4',
                    location_latitude: 24.701421,
                    location_longitude: 46.630918,
                    map_image_url: 'images/store/5.png',
                    state: 'open',
                    sIcon:'valid',
                    vIcon:'not-valid',
                    url_point: 'company-profile.html',
                    category: 'resturant',
                    rating:'65'
                },
                {
                    name: 'shop4',
                    location_latitude: 24.781421,
                    location_longitude: 46.660918,
                    map_image_url: 'images/store/6.png',
                    state: 'close',
                    sIcon:'not-valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'resturant',
                    rating:'100'
                },
                {
                    name: 'shop5',
                    location_latitude: 24.771421,
                    location_longitude: 46.600918,
                    map_image_url: 'images/store/7.png',
                    state: 'open',
                    sIcon:'valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'resturant',
                    rating:'20'
                },
                {
                    name: 'shop5',
                    location_latitude: 24.731421,
                    location_longitude: 46.620918,
                    map_image_url: 'images/store/8.png',
                    state: 'close',
                    sIcon:'valid',
                    vIcon:'not-valid',
                    url_point: 'company-profile.html',
                    category: 'vegetable',
                    rating:'75'
                },
                {
                    name: 'shop5',
                    location_latitude: 24.741421,
                    location_longitude: 46.658547,
                    map_image_url: 'images/store/1.png',
                    state: 'close',
                    sIcon:'valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'vegetable',
                    rating:'90'
                },
                {
                    name: 'shop6',
                    location_latitude: 24.801421,
                    location_longitude: 46.700918,
                    map_image_url: 'images/store/2.png',
                    state: 'open',
                    sIcon:'not-valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'vegetable',
                    rating:'80'
                },
                {
                    name: 'shop7',
                    location_latitude: 24.811421,
                    location_longitude: 46.702918,
                    map_image_url: 'images/store/3.png',
                    state: 'close',
                    sIcon:'not-valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'clothes',
                    rating:'44'

                },
                {
                    name: 'shop8',
                    location_latitude: 24.821421,
                    location_longitude: 46.730918,
                    map_image_url: 'images/store/4.png',
                    state: 'open',
                    sIcon:'valid',
                    vIcon:'valid',
                    url_point: 'company-profile.html',
                    category: 'clothes',
                    rating:'93'
                }
            ]

        };

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(48.865633, 2.321236),

        mapTypeControl: true,
        mapTypeControlOptions: {
            // style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE],
            position: google.maps.ControlPosition.TOP_CENTER
        },

        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scrollwheel: true,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
    };
    var marker;
    mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
    for (var key in markersData)

        filterMarkers = function (category) {
            markersData[key].forEach(function (item) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
                    map: mapObject,
                    // mapTypeId: 'satellite',
                    icon: {
                        url: 'images/marker/' + item.category + '.png',
                        scaledSize: new google.maps.Size(33, 50)
                    },
                    // visible: false
                    label: {
                        text: item.name ,
                        className: "map-label"
                    },
                });


                // console.log(item.category);
                console.log(category);
                if (item.category === category || category === 0) {
                    marker.setMap(mapObject);
                }
                else {
                    marker.setMap(null);
                }

                if ('undefined' === typeof markers[key])
                    markers[key] = [];
                markers[key].push(marker);
                google.maps.event.addListener(marker, 'click', (function () {
                    closeInfoBox();
                    getInfoBox(item).open(mapObject, this);
                    mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
                }));


            });

        };
    filterMarkers(0);
    var MyLocation = document.getElementById('myLocation');
    mapObject.controls[google.maps.ControlPosition.TOP_RIGHT].push(MyLocation);
    geolocate = function geolocate() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                // Create a marker and center map on user location
                marker.setMap(null);
                marker = new google.maps.Marker({
                    position: pos,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: 'images/marker/marker.png',
                    map: mapObject,

                });
                // marker.setMap(mapObject);
                mapObject.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                mapObject.setZoom(16);
            });
        }
    };
    geolocate();
    $("#searchURL a").on("click", function (e) {
        var lat = $(this).attr("data-lat"),
            long = $(this).attr("data-long")
        // marker.setPosition(new google.maps.LatLng(lat , long));
        mapObject.setCenter(new google.maps.LatLng(lat, long));
        mapObject.setZoom(17)
    })

    hideAllMarkers = function hideAllMarkers() {
        for (var key in markers)
            markers[key].forEach(function (marker) {
                marker.setMap(null);
            });
    };

    function closeInfoBox() {
        $('div.infoBox').remove();
    };
    var input = document.getElementById('pac-input');
    // var searchBox = new google.maps.places.SearchBox(input);
    mapObject.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    function getInfoBox(item) {
        return new InfoBox({
            content:
                '<div class="marker_info" id="marker_info">' +
                '<span>' +
                '<span class="row gx-2 d-inline-flex mt-1 align-items-center">' +
                '<span class="col">' +
                '<div class="'+item.state+'-status d-flex align-items-center">' +
                '<span class="open-close-store"></span>'+
                '<span class="text-3">'+item.state+'</span>'+
                '</div>'+
                '</span>' +
                '<span class="col test-status '+item.sIcon+'">'+
                '<img src="images/icon/s-icon.svg" alt="">'+
                '</span>' +
                '<span class="col test-status '+item.vIcon+'">'+
                '<img src="images/icon/v-icon.svg" alt="">'+
                '</span>' +
                '</span>'+
                '<div class="map-store-info mt-3">' +
                '<div class="d-flex align-items-center">' +
                '   <div class="flex-shrink-0">' +
                '        <img class="store-img" src="'+item.map_image_url+'" alt="store">' +
                '    </div>' +
                '    <div class="flex-grow-1 ms-2">' +
                '        <h3 class="title-3">' +
                         item.name +
                '        </h3>' +
                '        <p class="text-4 gray-color text-capitalize">' +
                         item.category +
                '        </p>' +
                '        <div class="product-reviews-summary ">' +
                '             <div class="rating-summary">' +
                '                 <div class="rating-result d-inline-block" title="'+item.rating+'%">' +
                '                     <span style="width:'+item.rating+'%"></span>' +
                '                 </div>' +
                '             </div>' +
                '         </div>'+
                '    </div>' +
                '</div>'+
                '</div>'+
                '<div class="text-center">' +
                '<a href="'+item.url_point+'" class="main-btn rounded-pill mt-1">Open</a>'+
                '</div>'+
                '</span>' +
                '</div>',
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-140,192),
            closeBoxMargin: '',
            closeBoxURL: "images/close.png",
            isHidden: false,
            alignBottom: true,
            pane: 'floatPane',
            enableEventPropagation: true
        });

    }

}
