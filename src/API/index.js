//Based on Forrest video https://www.youtube.com/watch?v=Dj5hzKBxCBI&index=3&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP
//update with the advice of Jason Michael White
const Helper = {
  baseURL: () => {
    return "https://api.foursquare.com/v2";
  },
  auth: () => {
    const keys = {
      client_id:"JPFAJLT3GCHEWOCLXYNVDL0XXNXQ2525K2KXEBO5IEYB4UOD",
      client_secret:"NBHHGTR40PTJXCPKQ3BAM4R42YWPIWOUMI13K1CJO1S5EYG1",
      v: "20181021"
    };
    return Object.keys(keys)
      .map(key=> `${key}=${keys[key]}`)
      .join('&');
  },
  urlBuilder: (urlPrams) => {
    if(!urlPrams){
      return "";
    }
    return Object.keys(urlPrams)
      .map(key => `${key}=${urlPrams[key]}`)
      .join('&');
  },
  headers: () => {
    return {
      Accept: "application/json"
    };
  },
  simpleFetch: (endPoint, method, urlPrams) => {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`,
      requestData
    ).then(res => res.json())

.catch(error => console.error('Error:', error));
  }
};

const SquareAPI = {
  search: urlPrams => {
  return Helper.simpleFetch("/venues/search", "GET", urlPrams);
},
  getVenueDetails: VENUE_ID => {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  },
  getVenuePhotos: VENUE_ID => {
    return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
  }
};

export default SquareAPI;
