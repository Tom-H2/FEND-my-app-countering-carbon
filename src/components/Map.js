/*  center: {lat: 48.100, lng: -123.000}

    <!--TODO: Insert your API Key in the below call to load the API.-->
    <script async defer
     src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDeiczf4IikLo9sb8zfCtNQPHzHcakh-dg&callback=initMap">
    </script>*/
    import React, { Component } from 'react';

    import {
      withScriptjs,
      withGoogleMap,
      GoogleMap,
      Marker,
      InfoWindow
    } from "react-google-maps"

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 48.100, lng: -123.000}}
    >
      {props.isMarkerShown &&
        <Marker
          title={'Clallam Coop'}
          position={{lat: 48.080, lng: -123.100}}
          onClick={() => props.handleMarkerClick(markers)}>
            {Marker.isOpen && <InfoWindow>
              <p>Clallam Coop</p>
            </InfoWindow>}
        </Marker>}
      {props.isMarkerShown && <Marker position={{lat: 48.080, lng: -123.106}} />}{/*Nocolai*/}
      {props.isMarkerShown && <Marker position={{lat: 48.1215, lng: -123.434}} />}{/*Port Angeles*/}
      {props.isMarkerShown && <Marker position={{lat: 48.115, lng: -123.415}} />}{/*Oly Med*/}
      {props.isMarkerShown && <Marker position={{lat: 47.990, lng: -122.891}} />}{/*Disco Bay*/}
    </GoogleMap>
  ))

    class Map extends Component {
      render() {
        return (
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDeiczf4IikLo9sb8zfCtNQPHzHcakh-dg"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        );
      }
    }

    export default Map;
