import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: { lat: 48.843933, lng: 2.247391 },
    zoom: 12.5,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCyvhTaZalY5s29NZXVolGdfZKPgTNetCQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={48.8328082} lng={2.240399} text="My Marker" />
          <Marker
            text={"test"}
            lat={48.8328082} lng={2.240399}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;
