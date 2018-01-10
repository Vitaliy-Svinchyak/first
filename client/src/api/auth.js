import axios from "axios";
import toErrorMessage from "../utils/to-error-message";

export default {
  login(data) {
    return axios
      .post("/api/auth/local", data)
      .then(r => r.data.data.token)
      .catch(toErrorMessage);
  }
};
