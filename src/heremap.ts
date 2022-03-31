import { decode } from "./decode";
import axios from "axios";
export const heremapPolyline = async (
  originLat: number,
  originLong: number,
  desLat: number,
  desLong: number,
  hereMapApiKey: string
) => {
  const result = await axios.get(
    "https://router.hereapi.com/v8/routes?transportMode=truck&return=polyline,summary&origin=" +
      originLat +
      "," +
      originLong +
      "&destination=" +
      desLat +
      "," +
      desLong +
      "&apiKey=" +
      hereMapApiKey
  );
  return decode(result.data.routes[0].sections[0].polyline).polyline;
};
