import fetch from "cross-fetch";
import { GET_EVENTS_ENDPOINT } from "../services/api-endpoints";

const REQUEST_CONFIG = requestType => ({
  method: requestType,
  mode: "cors",
  cache: "default", // It is caching.
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  redirect: "follow",
  referrer: "no-referrer"
});

/*
  page : page number to return
  pageSize : size of page (number of events per page)
  search : search query term (this is matched against the title of events and name
  of the location)
*/
async function getDrinksEvents(pageNumber, pageSize, searchTerm) {
  const data = `?page=${pageNumber}&pageSize=${pageSize}&search=${searchTerm}`;
  const endpoint = GET_EVENTS_ENDPOINT + data;
  let response = await fetch(endpoint, REQUEST_CONFIG("GET"));
  return response.json();
}

export { getDrinksEvents };
