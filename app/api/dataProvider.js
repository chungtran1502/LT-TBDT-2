import simpleRestProvider from "ra-data-simple-rest";
import fetchUtils from "ra-data-simple-rest";

const apiUrl = "http://localhost:5129/api";
const httpClient = fetchUtils.fetchJson;

const dataProvider = simpleRestProvider(apiUrl, httpClient);

export default dataProvider;
