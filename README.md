# Heremap Polyline Decoder

A simple React Component to display polyline generated by HereMapAPI on Google Maps. 
This project was built out of an actual use case where the task was to display Trucking Routes on Google maps. Since Google maps doesn't offer this functionality and the map provided by HereMaps has different look and feel to it than the conventional google maps, we were tasked with building a hybrid solution which resulted in a neat and simple React Component that can be used to display Trucking Route generated by heremap on Google Maps.

## How to use
- `npm install heremap-polyline-decoder google-map-react axios`
- You can now import `heremap-polyline-decoder` as a normal package installed from npm like so:

```JSX
import Herepolydecode from "heremap-polyline-decoder";
...
```

## Available props

```

styles?: object; (optional)
mapApiKey?: string;
hereMapApiKey?: string;
defaultCenter?: Coords; (optional)
defaultZoom?: number; (optional)
options?: MapOptions; (optional)
originLat?: number;
originLong?: number;
desLat?: number;
desLong?: number;

```
Example Usage

```JSX
import Herepolydecode from "heremap-polyline-decoder";
<Herepolydecode
        styles={{
          height: "100vh",
          width: "100%",
        }}
        mapApiKey=[GOOGLE_API_KEY]
        hereMapApiKey=[HEREMAP_API_KEY]
        defaultCenter={{
          lat: 40.3863413,
          lng: -94.7169436,
        }}
        defaultZoom={2}
        originLat={36.778261}
        originLong={-119.417932}
        desLat={42.407211}
        desLong={-71.382437}
      />
```


## ✍️ Authors

- [Saad Anwar](https://github.com/5aad)
- [Mujeeb Ahmed](https://github.com/mujeeb-netizen)

## 👍 Contribute

If you want to say **thank you** and/or support the active development of `heremap-polyline-decoder`:

1. Add a [GitHub Star](https://github.com/CodeClan-io/heremap-polyline-decoder/stargazers) to the project.
3. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.
4. Support the project by donating a [cup of coffee](https://www.buymeacoffee.com/saadfarhan7223).
