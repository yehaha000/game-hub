import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4d9474b35b8d4d06a997ea7b05f84fde",
  },
});
