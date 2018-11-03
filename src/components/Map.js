import React, { Component } from 'react';

import './Maps.css';

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
      defaultCenter={{lat: 48.080, lng: -123.100}}
    >
    {props.isMarkerShown && //Hardcoded marker for start point of initial EV plug-in spot
      <Marker
        title={'Clallam Coop Free EV Plug-in'}
        position={{lat: 48.080, lng: -123.100}}
        onClick={console.log}>
          {Marker.isOpen && <InfoWindow>
            <p>Clallam Coop</p>
          </InfoWindow>}
      </Marker>}
      {props.markers && props.markers.filter(marker => marker.isVisible).map((marker,id) => {
        const venueInfo = props.venues.find(venue =>(venue.id ===marker.id))
        return(
          <Marker
            key={id}
            id="markerPin"
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
              {...this.props}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDeiczf4IikLo9sb8zfCtNQPHzHcakh-dg"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        );
      }
    }

    export default Map;
