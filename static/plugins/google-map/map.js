function initialize() { var e, t = $("#map").attr("data-latitude"), l = $("#map").attr("data-longitude"), o = $("#map").attr("data-marker"), r = $("#map").attr("data-marker-name"), a = new google.maps.LatLng(t, l), s = { center: a, mapTypeId: google.maps.MapTypeId.ROADMAP, backgroundColor: "#000", zoom: 15, panControl: !1, zoomControl: !0, mapTypeControl: !1, scaleControl: !1, streetViewControl: !1, overviewMapControl: !1, zoomControlOptions: { style: google.maps.ZoomControlStyle.LARGE } }; e = new google.maps.Map(document.getElementById("map"), s); var n = new google.maps.StyledMapType([{ featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] }, { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] }, { elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] }, { elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] }, { elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] }], { name: "Grayscale" }); e.mapTypes.set("grey", n), e.setMapTypeId("grey"); var y = o, m = new google.maps.MarkerImage(y, null, null, null, new google.maps.Size(46, 40)); marker = new google.maps.Marker({ position: a, map: e, icon: m, title: r }) } window.marker = null; var map = document.getElementById("map"); null != map && google.maps.event.addDomListener(window, "load", initialize);