import client from "./client";
import endPoints from "./endPoints";

const login = (email, password) => {
  let body = JSON.stringify({
    Mail: email,
    Pswd: password,
  });

  return client.post(endPoints.login, body);
};

export default {
  login,
};
