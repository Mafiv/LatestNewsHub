import axios from "axios";

const apikey = "975abf73e61749b80f98edc264b59f17";
// const apikey = "ecbaa886e957061e88280b2bb3d672e1";
const url = "https://gnews.io/api/v4/search?q=example&max=20&apikey=" + apikey;
const headline =
  "https://gnews.io/api/v4/top-headlines?leng=en&category=sport&apikey=" +
  apikey;
const mediaStaack="http://api.mediastack.com/v1/news?access_key=21005479a51fa1c673f9278d315a9a12&max=5&countries=us"

export async function fetch_mediaStack() {
  try {
    const a = await axios.get(mediaStaack);
    // console.log(a.data); // Log only the response data
    return a.data
  } catch (error) {
    console.error("Error fetching data:", error);
    return error
  }
}

export async function fetch_MainNews() {
  try {
    const a = await axios.get(url);
    // console.log(a.data); // Log only the response data
    return a.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}

export async function fetch_headline() {
  try {
    const a = await axios.get(headline);
    // console.log(a.data); // Log only the response data
    return a.data.articles;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
}

// fetch_try();
