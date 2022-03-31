import * as React from "react";
import "./styles.scss";
import GoogleMapReact, { Coords, MapOptions } from "google-map-react";
import { heremapPolyline } from "./heremap";
const { useState, useEffect } = React;

export type ICounterProps = {
  styles?: object;
  mapApiKey?: string;
  hereMapApiKey?: string;
  defaultCenter?: Coords;
  defaultZoom?: number;
  options?: MapOptions;
  originLat?: number;
  originLong?: number;
  desLat?: number;
  desLong?: number;
};
let directionsDisplay: any;
let flightPath: any;
let flightPathMultiple: any = [];
let marker: any = [];

const App: React.FC<ICounterProps> = ({
  styles = {
    height: "100%",
    width: "100%",
  },
  mapApiKey = "",
  hereMapApiKey = "",
  defaultCenter = {
    lat: 40.3863413,
    lng: -94.7169436,
  },
  defaultZoom = 2,
  options = {},
  originLat = 0.0,
  originLong = 0.0,
  desLat = 0.0,
  desLong = 0.0,
}) => {
  const [mapReference, setMapReference] = useState<any>();
  const [mapsReference, setMapsReference] = useState<any>();
  let labelIndex = 0;
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  useEffect(() => {
    getHereMapApi();
  });
  function zoomToObject(obj: any, map: any) {
    let bounds = new mapsReference.LatLngBounds();
    let points = obj.getPath().getArray();
    for (let n = 0; n < points.length; n++) {
      bounds.extend(points[n]);
    }

    map.fitBounds(bounds);
  }

  const getHereMapApi = async () => {
    try {
      if (mapReference && mapsReference) {
        // if not null
        directionsDisplay = new mapsReference.DirectionsRenderer();
        directionsDisplay.setOptions({
          polylineOptions: {
            strokeColor: "#ee0606",
            strokeWeight: "4",
            strokeOpacity: "0.7",
          },
          // draggable: true,
        });
        flightPath = new mapsReference.Polyline({
          path: await heremapPolyline(
            originLat,
            originLong,
            desLat,
            desLong,
            hereMapApiKey
          ),
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 4,
        });

        directionsDisplay.setMap(mapReference);
        flightPath.setMap(mapReference);
        zoomToObject(flightPath, mapReference);
        [
          { lat: originLat, long: originLong },
          { lat: desLat, long: desLong },
        ].map((item: any, index: number) => {
          marker[index] = new mapsReference.Marker({
            position: { lat: item.lat, lng: item.long },
            label: labels[labelIndex++ % labels.length],
          });
          marker[index].setMap(mapReference);
        });
      }
    } catch (error: any) {
      console.error("createUserCatch error", error.message);
    }
  };
  return (
    <div style={styles}>
      <GoogleMapReact
        options={options}
        bootstrapURLKeys={{
          key: mapApiKey,
        }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }: any) => {
          setMapReference(map);
          setMapsReference(maps);
        }}
      />
    </div>
  );
};

export default App;
