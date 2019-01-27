import http from "./httpService";

const apiEndpoint = "https://react-abacus.herokuapp.com/api" + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
