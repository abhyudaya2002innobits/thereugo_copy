const PLATFORMS = {
    facebook : "facebook",
    google : "google.com"
}

enum ExternalAPI {
    GET_ALL_CITIES = "/api/v1/zone/all",
    GET_CLOSEST_CITY = "/api/v1/zone/closest",
    GET_CITY_POI = "/api/v1/poi/path",
    GET_ALL_POI = "/api/v1/poi/near"
}

export {PLATFORMS, ExternalAPI}