const PLATFORMS = {
    facebook : "facebook",
    google : "google.com"
}

enum ExternalAPI {
    GET_ALL_CITIES = "/api/v1/zone/all",
    GET_CLOSEST_CITY = "/api/v1/zone/closest",
    GET_CITY_POI = "/api/v1/poi/path",
    GET_ALL_POI = "/api/v1/poi/near",
    GET_ITENARARIES = "/api/v1/walk/near",
    GET_ITENARARY_DETAILS = "/api/v1/walk/id"

}

export {PLATFORMS, ExternalAPI}