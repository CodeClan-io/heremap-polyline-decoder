

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var GoogleMapReact = require('google-map-react');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var GoogleMapReact__default = /*#__PURE__*/_interopDefaultLegacy(GoogleMapReact);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

___$insertStyle(".counter {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  margin: 10% auto;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.counter:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}\n.counter__count {\n  font-size: 2rem;\n  font-family: \"Segoe UI\", sans-serif;\n  color: inherit;\n  animation: in 1s ease alternate forwards;\n  pointer-events: none;\n}\n\n@keyframes in {\n  0% {\n    transform: translateY(-200%);\n  }\n  50% {\n    color: inherit;\n    font-size: 2.2rem;\n    transform: translateY(0);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    color: var(--blaze);\n  }\n  100% {\n    transform: translateY(200%);\n    font-size: 1.8rem;\n    opacity: 0;\n  }\n}");

var DECODING_TABLE = [
    62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];
var FORMAT_VERSION = 1;
var Num = Number;
function decode(encoded) {
    var decoder = decodeUnsignedValues(encoded);
    var header = decodeHeader(decoder[0], decoder[1]);
    var factorDegree = Math.pow(10, header.precision);
    var factorZ = Math.pow(10, header.thirdDimPrecision);
    var thirdDim = header.thirdDim;
    var lastLat = 0;
    var lastLng = 0;
    var lastZ = 0;
    var res = [];
    var i = 2;
    for (; i < decoder.length;) {
        var deltaLat = toSigned(decoder[i]) / factorDegree;
        var deltaLng = toSigned(decoder[i + 1]) / factorDegree;
        lastLat += deltaLat;
        lastLng += deltaLng;
        if (thirdDim) {
            var deltaZ = toSigned(decoder[i + 2]) / factorZ;
            lastZ += deltaZ;
            res.push([lastLat, lastLng, lastZ]);
            i += 3;
        }
        else {
            res.push({ "lat": lastLat, "lng": lastLng });
            i += 2;
        }
    }
    if (i !== decoder.length) {
        throw new Error('Invalid encoding. Premature ending reached');
    }
    return __assign(__assign({}, header), { polyline: res });
}
function decodeChar(char) {
    var charCode = char.charCodeAt(0);
    return DECODING_TABLE[charCode - 45];
}
function decodeUnsignedValues(encoded) {
    var result = Num(0);
    var shift = Num(0);
    var resList = [];
    encoded.split('').forEach(function (char) {
        var value = Num(decodeChar(char));
        result |= (value & Num(0x1F)) << shift;
        if ((value & Num(0x20)) === Num(0)) {
            resList.push(result);
            result = Num(0);
            shift = Num(0);
        }
        else {
            shift += Num(5);
        }
    });
    if (shift > 0) {
        throw new Error('Invalid encoding');
    }
    return resList;
}
function decodeHeader(version, encodedHeader) {
    if (+version.toString() !== FORMAT_VERSION) {
        throw new Error('Invalid format version');
    }
    var headerNumber = +encodedHeader.toString();
    var precision = headerNumber & 15;
    var thirdDim = (headerNumber >> 4) & 7;
    var thirdDimPrecision = (headerNumber >> 7) & 15;
    return { precision: precision, thirdDim: thirdDim, thirdDimPrecision: thirdDimPrecision };
}
function toSigned(val) {
    // Decode the sign from an unsigned value
    var res = val;
    if (res & Num(1)) {
        res = ~res;
    }
    res >>= Num(1);
    return +res.toString();
}

var heremapPolyline = function (originLat, originLong, desLat, desLong, hereMapApiKey) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios__default["default"].get("https://router.hereapi.com/v8/routes?transportMode=truck&return=polyline,summary&origin=" +
                    originLat +
                    "," +
                    originLong +
                    "&destination=" +
                    desLat +
                    "," +
                    desLong +
                    "&apiKey=" +
                    hereMapApiKey)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, decode(result.data.routes[0].sections[0].polyline).polyline];
        }
    });
}); };

var useState = React__namespace.useState, useEffect = React__namespace.useEffect;
var directionsDisplay;
var flightPath;
var marker = [];
var App = function (_a) {
    var _b = _a.styles, styles = _b === void 0 ? {
        height: "100%",
        width: "100%",
    } : _b, _c = _a.mapApiKey, mapApiKey = _c === void 0 ? "" : _c, _d = _a.hereMapApiKey, hereMapApiKey = _d === void 0 ? "" : _d, _e = _a.defaultCenter, defaultCenter = _e === void 0 ? {
        lat: 40.3863413,
        lng: -94.7169436,
    } : _e, _f = _a.defaultZoom, defaultZoom = _f === void 0 ? 2 : _f, _g = _a.options, options = _g === void 0 ? {} : _g, _h = _a.originLat, originLat = _h === void 0 ? 0.0 : _h, _j = _a.originLong, originLong = _j === void 0 ? 0.0 : _j, _k = _a.desLat, desLat = _k === void 0 ? 0.0 : _k, _l = _a.desLong, desLong = _l === void 0 ? 0.0 : _l;
    var _m = useState(), mapReference = _m[0], setMapReference = _m[1];
    var _o = useState(), mapsReference = _o[0], setMapsReference = _o[1];
    var labelIndex = 0;
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    useEffect(function () {
        getHereMapApi();
    });
    function zoomToObject(obj, map) {
        var bounds = new mapsReference.LatLngBounds();
        var points = obj.getPath().getArray();
        for (var n = 0; n < points.length; n++) {
            bounds.extend(points[n]);
        }
        map.fitBounds(bounds);
    }
    var getHereMapApi = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, error_1;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 3, , 4]);
                    if (!(mapReference && mapsReference)) return [3 /*break*/, 2];
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
                    _b = (_a = mapsReference.Polyline).bind;
                    _c = {};
                    return [4 /*yield*/, heremapPolyline(originLat, originLong, desLat, desLong, hereMapApiKey)];
                case 1:
                    flightPath = new (_b.apply(_a, [void 0, (_c.path = _d.sent(),
                            _c.geodesic = true,
                            _c.strokeColor = "#FF0000",
                            _c.strokeOpacity = 1.0,
                            _c.strokeWeight = 4,
                            _c)]))();
                    directionsDisplay.setMap(mapReference);
                    flightPath.setMap(mapReference);
                    zoomToObject(flightPath, mapReference);
                    [
                        { lat: originLat, long: originLong },
                        { lat: desLat, long: desLong },
                    ].map(function (item, index) {
                        marker[index] = new mapsReference.Marker({
                            position: { lat: item.lat, lng: item.long },
                            label: labels[labelIndex++ % labels.length],
                        });
                        marker[index].setMap(mapReference);
                    });
                    _d.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_1 = _d.sent();
                    console.error("createUserCatch error", error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (jsxRuntime.jsx("div", __assign({ style: styles }, { children: jsxRuntime.jsx(GoogleMapReact__default["default"], { options: options, bootstrapURLKeys: {
                key: mapApiKey,
            }, defaultCenter: defaultCenter, defaultZoom: defaultZoom, yesIWantToUseGoogleMapApiInternals: true, onGoogleApiLoaded: function (_a) {
                var map = _a.map, maps = _a.maps;
                setMapReference(map);
                setMapsReference(maps);
            } }) })));
};

exports["default"] = App;
//# sourceMappingURL=index.tsx.map
