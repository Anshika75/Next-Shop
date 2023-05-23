import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
const GoogleMap = () => {
    async function initMap() {
        //@ts-ignore
        const { Map } = await google.maps.importLibrary("maps");
      
        map = new Map(document.getElementById("map"), {
          center: { lat:25.4610465,lng:85.5124075},
          center: {lat: 28.684185565004938, lng: 77.07048640696775},
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
  return (
    <>
         <Head>
            <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBHDlZeuOrKam8hwQCouMlwI-hNAqacPtM&callback=initMap" referrerpolicy="no-referrer" ></script>
            
        </Head>
    <div
      id="map"
      style={{ width: "400px", height: "300px" }}
    >
    </div>
    <Image src={Logo} alt=""></Image>
    </>
   
  );
};

export default GoogleMap;