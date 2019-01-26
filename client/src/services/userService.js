import http from "./httpService";
import { apiUrl } from "../config.json";

let apiEndpoint;
if (process.env.PUBLIC_URL) {
  apiEndpoint = process.env.PUBLIC_URL + "/users";
  console.log("apiEndpoint:", apiEndpoint);
} else {
  apiEndpoint = apiUrl + "/users";
  console.log("apiEndpoint:", apiEndpoint);
}

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
