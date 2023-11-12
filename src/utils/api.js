import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        // "X-RapidAPI-Key":"4907c1f1f6msh8ce89ea1cde77c5p10e63djsn337edec8d4de",
            // process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
        // "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
