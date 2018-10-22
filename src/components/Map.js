/*  center: {lat: 48.100, lng: -123.000}

    <!--TODO: Insert your API Key in the below call to load the API.-->
    <script async defer
     src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDeiczf4IikLo9sb8zfCtNQPHzHcakh-dg&callback=initMap">
    </script>*/
    import React, { Component } from 'react';

    import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 48.100, lng: -123.000}}
    >
      {props.isMarkerShown && <Marker position={{lat: 48.080, lng: -123.100}} />}
      {props.isMarkerShown && <Marker position={{lat: 48.080, lng: -123.120}} />}
      {props.isMarkerShown && <Marker position={{lat: 47.985, lng: -122.880}} />}
      {props.isMarkerShown && <Marker position={{lat: 48.080, lng: -123.320}} />}
      {props.isMarkerShown && <Marker position={{lat: 48.080, lng: -123.140}} />}
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
