import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyAWeuT4K39cbJkjH6X5CEvuoEgoPGsIZSE",
  },
});
export default request;
