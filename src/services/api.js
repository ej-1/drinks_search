import fetch from "cross-fetch";
//import { API_ROOT } from "../api-config";

// move to seapraret file
const BASE_URL = "https://mock-api.drinks.test.siliconrhino.io";
const EVENTS = "/events";

async function getDrinksEvents(pageNumber, pageSize, searchTerm) {
  const data = `?page=${pageNumber}&pageSize=${pageSize}&search=${searchTerm}`;
  const endpoint = BASE_URL + EVENTS + data;
  let response = await fetch(endpoint, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // no-referrer, *client
  });

  let reponse = await response.json();
  return reponse;
}

/*
Parameters:
page : page number to return
pageSize : size of page (number of events per page)
search : search query term (this is matched against the title of events and name
of the location)
Example:
https://mock-api.drinks.test.siliconrhino.io/events?page={pageNumber}&pageSize=
{pageSize}&search={searchTerm}

*/

export { getDrinksEvents };
