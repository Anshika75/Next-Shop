async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat:25.4610465,lng:85.5124075},
      center: {lat: 28.684185565004938, lng: 77.07048640696775},
      center: center,
      zoom: 8,
    });
      map.addListener("click", (e) => {
          // Add Marker To That Location
          const marker = new google.maps.Marker({
              position: e.latLng,
              map: map,
              title: "",
          });
          
  
          console.log(e.latLng.lat(), e.latLng.lng());
      });
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
              };
              console.log(pos)
              const marker = new google.maps.Marker({
                  position: pos,
                  map: map,
                  title: "",
              });
  
              map.setCenter(pos);
          });
  
      }
  }