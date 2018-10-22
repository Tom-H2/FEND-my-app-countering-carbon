class Helper {
  static baseURL() {
    return "https://api.foursquare.com/v2"
  }
  static auth() {
    const keys = {
      client_id:"JPFAJLT3GCHEWOCLXYNVDL0XXNXQ2525K2KXEBO5IEYB4UOD",
      client_secret:"NBHHGTR40PTJXCPKQ3BAM4R42YWPIWOUMI13K1CJO1S5EYG1",
      v: "20181021"
    };
    return Object.keys(keys)
      .map(key=> `${key}=${keys[key]}`)
      .join('&')
  }
  static urlBuilder(urlPrams) {
    if(!urlPrams){
      return ""
    }
    return Object.keys(urlPrams)
      .map(key => `${key}=${urlPrams[key]}`)
      .join('&');
  }
  static header() {
    return {
      Accept: "application/json"
    }:
  }
  static simpleFetch(endPoint, method, urlPrams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}
      ${endPoint}?${Helper.auth()}
      &${Helper.urlBuilder(urlPrams)}`
      .requestData
    ).then(res => res.json());
  }
}

export default class SquareAPI {
  static search(urlPrams) {
  return Helper.simpleFetch("/venues/search", "GET", urlPrams);
}
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET")
  }
}
