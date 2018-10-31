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
          onClick={console.log}>
            {Marker.isOpen && <InfoWindow>
              <p>Clallam Coop</p>
            </InfoWindow>}
        </Marker>}
      {props.isMarkerShown &&
        <Marker
          title={'Nicola Engineering'}
          position={{lat: 48.080, lng: -123.106}}
          onClick={console.log}>
            {Marker.isOpen && <InfoWindow>
              <p>Nicola Engineering</p>
            </InfoWindow>}
        </Marker>}
      {props.isMarkerShown &&
        <Marker
          title={'Port Angeles Waterfront'}
          position={{lat: 48.1215, lng: -123.434}}
          onClick={console.log}>
            {Marker.isOpen && <InfoWindow>
              <p>Nicola Engineering</p>
            </InfoWindow>}
        </Marker>}}
      {props.isMarkerShown &&
        <Marker
          title={'Olympic Medical Center'}
          position={{lat: 48.115, lng: -123.415}}
          onClick={console.log}>
            {Marker.isOpen && <InfoWindow>
              <p>Olympic Medical Center</p>
            </InfoWindow>}
        </Marker>}
      {props.isMarkerShown &&
        <Marker
          title={'Disco Bay Junction'}
          position={{lat: 47.990, lng: -122.891}}
          onClick={console.log}>
            {Marker.isOpen && <InfoWindow>
              <p>Disco Bay Junction</p>
            </InfoWindow>}
        </Marker>}
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
