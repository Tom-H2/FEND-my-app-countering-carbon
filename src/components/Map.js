import React, { Component } from 'react';

import './Maps.css';
//import ViewDrawer from './ListView/ViewDrawer'

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"
//console.logs show information onClick of markers. InfoWindows not yet working
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: 48.1215, lng: -123.434}}>

      {props.markers && props.markers.filter(marker => marker.isVisible).map((marker,id) => {
        const venueInfo = props.venues.find(venue =>(venue.id ===marker.id))
        return(
          <Marker
            key={id}
            className="marker-pin"
            position={{lat:marker.lat, lng:marker.lng}}
            onClick={() => props.handleMarkerClick(marker)}>
            {marker.isOpen && (
              <InfoWindow>
                <React.Fragment>
                  <div className="info-window">
                    <p className="info-title">{venueInfo.name}</p>
                    <p className="info-subtext">{venueInfo.location.formattedAddress[0]}</p>
                    <p className="info-subtext">{venueInfo.location.formattedAddress[1]}</p>
                  </div>
                </React.Fragment>
              </InfoWindow>
              )}
            </Marker>
        )
      })}
    </GoogleMap>
  ))

    class Map extends Component {
      componentWillReceiveProps = (props) => {
        this.props = props
      }
      render() {

        return (
          <div className="map">
            <MyMapComponent
              role="application"
              aria-label="map"
              {...this.props}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDeiczf4IikLo9sb8zfCtNQPHzHcakh-dg"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        );
      }
    }

    export default Map;
